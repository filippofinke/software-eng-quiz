import { Badge, Button, Text, Tooltip } from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { GrLogin } from "react-icons/gr";
import { auth } from "../utils/firebase";

const levels = [
  {
    name: "Noob",
    points: 20,
    color: "gray",
  },
  {
    name: "Beginner",
    points: 50,
    color: "cyan",
  },
  {
    name: "Intermediate",
    points: 80,
    color: "blue",
  },
  {
    name: "Advanced",
    points: 110,
    color: "purple",
  },
  {
    name: "Expert",
    points: 140,
    color: "orange",
  },
  {
    name: "Master",
    points: 170,
    color: "red",
  },
  {
    name: "Grandmaster",
    points: 200,
    color: "yellow",
  },
  {
    name: "God",
    points: 250,
    color: "green",
  },
  {
    name: "Corti",
    points: 300,
    color: "pink",
  },
  {
    name: "Sommerville",
    points: 500,
    color: "teal",
  },
];

export default function Rank({ points }: { points: number }) {
  let [user, setUser] = useState<any>(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  let label = `You have ${points} point`;
  if (points !== 1) {
    label += "s";
  }

  let level =
    levels.find((level) => points < level.points) ?? levels[levels.length - 1];
  let nextLevel = levels.find((level) => points < level.points);
  if (nextLevel) {
    label += ` (${points}/${nextLevel.points})`;
  }

  return user ? (
    <Tooltip label={label}>
      <Badge variant={"solid"} colorScheme={level?.color ?? "gray"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {level?.name ?? "Noob"}
        </Text>
      </Badge>
    </Tooltip>
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
  );
}
