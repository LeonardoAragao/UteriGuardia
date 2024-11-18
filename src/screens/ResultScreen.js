import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { score } = route.params;

  const getRiskLevel = (score) => {
    if (score <= 3) return 'Baixo Risco';
    if (score <= 7) return 'Risco Moderado';
    return 'Alto Risco';
  };

  const riskLevel = getRiskLevel(score);

  const getMessage = () => {
    switch (riskLevel) {
      case 'Baixo Risco':
        return 'Continue mantendo um estilo de vida saudável e agende seu próximo exame de Papanicolau dentro do período recomendado.';
      case 'Risco Moderado':
        return 'Recomendamos que converse com seu médico para discutir os prazos adequados para realização do exame de Papanicolau.';
      case 'Alto Risco':
        return 'É essencial que você agende uma consulta médica o mais breve possível para uma avaliação detalhada.';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.scoreText}>Sua pontuação: {score}</Text>
      <Text style={styles.riskLevelText}>Nível de Risco: {riskLevel}</Text>
      <Text style={styles.message}>{getMessage()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 10,
  },
  riskLevelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
