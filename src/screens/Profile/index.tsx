import React from 'react';

import { View, Text, Button } from 'react-native';

interface ProfileOptions {
  navigation: any;
};

const Profile: React.FC<ProfileOptions> = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <View style={{
        marginTop: 100
      }}>
        <Button title="Voltar" onPress={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

export default Profile