import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import SvgUri from "react-native-svg-uri";
import { globalStyles } from '../styles/Global';

import Block from "../components/Block";
import SearchBar from "../components/SearchBar";

function Search() {
  return (
    <ScrollView style={globalStyles.page} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={globalStyles.inner}>
        <View style={{ height: 44, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 24 }}>검색</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <SearchBar />
        </View>
        <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20, marginTop: 35 }}>현재 인기있는</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Tear no={ 1 } name="당당치킨" />
            <Tear no={ 2 } name="이세계아이돌" />
            <Tear no={ 3 } name="주르르개이쁘다" />
            <Tear no={ 4 } name="그거인정" />
            <Tear no={ 5 } name="ㅋㅋㅋㅋㅋ" />
          </View>
          <View style={{ flex: 1 }}>
            <Tear no={ 1 } name="더미텍스트" />
            <Tear no={ 2 } name="응애나애기" />
            <Tear no={ 3 } name="지금점심안먹음" />
            <Tear no={ 4 } name="뭐먹지" />
            <Tear no={ 5 } name="추천받습니다" />
          </View>
        </View>
        <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 20, marginTop: 35 }}>우리동네 인기</Text>
        <ScrollView style={{ marginTop: 15, overflow: 'visible' }} horizontal={ true } showsHorizontalScrollIndicator={ false }>
          <Category icon={ require('../assets/icons/stacked_line_chart.svg') } name="누적" selected={ true }></Category>
          <Category icon={ require('../assets/icons/timer.svg') } name="시간" selected={ false }></Category>
          <Category icon={ require('../assets/icons/event.svg') } name="일간" selected={ false }></Category>
          <Category icon={ require('../assets/icons/date_range.svg') } name="주간" selected={ false }></Category>
          <Category icon={ require('../assets/icons/calendar_month.svg') } name="월간" selected={ false }></Category>
        </ScrollView>
        <View style={{ marginTop: 15 }}>
          <Block image={ require('../assets/chicken.png') } name="주르르치킨 성복점!" distance={ 2.4 } time={ 10 } cost={ 3000 } rate={ 3.5 } />
        </View>
      </SafeAreaView>
    </ScrollView>
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

function Tear({ no, name }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, opacity: 0.7 }}>
      <Text style={{ width: 35, color: '#031F00', fontFamily: 'Pretendard-Bold', fontSize: 16 }}>{ no }</Text>
      <Text style={{ color: '#031F00', fontFamily: 'Pretendard-Medium', fontSize: 16 }}>{ name }</Text>
    </View>
  );
}

export default Search;