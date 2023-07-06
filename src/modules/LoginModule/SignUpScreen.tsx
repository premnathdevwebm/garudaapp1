import {FormikHelpers, useFormik} from 'formik';
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  Button,
  Flex,
  InputText,
  Text,
  validators,
  Image,
} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../../common/CustomStatusBar';
import {useVisibilityIcon} from '../../utils/helpers';
import {useLanguage} from '../../utils/useLanguage';
import {AuthScreenNavigationProp} from '../../navigation/types';

const loginMask = require('../../assets/images/loginBackground.png');

const {isEmpty, isValidEmail} = validators;
const {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  INVALID_EMAIL_ENTERED,
  PHONE_REQUIRED,
  CONFIRM_PASSWORD,
} = useLanguage;

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
    marginTop: 32,
    marginBottom: 60,
  },
  btnRegister: {
    marginLeft: 4,
  },
  imgContainer: {
    marginTop: 20,
    marginBottom: 32,
  },
  socialContainer: {
    marginTop: 20,
  },
  googleImg: {
    marginRight: 28,
  },
});

type formType = {
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
};
interface SignUpScreenProps {
  navigation: AuthScreenNavigationProp;
}

const initialValues: formType = {
  email: 'arulraj@squashapps.com',
  password: '1234',
  phone: '1234',
  confirmpassword: '1234',
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.email)) {
    errors.email = EMAIL_REQUIRED;
  } else if (!isValidEmail(values.email)) {
    errors.email = INVALID_EMAIL_ENTERED;
  }
  if (isEmpty(values.phone)) {
    errors.phone = PHONE_REQUIRED;
  }
  if (isEmpty(values.password)) {
    errors.password = PASSWORD_REQUIRED;
  }
  if (isEmpty(values.confirmpassword)) {
    errors.confirmpassword = PASSWORD_REQUIRED;
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = CONFIRM_PASSWORD;
  }

  return errors;
};

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const {width} = useSafeAreaFrame();
  const {isVisible, visibleIcon} = useVisibilityIcon();
  const handleSubmit = (value: formType, formikHelper: FormikHelpers<any>) => {
    formikHelper.resetForm;
    navigation.navigate('OTPVerificationScreen');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <ScrollView bounces={false}>
      <ImageBackground style={{width}} source={loginMask}>
        <Flex overrideStyle={styles.overAll}>
          <CustomStatusBar />
          <Text overrideStyle={styles.welcomeText} type="heading700">
            Register
          </Text>
          <Text color="gray">
            More than 100+ specialist doctors are ready to serve you.
          </Text>
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
                value={formik.values.phone}
                onChange={formik.handleChange('phone')}
                label="Phone"
                placeholder="Enter your phone Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                name="phone"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.phone && formik.errors.phone}
              />
            </View>
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
            <View style={styles.passwordInput}>
              <InputText
                label="Confirm Password"
                placeholder="Enter your password again"
                actionRight={visibleIcon}
                secureTextEntry={!isVisible}
                value={formik.values.confirmpassword}
                onChange={formik.handleChange('confirmpassword')}
                name="confirmpassword"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                }
              />
            </View>
          </Flex>
          <Button onClick={formik.handleSubmit} overrideStyle={styles.btnStyle}>
            Create Account
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
            <Text>Already have an account?</Text>
            <Button
              type="link"
              overrideStyle={styles.btnRegister}
              onClick={handleLogin}>
              Login
            </Button>
          </Flex>
        </Flex>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignUpScreen;
