import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/pages/welcome");
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return <View style={{ flex: 1, backgroundColor: "#f8f9fa" }} />;
}
