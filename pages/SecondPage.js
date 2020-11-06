import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';

const SecondPage = ({navigation}) => {
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
            In order to access and use Chat Center, you will need to register and create an account (your "Account"). By creating an Account, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of the United States or other applicable jurisdiction. When creating an Account, you may be required to provide certain personal and contact information about yourself or your organization, including information such as your phone number and e-mail address, and other information. By creating an Account, you represent that you have the authority to do so for yourself, your publisher or your organization. We reserve the right to verify information prior to activating an account subject to confirm the Account's authenticity. You agree to provide accurate, current and complete information about your Account. Chat Center reserves the right to update and modify the terms of establishing an account or to change the types of accounts offered by Chat Center without notice to you.
You may choose to provide Chat Center with e-mail addresses and phone numbers of third parties whom you wish to use the Service with. You hereby give your express consent to Chat Center to use the e-mail addresses and phone numbers you provide for use in providing you access and use of the Service.
When creating an Account, don't:
•	as an individual, provide any false personal information to us (including a false username) or create any account for anyone other than yourself without such other person's permission;
•	as a company, provide any false contact information to us (including a false username) or create any account for anyone other than the company you represent without their permission;
•	use another person's or organization's e-mail address and phone number without their permission;
•	use a username that is the name of another person or organization with the intent to impersonate that person or organization;
•	use a username that is subject to rights of another person without appropriate authorization; or
•	use a username that is offensive, vulgar or obscene or otherwise in bad taste.
We reserve the right to suspend or terminate your Account if any information provided during the registration process or thereafter proves to be inaccurate, false or misleading or to reclaim any username that you create through the Service that violates our Terms. You are responsible for maintaining the confidentiality of your access to the Account, and agree to notify us if your password is lost, stolen, or disclosed to an unauthorized third party, or otherwise may have been compromised. You are responsible for activities that occur under your Account.
You may link your Account to various webmail, social networking, and other online accounts. You may only link your own accounts. We will access and retrieve your account information from these sites on your behalf (in some cases, by using your username and password) to make certain information or services available to you through the Service. By linking your other accounts, you expressly authorize us to access your account information from those third party accounts, on your behalf as your agent and permit us to access, use and, in some cases, store your account information to accomplish the foregoing.
You must notify Chat Center immediately of any breach of security or unauthorized use of your phone or other mobile device from which you access your account or use the Service. Although Chat Center will not be liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of Chat Center or others due to such unauthorized use. You can notify us at terms@chatcenter.me.
You agree not to use or launch any automated system, including without limitation, "robots," "spiders," "offline readers," etc. or "load testers" that accesses the Service in a manner that sends more request messages to the Chat Center servers in a given period of time than a human can reasonably produce in the same period by using a Chat Center application, and you are forbidden from ripping the content unless specifically allowed. Notwithstanding the foregoing, Chat Center may grant the operators of public search engines permission to use spiders to copy materials from the public portions of the App for the sole purpose of creating publicly available searchable indices of the materials, but not caches or archives of such materials. Chat Center reserves the right to revoke these exceptions either generally or in specific cases. You agree not to reverse- engineer our system, our protocols, or explore outside the boundaries of the normal requests made by Chat Center clients. You agree not use any tools to explore or harm, penetrate or test the App. You must secure our permission before you measure, test, health check or otherwise monitor any network equipment, servers or assets hosted on our domain. You agree not to collect or harvest any personally identifiable information, including account names, from the Service, nor to use the communication systems provided by the Service for any commercial solicitation or spam purposes. You agree not to solicit, for commercial purposes, any users of the Service with respect to their public posts.





          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondPage;
