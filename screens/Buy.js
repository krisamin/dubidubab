import React, {Component} from 'react';  
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoHeightImage from "react-native-auto-height-image";
import SvgUri from "react-native-svg-uri";
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
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>망냥냥치킨 성복점</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            <View style={{ height: this.state.page == 'review' ? 'auto' : 0 ,overflow: this.state.page == 'review' ? 'visible' : 'hidden' }}>
              <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>관련 영상</Text>
                <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
              </View>
              <Video thumbnail={ require('../assets/thumbnail.png') } name="동료의 비즈니스... 주르르치킨 먹방" by="고세구 GOSEGU" views="24만 회" like="6.4천 개" />
              <View style={{ marginTop: 36, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>유저 리뷰</Text>
                <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 56, backgroundColor: '#25623C', borderRadius: 28, overflow: 'hidden', paddingHorizontal: 18, position: 'absolute', shadowColor: '#031F00', shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.36, shadowRadius: 16, elevation: 24, right: 20, bottom: 50, overflow: 'visible' }}>
          <SvgUri width="22" height="22" source={ require('../assets/icons/supervisor_account.svg') } fill='#FDFFFE' />
          <Text style={{ color: '#FDFFFE', fontFamily: 'Pretendard-SemiBold', fontSize: 14, marginLeft: 12 }}>공동구매 참가</Text>
        </View>
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