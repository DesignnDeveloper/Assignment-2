import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView, Image} from 'react-native';

const ThirdPage = ({navigation}) => {
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
            Please read these terms of use carefully ("Terms"). These Terms govern and apply to your access and use of Group Chat and Chat Center services available via the Chat Center site and Chat Center mobile apps (collectively, the "Service" and each instance an "App") and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Service (collectively referred to as "Content"). By accessing or using our Service, you agree comply with and to be bound all the terms and conditions described in these Terms. If you do not agree to all these terms and conditions, do not use our Service. Our Service may be used and accessed for lawful purposes only. You agree that you will not do any of the following while using or accessing the Service: (i) attempt to access or search the Service or download Content from the Service through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by us or other generally available third party web browsers; (ii) access, tamper with, or use non-public areas of the Service, our computer systems, or the technical delivery systems of our providers; (iii) gather and use information, such as other users' names, real names, email addresses, available through the Service to transmit any unsolicited advertising, junk mail, spam or other form of solicitation; (iv) use the Service for any commercial purpose or for the benefit of any third party or in any manner not by these Terms; (v) violate any applicable law or regulation; or (vi) encourage or enable any other individual to do any of the foregoing. We reserve the right to investigate and prosecute violations of any of the above and/or involve and cooperate with law enforcement authorities in prosecuting users who violate these Terms.





          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdPage;
