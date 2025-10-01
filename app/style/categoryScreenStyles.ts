import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

export const categoryScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  listContainer: {
    padding: SIZES.spacingLarge,
    paddingBottom: 100,
  },
  backButton: {
    margin: SIZES.spacingLarge,
  },
});
