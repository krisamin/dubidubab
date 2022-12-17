import { View, TextInput } from 'react-native';
import SvgUri from "react-native-svg-uri";

export default function SearchBar() {
  return (
    <View>
      <TextInput style={{ height: 48, borderColor: 'rgba(3, 31, 0, 0.2)', borderWidth: 1, borderRadius: 24, paddingHorizontal: 18 }} placeholder="1    마라탕" placeholderTextColor="rgba(3, 31, 0, 0.7)" />
      <SvgUri style={{ position: 'absolute', top: 14,  right: 18 }} width="20" height="20" source={ require('../assets/icons/search.svg') } fill='#031F00' />
    </View>
  );
}