// eslint-disable-next-line no-undef
Component({
  data: {
    selected: 0,
    color: "#969696",
    selectedColor: "#30bf94",
    list: [
      {
        pagePath: "/pages/home/index",
        iconPath: "../image/home.png",
        selectedIconPath: "../image/home.png",
        text: "Home"
      },
      {
        pagePath: "/pages/products/index",
        iconPath: "../image/home.png",
        selectedIconPath: "../image/home.png",
        text: "所有商品"
      },
      {
        pagePath: "/pages/cart/index",
        iconPath: "../image/home.png",
        selectedIconPath: "../image/home.png",
        text: "购物车"
      },
      {
        pagePath: "/pages/me/index",
        iconPath: "../image/home.png",
        selectedIconPath: "../image/home.png",
        text: "我的"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      //埋点
      const data = e.currentTarget.dataset;
      console.log(data)
      const url = data.path;
      // eslint-disable-next-line no-undef
      wx.switchTab({ url });
      this.setData({
        selected: data.index
      });
    }
  }
});
