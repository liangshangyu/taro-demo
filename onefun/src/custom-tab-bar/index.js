import Taro, { Component } from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'

class customTabBar extends Component {
    state ={
        selected: 0,
        color: '#666666',
        selectedColor: '#ED6C00',
        list: [
          {
            pagePath: '/pages/menu/index',
            text: '首页',
            iconPath: '/img/home.png',
            selectedIconPath: '/img/selectedHome.png'
          },
          {
            pagePath: '/pages/profile/index',
            text: '我的',
            iconPath: '/img/me.png',
            selectedIconPath: '/img/selectedMe.png'
          }
        ]
    }

    switchTab = (item) => {
        const url = item.pagePath
        Taro.switchTab({
          url
        })
    }

    jumpIntellect = () => {
        Taro.navigateTo({url: '/pages/publish/index'})
    }

    
    componentDidMount() {
        this.setState({
        selected: this.props.ind
    })
  }

    render() {
        return (
            <CoverView className='tab-bar'>
                <CoverView className='tab-bar-wrap'>
                    {
                        this.state.list.map((item, index) => {
                            return <CoverView
                              className='tab-bar-wrap-item'
                              onClick={this.switchTab.bind(this, item)}
                              data-path={item.pagePath}
                              key={item.text}
                            >
                                <CoverImage
                                  className='tab-bar-wrap-item-icon' 
                                  src={this.state.selected === index ? item.selectedIconPath : item.iconPath}
                                />
                                <CoverView
                                  className='tab-bar-wrap-item-btn'
                                  style={{color: this.state.selected===index? this.state.selectedColor : this.state.color}}
                                >
                                    {item.text}
                                </CoverView>
                            </CoverView>
                        })
                    }
                </CoverView>
                {/* <CoverView className='intellect-icon' onClick={this.jumpIntellect}>
                    <CoverView className='text'>发布</CoverView>
                    <CoverView className='text'>活动</CoverView>
                </CoverView> */}
                {/* <CoverImage className='intellect-icon' src={publish} onClick={this.jumpIntellect} /> */}
            </CoverView>
        )
    }
}
export default customTabBar