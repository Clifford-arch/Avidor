import { Flex } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ListScreen from "./screens/ListScreen";

function App() {
  return (
    <>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="#FAD6A5"
      >
        <ListScreen />
      </Flex>

      <Footer />
    </>
  );
}

export default App;
