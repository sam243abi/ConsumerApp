import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Animated,
  Platform,
} from 'react-native';

const OtpVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleKeyboardWillShow = (event) => {
      Animated.timing(translateY, {
        toValue: -event.endCoordinates.height / 1.5,
        duration: Platform.OS === 'ios' ? event.duration : 300,
        useNativeDriver: true,
      }).start();
    };

    const handleKeyboardWillHide = () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      handleKeyboardWillShow
    );
    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      handleKeyboardWillHide
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(false);
      if (value !== '' && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleResendOtp = () => {
    setTimer(60);
    alert('OTP has been resent!');
  };

  const handleCompleteProfile = () => {
    if (otp.some((digit) => digit === '')) {
      setError(true);
    } else {
      setError(false);
      navigation.navigate('Profile');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
          <Text style={styles.title}>Enter OTP to Verify Your Identity</Text>
          <Text style={styles.subtitle}>Check for the OTP we sent and enter it here:</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                style={[
                  styles.otpInput,
                  error && otp[index] === '' ? styles.inputError : null,
                ]}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
                    inputRefs.current[index - 1].focus();
                  }
                }}
              />
            ))}
          </View>
          {error && <Text style={styles.errorText}>Please fill all OTP fields</Text>}

          <Text style={styles.timerText}>
            {timer > 0 ? `Wait for 00:${timer.toString().padStart(2, '0')}` : '00:00'}
          </Text>

          <TouchableOpacity
            style={styles.resendButton}
            onPress={handleResendOtp}
            disabled={timer > 0}
          >
            <Text style={{ color: timer > 0 ? 'gray' : 'blue' }}>SEND AGAIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={handleCompleteProfile}>
            <Text style={styles.ButtonText}>Complete Profile</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexGrow: 1,
  },
  animatedContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Reduced margin for tighter placement
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 30, // Adjusted for better spacing below the title
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40, // More spacing below OTP inputs
  },
  otpInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 8, // Consistent spacing between input boxes
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20, // Added spacing below error text
  },
  timerText: {
    fontSize: 16,
    marginBottom: 20,
  },
  resendButton: {
    marginBottom: 30, // Added spacing below resend button
  },
  Button: {
    backgroundColor: 'lightgreen',
    borderColor: 'darkgreen',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  ButtonText: {
    color: 'darkgreen',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OtpVerification;
