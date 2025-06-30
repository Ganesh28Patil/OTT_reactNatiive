import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary">
        Movie details:
        <Text className="text-5xl text-accent"> {id}</Text>
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
