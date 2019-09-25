import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header} from '../../../components';
import styles from './styles';

interface Props {
  navigation: any;
}

function Blank(props: Props) {
  return (
    <View style={styles.container}>
      <Header
        title="Blank"
        leftButtonPress={() => props.navigation.openDrawer()}
      />
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Blank Page</Text>
      </ScrollView>
    </View>
  );
}

export default Blank;
