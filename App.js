import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './SRC/Screen/WelcomeScreen';
import PhoneVerification from './SRC/Screen/PhoneVerification';
import OtpVerification from './SRC/Screen/OtpVerification';
import ProfileCompletion from './SRC/Screen/ProfileCompletion';
import DeliveryAddress from './SRC/Screen/DeliveryAddress';
import SlideShow from './SRC/Screen/SlideShow';
import Heritage from './SRC/Screen/Heritage';
import Schedule from './SRC/Screen/HeritageSchedule';
import Daily from './SRC/Screen/Daily';
import Weekly from './SRC/Screen/Weekly';
import Monthly from './SRC/Screen/Monthly';
import AlternateDays from './SRC/Screen/AlternateDays';
import HomeScreen from './SRC/Screen/HomeScreen';
import SearchScreen from './SRC/Screen/SearchScreen';
import DropsScreen from './SRC/Screen/DropsScreen';
import AccountScreen from './SRC/Screen/AccountScreen';
import WaterCanScreen from './SRC/Screen/WaterCanScreen';
import SubscriptionStartScreen from './SRC/Screen/SubscriptionStartScreen';
import Bisleri from './SRC/Screen/Bisleri';
import BisleriSchedule from './SRC/Screen/BisleriSchedule';
const Stack = createStackNavigator();
import MilkScreen from "./SRC/Screen/MilkScreen";
import VendorDetailsScreen from './SRC/Screen/VendoeDetailsScreen';
import Review from './SRC/Screen/Review'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Phone Number Verification" component={PhoneVerification} />
        <Stack.Screen name="OTP Verify" component={OtpVerification} />
        <Stack.Screen name="Profile" component={ProfileCompletion} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="Intro" component={SlideShow} />
        <Stack.Screen name="HeritageSchedule" component={Schedule} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="AlternateDays" component={AlternateDays} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DropScreen" component={DropsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="WaterCanScreen" component={WaterCanScreen} />
        <Stack.Screen name="Heritage" component={Heritage} />
        <Stack.Screen name="bisleri" component={Bisleri} />
        <Stack.Screen name="BisleriSchedule" component={BisleriSchedule} />
        <Stack.Screen name="SubscriptionStartScreen" component={SubscriptionStartScreen} />
        <Stack.Screen name="MilkScreen" component={MilkScreen} />
        <Stack.Screen name="VendorDS" component={VendorDetailsScreen} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
