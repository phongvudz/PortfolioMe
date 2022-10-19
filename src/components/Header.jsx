import React from "react";
import {
  Box,
  Circle,
  Flex,
  useColorMode,
  useMediaQuery,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        w="300px"
        h="300px"
        opacity="0.1"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize={"5xl"} fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight="semibold"
            bgGradient="linear(to-r, cyan.400 , blue.500, purple.600)"
            bgClip={"text"}
          >
            Phong Vu
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Frontend Developer - React JS - Next JS- Tailwindcss - Library{" "}
          </Text>
          <Button
            mt={8}
            colorScheme="cyan"
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=100078210323763"
              );
            }}
          >
            Hire me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? 0 : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor={"transparent"}
          boxShadow="lg"
          boxSize={"300px"}
          src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/292137047_153422633941413_3314493742668256597_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=8hLMXwVp660AX-U_QNG&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8Vh767Bhak0n6WIbZFwE89pUxy7areY_HFs7j99cq8WA&oe=6354EA11"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
