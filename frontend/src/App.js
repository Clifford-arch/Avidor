import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ListScreen from "./screens/ListScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="#FAD6A5"
      >
        <Routes>
          <Route path="/products" element={<ListScreen />} />
        </Routes>
      </Flex>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
