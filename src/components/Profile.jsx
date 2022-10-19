import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DiApple, DiVisualstudio, DiWebplatform } from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width : 600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      marginTop="10"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          I am
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {" "}
          looking for job for Frontend Developer
        </Text>
      </Box>
      <Box alignSelf="center" textAlign={"center"}>
        <Text fontSize="2xl" fontWeight="bold">
          Product Designer and Developer
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt="8">
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon as={DiWebplatform} color="white" w="24" h="24" p="4" />
            <Text p="4" fontWeight="semibold" fontSize="xl" color="white">
              Web Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            background="gray.400"
            _hover={{ bg: "teal.400" }}
          >
            <Icon as={DiApple} color="black" w="24" h="24" p="4" />
            <Text p="4" fontWeight="semibold" fontSize="xl" color="black">
              Mobile Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            background="gray.400"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={DiVisualstudio} color="black" w="24" h="24" p="4" />
            <Text p="4" fontWeight="semibold" fontSize="xl" color="black">
              Tablet Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
