import React, {Component} from 'react';  
import { ScrollView, Image, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoHeightImage from "react-native-auto-height-image";
import { globalStyles } from '../styles/Global';

export default function Arrive() {
  const width = useWindowDimensions().width - 40;
  return (
    <ScrollView style={globalStyles.page}>
      <SafeAreaView style={globalStyles.inner}>
        <View style={{ alignItems: 'center', marginTop: 64 }}>
          <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>주문한 음식이 도착했어요</Text>
          <Text style={{ textAlign: 'center', color: '#031F00', fontFamily: 'Pretendard-Bold', fontSize: 24, marginTop: 12 }}>드시면서 보실 영상을{"\n"}추천해 드릴게요!</Text>
        </View>
        <View style={{ marginTop: 54 }}>
          <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>내 넷플릭스 계정에서</Text>
          <AutoHeightImage style={{ borderRadius: 8, marginTop: 16 }} width={ width } source={ require('../assets/netflix.png') } />
          <View style={{ paddingHorizontal: 4 }}>
            <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 16, marginTop: 16 }}>재벌집 막내아들 13화</Text>
            <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginTop: 6 }}>오늘 나온 새 회차에요</Text>
            <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 16 }}>도준은 실패가 예견된 신차 프로모션의 전권을 위임받는다. 또 다른 의문을 남긴 채 가족의 곁을 떠난 양철.</Text>
          </View>
        </View>
        <View style={{ marginTop: 36 }}>
          <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>평소에 보는 유튜브</Text>
          <Video thumbnail={ require('../assets/thumbnail2.png') } name="안심하세요 해적입니다" by="랄로" views="21만 회" like="4.7천 개" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

function Video({thumbnail, name, by, views, like}) {
  return (
    <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center' }}>
      <AutoHeightImage style={{ borderRadius: 8, marginRight: 16 }} width={120} source={ thumbnail } />
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 16 }} numberOfLines={ 1 }>{ name }</Text>
        <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 8 }}>{ by }</Text>
        <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 8 }}>조회수 <Text style={{ fontFamily: 'Pretendard-SemiBold' }}>{views}</Text>  ・  좋아요 <Text style={{ fontFamily: 'Pretendard-SemiBold' }}>{like}</Text></Text>
      </View>
    </View>
  );
}