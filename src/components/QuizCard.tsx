import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Text, IconButton, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Quiz } from "../utils/quiz";

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const questions = quiz.getQuestions();

  return (
    <HStack
      p={2}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <VStack align={"start"}>
        <Text fontSize={"md"}>{quiz.name}</Text>
        <Text fontSize={"sm"} color={"gray.500"} m={"0 !important"}>
          {questions.length} questions
        </Text>
      </VStack>
      <Link
        to={`/quiz/${quiz.name}`}
        state={{
          name: quiz.name,
          questions: questions,
        }}
      >
        <IconButton
          aria-label={`Start ${quiz.name} quiz`}
          icon={<ChevronRightIcon />}
        />
      </Link>
    </HStack>
  );
}
