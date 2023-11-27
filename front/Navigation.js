import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Inicio from './screens/inicio';
import DistNormal from './screens/DistNormal';
import TablaResul from './screens/TablaResul';
import Conclusiones from './screens/Conclusiones'
import DistExpo from './screens/DistExpo';
import DistBinomial from './screens/DistBinomial';


//topTabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Distribucion Normal" component={DistNormal} />
      <TopTabs.Screen name="Distribucion Exponencial" component={DistExpo} />
      <TopTabs.Screen name="Distribucion Binomial" component={DistBinomial} />
    </TopTabs.Navigator>
  );
}

//tabs
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio"component={Inicio}/>
      <Tab.Screen name="Distribucion" component={TopTabsGroup} />
      <Tab.Screen name="Resultados" component={TablaResul} />
      <Tab.Screen name="Conclusiones" component={Conclusiones} />
    </Tab.Navigator>
  );
}
export default function Navigation()  {

    return (
      <NavigationContainer> 
        <TabGroup/>
      </NavigationContainer>
    )
}