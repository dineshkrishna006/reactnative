import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="auto" />
      <Text>Profile page</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
