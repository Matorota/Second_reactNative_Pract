import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: SIZES.spacingLarge,
  },
  header: {
    alignItems: "center",
    marginTop: SIZES.spacingXLarge,
    marginBottom: SIZES.spacingXLarge,
  },
  logoContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.spacingLarge,
    ...SHADOWS.large,
  },
  logoIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 48,
  },
  title: {
    fontSize: SIZES.fontXXLarge,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SIZES.spacingMedium,
  },
  subtitle: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 28,
    paddingHorizontal: SIZES.spacingMedium,
    marginBottom: SIZES.spacingXLarge,
  },
  content: {
    flex: 1,
    paddingVertical: SIZES.spacingXLarge,
  },
  featuresTitle: {
    fontSize: SIZES.fontXLarge,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SIZES.spacingXLarge,
  },
  features: {
    gap: SIZES.spacingMedium,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.spacingLarge,
    borderRadius: SIZES.radiusLarge,
    ...SHADOWS.small,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.spacingMedium,
  },
  featureIconText: {
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
    color: COLORS.textWhite,
  },
  featureText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textPrimary,
    fontWeight: "600",
    flex: 1,
    lineHeight: 22,
  },
  footer: {
    alignItems: "center",
    paddingVertical: SIZES.spacingXLarge,
    paddingBottom: SIZES.spacingXLarge,
  },
  footerText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: SIZES.spacingMedium,
    fontStyle: "italic",
  },
});
