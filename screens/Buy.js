import React, {Component} from 'react';  
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoHeightImage from "react-native-auto-height-image";
import SvgUri from "react-native-svg-uri";
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/Global';

export default class Buy extends Component {
  state = {
    page: 'menu'
  }
  render() {
    return (
      <View style={ globalStyles.page } >
        <ScrollView style={ globalStyles.page } bounces={ false }>
          <Image style={{ width: '100%', height: 360 }} source={ require('../assets/salade.png') } resizeMode='cover'></Image>
          <SafeAreaView style={globalStyles.inner} edges={['left', 'right', 'bottom']}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
              <View>
                <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>2인 공동구매 상품</Text>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20, marginTop: 6 }}>욘욘 닭가슴살 그린샐러드</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                  <SvgUri width="16" height="16" source={ require('../assets/icons/star.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginLeft: 4 }}>4.5 / 5.0</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginRight: 28 }}>
                  <SvgUri width="22" height="22" source={ require('../assets/icons/favorite.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginTop: 6 }}>720</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <SvgUri width="22" height="22" source={ require('../assets/icons/ios_share.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginTop: 6 }}>공유</Text>
                </View>
              </View>
            </View>
            <ScrollView style={{ marginTop: 36, overflow: 'visible' }} horizontal={ true } showsHorizontalScrollIndicator={ false }>
              <Category icon={ require('../assets/icons/add_business.svg') } name="공동구매 현황" selected={ this.state.page == 'menu' }></Category>
              <Category icon={ require('../assets/icons/rate_review.svg') } name="리뷰" selected={ this.state.page == 'review' }></Category>
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 10 }} source={ require('../assets/profile/profile1.png') }></Image>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>주현명</Text>
              </View>
              <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>1명 남음</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 10 }} source={ require('../assets/profile/profile2.png') }></Image>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>이상윤</Text>
              </View>
              <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>1명 남음</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 10 }} source={ require('../assets/profile/profile2.png') }></Image>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>하승호</Text>
              </View>
              <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>1명 남음</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 30 }} source={ require('../assets/profile/profile2.png') }></Image>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', position: 'absolute', left: 20 }} source={ require('../assets/profile/profile3.png') }></Image>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>이재훈, 박성찬</Text>
              </View>
              <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>구매 완료</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 30 }} source={ require('../assets/profile/profile4.png') }></Image>
                <Image style={{ width: 36, height: 36, borderRadius: '50%', position: 'absolute', left: 20 }} source={ require('../assets/profile/profile2.png') }></Image>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>백시현, 오지후</Text>
              </View>
              <Text style={{ opacity: 0.5, color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>구매 완료</Text>
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 56, backgroundColor: '#25623C', borderRadius: 28, overflow: 'hidden', paddingHorizontal: 18, position: 'absolute', shadowColor: '#031F00', shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.36, shadowRadius: 16, elevation: 24, right: 20, bottom: 50, overflow: 'visible' }}>
          <SvgUri width="22" height="22" source={ require('../assets/icons/supervisor_account.svg') } fill='#FDFFFE' />
          <Text style={{ color: '#FDFFFE', fontFamily: 'Pretendard-SemiBold', fontSize: 14, marginLeft: 12 }}>공동구매 참가</Text>
        </View>
        <LinearGradient style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', height: 53 }} colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']} />
      </View>
    );
  }
}

function Option({name, selected}) {
  const color = selected ? '#609C77' : '#031F00';
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
      <SvgUri style={{ borderRadius: 4, overflow: 'hidden' }} width="20" height="20" source={ selected ? require('../assets/icons/checkbox_sel.svg') : require('../assets/icons/checkbox.svg') } fill={ color } />
      <Text style={{ color: color, opacity: selected ? 1 : 0.5, fontFamily: 'Pretendard-Medium', fontSize: 14, marginLeft: 8 }}>{ name }</Text>
    </View>
  )
}

function Category({icon, name, selected}) {
  const background = selected ? '#609C77' : '#FDFFFE';
  const color = selected ? '#FDFFFE' : '#031F00';
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 36, borderRadius: 18, borderColor: selected ? '#609C77' : 'rgba(3, 31, 0, 0.1)', borderWidth: 1, backgroundColor: background, paddingHorizontal: 14, marginRight: 10 }}>
      <SvgUri style={{ opacity: selected ? 1 : 0.5 }} width="16" height="16" source={ icon } fill={ color } />
      <Text style={{ color: color, opacity: selected ? 1 : 0.5, fontFamily: 'Pretendard-Medium', fontSize: 14, marginLeft: 8 }}>{ name }</Text>
    </View>
  );
}

function Menu({name, des, price, image, marginTop}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: marginTop }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 16 }}>{ name }</Text>
        <Text style={{ color: '#031F00', opacity: 0.5, fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 4 }}>{ des }</Text>
        <Text style={{ color: '#609C77', fontFamily: 'Pretendard-SemiBold', fontSize: 16, marginTop: 8 }}>{ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }원</Text>
      </View>
      <Image style={{ width: 100, height: 100, borderRadius: 10 }} source={ image } />
    </View>
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