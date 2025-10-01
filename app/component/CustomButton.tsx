import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, SHADOWS, GRADIENTS } from "../constants";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  gradient?: readonly [string, string, ...string[]];
  style?: any;
  textStyle?: any;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
}

export default function CustomButton({
  title,
  onPress,
  gradient,
  style,
  textStyle,
  size = "medium",
  variant = "primary",
}: CustomButtonProps) {
  const buttonGradient =
    gradient ||
    (variant === "primary"
      ? GRADIENTS.button
      : variant === "secondary"
      ? ([COLORS.secondary, COLORS.secondaryDark] as const)
      : variant === "danger"
      ? ([COLORS.buttonDanger, COLORS.primaryDark] as const)
      : GRADIENTS.button);

  const buttonSize =
    size === "small"
      ? styles.small
      : size === "large"
      ? styles.large
      : styles.medium;

  const textSize =
    size === "small"
      ? styles.textSmall
      : size === "large"
      ? styles.textLarge
      : styles.textMedium;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={buttonGradient}
        style={[styles.gradient, buttonSize]}
      >
        <Text style={[styles.text, textSize, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.radiusLarge,
    ...SHADOWS.large,
    overflow: "hidden",
  },
  gradient: {
    borderRadius: SIZES.radiusLarge,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 48,
  },
  small: {
    paddingHorizontal: SIZES.spacingMedium,
    paddingVertical: SIZES.spacingSmall,
    minHeight: 40,
  },
  medium: {
    paddingHorizontal: SIZES.spacingXLarge,
    paddingVertical: SIZES.spacingMedium,
    minHeight: 48,
  },
  large: {
    paddingHorizontal: SIZES.spacingXLarge,
    paddingVertical: SIZES.spacingLarge,
    minHeight: 56,
  },
  text: {
    color: COLORS.textWhite,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  textSmall: {
    fontSize: SIZES.fontSmall,
  },
  textMedium: {
    fontSize: SIZES.fontMedium,
  },
  textLarge: {
    fontSize: SIZES.fontLarge,
  },
});
