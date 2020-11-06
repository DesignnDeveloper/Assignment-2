import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';

const FifthPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
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
            We do not permit copyright infringing activities and infringement of intellectual property rights on the Service and will remove any such Content if properly notified that such Content infringes on another's intellectual property rights. If you are a copyright owner or an agent thereof and believe that any Content infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing us with the following information to our copyright agent at copyright@chatcenter.me in writing (see 17 U.S.C 512(c)(3) for further detail):
•	an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;
•	a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;
•	identification of the URL or other specific location on the Service where the material that you claim is infringing is located;
•	your address, telephone number, and email address;
•	a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
•	a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
You can contact our copyright agent via email at copyright@groupchat.me or by mail at Copyright Agent, c/o Group Chat Center Inc., Toronto, Canada.


          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FifthPage;
