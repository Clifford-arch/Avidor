import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import { HiShoppingBag, HiUser, HiTemplate } from "react-icons/hi";

import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="#800020"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
    >
      {/* Logo/Title */}
      <Link href="/">
        <Heading
          as="h1"
          color="#FAD6A5"
          fontWeight="bold"
          size="md"
          letterSpacing="wide"
          _hover={{ textDecor: "none", color: "#F7E7CE" }}
        >
          Avidor
        </Heading>
      </Link>

      <Box
        display={{ base: "block", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: "4", md: "0" }}
      >
        <HeaderMenuItem url="/products" label="Products" icon={HiTemplate} />
        <HeaderMenuItem url="/cart" label="Cart" icon={HiShoppingBag} />
        <HeaderMenuItem url="/login" label="Login" icon={HiUser} />
      </Box>
    </Flex>
  );
};

export default Header;
