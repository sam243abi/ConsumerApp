import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList,} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { navigateTo } from "./RoutHub/Routs";
const MilkData = [
  {
    id: "1",
    name: "Aavin MIlk",
    price: "₹20/500 ltr Can",
    image: require("./images/aavinmilk.png"),
  },
  {
    id: "2",
    name: "Arokya Milk ",
    price: "₹21/500ml",
    image: require("./images/arokyamilk.png"),
  },
  {
    id: "3",
    name: "Avin Double Toned Milk",
    price: "₹40/500ml",
    image: require("./images/arokyamilk.png"),
  },
];

const MilkScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo(navigation,"Heritage")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Milk</Text>
      <FlatList
        data={MilkData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: "#9dd694",
    borderWidth: 1,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 12,
    marginLeft: -20,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  button: {
    backgroundColor: "#d1fae5",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor: "#22d3ee",
    borderWidth:2,
    marginTop:55,
    
  },
  buttonText: {
    color: "#064e3b",   
    fontSize: 14,
    fontWeight: "600",
    
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 14,
    color: "#554",
  },
});

export default MilkScreen;