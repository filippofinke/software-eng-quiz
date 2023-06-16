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
  Icon,
  IconButton,
  Progress,
  Text,
  Textarea,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, Link as RouterDomLink } from "react-router-dom";
import { Question, getQuizByCategory, saveAnswerStatus } from "../utils/quiz";
import { Link } from "@chakra-ui/react";
import { useSettings } from "../contexts/SettingsContext";
import { emojisplosion } from "emojisplosion";
import stringSimilarity from "string-similarity-js";
import { GrPowerReset } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";
interface State {
  name: string;
  questions: Question[];
}

interface Answer extends Question {
  correct: boolean;
}

export default function Quiz() {
  const { settings, setSetting } = useSettings();
  const location = useLocation();
  const state = location.state as State;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [currentStreak, setCurrentStreak] = useState<number>(0);

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

    if (correct && settings.interactiveMode) {
      let points = settings.points || 0;
      setSetting("points", points + 1);
    }

    if (correct) {
      setCurrentStreak((streak) => streak + 1);
    } else {
      setCurrentStreak(0);
    }

    saveAnswerStatus(current, correct);

    setAnswers([
      ...answers,
      {
        ...current,
        correct,
      },
    ]);

    nextQuestion();
  };

  const restart = () => {
    setCurrentQuestion(0);
    setShowAnswer(false);
    setShowAlertDialog(false);
    setAnswers([]);
    setAnswer("");
    const quiz = getQuizByCategory(state.name);
    if (quiz) {
      state.questions = quiz.getQuestions();
    }
  };

  const handleNextButton = () => {
    let similarity = stringSimilarity(answer, current?.answer || "");
    if (similarity > 0.7) {
      emojisplosion({
        emojis: ["🎉", "🎊", "🥳", "✅", "👏"],
        emojiCount: () => Math.random() * 50,
        position: () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }),
      });
      saveAnswer(true);
    } else {
      saveAnswer(false);
    }

    setAnswer("");
  };

  useEffect(() => {
    // catch escape key
    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setShowAlertDialog(true);
      } else if (e.key === "r") {
        if (!current) restart();
      }
    };

    return () => {
      window.onkeydown = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    if (currentStreak === 3)
      toast("You are on fire! Streak of 3!", {
        icon: "🔥",
        duration: 1250,
        position: "bottom-center",
      });
    else if (currentStreak === 5)
      toast("You are on a roll! Streak of 5!", {
        icon: "🤩",
        duration: 1250,
        position: "bottom-center",
      });
    else if (currentStreak === 10)
      toast("You are unstoppable! Streak of 10!", {
        icon: "🤯",
        position: "bottom-center",
        duration: 1250,
      });
    else if (currentStreak === 15)
      toast("You are a legend! Streak of 15!", {
        icon: "👑",
        duration: 1250,
        position: "bottom-center",
      });

    if ([3, 5, 10, 15].includes(currentStreak)) {
      emojisplosion({
        emojis: ["🎉", "🎊", "🥳", "✅", "👏"],
        emojiCount: () => Math.random() * 150,
        position: () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }),
      });
    }
  }, [currentStreak]);

  return current ? (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100%"}
    >
      <Toaster />
      <Card
        flex={1}
        marginBottom={10}
        style={{
          userSelect: "none",
        }}
      >
        <Progress
          value={currentQuestion}
          max={state.questions.length}
          colorScheme={"blackAlpha"}
          size="xs"
        />
        <CardHeader>
          <HStack justifyContent={"space-between"} color="gray.500">
            <Text>{state.name}</Text>
            <Text></Text>
            <Badge
              p={1}
              rounded={"md"}
              colorScheme={currentStreak >= 3 ? "orange" : "gray"}
            >
              {currentStreak >= 3 ? "🔥 " : ""}
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

              {settings.interactiveMode && (
                <Text color={"gray"} margin={"auto"} textAlign="center">
                  Your response is{" "}
                  {(stringSimilarity(answer, current.answer) * 100).toFixed(0)}%
                  similar to the correct answer.
                </Text>
              )}
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
                readOnly={showAnswer}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    if (showAnswer) handleNextButton();
                    else setShowAnswer(true);
                  }
                }}
              />
              <Tooltip
                label="Press Enter to check your answer."
                openDelay={500}
                hasArrow
              >
                <Button
                  hidden={showAnswer}
                  h={"100%"}
                  onClick={() => {
                    setShowAnswer(true);
                  }}
                >
                  Check
                </Button>
              </Tooltip>
              <Tooltip
                label="Press Enter to go to the next question."
                openDelay={500}
                hasArrow
              >
                <Button
                  hidden={!showAnswer}
                  h={"100%"}
                  onClick={handleNextButton}
                >
                  Next
                </Button>
              </Tooltip>
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
      <Tooltip
        label={"You can also press the Escape key to exit the quiz."}
        openDelay={500}
        hasArrow
      >
        <Button
          alignSelf={"flex-start"}
          variant={"outline"}
          leftIcon={<ArrowBackIcon />}
          onClick={() => setShowAlertDialog(true)}
        >
          Exit Quiz
        </Button>
      </Tooltip>

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
          <VStack w={"full"}>
            <Tooltip
              label={"You can also press the R key to restart the quiz."}
              openDelay={500}
              hasArrow
            >
              <Button
                onClick={restart}
                w={"full"}
                leftIcon={<Icon as={GrPowerReset} />}
              >
                Take this quiz again
              </Button>
            </Tooltip>
            <Button
              as={RouterDomLink}
              to={"/"}
              w={"full"}
              leftIcon={<ArrowBackIcon />}
            >
              Back to the home page
            </Button>
          </VStack>
        </CardFooter>
      </Card>
    </Box>
  );
}
