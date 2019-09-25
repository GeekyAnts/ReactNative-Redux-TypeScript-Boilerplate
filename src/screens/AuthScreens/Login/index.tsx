import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {loginUserService} from '../../../redux/services/user';
import {Input, Button} from '../../../components';
import styles from './styles';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}
interface userData {
  username: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_-]+$/)
    .min(4)
    .max(16)
    .required(),
  password: Yup.string()
    .matches(/^[a-zA-Z]+(\s?[a-zA-z]+)*$/)
    .min(6)
    .max(16)
    .required(),
});

function Login(props: Props) {
  const handleLogin = (values: userData) => {
    const {navigation} = props;
    loginUserService(values.username, values.password).then(res => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView bounces={false}>
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={values => handleLogin(values)}>
            {props => {
              return (
                <View>
                  <View style={styles.headStyle}>
                    <Icon name="emotsmile" size={100} />
                    <Text style={styles.headText}>Build Something Amazing</Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <Input
                      placeholder="Username"
                      value={props.values.username}
                      onChangeText={props.handleChange('username')}
                      onBlur={props.handleBlur('username')}
                      error={props.touched.username && props.errors.username}
                    />
                    <Input
                      placeholder="Password"
                      value={props.values.password}
                      onChangeText={props.handleChange('password')}
                      onBlur={props.handleBlur('password')}
                      secureTextEntry
                      error={props.touched.password && props.errors.password}
                    />
                    <Button text="Login" onPress={props.handleSubmit} />
                  </View>
                </View>
              );
            }}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Login;
