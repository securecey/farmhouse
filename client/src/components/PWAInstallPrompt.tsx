import { useState } from 'react';
import { usePWA } from '@/hooks/use-pwa';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Download, Smartphone, Wifi, WifiOff } from 'lucide-react';

export default function PWAInstallPrompt() {
  const { isInstallable, isInstalled, isOnline, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async () => {
    setIsInstalling(true);
    const success = await installApp();
    setIsInstalling(false);
    
    if (success) {
      setIsDismissed(true);
    }
  };

  // Don't show if dismissed, already installed, or not installable
  if (isDismissed || isInstalled || !isInstallable) {
    return null;
  }

  return (
    <>
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <WifiOff className="w-4 h-4" />
            <span>You're offline - cached content available</span>
          </div>
        </div>
      )}

      {/* Install prompt */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
        <Card className="border-olive bg-white shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-olive" />
                <h3 className="font-semibold text-dark-gray">Install App</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDismissed(true)}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Install Serenity Farmhouse for easy access and offline viewing. Get app-like experience with quick booking.
            </p>
            
            <div className="flex gap-2">
              <Button
                onClick={handleInstall}
                disabled={isInstalling}
                className="flex-1 bg-olive hover:bg-olive/90 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                {isInstalling ? 'Installing...' : 'Install'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsDismissed(true)}
                className="text-gray-600 border-gray-300"
              >
                Later
              </Button>
            </div>

            {/* Features list */}
            <div className="mt-3 text-xs text-gray-500">
              <div className="flex items-center gap-1 mb-1">
                <Wifi className="w-3 h-3" />
                <span>Works offline</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                <span>Fast loading</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}