import { Badge, Button, HStack, Text } from "@chakra-ui/react";
import { clearSavedAnswers, getSavedAnswers } from "../utils/quiz";
import { Link as RouterDomLink } from "react-router-dom";
import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

export default function Stats() {
  const [savedAnswers, setSavedAnswers] = React.useState(getSavedAnswers());

  // Sort by most wrong answers and least right answers
  savedAnswers.sort((a, b) => {
    if (a.answeredWrong > b.answeredWrong) {
      return -1;
    }
    if (a.answeredWrong < b.answeredWrong) {
      return 1;
    }
    if (a.answeredRight < b.answeredRight) {
      return -1;
    }
    if (a.answeredRight > b.answeredRight) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Button
        as={RouterDomLink}
        to={"/"}
        w={"full"}
        leftIcon={<ArrowBackIcon />}
        my={2}
      >
        Back to the home page
      </Button>
      <Button
        as={RouterDomLink}
        to={`/quiz/random`}
        state={{
          name: "Most wrong answers",
          questions: savedAnswers.slice(0, 20).sort(() => Math.random() - 0.5),
        }}
        w={"full"}
        rightIcon={<ChevronRightIcon />}
      >
        Generate a quiz
      </Button>
      {savedAnswers.map((q) => (
        <HStack
          key={q.question}
          justifyContent={"space-between"}
          p={2}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          my={2}
        >
          <Text>{q.question}</Text>
          <HStack>
            <Badge colorScheme="red">{q.answeredWrong}</Badge>
            <Badge colorScheme="green">{q.answeredRight}</Badge>
          </HStack>
        </HStack>
      ))}
      <Button
        onClick={() => {
          clearSavedAnswers();
          setSavedAnswers(getSavedAnswers());
        }}
        w={"full"}
        leftIcon={<FaTrashAlt />}
        my={2}
        colorScheme={"red"}
      >
        Reset your answers
      </Button>
    </>
  );
}
