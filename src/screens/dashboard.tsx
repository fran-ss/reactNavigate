import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Cor de fundo leve
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Cor do texto
  },
});
