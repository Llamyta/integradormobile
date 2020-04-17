import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './MainTabScreen'

import {DrawerContent} from './DrawerContent'
import Perfil from '../screens/MyAccount'

const Drawer = createDrawerNavigator();




function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>


  );
}

export default App;