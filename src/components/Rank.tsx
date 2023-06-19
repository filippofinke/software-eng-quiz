import { Badge, Text, Tooltip } from "@chakra-ui/react";

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
    points: 350,
    color: "teal",
  },
  {
    name: "Fowler",
    points: 400,
    color: "twitter",
  },
  {
    name: "Turing",
    points: 1000,
    color: "messenger",
  },
  {
    name: "Impedovo",
    color: "telegram",
    points: 1300,
  },
  {
    name: "Tommy",
    color: "linkedin",
    points: 1300,
  },
];

export default function Rank({ points }: { points: number }) {
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

  return (
    <Tooltip label={label}>
      <Badge variant={"solid"} colorScheme={level?.color ?? "gray"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {level?.name ?? "Noob"}
        </Text>
      </Badge>
    </Tooltip>
  );
}
