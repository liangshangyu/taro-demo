import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { CoverView, CoverImage, View } from '@tarojs/components'
import { changeTabAction } from '../actions/changeTab'
import './index.scss'

@connect(({ changeTab }) => ({
  changeTab
}), (dispatch) => ({
  changeTabFc (index) {
    dispatch(changeTabAction({ index }))
  }
}))
class customTabBar extends Component {
    // const count = useSelector(state => state.counter.num)
    state ={
        selected: 0, // useSelector(state => state.counter.num),
        color: '#666666',
        selectedColor: '#ED6C00',
        list: [
            {
              pagePath: '/pages/home/index',
              text: '首页',
              iconPath: '../image/home.png',
              selectedIconPath: '../image/home.png'
            },
            {
              pagePath: '/pages/products/index',
              text: '全部商品',
              iconPath: '../image/product.png',
              selectedIconPath: '../image/product.png'
            },
            {
              pagePath: '/pages/cart/index',
              text: '购物车',
              iconPath: '../image/cart.png',
              selectedIconPath: '../image/cart.png'
            },
            {
              pagePath: '/pages/me/index',
              text: '我的',
              iconPath: '../image/me.png',
              selectedIconPath: '../image/me.png'
            }
          ]
    }

    switchTab = (item, index) => {
        const url = item.pagePath
        Taro.switchTab({
          url
        })
        this.props.changeTabFc(index)
    }

    jumpIntellect = () => {
        Taro.navigateTo({url: '/pages/publish/index'})
    }

    
    componentDidMount() {
        this.setState({
        selected: this.props.ind
      })
    }

    touchMove = (e) => {
      console.log(e)
      e.stopPropagation()
      e.preventDefault()
    }

    render() {
      return (
        <CoverView className='tab-bar'>
                <CoverView className='tab-bar-wrap'>
                    {
                        this.state.list.map((item, index) => {
                            return <CoverView
                              className='tab-bar-wrap-item'
                              onClick={this.switchTab.bind(this, item, index)}
                              data-path={item.pagePath}
                              key={item.text}
                            >
                                <CoverImage
                                  className='tab-bar-wrap-item-icon' 
                                  src={this.props.changeTab.tabIndex === index ? item.selectedIconPath : item.iconPath}
                                />
                                <CoverView
                                  className='tab-bar-wrap-item-btn'
                                  style={{color: this.props.changeTab.tabIndex===index? this.state.selectedColor : this.state.color}}
                                >
                                    {item.text}
                                </CoverView>
                            </CoverView>
                        })
                    }
                </CoverView>
                {/* <CoverView className='mask' onTouchMove={this.touchMove} onTouchStart={this.touchMove}></CoverView> */}
            </CoverView>
      )
    }
}
export default customTabBar