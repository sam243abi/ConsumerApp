import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import BottomNav from "./components/BottomNav";
import { globalStyles } from "./styles/global";
import { navigateTo } from "./RoutHub/Routs";
import colors from "./components/colors";
import { ProductData, DailySupplies } from "../../ProductData";

// Import all images 
const bisleriImage = require("./images/bisleri.png");
const aquafinaImage = require("./images/aquafina.png");
const aavinMilkImage = require("./images/aavinmilk.png");
const arokyaMilkImage = require("./images/arokyamilk.png");
const riceImage = require("./images/arokyamilk.png");
const laundryImage = require("./images/arokyamilk.png");
const ProductCard = ({ title, price, imageUrl, onSubscribe }) => (
  <View style={styles.card}>
    <Image source={imageUrl} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <TouchableOpacity
      style={globalStyles.subscribeButton}
      onPress={onSubscribe}  // Just call the onSubscribe prop directly
    >
      <Text style={globalStyles.subscribeText}>Subscribe</Text>
    </TouchableOpacity>
  </View>
);
 


// Combine all products from different categories
const allProducts = [
  ...ProductData.watercan,
  ...ProductData.milk,
  ...ProductData.groceries,
  ...ProductData.otherServices
];

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeTab, setActiveTab] = useState("Daily");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    let filteredData = [];
    switch (tab) {
      case "Daily":
        filteredData = [...ProductData.watercan, ...ProductData.milk];
        break;
      case "Groceries":
        filteredData = ProductData.groceries;
        break;
      case "Other Services":
        filteredData = ProductData.otherServices;
        break;
      case "Newly In":
        filteredData = allProducts;
        break;
      default:
        filteredData = allProducts;
    }
    if (searchQuery) {
      filteredData = filteredData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filteredData);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    let filtered = [];
    switch (activeTab) {
      case "Daily":
        filtered = [...ProductData.watercan, ...ProductData.milk];
        break;
      case "Groceries":
        filtered = ProductData.groceries;
        break;
      case "Other Services":
        filtered = ProductData.otherServices;
        break;
      case "Newly In":
        filtered = allProducts;
        break;
      default:
        filtered = allProducts;
    }
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const getProductImage = (product) => {
    switch (product.name) {
      case "Bisleri Water Can":
        return bisleriImage;
      case "Aquafina Water Can":
        return aquafinaImage;
      case "Aavin Milk":
        return aavinMilkImage;
      case "Arokya Milk":
        return arokyaMilkImage;
      case "Rice":
        return riceImage;
      case "Laundry Service":
        return laundryImage;
      default:
        return bisleriImage; // Default image
    }
  };

  const renderProductItem = ({ item }) => (
    <ProductCard
      title={item.name}
      price={item.price}
      imageUrl={getProductImage(item)}
      onSubscribe={() => {
        if (item.name.toLowerCase().includes("water")) {
          navigation.navigate("Subscribe", { product: item });
        } else if (item.name.toLowerCase().includes("milk")) {
          navigation.navigate("Subscribe", { product: item });
        } else {
          navigation.navigate("Subscribe");
        }
      }}
    />
  );

  const renderRunningLowItem = ({ item }) => (
    <TouchableOpacity
      style={styles.iconBox}
      onPress={() => {
        navigation.navigate(item.screen, { type: item.type });
      }}
    >
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <TextInput
            style={styles.searchBox}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "Daily" && styles.activeTab]}
              onPress={() => handleTabPress("Daily")}
            >
              <Text style={styles.tabText}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "Groceries" && styles.activeTab]}
              onPress={() => handleTabPress("Groceries")}
            >
              <Text style={styles.tabText}>Groceries</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "Other Services" && styles.activeTab,
              ]}
              onPress={() => handleTabPress("Other Services")}
            >
              <Text style={styles.tabText}>Other Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "Newly In" && styles.activeTab]}
              onPress={() => handleTabPress("Newly In")}
            >
              <Text style={styles.tabText}>Newly In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              What Are You Running Low On?
            </Text>
            <FlatList
              data={DailySupplies}
              renderItem={renderRunningLowItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular in Your Area</Text>
          </View>
        </>
      }
      ListFooterComponent={<BottomNav navigation={navigation} activeTab="Search" />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBox: {
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
    margin: 10,
    borderColor: colors.border,
    borderWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  iconBox: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 15,
    flex: 1,
    alignItems: "center",
    margin: 3,
    padding: 8,
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconImage: {
    width: 80,
    height: 50,
    resizeMode: "contain",
    borderRadius: 8,
    marginBottom: 5,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 17,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
    marginLeft: -20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 3,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  tab: {
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchScreen;