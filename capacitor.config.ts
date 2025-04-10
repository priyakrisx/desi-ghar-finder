
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c9eba496d5ce43199cd15fe3d3384cf2',
  appName: 'desi-ghar-finder',
  webDir: 'dist',
  server: {
    url: 'https://c9eba496-d5ce-4319-9cd1-5fe3d3384cf2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;
