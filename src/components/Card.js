import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  if (!title || !description || !imageSrc) return null;

  return (
    <VStack borderRadius="md" bg="white">
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        w="100%"
        borderTopRadius="md"
      />

      <VStack align="stretch" spacing={4} p={4}>
        <Heading
          as="h3"
          size="md"
          fontWeight="bold"
          color="black"
          textAlign="left"
        >
          {title}
        </Heading>
        <Text color="GrayText">{description}</Text>
        <HStack>
          <Text fontWeight="bold" color="black">
            See More
          </Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
