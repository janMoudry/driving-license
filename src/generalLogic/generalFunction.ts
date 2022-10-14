import { QuestionData } from "../types";
import anotherRules from "../../questions/anotherRules.json";
import basicQuestion from "../../questions/basicQuestion.json";
import relatedRegulations from "../../questions/relatedRegulations.json";
import safeDrivingA from "../../questions/safeDrivingA.json";
import safeDrivingB from "../../questions/safeDrivingB.json";
import safeDrivingC from "../../questions/safeDrivingC.json";
import situations from "../../questions/situations.json";
import trafficSigns from "../../questions/trafficSigns.json";
import drivingVehicles from "../../questions/vehicleClasses.json";
import vehicleOperatingConditions from "../../questions/vehicleOperatingConditions.json";
import medicalOreparation from "../../questions/medicalOreparation.json";

export const getAllTopics = (): Array<QuestionData> => {
  const titles = [
    anotherRules,
    basicQuestion,
    relatedRegulations,
    safeDrivingA,
    safeDrivingB,
    safeDrivingC,
    situations,
    drivingVehicles,
    trafficSigns,
    vehicleOperatingConditions,
    medicalOreparation,
  ];

  return titles;
};

export const getAllCategory = () => ["A", "B", "B+E", "C", "C+E", "D", "D+E"];

const getRandomNumber = (x: number) => Math.floor(Math.random() * x);

const randomize = (
  relatedQuestions: QuestionData,
  category: string,
): QuestionData => {
  const randomizedQuestions = [];
  const getData = (topic, number, quantity) => {
    for (let i = 1; i <= number; i++)
      randomizedQuestions.push(topic.data[getRandomNumber(quantity)]);
  };

  getData(basicQuestion, 10, basicQuestion.numberOfQuestions);
  getData(relatedQuestions, 4, relatedQuestions.numberOfQuestions);
  getData(trafficSigns, 3, trafficSigns.numberOfQuestions);
  getData(situations, 3, situations.numberOfQuestions);
  getData(
    vehicleOperatingConditions,
    2,
    vehicleOperatingConditions.numberOfQuestions,
  );
  getData(relatedRegulations, 2, relatedRegulations.numberOfQuestions);
  getData(medicalOreparation, 1, medicalOreparation.numberOfQuestions);

  return {
    test: true,
    numberOfQuestions: "25",
    data: randomizedQuestions,
    title: `Test pro skupinu ${category}`,
  };
};

export const getRandomQuestionsByCategory = (category) => {
  switch (category) {
    case "A":
      return randomize(safeDrivingA, category);
    case "B":
      return randomize(safeDrivingB, category);
    case "B+E":
      return randomize(safeDrivingB, category);
    case "C":
      return randomize(safeDrivingC, category);
    case "C+E":
      return randomize(safeDrivingC, category);
    case "D":
      return randomize(safeDrivingC, category);
    case "D+E":
      return randomize(safeDrivingC, category);
  }
};
