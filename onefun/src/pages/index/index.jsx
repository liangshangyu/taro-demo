import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log(this.$scope.getTabBar)
    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      console.log(this.$scope.getTabBar())
      this.$scope.getTabBar().$component.setState({
        selected: 0
      })
    }  
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
          <View className='contentWrap'>
              <View className='theme'>
                  <Text className=''>
                    主题
                  </Text>
              </View>
              <View className='middleContent'>
                  <Text className='userName'>xxx用户</Text>
                  <Text>今天下午战力聚集，xx室内篮球场或者南航篮球场,就发热很久很久二号，房价是否合格</Text>
                  <View className='publishTime'>
                    <Text className='publishTimeText'>发布于今日13：30</Text>
                  </View>
              </View>
          </View>
      </View>
    )
  }
}

export default Index
