import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import recipesData from "../data/receptai.json";
import commentsData from "../data/comments.json";
import Header from "../component/Header";
import CustomButton from "../component/CustomButton";
import { recipeDetailStyles as styles } from "../style/recipeDetailStyles";
import { TEXTS, GRADIENTS } from "../constants";

interface Recipe {
  id: string;
  categoryId: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}

interface Comment {
  id: string;
  recipeId: string;
  text: string;
  timestamp: number;
  author?: string;
}

export default function RecipeDetail() {
  const router = useRouter();
  const { recipeId, recipeTitle } = useLocalSearchParams<{
    recipeId: string;
    recipeTitle: string;
  }>();

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const foundRecipe = recipesData.recipes.find((r) => r.id === recipeId);
    setRecipe(foundRecipe || null);
    loadComments();
  }, [recipeId]);

  const loadComments = async () => {
    try {
      const premadeComments = commentsData.comments.filter(
        (comment) => comment.recipeId === recipeId
      );

      const storedComments = await AsyncStorage.getItem(`comments_${recipeId}`);
      const userComments = storedComments ? JSON.parse(storedComments) : [];

      const allComments = [...premadeComments, ...userComments];
      setComments(allComments);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const saveComments = async (updatedUserComments: Comment[]) => {
    try {
      const userComments = updatedUserComments.filter(
        (comment) =>
          !commentsData.comments.some((premade) => premade.id === comment.id)
      );

      await AsyncStorage.setItem(
        `comments_${recipeId}`,
        JSON.stringify(userComments)
      );

      const premadeComments = commentsData.comments.filter(
        (comment) => comment.recipeId === recipeId
      );
      setComments([...premadeComments, ...userComments]);
    } catch (error) {
      console.error("Error saving comments:", error);
    }
  };

  const addComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        recipeId: recipeId || "",
        text: newComment.trim(),
        author: authorName.trim(),
        timestamp: Date.now(),
      };
      const updatedComments = [...comments, comment];
      saveComments(updatedComments);
      setNewComment("");
      setAuthorName("");
    } else {
      Alert.alert("Užpildykite visus laukus", TEXTS.messages.fillAllFields, [
        { text: "Gerai", style: "default" },
      ]);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("lt-LT", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderComment = ({ item }: { item: Comment }) => {
    const isPremadeComment = commentsData.comments.some(
      (comment) => comment.id === item.id
    );

    return (
      <LinearGradient
        colors={
          isPremadeComment ? ["#f0f8ff", "#e6f3ff"] : ["#ffffff", "#f8f9fa"]
        }
        style={styles.commentItem}
      >
        <View style={styles.commentHeader}>
          <View style={styles.commentAuthorDate}>
            <Text style={styles.commentAuthor}>
              {item.author ||
                (isPremadeComment ? TEXTS.labels.community : "Anonimas")}
            </Text>
            <Text style={styles.commentDate}>{formatDate(item.timestamp)}</Text>
          </View>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </LinearGradient>
    );
  };

  if (!recipe) {
    return (
      <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.errorText}>Receptas nerastas</Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Header
          title={recipe.title}
          subtitle={`Laikas: ${recipe.prepTime} • Porcijos: ${recipe.servings}`}
          gradient={["#ffffff", "#f8f9fa"]}
        />

        <ScrollView style={styles.scrollView}>
          <LinearGradient
            colors={["#ffffff", "#f8f9fa"]}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>Ingredientai</Text>
            {recipe.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </LinearGradient>

          <LinearGradient
            colors={["#ffffff", "#f8f9fa"]}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>Paruošimo instrukcijos</Text>
            {recipe.instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <Text style={styles.stepNumber}>{index + 1}</Text>
                <Text style={styles.instructionText}>{instruction}</Text>
              </View>
            ))}
          </LinearGradient>

          <LinearGradient
            colors={["#ffffff", "#f8f9fa"]}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>
              Komentarai ({comments.length})
            </Text>

            <View style={styles.addCommentContainer}>
              <TextInput
                style={styles.authorInput}
                placeholder={TEXTS.placeholders.authorName}
                placeholderTextColor="#999999"
                value={authorName}
                onChangeText={setAuthorName}
              />
              <TextInput
                style={styles.commentInput}
                placeholder={TEXTS.placeholders.commentText}
                placeholderTextColor="#999999"
                value={newComment}
                onChangeText={setNewComment}
                multiline
              />
              <CustomButton
                title={TEXTS.buttons.addComment}
                onPress={addComment}
                gradient={GRADIENTS.button}
                style={styles.addCommentButton}
              />
            </View>

            <FlatList
              data={comments}
              renderItem={renderComment}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </LinearGradient>
        </ScrollView>

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
