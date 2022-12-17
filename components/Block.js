import { View, Image, Text } from 'react-native';
import SvgUri from "react-native-svg-uri";

export default function Block({ image, name, distance, time, cost, rate }) {
  return (
    <View style={{ width: "100%", borderRadius: 16, backgroundColor: '#EDF5F0', overflow: 'hidden' }}>
      <Image style={{ width: "100%", height: 160 }} source={image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
        <View>
          <Text style={{ color:'#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 16 }}>{name}</Text>
          <View style={{ opacity: 0.5 }}>
            <Text style={{ color:'#031F00', fontFamily: 'Pretendard-Regular', fontSize: 14, marginTop: 6 }}>{distance}km ・ {time}분 이내</Text>
            <Text style={{ color:'#031F00', fontFamily: 'Pretendard-Regular', fontSize: 14, marginTop: 4 }}>
              <Text>배달요금 </Text>
              <Text style={{ fontFamily: 'Pretendard-SemiBold' }}>{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text>
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }}>
          <SvgUri width="12" height="12" source={ require('../assets/icons/star_half.svg') } fill='#031F00' />
          <Text style={{ fontFamily: 'Pretendard-Medium', fontSize: 16, marginLeft: 8 }}>{rate}</Text>
        </View>
      </View>
    </View>
  );
}