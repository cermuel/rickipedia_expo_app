import { View, Text, Linking } from "react-native";
import React from "react";
import { QuestionAndAnswer } from "../utils/About";
import AboutComp from "../shared/AboutComp";

const About = () => {
  const handleClick = (url) => {
    Linking.openURL(url);
  };
  return (
    <View className="p-4 bg-white h-screen">
      {QuestionAndAnswer.map((qa) => {
        if (qa.url) {
          return (
            <AboutComp
              question={qa.question}
              answer={qa.answer}
              action={() => handleClick(qa.url)}
              isUrl={true}
            />
          );
        } else {
          return (
            <AboutComp
              question={qa.question}
              answer={qa.answer}
              action={() => handleClick(qa.url)}
              isUrl={false}
            />
          );
        }
      })}
    </View>
  );
};

export default About;
