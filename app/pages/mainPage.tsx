import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import recipesData from "../data/receptai.json";
import Header from "../component/Header";
import CategoryCard from "../component/CategoryCard";
import CustomButton from "../component/CustomButton";
import { mainPageStyles as styles } from "../style/mainPageStyles";
import { COLORS, GRADIENTS } from "../constants";

interface Category {
  id: string;
  name: string;
  description: string;
}

const getCategoryGradient = (
  categoryId: string
): [string, string, ...string[]] => {
  const categoryColors =
    COLORS.categories[categoryId as keyof typeof COLORS.categories];
  if (categoryColors) {
    return [...categoryColors] as [string, string, ...string[]];
  }
  return [...GRADIENTS.card] as [string, string, ...string[]];
};

export default function MainPage() {
  const router = useRouter();
  const categories: Category[] = recipesData.categories;

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    router.push({
      pathname: "/pages/categoryScreen",
      params: { categoryId, categoryName },
    });
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryCard
      title={item.name}
      description={item.description}
      recipeCount={
        recipesData.recipes.filter((recipe) => recipe.categoryId === item.id)
          .length
      }
      onPress={() => handleCategoryPress(item.id, item.name)}
      gradient={getCategoryGradient(item.id)}
    />
  );

  return (
    <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Header
          title="Sveiko maisto receptai"
          subtitle="Pasirinkite kategoriją"
          gradient={["#ffffff", "#f8f9fa"]}
        />

        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <CustomButton
          title="← Atgal"
          onPress={() => router.back()}
          gradient={GRADIENTS.button}
          style={styles.backButton}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
