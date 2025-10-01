import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES } from "../constants";

interface HeaderProps {
  title: string;
  subtitle?: string;
  gradient?: [string, string, ...string[]];
}

export default function Header({
  title,
  subtitle,
  gradient = ["#f5f5f5", "#e0e0e0"],
}: HeaderProps) {
  return (
    <LinearGradient colors={gradient} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: SIZES.spacingLarge,
    paddingHorizontal: SIZES.spacingLarge,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.fontXXLarge,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SIZES.spacingSmall,
  },
  subtitle: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
