import { DownloadIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useSettings } from "../contexts/SettingsContext";

export default function Header() {
  const { settings, setSetting } = useSettings();
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
          icon={settings.interactiveMode ? <EditIcon /> : <ViewIcon />}
          title="Toggle interactive mode"
          aria-label={
            settings.interactiveMode ? "Interactive mode" : "View mode"
          }
          onClick={() => {
            setSetting("interactiveMode", !settings.interactiveMode);
          }}
        />
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
            window.location.href = "/questions.pdf";
          }}
        />
        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
}
