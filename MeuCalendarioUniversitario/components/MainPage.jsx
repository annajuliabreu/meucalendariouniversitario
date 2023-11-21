import Home from "AgendaPersonalizada/Home.jsx"

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator()


const MainPageProva = () => {
    return (
        <View>
            <NavigationContainer>
                <NativeStack.Navigator screenOptions={{ headerShown: false }}>

                    <NativeStack.Group>
                        <NativeStack.Screen name="Agenda Personalizada" component={Home} />
                    </NativeStack.Group>


                    {/* <NativeStack.Group>
                        <NativeStack.Screen name="Agenda Personalizada" component={Home} />
                    </NativeStack.Group> */}



                </NativeStack.Navigator>
            </NavigationContainer>

        </View>
    );
}

export default MainPageProva;