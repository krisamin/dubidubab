import { ScrollView, View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AutoHeightImage from "react-native-auto-height-image";
import SvgUri from "react-native-svg-uri";
import { globalStyles } from '../styles/Global';

import Block from "../components/Block";
import SearchBar from "../components/SearchBar";

export default function Home({ navigation }) {
  const width = useWindowDimensions().width - 40;
  return (
    <ScrollView style={globalStyles.page}>
      <SafeAreaView style={globalStyles.inner}>
        <View style={{ height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 24 }}>집</Text>
            <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="10" height="10" source={ require('../assets/icons/expand_more.svg') } fill='#031F00' />
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={ () => navigation.navigate('Arrive') }>
            <Image style={{ width: 44, height: 44, borderRadius: "50%" }} source={ require('../assets/profile.png') }></Image>
          </TouchableOpacity>
        </View>
        <AutoHeightImage style={{ borderRadius: 16, marginTop: 20 }} width={ width } source={ require('../assets/banner.png') } />
        <View style={{ marginTop: 20 }}>
          <SearchBar />
        </View>
        <View style={{ marginTop: 35, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>우리동네 맛집 추천</Text>
          <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={ () => navigation.navigate('Food') }>
            <Block image={ require('../assets/chicken.png') } name="망냥냥치킨 성복점" distance={ 2.4 } time={ 10 } cost={ 3000 } rate={ 3.5 } />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 35, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Pretendard-SemiBold', fontSize: 20 }}>인기 공동구매</Text>
          <SvgUri style={{ opacity: 0.5, marginLeft: 18 }} width="12" height="12" source={ require('../assets/icons/chevron_right.svg') } fill='#031F00' />
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={ () => navigation.navigate('Buy') }>
            <Block image={ require('../assets/salade.png') } name="욘욘 닭가슴살 그린샐러드" distance={ 2.4 } time={ 10 } cost={ 3000 } rate={ 4.5 } />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}