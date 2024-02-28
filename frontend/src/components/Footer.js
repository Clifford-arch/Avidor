import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import {
  PiInstagramLogoFill,
  PiFacebookLogoFill,
  PiMessengerLogoFill,
  PiPhoneFill,
} from "react-icons/pi";

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      py="8"
      bgColor="#800020"
      flexDirection="column"
    >
      <Text
        color="#800020"
        bgColor="#FAD6A5"
        px="2"
        py="1"
        borderRadius="1rem"
        marginLeft="auto"
        marginRight="auto"
      >
        Copyright {new Date().getFullYear()}. RST Store. All rights reserved.
      </Text>
      <Flex marginLeft="auto" marginRight="auto" mt="5">
        <Link
          href="https://www.facebook.com/"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          mb={{ base: "2", md: "0" }}
          mr="5"
          display="flex"
          alignItems="center"
          color="#FAD6A5"
          _hover={{ textDecor: "none", color: "#F7E7CE" }}
        >
          <Icon as={PiInstagramLogoFill} w={6} h={6} />
        </Link>

        <Link
          href="https://www.facebook.com/"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          mb={{ base: "2", md: "0" }}
          mr="5"
          display="flex"
          alignItems="center"
          color="#FAD6A5"
          _hover={{ textDecor: "none", color: "#F7E7CE" }}
        >
          <Icon as={PiFacebookLogoFill} w={6} h={6} />
        </Link>
        <Link
          href="https://www.facebook.com/"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          mb={{ base: "2", md: "0" }}
          mr="5"
          display="flex"
          alignItems="center"
          color="#FAD6A5"
          _hover={{ textDecor: "none", color: "#F7E7CE" }}
        >
          <Icon as={PiMessengerLogoFill} w={6} h={6} />
        </Link>
        <Link
          href="https://www.facebook.com/"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          mb={{ base: "2", md: "0" }}
          mr="5"
          display="flex"
          alignItems="center"
          color="#FAD6A5"
          _hover={{ textDecor: "none", color: "#F7E7CE" }}
        >
          <Icon as={PiPhoneFill} w={6} h={6} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
