import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, SHADOWS } from "../constants";

interface CategoryCardProps {
  title: string;
  description: string;
  recipeCount: number;
  onPress: () => void;
  gradient: [string, string, ...string[]];
}

export default function CategoryCard({
  title,
  description,
  recipeCount,
  onPress,
  gradient,
}: CategoryCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient colors={gradient} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.recipeCount}>
              <Text style={styles.recipeCountText}>{recipeCount} receptai</Text>
            </View>
          </View>
          <View style={styles.arrow}>
            <Text style={styles.arrowText}>{">"}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.spacingMedium,
    borderRadius: SIZES.radiusLarge,
    ...SHADOWS.medium,
  },
  gradient: {
    borderRadius: SIZES.radiusLarge,
    padding: SIZES.spacingLarge,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.fontLarge,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: SIZES.spacingXSmall,
  },
  description: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    marginBottom: SIZES.spacingSmall,
    lineHeight: 20,
  },
  recipeCount: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: SIZES.radiusMedium,
    paddingHorizontal: SIZES.spacingMedium,
    paddingVertical: SIZES.spacingXSmall,
    alignSelf: "flex-start",
  },
  recipeCountText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  arrow: {
    marginLeft: SIZES.spacingMedium,
  },
  arrowText: {
    fontSize: SIZES.fontXLarge,
    color: COLORS.textSecondary,
    fontWeight: "bold",
  },
});
