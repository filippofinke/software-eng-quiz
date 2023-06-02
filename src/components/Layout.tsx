import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

export default function Layout() {
  return (
    <>
      <Header />
      <Container flex={1} p={2}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
