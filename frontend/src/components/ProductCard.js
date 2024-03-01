import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box borderRadius="md" bgColor="#800020" _hover={{ shadow: "md" }}>
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="430px"
          objectFit="cover"
          borderTopRadius="md"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="1" color="#F7E7CE">
            {product.name}
          </Heading>
          <Heading fontSize="sm" mb="3" color="#FAD6A5">
            {product.brand}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} />
            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.700">
              ${product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
