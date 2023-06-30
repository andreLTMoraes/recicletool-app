import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, LayoutAnimation, UIManager, ScrollView } from 'react-native';
import appStyles from '../../utils/AppStyles';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather'
import { COLORS } from '../../utils/AppStyles';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default function Help() {

  const [questionOpenedIndex, setQuestionOpenIndex] = useState(-1);

  const toggleAccordion = (idx) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    questionOpenedIndex != idx ? setQuestionOpenIndex(idx) : setQuestionOpenIndex(-1)
  };

  return (
    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={appStyles.mainContainer}>
        <Text style={[appStyles.title, styles.mainTitle]}>Central de ajuda</Text>
        <View style={styles.qaContainer}>
          {
            qa.map((pair, idx) =>
              <Pressable style={{ paddingTop: 15 }} key={idx}
                onPress={() => toggleAccordion(idx)}>
                <View style={styles.questionContainer}>
                  <Feather name={questionOpenedIndex == idx ? 'chevron-up' : 'chevron-down'} size={20} color={COLORS.primaryDark} />
                  <Text
                    style={[appStyles.text,
                    {
                      textAlign: 'left',
                      fontWeight: questionOpenedIndex == idx ? '700' : '400',
                      color: questionOpenedIndex != idx && questionOpenedIndex != -1 ? '#A2A2A2' : 'black'
                    }
                    ]}>
                    {pair.question}
                  </Text>
                </View>
                {
                  questionOpenedIndex == idx ?
                    <View style={styles.answerContainer}>
                      <Text style={[appStyles.text, { textAlign: 'left' }]}>{pair.answer}</Text>
                    </View> : null
                }
              </Pressable>
            )
          }
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed magna in sit posuere venenatis, porttitor. Ultrices quis aenean ornare.";

const qa = [
  { question: "Como posso resgatar meu Cupon?", answer: lorem },
  { question: "Onde encontro uma máquina para depositar embalagens?", answer: lorem },
  { question: "Posso acumular cupons?", answer: lorem },
  { question: "Qual o valor mínimo de desconto?", answer: lorem },
  { question: "Quais embalhagens posso colocar na máquina?", answer: lorem },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainTitle: {
    fontSize: 36,
    lineHeight: 49,
    width: '85%',
  },

  qaContainer: {
    alignContent: 'flex-start',
    width: '90%',
    marginTop: 40
  },

  questionContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start'
  },

  answerContainer: {
    marginVertical: 10,
    alignContent: 'flex-start',
    marginLeft: 20
  }
});