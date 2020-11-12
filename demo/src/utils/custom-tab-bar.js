import { getCurrentInstance } from '@tarojs/taro'

/**
 * 控制 tabbar 切换样式
 * @param {Number} index tabbar 的 index
 */
 const handleTabBarActive = index => {
   console.log(index)
  if (typeof getCurrentInstance === 'function' && typeof getCurrentInstance().page.getTabBar === 'function') {
    const tabBar = getCurrentInstance().page.getTabBar()
    console.log(tabBar)
    console.log(index)
    if (tabBar) {
      tabBar.setData({
        selected: index
      })
    }
  }
}

export default handleTabBarActive
