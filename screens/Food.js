import React, {Component} from 'react';  
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoHeightImage from "react-native-auto-height-image";
import SvgUri from "react-native-svg-uri";
import { globalStyles } from '../styles/Global';

export default class Food extends Component {
  state = {
    page: 'review'
  }
  render() {
    return (
      <View style={ globalStyles.page } >
        <ScrollView style={ globalStyles.page } bounces={ false }>
          <Image style={{ width: '100%', height: 360 }} source={ require('../assets/chicken.png') } resizeMode='cover'></Image>
          <SafeAreaView style={globalStyles.inner} edges={['left', 'right', 'bottom']}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
              <View>
                <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>망냥냥치킨 성복점</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                  <SvgUri width="16" height="16" source={ require('../assets/icons/star_half.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginLeft: 4 }}>3.5 / 5.0</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginRight: 28 }}>
                  <SvgUri width="22" height="22" source={ require('../assets/icons/favorite.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginTop: 6 }}>360</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <SvgUri width="22" height="22" source={ require('../assets/icons/ios_share.svg') } fill='#609C77' />
                  <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginTop: 6 }}>공유</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Info name="가게 거리" value="2.4km" />
              <Info name="배달 요금" value="3,000원" />
              <Info name="최소 주문" value="15,000원" />
              <Info name="배달 시간" value="10분 이내" />
            </View>
            <ScrollView style={{ marginTop: 36, overflow: 'visible' }} horizontal={ true } showsHorizontalScrollIndicator={ false }>
              <TouchableOpacity activeOpacity={0.5} onPress={ () => this.setState({ page: 'menu' }) }>
                <Category icon={ require('../assets/icons/dinner_dining.svg') } name="메뉴" selected={ this.state.page == 'menu' }></Category>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={ () => this.setState({ page: 'review' }) }>
                <Category icon={ require('../assets/icons/rate_review.svg') } name="리뷰" selected={ this.state.page == 'review' }></Category>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={ () => this.setState({ page: 'info' }) }>
                <Category icon={ require('../assets/icons/info.svg') } name="원산지" selected={ this.state.page == 'info' }></Category>
              </TouchableOpacity>
            </ScrollView>

            <View style={{ height: this.state.page == 'menu' ? 'auto' : 0 ,overflow: this.state.page == 'menu' ? 'visible' : 'hidden' }}>
              <ScrollView style={{ marginTop: 20, overflow: 'visible' }} horizontal={ true } showsHorizontalScrollIndicator={ false }>
                <Option name="전체 메뉴" selected={ true } />
                <Option name="뼈 있는 치킨" selected={ false } />
                <Option name="순살치킨" selected={ false } />
                <Option name="사이드 메뉴" selected={ false } />
              </ScrollView>
              <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20, marginTop: 24 }}>뼈 있는 치킨</Text>
              <Menu name="우나핫닭" des="강렬한 매운맛의 치킨! 쿨피스랑 시켜드시면 개맛있습니다 ㅋㅋ" price={ 15000 } image={ require( '../assets/chicken.png' ) } marginTop={ 16 } />
              <Menu name="우나스윗닭" des="간장치킨 이거 히트다 히트 ㅈㄴ 맛있음 재벌집 막내아들 속 그 치킨 ㅇㅇ" price={ 15000 }image={ require( '../assets/chicken.png' ) }  marginTop={ 20 } />
            </View>

            <View style={{ height: this.state.page == 'review' ? 'auto' : 0 ,overflow: this.state.page == 'review' ? 'visible' : 'hidden' }}>
              <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>관련 영상</Text>
                <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
              </View>
              <Video thumbnail={ require('../assets/thumbnail1.png') } name="동료의 비즈니스... 주르르치킨 먹방" by="고세구 GOSEGU" views="24만 회" like="6.4천 개" />
              <View style={{ marginTop: 36, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>유저 리뷰</Text>
                <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
              </View>
              <Comment profile={ require('../assets/profile/profile4.png') } name="백시현" rate="5.0" content="음식이 맛있고 사장님이 예뻐요" />
              <Comment profile={ require('../assets/profile/profile5.png') } name="선린중피바라기" rate="5.0" content="우리 엄마가 해준 것 같아요" />
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 56, backgroundColor: '#25623C', borderRadius: 28, overflow: 'hidden', paddingHorizontal: 18, position: 'absolute', shadowColor: '#031F00', shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.36, shadowRadius: 16, elevation: 24, right: 20, bottom: 50, overflow: 'visible' }}>
          <SvgUri width="22" height="22" source={ require('../assets/icons/agriculture.svg') } fill='#FDFFFE' />
          <Text style={{ color: '#FDFFFE', fontFamily: 'Pretendard-SemiBold', fontSize: 14, marginLeft: 12 }}>주문하기</Text>
        </View>
      </View>
    );
  }
}

function Info({name, value}) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Text style={{ color: '#031F00', opacity: 0.5, fontFamily: 'Pretendard-Regular', fontSize: 14, marginRight: 8 }}>{ name }</Text>
      <Text style={{ color: '#25623C', fontFamily: 'Pretendard-Medium', fontSize: 14 }}>{ value }</Text>
    </View>
  );
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

function Comment({profile, name, rate, content}) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 10 }} source={ profile }></Image>
          <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>{ name }</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SvgUri width="20" height="20" source={ require('../assets/icons/star.svg') } fill='#609C77' />
          <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontSize: 16, marginLeft: 8 }}>{ rate }</Text>
        </View>
      </View>
      <Text style={{ color: '#609C77', fontFamily: 'Pretendard-Medium', fontsize: 16, marginTop: 12 }}>{ content }</Text>
    </View>
  )
};