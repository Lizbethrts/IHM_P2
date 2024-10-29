import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions, SafeAreaView } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const images = [
  { id: 1, background: require('./assets/image5.png'), sushi: require('./assets/image6.png') },
  { id: 2, background: require('./assets/image5.png'), sushi: require('./assets/image6.png') },
  { id: 3, background: require('./assets/image5.png'), sushi: require('./assets/image6.png') },
];

const restaurantData = [
  { id: '1', name: 'Groceries', category: 'burger, dessert', rating: 4.7, time: '15-20 min', image: require('./assets/delicious-grilled-burgers-1.png') },
  { id: '2', name: 'Groceries', category: 'burger, dessert', rating: 4.7, time: '15-20 min', image: require('./assets/delicious-grilled-burgers-1.png') },
  { id: '3', name: 'Groceries', category: 'burger, dessert', rating: 4.7, time: '15-20 min', image: require('./assets/delicious-grilled-burgers-1.png') },
];

const groceryData = [
  { id: '1', name: 'Groceries', rating: 4.7, time: '15-20 min', image: require('./assets/top-view-assortment-vegetables-paper-bag-1.png') },
  { id: '2', name: 'Groceries', rating: 4.7, time: '15-20 min', image: require('./assets/top-view-assortment-vegetables-paper-bag-1.png') },
  { id: '3', name: 'Groceries', rating: 4.7, time: '15-20 min', image: require('./assets/top-view-assortment-vegetables-paper-bag-1.png') },
];

const specialsData = [
  { id: '1', name: 'winestory', offer: 'Special Offer', image: require('./assets/two-glasses-white-wine-tasty-cheese-plate-with-fruit-wooden-kitchen-plate-black-stone-1.png') },
  { id: '2', name: 'winestory', offer: 'Special Offer', image: require('./assets/two-glasses-white-wine-tasty-cheese-plate-with-fruit-wooden-kitchen-plate-black-stone-1.png') },
];

export default function App() {
  const renderCardItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardRating}>⭐ {item.rating}</Text>
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.cardCategory}>{item.category}</Text>
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  const renderSpecialItem = ({ item }) => (
    <View style={styles.specialCard}>
      <Image source={item.image} style={styles.specialImage} resizeMode="cover" />
      <View style={styles.specialTextContainer}>
        <Text style={styles.specialCategory}>GROCERY</Text>
        <Text style={styles.specialName}>{item.name}</Text>
        <Text style={styles.specialOffer}>{item.offer}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.addressContainer}>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.address}>9185 Mayflower Drive Atlanta</Text>
        </View>
        
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carouselContainer}
        >
          {images.map((item) => (
            <View key={item.id} style={styles.imageContainer}>
              <Image source={item.background} style={styles.backgroundImage} />
              <Image source={item.sushi} style={styles.sushiImage} resizeMode="cover" />
            </View>
          ))}
        </ScrollView>

        
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All restaurants</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            data={restaurantData}
            renderItem={renderCardItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All Groceries</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            data={groceryData}
            renderItem={renderCardItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Specials</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            data={specialsData}
            renderItem={renderSpecialItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  icon: {
    fontSize: 18,
    marginRight: 5,
  },
  address: {
    fontSize: 16,
    color: '#333',
  },
  carouselContainer: {
    width: viewportWidth,
    height: 200,
  },
  imageContainer: {
    width: viewportWidth * 0.8,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: viewportWidth * 0.1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  sushiImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  sectionContainer: {
    marginTop: 20,
    width: '100%',
    paddingLeft: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#c0bfc7',
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  card: {
    width: 160,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardContent: {
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardRating: {
    fontSize: 14,
    color: '#333',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  cardTime: {
    fontSize: 12,
    color: '#777',
  },
  cardCategory: {
    fontSize: 10,
    color: '#777',
  },
  specialCard: {
    width: 240,
    height: 140,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  specialImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  specialTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  specialCategory: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  specialName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  specialOffer: {
    color: '#fff',
    fontSize: 14,
    marginTop: 2,
  },
});
