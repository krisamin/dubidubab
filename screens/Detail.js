import { ScrollView, Image, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import SvgUri from "react-native-svg-uri";
import { globalStyles } from '../styles/Global';

function Detail() {
  return (
    <ScrollView style={ globalStyles.page } bounces={ false }>
      <Image style={{ width: '100%', height: 360 }} source={ require('../assets/chicken.png') } resizeMode='cover'></Image>
      <SafeAreaView style={globalStyles.inner} edges={['left', 'right', 'bottom']}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <View>
            <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>주르르치킨 성복점</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          <Category icon={ require('../assets/icons/dinner_dining.svg') } name="메뉴" selected={ true }></Category>
          <Category icon={ require('../assets/icons/rate_review.svg') } name="리뷰" selected={ false }></Category>
          <Category icon={ require('../assets/icons/info.svg') } name="원산지" selected={ false }></Category>
        </ScrollView>
        <CheckBox />
      </SafeAreaView>
    </ScrollView>
  );
}

function Info({name, value}) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Text style={{ color: '#031F00', opacity: 0.5, fontFamily: 'Pretendard-Regular', fontSize: 14, marginRight: 8 }}>{ name }</Text>
      <Text style={{ color: '#25623C', fontFamily: 'Pretendard-Medium', fontSize: 14 }}>{ value }</Text>
    </View>
  );
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

export default Detail;