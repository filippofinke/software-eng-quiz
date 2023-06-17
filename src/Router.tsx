import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Layout from "./components/Layout";
import Stats from "./pages/Stats";
import { getLatestRelease } from "./utils/github";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

export default function Router() {
  const [release, setRelease] = useState<any>(null);

  useEffect(() => {
    let currentCommit = process.env.REACT_APP_GIT_COMMIT_HASH || "local";
    let savedCommit = localStorage.getItem("commit");

    if (currentCommit !== savedCommit) {
      console.log("New version detected, clearing local storage");
      localStorage.clear();
      localStorage.setItem("commit", currentCommit);
      getLatestRelease().then((r) => {
        setRelease(r);
      });
    }
  }, []);

  return (
    <>
      {release && (
        <Modal
          isOpen={release}
          onClose={() => setRelease(null)}
          closeOnEsc={true}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <ReactMarkdown
                components={ChakraUIRenderer()}
                children={release.body.replaceAll("#", "##")}
                skipHtml
              />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setRelease(null)}
              >
                Okay
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz/:name" element={<Quiz />} />
            <Route path="stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
