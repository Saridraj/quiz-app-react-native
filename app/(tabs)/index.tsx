import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { QuestionComponent } from '../../components/QuestionComponent';
import { LeaderboardComponent } from '../../components/LeaderboardComponent';
import { shuffleArray } from '../../utils/shuffleArray';
import questionsData from '../../data/questions.json';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    const shuffledQuestions = shuffleArray(questionsData).slice(0, 20);
    setQuestions(shuffledQuestions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers)
    })));
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const toggleLeaderboard = () => {
    setShowLeaderboard(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {showLeaderboard ? (
        <LeaderboardComponent score={score} />
      ) : (
        <FlatList
          data={questions}
          renderItem={({ item }) => (
            <QuestionComponent question={item} onAnswer={handleAnswer} />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <Button title="Show Leaderboard" onPress={toggleLeaderboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 50,
  },
});

export default App;
