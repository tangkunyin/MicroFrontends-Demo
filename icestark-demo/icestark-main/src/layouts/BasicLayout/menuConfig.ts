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
        path: '/react-app/home',
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
        path: '/vue-app/home',
        name: 'Home',
      },
      {
        path: '/vue-app/about',
        name: 'About',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
