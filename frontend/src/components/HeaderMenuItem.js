import { Icon, Link } from "@chakra-ui/react";

const HeaderMenuItem = ({ url, label, icon }) => {
  return (
    <Link
      href={url}
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
      <Icon as={icon} mr="2" w="4" h="4" />
      {label}
    </Link>
  );
};

export default HeaderMenuItem;
