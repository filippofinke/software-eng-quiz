import { WarningTwoIcon } from "@chakra-ui/icons";
import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterDomLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Center height={"100%"}>
      <VStack>
        <HStack fontSize={"xl"}>
          <WarningTwoIcon />
          <Text>Page not found!</Text>
        </HStack>
        <Link as={RouterDomLink} color={"teal.500"} to={"/"}>
          Go back to the home page
        </Link>
      </VStack>
    </Center>
  );
}
