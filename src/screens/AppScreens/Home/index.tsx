import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {Header} from '../../../components';
import styles from './styles';
import {AvatarItem} from '../../../components';
import {logoutUserService} from '../../../redux/services/user';
import {fetchImageData, fetchMoreImageData} from '../../../redux/actions/fetch';

interface Props {
  navigation: any;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}

interface itemProp {
  item: any;
}

interface State {
  page: number;
  limit: number;
}

function Home(props: Props) {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  useEffect(() => {
    fetchImageData(page, limit);
  });

  const handleLogout = () => {
    const {navigation} = props;
    logoutUserService().then(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Home"
        leftButtonPress={() => props.navigation.toggleDrawer()}
        rightButtonPress={() => handleLogout()}
      />
      <FlatList
        data={props.imageData}
        keyExtractor={item => item.id}
        renderItem={({item}: itemProp) => {
          return <AvatarItem avatar={item.download_url} title={item.author} />;
        }}
        onEndReached={() => {
          setPage(page + 1);
          fetchMoreImageData(page + 1, limit);
        }}
        ListFooterComponent={
          props.loading ? (
            <View style={styles.loadingFooter}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  imageData: state.data,
  loading: state.loading,
});

function bindToAction(dispatch: any) {
  return {
    fetchImageData: (page?: number, limit?: number) =>
      dispatch(fetchImageData(page, limit)),
    fetchMoreImageData: (page?: number, limit?: number) =>
      dispatch(fetchMoreImageData(page, limit)),
  };
}

export default connect(
  mapStateToProps,
  bindToAction,
)(Home);
