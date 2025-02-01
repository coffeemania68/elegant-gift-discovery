import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.elegantgiftdiscovery',
  appName: 'Gift Finder',
  webDir: 'dist',
  server: {
    url: 'https://elegant-gift-discovery.lovable.app?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always'
  },
  android: {
    backgroundColor: "#ffffff"
  }
};

export default config;