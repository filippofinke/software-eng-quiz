import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function Header() {
  const bg = useColorModeValue("gray.100", "gray.700");

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
      <ColorModeSwitcher />
    </Box>
  );
}
