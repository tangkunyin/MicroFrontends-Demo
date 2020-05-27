const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'ReactApp',
    icon: 'set',
    children: [
      {
        path: '/react-app',
        name: 'Home',
      },
      {
        path: '/react-app/about',
        name: 'About',
      },
    ],
  },
  {
    name: 'VueApp',
    icon: 'set',
    children: [
      {
        path: '/vue-app',
        name: 'Home',
      },
      {
        path: '/vue-app/about',
        name: 'About',
      },
    ],
  },
  {
    name: 'SvelteApp',
    icon: 'set',
    children: [
      {
        path: '/svelte-app',
        name: 'Home',
      },
      {
        path: '/svelte-app/about',
        name: 'About',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
