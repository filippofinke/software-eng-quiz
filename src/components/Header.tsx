import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
      <HStack>
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          icon={<DownloadIcon />}
          aria-label={"Download questions"}
          onClick={() => {
            window.location.href = "/questions.pdf";
          }}
        />
        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
}
