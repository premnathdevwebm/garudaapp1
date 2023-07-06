import {FormikHelpers, useFormik} from 'formik';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {
  Button,
  Flex,
  InputText,
  Text,
  validators,
  Image,
} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../../common/CustomStatusBar';
import {AppDispatch} from '../../redux/store';
import {useVisibilityIcon} from '../../utils/helpers';
import {useLanguage} from '../../utils/useLanguage';
import {logIn} from './store/loginReducer';
import {AuthScreenNavigationProp} from '../../navigation/types';

const loginMask = require('../../assets/images/loginBackground.png');

const {isEmpty, isValidEmail} = validators;
const {EMAIL_REQUIRED, PASSWORD_REQUIRED, INVALID_EMAIL_ENTERED} = useLanguage;

const styles = StyleSheet.create({
  overAll: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 24,
  },
  btnStyle: {
    marginTop: 30,
    marginBottom: 40,
  },
  passwordInput: {
    marginTop: 24,
  },
  bottomTextContainer: {
    paddingHorizontal: 40,
  },
  btnRegister: {
    marginLeft: 4,
  },
  imgContainer: {
    marginTop: 20,
    marginBottom: 32,
  },
  socialContainer: {
    marginTop: 40,
  },
  googleImg: {
    marginRight: 28,
  },
});

type formType = {
  email: string;
  password: string;
};
interface LoginScreenProps {
  navigation: AuthScreenNavigationProp;
}

const initialValues: formType = {
  email: 'arulraj@squashapps.com',
  password: '1234',
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.email)) {
    errors.email = EMAIL_REQUIRED;
  } else if (!isValidEmail(values.email)) {
    errors.email = INVALID_EMAIL_ENTERED;
  }
  if (isEmpty(values.password)) {
    errors.password = PASSWORD_REQUIRED;
  }
  return errors;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {width, height} = useSafeAreaFrame();
  const dispatch: AppDispatch = useDispatch();

  const {isVisible, visibleIcon} = useVisibilityIcon();

  const handleSubmit = (value: formType, formikHelper: FormikHelpers<any>) => {
    formikHelper.resetForm;
    dispatch(logIn({isLogin: true, value}));
  };
  const handleRegister = () => {
    navigation.navigate('SignUpScreen');
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <Flex>
      <ImageBackground style={{height, width}} source={loginMask}>
        <Flex flex={1} overrideStyle={styles.overAll}>
          <CustomStatusBar />
          <Text overrideStyle={styles.welcomeText} type="heading700">
            Welcome Back!
          </Text>
          <Text color="gray">Hello there, please login first 👋</Text>
          <Flex overrideStyle={styles.inputContainer}>
            <InputText
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              label="Email"
              placeholder="Enter your email"
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              formikTouched={formik.touched}
              formikErrors={formik.errors}
              error={formik.touched.email && formik.errors.email}
            />
            <View style={styles.passwordInput}>
              <InputText
                label="Password"
                placeholder="Enter your email password"
                actionRight={visibleIcon}
                secureTextEntry={!isVisible}
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                name="password"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.password && formik.errors.password}
              />
            </View>
          </Flex>
          <Flex end>
            <Button type="link">
              <Text color="gray">Forgot password</Text>
            </Button>
          </Flex>
          <Button onClick={formik.handleSubmit} overrideStyle={styles.btnStyle}>
            Login
          </Button>
          <Flex center overrideStyle={styles.socialContainer}>
            <Text color="gray">Login with account</Text>
            <Flex row between overrideStyle={styles.imgContainer}>
              <Image
                overrideStyle={styles.googleImg}
                height={25}
                width={25}
                src="https://i.ibb.co/vQjgw4P/google-icon-logo-svgrepo-com-1.png"
              />

              <Image
                height={25}
                width={25}
                src="https://i.ibb.co/m4CBbbm/Vector.png"
              />
            </Flex>
          </Flex>

          <Flex row middle center overrideStyle={styles.bottomTextContainer}>
            <Text>Don’t have an account yet?</Text>
            <Button
              type="link"
              overrideStyle={styles.btnRegister}
              onClick={handleRegister}>
              Register
            </Button>
          </Flex>
        </Flex>
      </ImageBackground>
    </Flex>
  );
};

export default LoginScreen;
