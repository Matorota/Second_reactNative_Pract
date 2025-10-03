export const COLORS = {
  primary: "#4a90e2",
  primaryDark: "#357abd",
  primaryLight: "#6bb6ff",

  background: "#ffffff",
  backgroundLight: "#f8fafe",
  backgroundDark: "#e8f4f8",

  textPrimary: "#2c3e50",
  textSecondary: "#5a6c7d",
  textLight: "#7f8c8d",
  textWhite: "#ffffff",

  success: "#27ae60",
  warning: "#f39c12",
  error: "#e74c3c",
  info: "#3498db",

  cardBackground: "#ffffff",
  cardBorder: "#e1e8ed",
  cardShadow: "rgba(0, 0, 0, 0.1)",

  buttonPrimary: "#4a90e2",
  buttonSecondary: "#357abd",
  buttonDanger: "#e74c3c",

  secondary: "#4a90e2",
  secondaryDark: "#357abd",

  categories: {
    sriubos: ["#f0f0f0", "#e0e0e0"],
    desertai: ["#f0f0f0", "#e0e0e0"],
    pagrindiniai: ["#f0f0f0", "#e0e0e0"],
    salotai: ["#f0f0f0", "#e0e0e0"],
    gerimai: ["#f0f0f0", "#e0e0e0"],
    uzkandziai: ["#f0f0f0", "#e0e0e0"],
  },
};

export const SIZES = {
  fontSmall: 12,
  fontMedium: 16,
  fontLarge: 20,
  fontXLarge: 24,
  fontXXLarge: 32,

  spacingXSmall: 4,
  spacingSmall: 8,
  spacingMedium: 16,
  spacingLarge: 24,
  spacingXLarge: 32,

  radiusSmall: 8,
  radiusMedium: 12,
  radiusLarge: 16,
  radiusXLarge: 24,

  buttonHeight: {
    small: 36,
    medium: 44,
    large: 52,
  },

  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
};

export const TEXTS = {
  appName: "Sveiko Maisto Receptai",
  appSubtitle: "Atraskite sveikus ir skanius receptus kiekvienai dienai",

  buttons: {
    start: "Pradėti",
    back: "← Atgal",
    backToCategories: "← Atgal į kategorijas",
    addComment: "Pridėti komentarą",
    delete: "Ištrinti",
    cancel: "Atšaukti",
  },

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

  features: [
    "Sveiki ir maistingi receptai",
    "Išsami paruošimo instrukcija",
    "Komentarų ir įvertinimų sistema",
    "Skirtingos maisto kategorijos",
    "Paprastas ir aiškus naudojimas",
  ],

  placeholders: {
    commentText: "Parašykite savo komentarą...",
    authorName: "Jūsų vardas",
  },

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
