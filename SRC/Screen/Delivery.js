import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper"; 

const Delivery = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleUnlockDelivery = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={[
            styles.scrollView, 
            isKeyboardVisible && { paddingBottom: 200 }
          ]}
        >
          <Text style={styles.title}>Where Should We Deliver?</Text>
          <Text style={styles.subtitle}>
            Enter your address so we can bring everything right to your door.
          </Text>

          {/* Map Placeholder */}
          <View style={styles.mapContainer}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/684/684908.png" }}
              style={styles.pinIcon}
            />
          </View>

          {/* Input Fields with Floating Labels */}
          <TextInput 
            label="Address Line 1" 
            mode="outlined" 
            style={styles.input} 
            theme={{ colors: { primary: "black", outline: "black" } }}
          />
          <TextInput 
            label="Address Line 2" 
            mode="outlined" 
            style={styles.input} 
            theme={{ colors: { primary: "black", outline: "black" } }}
          />
          <TextInput 
            label="Pincode" 
            mode="outlined" 
            keyboardType="numeric" 
            style={styles.input} 
            theme={{ colors: { primary: "black", outline: "black" } }}
          />
          <TextInput 
            label="Landmark" 
            mode="outlined" 
            style={styles.input} 
            theme={{ colors: { primary: "black", outline: "black" } }}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleUnlockDelivery}>
            <Text style={styles.buttonText}>Unlock Your Delivery</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  mapContainer: {
    width: "100%",
    height: 120,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pinIcon: {
    width: 40,
    height: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#A2D39B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#064e3b",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Delivery;
