import { Flex, Icon } from "@chakra-ui/react";
import { IoHeart, IoHeartHalf, IoHeartOutline } from "react-icons/io5";

const Rating = ({ value, color = "#FAD6A5" }) => {
  return (
    <Flex align="center">
      <Icon
        color={color}
        as={value >= 1 ? IoHeart : value >= 0.5 ? IoHeartHalf : IoHeartOutline}
        fontSize="1.5rem"
      />
      <Icon
        color={color}
        as={value >= 2 ? IoHeart : value >= 1.5 ? IoHeartHalf : IoHeartOutline}
        fontSize="1.5rem"
      />
      <Icon
        color={color}
        as={value >= 3 ? IoHeart : value >= 2.5 ? IoHeartHalf : IoHeartOutline}
        fontSize="1.5rem"
      />
      <Icon
        color={color}
        as={value >= 4 ? IoHeart : value >= 3.5 ? IoHeartHalf : IoHeartOutline}
        fontSize="1.5rem"
      />
      <Icon
        color={color}
        as={value >= 5 ? IoHeart : value >= 4.5 ? IoHeartHalf : IoHeartOutline}
        fontSize="1.5rem"
      />
    </Flex>
  );
};

export default Rating;
