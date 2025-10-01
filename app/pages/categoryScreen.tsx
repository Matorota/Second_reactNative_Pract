import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import recipesData from "../data/receptai.json";
import Header from "../component/Header";
import RecipeCard from "../component/RecipeCard";
import CustomButton from "../component/CustomButton";
import { categoryScreenStyles as styles } from "../style/categoryScreenStyles";

interface Recipe {
  id: string;
  categoryId: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}

const recipeGradients: [string, string, ...string[]][] = [
  ["#f8f8f8", "#f0f0f0"],
  ["#f5f5f5", "#eeeeee"],
  ["#fafafa", "#f0f0f0"],
  ["#f8f9fa", "#e9ecef"],
  ["#fff8f0", "#f5f5f5"],
  ["#f0f8ff", "#e8e8e8"],
];

export default function CategoryScreen() {
  const router = useRouter();
  const { categoryId, categoryName } = useLocalSearchParams<{
    categoryId: string;
    categoryName: string;
  }>();

  const recipes: Recipe[] = recipesData.recipes.filter(
    (recipe) => recipe.categoryId === categoryId
  );

  const handleRecipePress = (recipe: Recipe) => {
    router.push({
      pathname: "/pages/recipeDetail",
      params: {
        recipeId: recipe.id,
        recipeTitle: recipe.title,
      },
    });
  };

  const renderRecipeItem = ({
    item,
    index,
  }: {
    item: Recipe;
    index: number;
  }) => (
    <RecipeCard
      title={item.title}
      prepTime={item.prepTime}
      servings={item.servings}
      ingredientCount={item.ingredients.length}
      onPress={() => handleRecipePress(item)}
      gradient={recipeGradients[index % recipeGradients.length]}
    />
  );

  return (
    <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Header
          title={categoryName as string}
          subtitle={`${recipes.length} receptai`}
          gradient={["#ffffff", "#f8f9fa"]}
        />

        <FlatList
          data={recipes}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <CustomButton
          title="← Atgal į kategorijas"
          onPress={() => router.back()}
          gradient={["#e9ecef", "#dee2e6"]}
          style={styles.backButton}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
