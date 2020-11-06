import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView, Image} from 'react-native';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <Image source={require('../assets/WeChat.jpg')} 
      style={{width: 250, height: 200, borderRadius: 50, margin: 70, marginTop: 180}}
      />
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'left',
              justifyContent: 'space-evenly',
              marginBottom: 16,

            }}>
              
          </Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: "bold", textAlign: 'center', color: '#00bb30'}}>
        Welcome to WeChat..!!!
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;
