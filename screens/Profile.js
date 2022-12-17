import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import SvgUri from "react-native-svg-uri";
import { globalStyles } from '../styles/Global';

export default function Profile() {
  return (
    <ScrollView style={globalStyles.page} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={globalStyles.inner}>
        <View style={{ height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 24 }}>프로필</Text>
          <View style={{ flexDirection: 'row' }}>
            <SvgUri width="24" height="24" source={ require('../assets/icons/notifications.svg') } fill='#031F00' />
            <SvgUri style={{ marginLeft: 35 }} width="24" height="24" source={ require('../assets/icons/settings.svg') } fill='#031F00' />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 64, height: 64, borderRadius: "50%" }} source={ require('../assets/profile.png') }></Image>
            <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
              <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>망냥냥님</Text>
              <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Regular', fontSize: 16, opacity: 0.5, marginTop: 6 }}>user@example.com</Text>
            </View>
          </View>
          <SvgUri style={{ opacity: 0.5, marginRight: 10 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 16, backgroundColor: '#EDF5F0', paddingHorizontal: 48, paddingVertical: 20, marginTop: 30 }}>
          <Item icon={ require('../assets/icons/confirmation_number.svg') } name="쿠폰" value="3개" />
          <Item icon={ require('../assets/icons/payments.svg') } name="포인트" value="12000원" />
          <Item icon={ require('../assets/icons/rate_review.svg') } name="리뷰" value="5개" />
        </View>
        <View style={{ borderRadius: 16, backgroundColor: '#EDF5F0', marginTop: 30, paddingVertical: 5 }}>
          <Menu color="#031F00" icon={ require('../assets/icons/history.svg') } name="주문 기록" />
          <Menu color="#031F00" icon={ require('../assets/icons/gavel.svg') } name="서비스 이용안내" />
          <Menu color="#031F00" icon={ require('../assets/icons/contact_support.svg') } name="문의하기" />
          <Menu color="#031F00" icon={ require('../assets/icons/info.svg') } name="앱 정보" />
          <Menu color="#FF0000" icon={ require('../assets/icons/logout.svg') } name="로그아웃" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

function Item({icon, name, value}) {
  return (
    <View style={{ alignItems: 'center' }}>
      <SvgUri width="28" height="28" source={ icon } fill='#031F00' />
      <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 10 }}>{ name }</Text>
      <Text style={{ color: "#609C77", fontFamily: 'Pretendard-Medium', fontSize: 14, marginTop: 6 }}>{ value }</Text>
    </View>
  );
}

function Menu({color, icon, name}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15}}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
        <SvgUri width="14" height="14" source={ icon } fill={ color } />
        <Text style={{ color: color, fontFamily: 'Pretendard-Medium', fontSize: 14, marginLeft: 12 }}>{ name }</Text>
      </View>
      <SvgUri style={{ opacity: 0.5, marginRight: 8 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill={ color } />
    </View>
  );
}