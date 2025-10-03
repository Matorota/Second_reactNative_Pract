import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const recipeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: SIZES.spacingLarge,
    padding: SIZES.spacingLarge,
    borderRadius: SIZES.radiusLarge,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    ...SHADOWS.small,
  },
  sectionTitle: {
    fontSize: SIZES.fontXLarge,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: SIZES.spacingMedium,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.spacingSmall,
  },
  bullet: {
    fontSize: SIZES.fontMedium,
    color: COLORS.primary,
    marginRight: SIZES.spacingSmall,
    marginTop: 2,
    fontWeight: "bold",
  },
  ingredientText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textPrimary,
    flex: 1,
    lineHeight: 22,
  },
  instructionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.spacingMedium,
  },
  stepNumber: {
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
    color: COLORS.textWhite,
    marginRight: SIZES.spacingMedium,
    minWidth: 28,
    textAlign: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radiusMedium,
    paddingVertical: SIZES.spacingXSmall,
    paddingHorizontal: SIZES.spacingXSmall,
  },
  instructionText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textPrimary,
    flex: 1,
    lineHeight: 24,
  },
  addCommentContainer: {
    marginBottom: SIZES.spacingLarge,
  },
  authorInput: {
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.spacingMedium,
    fontSize: SIZES.fontMedium,
    marginBottom: SIZES.spacingMedium,
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    ...SHADOWS.small,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.spacingMedium,
    fontSize: SIZES.fontMedium,
    marginBottom: SIZES.spacingMedium,
    minHeight: 80,
    textAlignVertical: "top",
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    ...SHADOWS.small,
  },
  addCommentButton: {
    alignSelf: "center",
    marginTop: SIZES.spacingSmall,
  },
  commentItem: {
    padding: SIZES.spacingMedium,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.spacingMedium,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    ...SHADOWS.small,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.spacingSmall,
  },
  commentAuthorDate: {
    flex: 1,
  },
  commentAuthor: {
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  commentDate: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textSecondary,
  },
  premadeLabel: {
    fontSize: SIZES.fontSmall,
    color: COLORS.primary,
    fontWeight: "600",
  },
  deleteButton: {
    padding: SIZES.spacingSmall,
    borderRadius: SIZES.radiusSmall,
    backgroundColor: COLORS.backgroundLight,
  },
  deleteButtonText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.error,
    fontWeight: "600",
  },
  commentText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },
  backButton: {
    margin: SIZES.spacingLarge,
  },
  errorText: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textPrimary,
    textAlign: "center",
    marginTop: SIZES.spacingXLarge * 2,
  },
});
