import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

function ProductsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={(navData) => {
          return {
            headerTitle: 'All Products',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    navData.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  onPress={() => {
                    navData.navigation.navigate('Cart');
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={(navData) => {
          return { headerTitle: navData.route.params['productTitle'] };
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={() => {
          return { headerTitle: 'Your Cart' };
        }}
      />
    </Stack.Navigator>
  );
}

function OrdersNavigator() {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={(navData) => {
          return {
            headerTitle: 'Your Orders',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    navData.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function AdminNavigator() {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={(navData) => {
          return {
            headerTitle: 'Your Products',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    navData.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Add"
                  iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                  onPress={() => {
                    navData.navigation.navigate('EditProduct', {});
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />

      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={(navData) => {
          const submitFn = navData.route.params['submit'];

          return {
            headerTitle: navData.route.params['productId'] ? 'Edit Product' : 'Add Product',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Save"
                  iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                  onPress={submitFn}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function ShopNavigator() {
  return (
    <Drawer.Navigator drawerContentOptions={{ activeTintColor: Colors.primary }}>
      <Drawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={() => {
          return {
            drawerIcon: (drawerConfig) => {
              return (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  size={22}
                  color={drawerConfig.color}
                />
              );
            },
          };
        }}
      />

      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={() => {
          return {
            drawerIcon: (drawerConfig) => {
              return (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                  size={22}
                  color={drawerConfig.color}
                />
              );
            },
          };
        }}
      />

      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={() => {
          return {
            drawerIcon: (drawerConfig) => {
              return (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                  size={22}
                  color={drawerConfig.color}
                />
              );
            },
          };
        }}
      />
    </Drawer.Navigator>
  );
}

function AppContainer() {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
}

export default AppContainer;
