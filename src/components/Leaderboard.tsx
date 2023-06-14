import { Box, IconButton, Tooltip, Text, HStack } from "@chakra-ui/react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { GrTrophy } from "react-icons/gr";
import { firestore } from "../utils/firebase";
import Rank from "./Rank";
let lastUpdated: number | null = null;

export default function Leaderboard() {
  let [leaderboard, setLeaderboard] = useState<
    {
      displayName: string;
      points: number;
    }[]
  >([]);

  const loadLeaderboard = async () => {
    if (lastUpdated && Date.now() - lastUpdated < 10000) return;

    console.log("[firebase] Loading leaderboard");
    const q = query(
      collection(firestore, "users"),
      orderBy("points", "desc"),
      limit(10)
    );

    getDocs(q).then((querySnapshot) => {
      let leaderboard: {
        displayName: string;
        points: number;
      }[] = [];
      querySnapshot.forEach((doc) => {
        let { displayName, points } = doc.data();
        leaderboard.push({ displayName, points });
      });
      setLeaderboard(leaderboard);
    });

    lastUpdated = Date.now();
  };

  return (
    <Tooltip
      label={
        <Box>
          {leaderboard.map((user, index) => (
            <HStack
              display={"flex"}
              justifyContent={"space-between"}
              my={1}
              key={index}
            >
              <Text>
                {`${index + 1}. ${user.displayName || "Anonymous"}: ${
                  user.points
                }`}
              </Text>
              <Rank points={user.points} />
            </HStack>
          ))}
        </Box>
      }
      hasArrow
      onOpen={loadLeaderboard}
    >
      <IconButton
        variant="ghost"
        icon={<GrTrophy />}
        aria-label={"Leaderboard"}
      />
    </Tooltip>
  );
}
