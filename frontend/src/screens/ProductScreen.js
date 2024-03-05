import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Rating from "../components/Rating";
// import products from "../products";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Flex mb="5">
        <Button
          as={RouterLink}
          to="/products"
          bg="#800020"
          color="#FAD6A5"
          _hover={{ bg: "#A63636" }}
        >
          Go Back
        </Button>
      </Flex>

      <Grid templateColumns="4fr 4fr 3fr" gap="1">
        {/* Column 1 */}
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="md"
          w="60vh"
          h="85vh"
        />

        {/* Column 2 */}
        <Flex direction="column" mr="6rem">
          <Heading as="h3" fontSize="2xl" color="#800020">
            {product.brand}
          </Heading>

          <Heading as="h2" fontSize="4xl" color="gray.900" mb="4">
            {product.name}
          </Heading>

          <Rating
            value={product.rating}
            color="#800020"
            text={`${product.numReviews} reviews`}
          />
          <Heading
            as="h5"
            fontSize="4xl"
            fontWeight="bold"
            my="4"
            color="red.600"
          >
            ₹{product.price}
          </Heading>

          <Text>{product.description}</Text>
        </Flex>

        {/* Column 3 */}
        <Flex
          direction="column"
          bgColor="#800020"
          px="3"
          borderRadius="lg"
          h="23vh"
          color="#FAD6A5"
        >
          <Flex justifyContent="space-between" py="2">
            <Text>Price: </Text>
            <Text fontWeight="bold">₹{product.price}</Text>
          </Flex>

          <Flex justifyContent="space-between" py="2">
            <Text>Status: </Text>
            <Text fontWeight="bold">
              {product.countInStock > 0 ? "In Stock" : "Not Available"}
            </Text>
          </Flex>

          <Button
            bg="teal.600"
            colorScheme="grey.700"
            my="2"
            textTransform="uppercase"
            letterSpacing="wide"
            isDisabled={product.countInStock === 0}
            _hover={{ bg: "teal.700" }}
          >
            Add to cart
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default ProductScreen;
