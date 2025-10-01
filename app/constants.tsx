export const COLORS = {
  // Primary colors
  primary: "#4a90e2",
  primaryDark: "#357abd",
  primaryLight: "#6bb6ff",

  // Background colors
  background: "#ffffff",
  backgroundLight: "#f8fafe",
  backgroundDark: "#e8f4f8",

  // Text colors
  textPrimary: "#2c3e50",
  textSecondary: "#5a6c7d",
  textLight: "#7f8c8d",
  textWhite: "#ffffff",

  // Accent colors
  success: "#27ae60",
  warning: "#f39c12",
  error: "#e74c3c",
  info: "#3498db",

  // Card colors
  cardBackground: "#ffffff",
  cardBorder: "#e1e8ed",
  cardShadow: "rgba(0, 0, 0, 0.1)",

  // Button colors
  buttonPrimary: "#4a90e2",
  buttonSecondary: "#95a5a6",
  buttonDanger: "#e74c3c",

  // Secondary colors
  secondary: "#95a5a6",
  secondaryDark: "#7f8c8d",

  // Category specific colors
  categories: {
    sriubos: ["#ff7675", "#fab1a0"],
    desertai: ["#fd79a8", "#fdcb6e"],
    pagrindiniai: ["#6c5ce7", "#a29bfe"],
    salotai: ["#00b894", "#55efc4"],
    gerimai: ["#0984e3", "#74b9ff"],
    uzkandziai: ["#e17055", "#ffeaa7"],
  },
};

export const SIZES = {
  // Font sizes
  fontSmall: 12,
  fontMedium: 16,
  fontLarge: 20,
  fontXLarge: 24,
  fontXXLarge: 32,

  // Spacing
  spacingXSmall: 4,
  spacingSmall: 8,
  spacingMedium: 16,
  spacingLarge: 24,
  spacingXLarge: 32,

  // Border radius
  radiusSmall: 8,
  radiusMedium: 12,
  radiusLarge: 16,
  radiusXLarge: 24,

  // Button sizes
  buttonHeight: {
    small: 36,
    medium: 44,
    large: 52,
  },

  // Icon sizes
  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
};

export const TEXTS = {
  // App info
  appName: "Sveiko Maisto Receptai",
  appSubtitle: "Atraskite sveikus ir skanius receptus kiekvienai dienai",

  // Button texts
  buttons: {
    start: "Pradėti",
    back: "← Atgal",
    backToCategories: "← Atgal į kategorijas",
    addComment: "Pridėti komentarą",
    delete: "Ištrinti",
    cancel: "Atšaukti",
  },

  // Labels
  labels: {
    time: "Laikas",
    servings: "Porcijos",
    ingredients: "Ingredientai",
    instructions: "Paruošimo instrukcijos",
    comments: "Komentarai",
    author: "Autorius",
    community: "Bendruomenės",
    recipes: "receptai",
  },

  // Features
  features: [
    "Sveiki ir maistingi receptai",
    "Išsami paruošimo instrukcija",
    "Komentarų ir įvertinimų sistema",
    "Skirtingos maisto kategorijos",
    "Paprastas ir aiškus naudojimas",
  ],

  // Placeholders
  placeholders: {
    commentText: "Parašykite savo komentarą...",
    authorName: "Jūsų vardas",
  },

  // Messages
  messages: {
    recipeNotFound: "Receptas nerastas",
    cannotDelete: "Šis komentaras negali būti ištrintas",
    confirmDelete: "Ar tikrai norite ištrinti šį komentarą?",
    fillAllFields: "Užpildykite visus laukus",
  },
};

export const GRADIENTS = {
  primary: [COLORS.primary, COLORS.primaryDark] as const,
  background: [COLORS.backgroundLight, COLORS.backgroundDark] as const,
  card: [COLORS.cardBackground, COLORS.backgroundLight] as const,
  button: [COLORS.buttonPrimary, COLORS.primaryDark] as const,
  categories: COLORS.categories,
} as const;

export const SHADOWS = {
  small: {
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const ANIMATION = {
  duration: 200,
  easing: "ease-in-out",
};
