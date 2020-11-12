export default {
  pages: [
    'pages/home/index',
    'pages/cart/index',
    'pages/profile/index',
    'pages/details/index',
  ],
  tabBar: {
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './image/home.png',
        selectedIconPath: './image/homeActive.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: './image/cart.png',
        selectedIconPath: './image/cartActive.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我',
        iconPath: './image/profile.png',
        selectedIconPath: './image/profileActive.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    // navigationStyle: 'custom',
  }
}
