import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {ListItem} from '../../../components/ListItem';

interface Props {
  navigation: any;
}

function SideBar(props: Props) {
  return (
    <View style={styles.container}>
      <ListItem
        title="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <ListItem
        title="Blank Page"
        onPress={() => props.navigation.navigate('Blank')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg,
  },
});

export default SideBar;
