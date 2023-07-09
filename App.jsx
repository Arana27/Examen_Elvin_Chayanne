import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipeListScreen from './src/index';
import RecipeDetailScreen from './src/DetalleReceta';
import CreateRecipeScreen from './src/Crearreceta';

const Stack = createNativeStackNavigator();

export function AppRecetas() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={RecipeListScreen} options={{title: 'Home'}} />
          <Stack.Screen name="DetalleReceta" component={RecipeDetailScreen} options={{title: 'Detalle Receta'}} />
          <Stack.Screen name="CrearReceta" component={CreateRecipeScreen} options={{title: 'Crear Receta'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}