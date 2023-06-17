import { DownloadIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { GrLogin } from "react-icons/gr";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useSettings } from "../contexts/SettingsContext";
import { auth } from "../utils/firebase";
import Leaderboard from "./Leaderboard";
import Rank from "./Rank";

export default function Header() {
  let [user, setUser] = useState<User | null>(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  const [timer, setTimer] = useState("00:00:00");
  const { settings, setSetting } = useSettings();
  const bg = useColorModeValue("gray.100", "gray.700");

  const [isDesktop] = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    // Create a timer of time elapsed since the start of the class
    const start = new Date();
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimer(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      p={2}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      backgroundColor={bg}
      shadow={"sm"}
    >
      <Text fontSize={"md"} fontWeight={"bold"}>
        Software Engineering and Development I
      </Text>
      <HStack>
        {isDesktop && (
          <>
            <Tooltip label={`You have been studying for ${timer}.`}>
              <Badge variant={"solid"} colorScheme={"gray"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  {timer}
                </Text>
              </Badge>
            </Tooltip>
            {user ? (
              <Rank points={settings.points || 0} />
            ) : (
              <Button
                leftIcon={<GrLogin />}
                variant={"solid"}
                colorScheme={"gray"}
                onClick={handleLogin}
              >
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  Login
                </Text>
              </Button>
            )}
            <Leaderboard />
          </>
        )}
        <Tooltip
          label={
            settings.interactiveMode
              ? "Interactive mode"
              : "View mode (no editing)"
          }
        >
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            icon={settings.interactiveMode ? <EditIcon /> : <ViewIcon />}
            title="Toggle interactive mode"
            aria-label={
              settings.interactiveMode ? "Interactive mode" : "View mode"
            }
            onClick={() => {
              setSetting("interactiveMode", !settings.interactiveMode);
            }}
          />
        </Tooltip>

        <Tooltip label={"Download questions as a PDF."}>
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            icon={<DownloadIcon />}
            aria-label={"Download questions"}
            title="Download questions"
            onClick={() => {
              window.open("/questions.pdf", "_blank");
            }}
          />
        </Tooltip>
        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
}
