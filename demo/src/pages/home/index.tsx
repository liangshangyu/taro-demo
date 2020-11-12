import React, { useState, useRef, useEffect, Component } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { useSelector, useDispatch } from 'react-redux' 

import {View, Text, ScrollView} from '@tarojs/components'
import ProductItem from './productItem'
import handleTabBarActive from '../../utils/custom-tab-bar'
import './index.scss'

const data = [1,2,3,4]

export default function Home() {
  const { showMask } = useSelector(state => state.commonReducer)
  const dispatch = useDispatch()
  console.log('dispatch', dispatch)
  // console.log(tab)
  const [ showAvailableStore, setShowAvailableStore ] = useState(false)
  useEffect(() => {

  })

  useDidShow(() => {
    console.log('componentDidShow')
    handleTabBarActive(0)
  })
  const touchMove = () => {
    dispatch({
      type: 'TOGGLE_MASK',
      flag: false
    })
  }

  const mask = () => {
    dispatch({
      type: 'TOGGLE_MASK',
      flag: true
    })
  }

  return (
    <View className='container'>
        <View className='topHeader'>
          <Text>必胜客商城</Text>
          <View style={{ width: 100, height: 30, borderRadius: 20, backgroundColor: '#eee' }}></View>
        </View>

        <View className='addStoreWrap'>
          <View className='addressWrap' onClick={mask}>
            <View className='store'>
              <Text style={{ fontSize: 18, color: '#999' }}>320m</Text>
              <Text style={{ fontSize: 18, color: '#999' }}>{`美罗餐厅>`}</Text>
            </View>
            <View className='address'>
                <Text className='addressText'>{`徐家汇 T20大厦 >`}</Text>
            </View>
          </View>
        </View>

        <View>
          <View className='banner'></View>
          <View className='groupBuy'>
            <View className='groupDesc'>
              <View className='limitTime'>
                  <Text style={{ fontSize: 22, marginRight: 10 }}>超值拼团</Text>
                  <View className='timeWrap'><Text className='time'>09</Text></View>
                  <View className='timeWrap'><Text className='time'>29</Text></View>
                  <View className='timeWrap'><Text className='time'>35</Text></View>
              </View>
              <Text style={{color: '#ccc'}}>{`查看更多>`}</Text>
            </View>
            <ScrollView
              scrollX
              className='scrollWrap'
            >
                {
                  data.map((i, index) => (
                  <ProductItem key={index} />
                  ))
                }
            </ScrollView>
          </View>

          <View className='groupBuy'>
            <View>
              <Text>热门推荐</Text>
            </View>
            <ScrollView
              scrollX
              className='scrollWrap'
            >
                {
                  data.map((i, index) => (
                    <ProductItem key={index}></ProductItem>
                  ))
                }
            </ScrollView>
            <View className='farm'>
              <View style={{marginRight: 6}}>
                <View><Text style={{fontSize: 18}}>基地优选 无公害</Text></View>
                <View><Text style={{ color: '#333' }}>来自上东的红心土豆</Text></View>
                <View><Text style={{ color: '#999' }}>了解更多</Text></View>
              </View>
              <View className='imageDetail'></View>
            </View>
          </View>
        </View>
        {
          showMask ? <View className='mask' onClick={touchMove}></View> : null
        }
    </View>
  )
}