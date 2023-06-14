import { Box, IconButton, Tooltip, Text, HStack } from "@chakra-ui/react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrTrophy } from "react-icons/gr";
import { firestore } from "../utils/firebase";
import Rank from "./Rank";

export default function Leaderboard() {
  let [leaderboard, setLeaderboard] = useState<
    {
      displayName: string;
      points: number;
    }[]
  >([]);

  useEffect(() => {
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
  }, []);

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
    >
      <IconButton
        variant="ghost"
        icon={<GrTrophy />}
        aria-label={"Leaderboard"}
      />
    </Tooltip>
  );
}
