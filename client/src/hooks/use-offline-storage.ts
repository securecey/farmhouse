import { useState, useEffect } from 'react';

interface OfflineData {
  id: string;
  data: any;
  timestamp: number;
  type: 'booking' | 'inquiry';
}

export function useOfflineStorage() {
  const [pendingData, setPendingData] = useState<OfflineData[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Load pending data from localStorage
    const loadPendingData = () => {
      try {
        const stored = localStorage.getItem('farmhouse-offline-data');
        if (stored) {
          setPendingData(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading offline data:', error);
      }
    };

    loadPendingData();

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      syncPendingData();
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const savePendingData = (data: OfflineData[]) => {
    try {
      localStorage.setItem('farmhouse-offline-data', JSON.stringify(data));
      setPendingData(data);
    } catch (error) {
      console.error('Error saving offline data:', error);
    }
  };

  const addOfflineData = (data: any, type: 'booking' | 'inquiry') => {
    const newData: OfflineData = {
      id: Date.now().toString(),
      data,
      timestamp: Date.now(),
      type
    };

    const updated = [...pendingData, newData];
    savePendingData(updated);

    // Try to sync immediately if online
    if (isOnline) {
      syncPendingData();
    }

    return newData.id;
  };

  const syncPendingData = async () => {
    if (!isOnline || pendingData.length === 0) return;

    const successfulSyncs: string[] = [];

    for (const item of pendingData) {
      try {
        // Simulate API call for demonstration
        console.log('Syncing offline data:', item);
        
        // In a real app, you would make actual API calls here
        // await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(item.data) });
        
        successfulSyncs.push(item.id);
      } catch (error) {
        console.error('Error syncing item:', item.id, error);
      }
    }

    // Remove successfully synced items
    if (successfulSyncs.length > 0) {
      const remaining = pendingData.filter(item => !successfulSyncs.includes(item.id));
      savePendingData(remaining);
    }
  };

  const clearPendingData = () => {
    savePendingData([]);
  };

  return {
    isOnline,
    pendingData,
    addOfflineData,
    syncPendingData,
    clearPendingData
  };
}