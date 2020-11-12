import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import './index.scss'

const recomendData = [1,2,3,4]
const sellData = [1,2,3,4,5]

export default function Home() {
    Taro.setNavigationBarTitle({
        title: '首页'
    })
    Taro.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#8a8a8a',
        animation: {
            duration: 400,
            timingFunc: 'easeIn'
        }
    })

    const goDetail = () => {
        console.log('222')
        const obj = {
            a: '11'
        }
        Taro.navigateTo({
            url: `/pages/details/index?id=2&o=${JSON.stringify(obj)}`
        })
    }
    return (
        <View className='container'>
            <Swiper
              className='swiperWrap'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay
              duration={1000}
              interval={2000}
            >
                <SwiperItem>
                <View className='swipeItem'>1</View>
                </SwiperItem>
                <SwiperItem>
                <View className='swipeItem'>2</View>
                </SwiperItem>
                <SwiperItem>
                <View className='swipeItem'>3</View>
                </SwiperItem>
            </Swiper>
            <View className='recommend'>
                <View className='text'><Text style={{ fontSize: '16px', color:'#333'}}>超值推荐</Text></View>
                
                    <ScrollView
                      scrollX
                      className='scrollWrap'
                    >
                        {
                            recomendData.map((item, index) => (
                                <View key={index} className='scrollItem'>
                                    <Text>{item}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
            </View>
            <View className='content'>
               {
                   sellData.map((item, index)=>(
                        <View className='itemWrap' key={index} onClick={goDetail}>
                            <Text>{item}</Text>
                        </View>
                   ))
               }
            </View>
        </View>
    )
}