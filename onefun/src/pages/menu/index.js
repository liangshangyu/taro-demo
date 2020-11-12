import Taro, { Component } from '@tarojs/taro' 
import { View, Text, ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import menuData from '../../mockData'
import './index.scss'

const promotionShowTipInfo = {
    tip: '飞机卡夫卡'
}
class MenuIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFixed: false,
            scrollClassIndex: 0,
            tapClassIndex: null
        }
        this.menuHeaderHeight = 0
        this.menuTopList = []
        this.isCategoryScroll = false // 是否分类栏正在滑动
        this.isMenuScroll = false // 是否菜单栏正在滑动
        this.isLeftPressing = false // 是否正在点击左侧分类
    }

    componentDidUpdate() {
        const {  menuHeaderHeight, menuTopList} = this
        if(menuHeaderHeight == 0 || menuTopList.length ===0) {
            this.getMenuTopList()
            this.calcMenuHeaderHeight()
        }
    }

    getHeaderCompoent() {
        return (
            <View className='header'>头部</View>
        )
    }

    // 右侧产品的滚动
    onMenuProductScroll = e => {
        const { scrollTop } = e.detail
        const { menuHeaderHeight, menuTopList } = this
        const { scrollClassIndex, isFixed } = this.state
        const oldScrollClassIndex = scrollClassIndex
        const isFixedTag = scrollTop >= menuHeaderHeight // 判断是否需要吸顶
        if(!this.isLeftPressing && isFixedTag !== isFixed) {
            this.setState({
                isFixed: isFixedTag
            })
        }
        if((scrollTop < menuHeaderHeight) || this.isLeftPressing) return
        this._menuScrollTimeoutId && clearTimeout(this._menuScrollTimeoutId)
        this.isMenuScroll = true
        this._menuScrollTimeoutId = setTimeout(() => {
            this.isMenuScroll = false
            this._menuScrollTimeoutId = null
        }, 500);
        let nowScrollClassIndex = ''
        console.log(menuTopList)
        for(let i = menuTopList.length - 1; i > -1; i--) {
            if(scrollTop - menuHeaderHeight >= menuTopList[i].top - 1) {
                nowScrollClassIndex = menuTopList[i].index
                break
            }
        }
        console.log(nowScrollClassIndex)
        if(nowScrollClassIndex !== oldScrollClassIndex && isFixedTag) {
            this.setState({
                scrollClassIndex: nowScrollClassIndex
            })
        }
    }

    // 点击左侧分类
    onMenuLeftItemPress = (classExIndex, classItem, e) => {
        if(this.isMenuScroll) {
            return
        }
        this.isLeftPressing = true
        if(!this.state.isFixed) {
            this.setState({
                isFixed: true
            })
        }
        this.setState({
            tapClassIndex: classExIndex, // 右侧菜单需要跳到的分类 
            scrollClassIndex: classExIndex
        }, () => {
            this._leftPreddTimeoutId = setTimeout(() => {
                this.isLeftPressing = false
                this._leftPreddTimeoutId = null
            }, 1000);
        })
    }

    onMenuClassScroll = e => {
        const isCategoryScroll = e.detail.scrollTop > 12
        if(isCategoryScroll !== this.isCategoryScroll) {
            this.isCategoryScroll = isCategoryScroll
        }
        if(this.isCategoryScroll && !this.state.isFixed) {
            this.setState({
                isFixed: true,
                tapClassIndex: 0
            })
        }
    }

    // 计算头部高度
    calcMenuHeaderHeight = async () => {
        const headerRect = await this.getDomRect(this.$scope, '.header')
        if (headerRect && headerRect[0].length > 0) {
            this.menuHeaderHeight = headerRect[0][0].height
        }
    }

    // 获取右侧分类的top合集
    getMenuTopList = async () => {
        const menuRect = await this.getDomRect(this.$scope, '.section')
        if(menuRect && menuRect.length > 0) {
            const menuTopList = []
            let _top = 0
            menuRect[0].forEach((item, index) => {
                menuTopList.push({
                    index: index,
                    top: _top
                })
                _top += item.height
            })
            this.menuTopList = menuTopList
        }
    }

    getDomRect = (scope, className) => {
        const query = Taro.createSelectorQuery().in(scope)
        return new Promise(resolve => {
            query.selectAll(className).boundingClientRect().exec(rect => {
                resolve(rect)
            })
        })
    }

    render() {
        const { isFixed, scrollClassIndex, tapClassIndex } = this.state
        return (
            <View className='container'>
                <ScrollView
                  scrollY
                  scrollIntoView={'target-' + tapClassIndex}
                  className={classNames('menu-box',
                  promotionShowTipInfo && promotionShowTipInfo.tip ? 'have-tips_height' : '')}
                  scrollWithAnimation
                  onScroll={this.onMenuProductScroll}
                >
                    {this.getHeaderCompoent()}
                    <View className='menu-body flex-1 flex'>
                        {/**菜单左侧分类 */}
                        <ScrollView
                          className={classNames(
                                'class-box',
                                !isFixed ? '' : 'class-box-fixed',
                                promotionShowTipInfo && promotionShowTipInfo.tip ? 'have-tips_height' : ''
                            )}
                          scrollY
                          scrollWithAnimation
                          scroll-animation-duration={100}
                          scrollIntoView={'class-' + scrollClassIndex}
                          onScroll={this.onMenuClassScroll}  
                        >
                            {
                                menuData.map((i, index) => (
                                    <View
                                      key={index}
                                      id={'class-' + index}
                                      className={classNames(
                                        'li',
                                        index === scrollClassIndex ? 'active' : ''
                                      )}
                                      onClick={e => this.onMenuLeftItemPress(index, i, e)}
                                    >
                                        {i.name}
                                    </View>
                                ))
                            }
                        </ScrollView>
                        {/**菜单内容块 */}
                        <View className={classNames('menu-block', isFixed && '_fixed')}>
                            {
                                menuData.length > 0 && (
                                    <View className={classNames('menu-title', 'text-s', isFixed && 'fixed-menu-title')}>
                                        <View className='title-box'>
                                            <Text className='title-text'>
                                                {menuData[scrollClassIndex].name}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }

                            {/**菜单列表 */}
                            <View className='menu-box'>
                                {
                                    menuData.map((i, index) => (
                                        <View
                                          className='section'
                                          key={index}
                                          id={'target-' + index}
                                          data-id={index}
                                        >
                                            <View className='section-ul'>
                                                <View className='section-ul-title'>
                                                    <Text className='section-text'>{i.name}</Text>
                                                </View>
                                                {
                                                    i.data.map((item, indexItem) => (
                                                        <View key={indexItem} className='section-li new'></View>
                                                    ))
                                                }
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default MenuIndex;