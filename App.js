import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './SRC/Screen/Welcome';
import PhoneVerification from './SRC/Screen/PhoneVerification';
import OtpVerification from "./SRC/Screen/OtpVerification";
import Profile from "./SRC/Screen/Profile";
import DeliveryAddress from './SRC/Screen/DeliveryAddress';
import Intro from "./SRC/Screen/Intro";
import Heritage from './SRC/Screen/Heritage';
import Schedule from './SRC/Screen/HeritageSchedule';
import Daily from './SRC/Screen/Daily';
import Weekly from './SRC/Screen/Weekly';
import Monthly from './SRC/Screen/Monthly';
import AlternateDays from './SRC/Screen/AlternateDays';
import Home from './SRC/Screen/Home';
import Search from "./SRC/Screen/Search";
import Drops from "./SRC/Screen/Drops";
import Account from "./SRC/Screen/Account";
import WaterCanScreen from './SRC/Screen/WaterCanScreen';
import SubscriptionStartScreen from './SRC/Screen/SubscriptionStartScreen';
import Bisleri from './SRC/Screen/Bisleri';
import BisleriSchedule from './SRC/Screen/BisleriSchedule';
import MilkScreen from "./SRC/Screen/MilkScreen";
import VendorDetails from "./SRC/Screen/VendorDetails";
import Review from './SRC/Screen/Review'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="OTP" component={OtpVerification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="HeritageSchedule" component={Schedule} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="AlternateDays" component={AlternateDays} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Drops" component={Drops} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="WaterCanScreen" component={WaterCanScreen} />
        <Stack.Screen name="Heritage" component={Heritage} />
        <Stack.Screen name="Bisleri" component={Bisleri} />
        <Stack.Screen name="BisleriSchedule" component={BisleriSchedule} />
        <Stack.Screen
          name="SubscriptionStartScreen"
          component={SubscriptionStartScreen}
        />
        <Stack.Screen name="MilkScreen" component={MilkScreen} />
        <Stack.Screen name="VendorDetails" component={VendorDetails} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
