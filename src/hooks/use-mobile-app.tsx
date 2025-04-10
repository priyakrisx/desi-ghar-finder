
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export function useMobileApp() {
  const isMobile = useIsMobile();
  const [isNativeApp, setIsNativeApp] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Detect if running as a native app through Capacitor
    const checkCapacitor = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isNative = 
        window.hasOwnProperty('Capacitor') || 
        userAgent.includes('capacitor') ||
        userAgent.includes('ionic');
      
      setIsNativeApp(isNative);
      
      if (isNative) {
        setIsIOS(/iphone|ipad|ipod/.test(userAgent));
        setIsAndroid(/android/.test(userAgent));
      }
    };

    checkCapacitor();
  }, []);

  return {
    isMobile,
    isNativeApp,
    isIOS,
    isAndroid,
    hasSafeArea: isIOS && isNativeApp,
  };
}
