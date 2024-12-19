import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const dailySupplies = [
    {
      id: "1",
      name: "Water Can",
      image: require("./images/water-can.png"),
      screen: "WaterCanScreen",
    },
    {
      id: "2",
      name: "Milk",
      image: require("./images/milk-Bottle.png"),
      screen: "MilkScreen",
    },
    {
      id: "3",
      name: "Flowers",
      image: require("./images/flowers.png"),
      screen: "FlowersScreen",
    },
    {
      id: "4",
      name: "Spinach",
      image: require("./images/spinach.png"),
      screen: "SpinachScreen",
    },
    {
      id: "5",
      name: "Post-Workout",
      image: require("./images/post-workout.png"),
      screen: "PostWorkoutScreen",
    },
    {
      id: "6",
      name: "Tender Coconut",
      image: require("./images/tender-coconut.png"),
      screen: "TenderCoconutScreen",
    },
  ];
  const { width } = Dimensions.get('window');

  const otherServices = [
    {
      id: "1",
      name: "Laundry",
      image: require("./images/laundry.png"),
      screen: "LaundryScreen",
    },
    {
      id: "2",
      name: "Medicines",
      image: require("./images/medicines.png"),
      screen: "MedicinesScreen",
    },
    {
      id: "3",
      name: "Magazines",
      image: require("./images/magazines.png"),
      screen: "MagazinesScreen",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate(item.screen)}
      style={styles.itemContainer}
    >
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View style={styles.headerContainer}>
                <Text style={styles.deliveryText}>Delivering To</Text>
                <Text style={styles.homeText}>Mythreya's Home</Text>
              </View>
              <View style={styles.bannerContainer}>
                <View style={styles.bannerTextContainer}>
                  <Text style={styles.bannerTitle}>Daily Drop</Text>
                  <Text style={styles.bannerSubtitle}>
                    Thirsty for Savings?
                  </Text>
                  <Text style={styles.bannerDescription}>
                    Subscribe to Fresh Water Today!
                  </Text>
                  <Pressable
                    style={styles.subscribeButton}
                    onPress={() => navigation.navigate("ProductScreen")}
                  >
                    <Text style={styles.subscribeButtonText}>Subscribe</Text>
                  </Pressable>
                </View>
                <Image
                  source={require("./images/aquafina.png")}
                  style={styles.bannerImage}
                />
              </View>
              <Text style={styles.sectionTitle}>Daily Supplies</Text>
            </>
          )}
          data={dailySupplies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          ListFooterComponent={() => (
            <>
              <Text style={styles.sectionTitle}>Other Services</Text>
              <FlatList
                data={otherServices}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
              />
            </>
          )}
        />

        <View style={styles.bottomNavContainer}>
          <Pressable
            style={styles.navItem}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Icon name="home" size={24} color="#2E7D32" />
            <Text style={styles.navText}>Home</Text>
          </Pressable>
          <Pressable
            style={styles.navItem}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Icon name="search" size={24} color="#555" />
            <Text style={styles.navText}>Search</Text>
          </Pressable>
          <Pressable
            style={styles.navItem}
            onPress={() => navigation.navigate("DropScreen")}
          >
            <Icon name="dropbox" size={24} color="#555" />
            <Text style={styles.navText}>Drops</Text>
          </Pressable>
          <Pressable
            style={styles.navItem}
            onPress={() => navigation.navigate("AccountScreen")}
          >
            <Icon name="user" size={24} color="#555" />
            <Text style={styles.navText}>Account</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    padding: 25,
    backgroundColor: "#FFF3E6",
  },
  deliveryText: {
    fontSize: 14,
    color: "#888",
  },
  homeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  bannerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#9dd694",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  bannerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  bannerDescription: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  subscribeButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#d1fae5",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#22d3ee",
  },
  subscribeButtonText: {
    color: "#064e3b",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  // subscribeButton: {
  //   backgroundColor: "#d1fae5",
  //   borderRadius: 8,
  //   paddingVertical: 8,
  //   paddingHorizontal: 11,
  //
  //   borderWidth: 2,
  // },
  // subscribeText: {
  //   color: "#064e3b",
  //   fontSize: 14,
  //   fontWeight: "600",
  // },
  bannerImage: {
    width: 80,
    height: 100,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  flatListContent: {
    paddingHorizontal: 5, // Reduced horizontal padding
    paddingBottom: 10, // Ensure some bottom padding remains
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 3, // Reduced margin for tighter spacing
    padding: 8, // Reduced padding inside the container
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageWrapper: {
    padding: 15, // Reduced padding
    borderWidth: 1,
    borderColor: "#9dd694",
    borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    borderRadius: 8,
  },
  itemText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#555",
    marginTop: 3,
  },
});

export default HomeScreen;