import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  {
    id: '1',
    text: 'Quantas vezes você já realizou o exame de Papanicolau?',
    options: [
      { label: 'Nunca', points: 0 },
      { label: 'Uma vez', points: 1 },
      { label: 'Duas vezes ou mais', points: 2 }
    ]
  },
  {
    id: '2',
    text: 'Você está atualmente em um relacionamento estável?',
    options: [
      { label: 'Sim', points: 0 },
      { label: 'Não', points: 1 },
      { label: 'Não aplicável', points: 0 }
    ]
  },
  // Adicione as outras perguntas conforme necessário
];

export default function QuestionnaireScreen({ navigation }) {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, points) => {
    setAnswers({ ...answers, [questionId]: points });
  };

  const calculateRiskScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, points) => sum + points, 0);
    return totalPoints;
  };

  const handleSubmit = () => {
    const riskScore = calculateRiskScore();
    navigation.navigate('Result', { score: riskScore });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.text}</Text>
            {item.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(item.id, option.points)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
  },
});
