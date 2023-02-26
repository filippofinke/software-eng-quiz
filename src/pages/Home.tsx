import { Grid, Text } from "@chakra-ui/react";
import QuizCard from "./../components/QuizCard";
import { getQuizzes } from "../utils/quiz";

export default function Home() {
  return (
    <>
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
