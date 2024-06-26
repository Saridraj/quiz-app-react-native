import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  score: number;
}

export const LeaderboardComponent: React.FC<Props> = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
  },
});
