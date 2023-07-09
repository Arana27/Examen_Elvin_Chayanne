import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';

const CreateRecipeScreen = ({ navigation }) => {
    const route = useRoute();
  const setRecipes = route.params?.setRecipes;
  console.log(setRecipes)
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleCreateRecipe = () => {
    // Aquí es donde guardarías la receta en tu fuente de datos (API, base de datos, etc.)
    const newRecipe = {
      nombre:title,
      ingredientes: ingredients.split('\n'),
      pasos: instructions.split('\n'),
    };
    setRecipes((prev)=> [...prev,newRecipe])
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título de la receta"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredientes (uno por línea)"
        multiline
        value={ingredients}
        onChangeText={setIngredients}
      />
      <TextInput
        style={styles.input}
        placeholder="Instrucciones (una por línea)"
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />
      <Button title="Crear receta" onPress={handleCreateRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default CreateRecipeScreen;
