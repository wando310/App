import { SafeAreaView, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import ScreenWelcome from './src/pages/screenWelcome'
import Menu from './src/pages/Menu'
import ListDrinkMenu from './src/pages/listDrinkMenu';
import ListLunchMenu from './src/pages/listLuncheMenu';
import ListCakeMenu from './src/pages/listCakeMenu';
import ListSweetMenu from './src/pages/listSweetMenu';
import ListPizzaMenu from './src/pages/listPizzaMenu';
import ScreenCart from './src/pages/screenCart';
import Modal from './src/pages/modal'
import ScreenPayment from './src/pages/screenPayment';
import ScreenPaymentPix from './src/pages/screenPaymentPix';
import ScreenPaymentDelivery from './src/pages/screenPaymentDelivery';
import screenRegisterAddress from './src/pages/screenRegisterAddress';
import scrennRegisterPersonalData from './src/pages/scrennRegisterPersonalData';
import ScreenRegisterLogin from './src/pages/screenRegisterLogin';
import ScreenLogin from './src/pages/screenLogin';
import ScreenWaiting from './src/pages/screenWaiting';
import { ScreenRequests } from './src/pages/screenMyrequests';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import AutProvider from './src/context/auth';
import { View } from 'react-native-animatable';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>     
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <AutProvider>
        <Stack.Navigator
          initialRouteName='Menu'      
          screenOptions={{
            headerShown:false
          }}
        >

          {/* ------- tela menu ------ */}
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: 'Bem vindo :)',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
                
              },
            }}
          />
          {/* ------- tela drinks ------ */}
          <Stack.Screen
            name='listDrinkMenu'
            component={ListDrinkMenu}
            options={{
              title: 'Bebidas',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/* ------- tela lunch ------ */}
          <Stack.Screen
            name='listLunchMenu'
            component={ListLunchMenu}
            options={{
              title: 'Lanches',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/* ------- tela Cake ------ */}
          <Stack.Screen
            name='listCakeMenu'
            component={ListCakeMenu}
            options={{
              title: 'Bolos',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/* ------- tela Sweet ------ */}
          <Stack.Screen
            name='listSweetMenu'
            component={ListSweetMenu}
            options={{
              title: 'Doces',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/* ------- tela Pizza ------ */}
          <Stack.Screen
            name='listPizzaMenu'
            component={ListPizzaMenu}
            options={{
              title: 'Pizzas',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/* ------- tela home ------ */}
          <Stack.Screen
            name="Home"
            component={ScreenWelcome}
            options={{
              title: ' ',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela Modal ---------*/}
          <Stack.Screen
            name='Modal'
            component={Modal}
            options={{
              title: 'Bem vindo :)',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela carrinho ---------*/}
          <Stack.Screen
            name='Cart'
            component={ScreenCart}
            options={{
              title: '',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela Pagamento ---------*/}
          <Stack.Screen
            name='Payment'
            component={ScreenPayment}
            options={{
              title: 'Forma de pagamento',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela Pagamento Pix ---------*/}
          <Stack.Screen
            name='PaymentPix'
            component={ScreenPaymentPix}
            options={{
              title: 'Pagamento',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela Pagamento na entrega ---------*/}
          <Stack.Screen
            name='PaymentDelivery'
            component={ScreenPaymentDelivery}
            options={{
              title: 'Pagamento',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela registro endereço ---------*/}
          <Stack.Screen
            name='RegisterAddress'
            component={screenRegisterAddress}
            options={{
              title: 'Preencha o endereço',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela cadastro dados pessoais ---------*/}
          <Stack.Screen
            name='RegisterPersonal'
            component={scrennRegisterPersonalData}
            options={{
              title: 'Dados pessoais',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela cadastro Login ---------*/}
          <Stack.Screen
            name='RegisterLogin'
            component={ScreenRegisterLogin}
            options={{
              title: 'Cadastrar login',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela Login ---------*/}
          <Stack.Screen
            name='screenLogin'
            component={ScreenLogin}
            options={{
              title: '',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela confirmalção ---------*/}
          <Stack.Screen
            name='screenWaiting'
            component={ScreenWaiting}
            options={{
              title: '',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />
          {/*------ tela meus pedidos ---------*/}
          <Stack.Screen
            name='screenMyrequests'
            component={ScreenRequests}
            options={{
              title: 'Meus pedidos',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor:'#2f2859',
              },
            }}
          />

        </Stack.Navigator>
      </AutProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})