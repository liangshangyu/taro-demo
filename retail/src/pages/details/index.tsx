import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro, { useDidShow, getCurrentInstance } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import './index.scss'

export default function Detail() {
    useDidShow(() => {
        console.log(getCurrentInstance().router.params)
    })
    return (
        <View>
            <Text>详情</Text>
        </View>
    )
}
