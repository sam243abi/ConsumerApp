import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ProductScreen = ({ navigation }) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  const [isShelfLifeCollapsed, setIsShelfLifeCollapsed] = useState(true);
  const [isCertification, setIsCertification] = useState(true);

  const goToVendorDetails = () => {
    navigation.navigate('VendorDS');
  };

  const onSubmit = () => {
    navigation.navigate('BisleriSchedule');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.vendorCard} onPress={goToVendorDetails}>
        <View style={styles.vendorDetailsContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>SA</Text>
          </View>
          <View>
            <Text style={styles.vendorTitle}>Swetha Agencies</Text>
            <Text style={styles.vendorLocation}>OMR, Kazhipattur</Text>
          </View>
          <View style={styles.statusDot} />
        </View>
      </TouchableOpacity>

      <View style={styles.swiperContainer}>
        <Swiper
          showsButtons={true}
          autoplay={true}
          autoplayTimeout={5}
          style={styles.wrapper}
          prevButton={<Text style={styles.arrowText}>‹</Text>}
          nextButton={<Text style={styles.arrowText}>›</Text>}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
        >
          <Image source={require('./images/bisleriCan.jpg')} style={styles.slideImage} />
          <Image source={require('./images/fssai.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/bar.jpeg')} style={styles.slideImage} />
        </Swiper>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Bisleri Water Can </Text>
          <Text style={styles.productQuantity}>25 L</Text>
          <Text style={styles.productPrice}>₹50</Text>
          <Text style={styles.subscribeText}>Subscribe now!</Text>
        </View>

        <TouchableOpacity onPress={() => setIsDescriptionCollapsed(!isDescriptionCollapsed)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Product Description</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isDescriptionCollapsed}>
          <Text style={styles.descriptionText}>
            At Bisleri, our commitment to quality and purity in every drop of water stands us apart. Bisleri Mineral
            Water goes through rigorous quality processes and tests.
          </Text>
        </Collapsible>

        <TouchableOpacity onPress={() => setIsShelfLifeCollapsed(!isShelfLifeCollapsed)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Shelf Life</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isShelfLifeCollapsed}>
          <Text style={styles.descriptionText}>The shelf life of the Water Can is 45 days.</Text>
        </Collapsible>

        <TouchableOpacity onPress={() => setIsCertification(!isCertification)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Certifications</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCertification}>
          <Text style={styles.descriptionText}>This product is certified by FSSAI.</Text>
        </Collapsible>

        <View style={styles.otherProductsSection}>
          <Text style={styles.otherProductsTitle}>Other Products</Text>
          <View style={styles.otherProductsContainer}>
            <TouchableOpacity style={styles.productCard} onPress={goToVendorDetails}>
              <Image source={require('./images/bisleriCan.jpg')} style={styles.productImage} />
              <Text style={styles.productLabel}>Bisleri Water Can</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard} onPress={goToVendorDetails}>
              <Image source={require('./images/aquafina.png')} style={styles.productImage} />
              <Text style={styles.productLabel}>Aquafina Water Can</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity style={styles.subscribeButton} onPress={onSubmit}>
        <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  vendorCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  vendorDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d67d00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vendorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  vendorLocation: {
    fontSize: 14,
    color: '#555',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00C853',
    position: 'absolute',
    left: 40,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#fff',
  },
  swiperContainer: {
    height: 350,
    width: '100%',
  },
  slideImage: {
    height: '100%',
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  productInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 16,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#008000',
    marginVertical: 5,
  },
  subscribeText: {
    fontSize: 14,
    color: '#ff8c00',
  },
  toggleButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    padding: 15,
    fontSize: 14,
    lineHeight: 20,
  },
  subscribeButton: {
    position: 'absolute', 
    bottom: 0,            
    left: 0,              
    right: 0,             
    alignItems: 'center', 
    backgroundColor: '#9dd694',
    paddingVertical: 25, 
  },
  subscribeButtonText: {
    color: '#064e3b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowText: {
    color: '#9dd694',
    fontSize: 50,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#9dd694',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  otherProductsSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  otherProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  otherProductsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: width * 0.45,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  productLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductScreen;
