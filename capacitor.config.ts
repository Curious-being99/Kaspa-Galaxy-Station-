import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kaspa.galaxystation',
  appName: 'Kaspa Galaxy Station',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
