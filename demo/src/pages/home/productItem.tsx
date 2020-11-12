import React from 'react'
import { View, Text } from '@tarojs/components'
import './productItem.scss'

export default function ProductItem() {
    return (
        <View className='wrap'>
            <View className='image'></View>
            <View className='detail'>
                <View className='pcName'><Text style={{ fontSize:18, color: '#333' }}>胶原蛋白果冻冰沙胶原蛋啊机咖啡碱开发的首款JFK收到</Text></View>
                <View className='price'>
                    <View><Text style={{fontSize: 20, color: 'black'}}>￥90.9/份</Text></View>
                    <View><Text style={{fontSize:14, color: '#999'}}>￥180</Text></View>
                </View>
            </View>
        </View>
    )
}