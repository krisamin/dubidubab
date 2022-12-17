import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../styles/Global';

function Category() {
  return (
    <ScrollView style={globalStyles.page} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={globalStyles.inner}>
        <View style={{ height: 44, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#031F00', fontFamily: 'Pretendard-SemiBold', fontSize: 24 }}>카테고리</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Category;