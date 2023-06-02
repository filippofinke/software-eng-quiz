import { Grid, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import QuizCard from "./../components/QuizCard";
import { getQuizzes } from "../utils/quiz";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Text fontSize={"lg"} fontWeight={"bold"} my={2}>
        Revise
      </Text>
      <Link to="/stats">
        <HStack
          p={2}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <VStack align={"start"}>
            <Text fontSize={"md"}>Revise your answers</Text>
            <Text fontSize={"sm"} color={"gray.500"} m={"0 !important"}>
              See stats about your answers
            </Text>
          </VStack>
          <IconButton
            aria-label={`Revise you answers`}
            icon={<ChevronRightIcon />}
          />
        </HStack>
      </Link>
      <Text fontSize={"lg"} fontWeight={"bold"} my={2}>
        Select a Quiz
      </Text>
      <Grid gap={2}>
        {getQuizzes().map((quiz) => (
          <QuizCard key={quiz.name} quiz={quiz} />
        ))}
      </Grid>
    </>
  );
}
