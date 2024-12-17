import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ProductScreen = ({ navigation }) => {
  const [starRating, setStarRating] = useState(0);
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  const [isShelfLifeCollapsed, setIsShelfLifeCollapsed] = useState(true);
  const [isCertification, setIsCertification] = useState(true);
  const [isReview, setIsReview] = useState(true);

  const goToVendorDetails = () => {
    navigation.navigate('VendorDS'); // Navigate to VendorDetails page
  };

  const onSubmit = () => {
    navigation.navigate('HeritageSchedule');
  };

  return (
    <View style={styles.container}>
      {/* Vendor Details Card */}
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

      {/* Slideshow */}
      <View style={styles.swiperContainer}>
        <Swiper
          showsButtons={true}
          autoplay={true}
          autoplayTimeout={3}
          style={styles.wrapper}
          prevButton={<Text style={styles.arrowText}>‹</Text>}
          nextButton={<Text style={styles.arrowText}>›</Text>}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
        >
          <Image source={require('./images/milk.jpeg')} style={styles.si} />
          <Image source={require('./images/shelf.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/ingre.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/nut.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/mai.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/fssai.jpeg')} style={styles.slideImage} />
          <Image source={require('./images/bar.jpeg')} style={styles.slideImage} />

        </Swiper>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Aavin Nice Toned Milk Pouch</Text>
          <Text style={styles.productQuantity}>500 ml</Text>
          <Text style={styles.productPrice}>₹20</Text>
          <Text style={styles.subscribeText}>Subscribe now!</Text>
        </View>

        {/* Product Description */}
        <TouchableOpacity
          onPress={() => setIsDescriptionCollapsed(!isDescriptionCollapsed)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleButtonText}>Product Description</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isDescriptionCollapsed}>
          <Text style={styles.descriptionText}>
            Milk is the most common dairy product that is used every day by almost everyone. 
            Consume directly or add to your breakfast cereal, daily tea/coffee, milkshake, smoothies, or other baked goods, desserts, and puddings. 
            Source of nutrition for all age groups.
          </Text>
        </Collapsible>
        <TouchableOpacity
          onPress={() => setIsShelfLifeCollapsed(!isShelfLifeCollapsed)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleButtonText}>Shelf Life</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isShelfLifeCollapsed}>
          <Text style={styles.descriptionText}>
            The shelf life of the milk is 3 days when kept refrigerated.
          </Text>
        </Collapsible>
        <TouchableOpacity
          onPress={() => setIsCertification(!isCertification)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleButtonText}>Certifications</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCertification}>
          <Text style={styles.descriptionText}>
            This product is certified by FSSAI.
          </Text>
        </Collapsible>

        {/* Reviews */}
        <TouchableOpacity onPress={() => setIsReview(!isReview)} style={styles.toggleButton}>
          <Text style={styles.reviewText}>Review</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isReview}>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setStarRating(star)} style={styles.starTouchable}>
                <Icon name="star" size={30} color={star <= starRating ? '#FFD700' : '#D3D3D3'} />
              </TouchableOpacity>
            ))}
            <Text style={styles.selectedRating}>{starRating}</Text>
          </View>
        </Collapsible>

        {/* Other Products Section */}
        <View style={styles.otherProductsSection}>
          <Text style={styles.otherProductsTitle}>Other Products</Text>
          <View style={styles.otherProductsContainer}>
            <TouchableOpacity style={styles.productCard} onPress={goToVendorDetails}>
              <Image source={require('./images/aavinmilk.png')} style={styles.productImage} />
              <Text style={styles.productLabel}>Aavin Milk </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard} onPress={goToVendorDetails}>
              <Image source={require('./images/arokyamilk.png')} style={styles.productImage} />
              <Text style={styles.productLabel}>Arokya milk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Subscribe Button */}
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
    backgroundColor: '#9dd694',
    paddingVertical: 20,
    paddingHorizontal: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 2,
  },
  subscribeButtonText: {
    fontSize: 16,
    color: '#064e3b',
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
  reviewText:{
    fontWeight: 'bold',
  },
});

export default ProductScreen;
