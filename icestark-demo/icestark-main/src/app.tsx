import * as React from 'react';
import { createApp } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [
        {
          path: '/react-app',
          title: 'ReactApp',
          // url: [
          //   '//localhost:3000/static/js/bundle.js'
          // ],
          entry: '//localhost:3000/',
        },
        {
          path: '/vue-app',
          title: 'VueApp',
          // url: [
          //   '//localhost:8080/js/app.js'
          // ],
          entry: '//localhost:8080/',
        },
        {
          path: '/svelte-app',
          title: 'SvelteApp',
          // url: [
          //   '//localhost:5000/build/bundle.js',
          //   '//localhost:5000/global.css',
          //   '//localhost:5000/build/bundle.css'
          // ]
          entry: '//localhost:5000/',
        },
      ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

createApp(appConfig);
