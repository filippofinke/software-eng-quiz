import { ArrowBackIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Circle,
  Fade,
  HStack,
  IconButton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useMemo, useRef, useState } from "react";
import { useLocation, Link as RouterDomLink } from "react-router-dom";
import { Question } from "../utils/quiz";
import { Link } from "@chakra-ui/react";
import { useSettings } from "../contexts/SettingsContext";

interface State {
  name: string;
  questions: Question[];
}

interface Answer extends Question {
  correct: boolean;
}

export default function Quiz() {
  const { settings } = useSettings();
  const location = useLocation();
  const state = location.state as State;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const cancelRef = useRef<any>();

  const rightAnswers = useMemo(
    () => answers.filter((answer) => answer.correct).length,
    [answers]
  );

  const current = useMemo(() => {
    if (currentQuestion >= state.questions.length) {
      return null;
    }
    return state.questions[currentQuestion];
  }, [currentQuestion, state.questions]);

  const score = useMemo(() => {
    return Math.round((rightAnswers / state.questions.length) * 100);
  }, [state.questions.length, rightAnswers]);

  const nextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const saveAnswer = (correct: boolean) => {
    if (!current) return;

    setAnswers([
      ...answers,
      {
        ...current,
        correct,
      },
    ]);

    nextQuestion();
  };

  return current ? (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100%"}
    >
      <Card
        flex={1}
        marginBottom={10}
        style={{
          userSelect: "none",
        }}
      >
        <CardHeader>
          <HStack justifyContent={"space-between"} color="gray.500">
            <Text>{state.name}</Text>
            <Text></Text>
            <Badge p={1} rounded={"md"}>
              {currentQuestion + 1} / {state.questions.length}
            </Badge>
          </HStack>
        </CardHeader>
        <CardBody
          onClick={() => {
            if (!settings.interactiveMode) setShowAnswer(true);
          }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box p={4} borderColor={"gray.100"} borderWidth={1} borderRadius={10}>
            <Text
              style={{
                whiteSpace: "pre-line",
              }}
            >
              {current.question}
            </Text>
          </Box>
          {showAnswer && (
            <Fade in={true}>
              <Box
                p={4}
                borderColor={"green.200"}
                borderWidth={1}
                borderRadius={10}
                mt={4}
              >
                <Text>{current.answer}</Text>
              </Box>
            </Fade>
          )}
        </CardBody>
        <CardFooter>
          {settings.interactiveMode && (
            <HStack flex={1}>
              <Textarea
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={showAnswer}
              />
              <Button
                hidden={showAnswer}
                h={"100%"}
                onClick={() => {
                  setShowAnswer(true);
                }}
              >
                Check
              </Button>
              <Button
                hidden={!showAnswer}
                h={"100%"}
                onClick={() => {
                  saveAnswer(answer === current.answer);
                  setAnswer("");
                }}
              >
                Next
              </Button>
            </HStack>
          )}

          {!settings.interactiveMode && showAnswer && (
            <HStack flex={1} justifyContent={"space-between"}>
              <IconButton
                size={"lg"}
                aria-label={"Wrong answer"}
                icon={<CloseIcon />}
                onClick={() => saveAnswer(false)}
                colorScheme={"red"}
              />
              <IconButton
                size={"lg"}
                aria-label={"Right answer"}
                icon={<CheckIcon />}
                onClick={() => saveAnswer(true)}
                colorScheme={"green"}
              />
            </HStack>
          )}
        </CardFooter>
      </Card>
      <Button
        alignSelf={"flex-start"}
        variant={"outline"}
        leftIcon={<ArrowBackIcon />}
        onClick={() => setShowAlertDialog(true)}
      >
        Exit Quiz
      </Button>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
        leastDestructiveRef={cancelRef}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Exit Quiz
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setShowAlertDialog(false)}>
                Cancel
              </Button>
              <Link as={RouterDomLink} to="/">
                <Button colorScheme="red" ml={3}>
                  Exit
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  ) : (
    <Box
      display={"flex"}
      height={"100%"}
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Card>
        <CardHeader color={"gray.500"}>
          <Text>{state.name}</Text>
        </CardHeader>
        <CardBody>
          <Center flexDirection={"column"}>
            <Circle
              p={10}
              bg="gray.100"
              shadow={"md"}
              m={4}
              position={"relative"}
              overflow={"hidden"}
              size={"140px"}
            >
              <Box
                bg={
                  score >= 50
                    ? "green.100"
                    : score >= 25
                    ? "yellow.100"
                    : "red.100"
                }
                height={`${score}%`}
                width={"100%"}
                position={"absolute"}
                bottom={0}
              />
              <Text color="gray.500" zIndex={2}>
                {score}%
              </Text>
            </Circle>

            <Text>
              You got right {rightAnswers} out of {state.questions.length}{" "}
              questions
            </Text>
            <Badge p={2} mt={3} rounded={"md"}>
              Grade{" "}
              {((rightAnswers / state.questions.length) * 5 + 1).toFixed(2)}
            </Badge>
          </Center>
        </CardBody>
        <CardFooter>
          <Button
            as={RouterDomLink}
            to={"/"}
            w={"100%"}
            leftIcon={<ArrowBackIcon />}
          >
            Back to the home page
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
