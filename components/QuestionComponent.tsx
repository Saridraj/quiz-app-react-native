import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface Props {
  question: Question;
  onAnswer: (correct: boolean) => void;
}

export const QuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <ScrollView style={styles.answersContainer}>
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            title={answer}
            onPress={() => onAnswer(answer === question.correctAnswer)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answersContainer: {
    maxHeight: 200,
  },
});
