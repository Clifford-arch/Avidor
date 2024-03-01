import { Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const HeaderMenuItem = ({ url, label, icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Link
        as={RouterLink}
        to={url}
        fontSize="md"
        letterSpacing="wide"
        textTransform="uppercase"
        mb={{ base: "2", md: "0" }}
        mr="5"
        display="flex"
        alignItems="center"
        color="#800020"
        _hover={{ textDecor: "none", bgColor: "#F7E7CE" }}
        bgColor="#FAD6A5"
        borderRadius="full"
        px="3"
      >
        <Icon as={icon} mr="2" w="4" h="4" />
        {label}
      </Link>
    </motion.div>
  );
};

export default HeaderMenuItem;
