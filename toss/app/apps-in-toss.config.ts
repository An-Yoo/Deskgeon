import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'deskgeon',
  brand: {
    primaryColor: '#7A5BD8',
  },
  navigationBar: {
    theme: 'dark',
  },
  webView: {
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
    allowsBackForwardNavigationGestures: false,
  },
  permissions: [],
  webBundleDir: 'dist',
});
