import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {recetasCocina} from './RecetasBD';

const RecipeListScreen = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setRecipes(recetasCocina);
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.nombre.toLowerCase().includes(searchText.toLowerCase()),
  );

  const RenderRecipeItem = ({item}) => {
    return (
      <View style={styles.recipeItem}>
        <Text style={styles.recipeTitle}>{item.nombre}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Lista de Recetas</Text>
        <TouchableOpacity
          style={[styles.filterButton, styles.selectedFilterButton]}
          onPress={() =>
            navigation.navigate('CrearReceta', {setRecipes: setRecipes})
          }>
          <Text style={styles.filterButtonText}>CrearReceta</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar recetas"
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
      style={styles.list}
        data={filteredRecipes}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetalleReceta', {newsItem: item})
            }>
            <RenderRecipeItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
   container2: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    height: 40,
  },
  list :{
    height:520
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  recipeItem: {
    marginBottom: 16,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeDescription: {
    fontSize: 16,
  },
  filterButton: {
    paddingVertical: 10,
    width: 120,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedFilterButton: {
    backgroundColor: 'blue',
  },
  filterButtonText: {
    color: 'white',
  },
});

export default RecipeListScreen;
