// @generated: @expo/next-adapter@2.1.0
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "dripsy";

const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "tomato",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
  },
  spacing: [10, 12, 14],
};

export default function App() {
  return (
    <ThemeProvider theme={theme} options={{ ssr: true }}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
