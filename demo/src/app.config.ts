export default {
  pages: [
    // 'pages/index/index',
    'pages/home/index',
    'pages/products/index',
    'pages/cart/index',
    'pages/me/index',
    'pages/products/productDetail/index',
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './image/home.png',
        selectedIconPath: './image/home.png'
      },
      {
        pagePath: 'pages/products/index',
        text: '全部商品',
        iconPath: './image/product.png',
        selectedIconPath: './image/product.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: './image/cart.png',
        selectedIconPath: './image/cart.png'
      },
      {
        pagePath: 'pages/me/index',
        text: '我的',
        iconPath: './image/me.png',
        selectedIconPath: './image/me.png'
      }
    ]
  }
}
