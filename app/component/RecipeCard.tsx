import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, SHADOWS } from "../constants";

interface RecipeCardProps {
  title: string;
  prepTime: string;
  servings: number;
  ingredientCount: number;
  onPress: () => void;
  gradient: [string, string, ...string[]];
}

export default function RecipeCard({
  title,
  prepTime,
  servings,
  ingredientCount,
  onPress,
  gradient,
}: RecipeCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient colors={gradient} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.detail}>Laikas: {prepTime}</Text>
              <Text style={styles.detail}>Porcijos: {servings}</Text>
            </View>
            <Text style={styles.ingredientCount}>
              {ingredientCount} ingredientai
            </Text>
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
    ...SHADOWS.small,
  },
  gradient: {
    borderRadius: SIZES.radiusLarge,
    padding: SIZES.spacingMedium,
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
    marginBottom: SIZES.spacingSmall,
    lineHeight: 24,
  },
  detailsRow: {
    flexDirection: "row",
    marginBottom: SIZES.spacingXSmall,
  },
  detail: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textSecondary,
    marginRight: SIZES.spacingMedium,
  },
  ingredientCount: {
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
