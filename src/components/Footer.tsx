import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box margin={"auto"} p={2} mb={2}>
      <Link
        fontSize={"sm"}
        href={"https://github.com/filippofinke/software-eng-quiz"}
        isExternal
        display={"flex"}
        alignItems={"center"}
        color={"gray.500"}
        justifyContent={"center"}
      >
        Contribute to the project on GitHub <ExternalLinkIcon ml={2} />
      </Link>
      <Text fontSize={"sm"} color="gray">
        {process.env.REACT_APP_GIT_COMMIT_HASH || "REACT_APP_GIT_COMMIT_HASH"}
      </Text>
    </Box>
  );
}
