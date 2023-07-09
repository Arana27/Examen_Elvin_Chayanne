import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';

const RecipeDetailScreen = ({ navigation }) => {
    const route = useRoute();
  const recipe = route.params?.newsItem

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.nombre}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <View style={styles.ingredientsContainer}>
        {recipe.ingredientes.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Pasos:</Text>
      {recipe.pasos.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Text style={styles.stepNumber}>{index + 1}</Text>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredientsContainer: {
    marginBottom: 16,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    flex:1,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  stepText: {
    fontSize: 16,
  },
});

export default RecipeDetailScreen;
