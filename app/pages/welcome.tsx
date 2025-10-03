import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../component/CustomButton";
import { welcomeStyles as styles } from "../style/welcomeStyles";
import { TEXTS, GRADIENTS } from "../constants";

export default function Welcome() {
  const router = useRouter();

  const handleStartPress = () => {
    router.push("/pages/mainPage");
  };

  return (
    <LinearGradient colors={GRADIENTS.background} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <LinearGradient
              colors={GRADIENTS.primary}
              style={styles.logoContainer}
            >
              <View style={styles.logoIcon}>
                <Text style={styles.logoText}>🍽️</Text>
              </View>
            </LinearGradient>
            <Text style={styles.title}>{TEXTS.appName}</Text>
            <Text style={styles.subtitle}>{TEXTS.appSubtitle}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.featuresTitle}>Kodėl verta rinktis mus?</Text>
            <View style={styles.features}>
              {TEXTS.features.map((feature, index) => (
                <LinearGradient
                  key={index}
                  colors={GRADIENTS.card}
                  style={styles.featureItem}
                >
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.featureText}>{feature}</Text>
                </LinearGradient>
              ))}
            </View>
          </View>

          <View style={styles.footer}>
            <CustomButton
              title={TEXTS.buttons.start}
              onPress={handleStartPress}
              gradient={GRADIENTS.button}
              size="large"
            />
            <Text style={styles.footerText}>
              Pradėkite kelionę į sveikesnį gyvenimą šiandien!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
