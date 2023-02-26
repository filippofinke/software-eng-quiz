import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/react";

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
      >
        Contribute to the project on GitHub <ExternalLinkIcon ml={2} />
      </Link>
    </Box>
  );
}
