import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight={"semibold"} color="cyan.400">
          Phong Vu
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound={true}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/phong-v%C5%A9-nguy%E1%BB%85n-498aa2253/"
            );
          }}
          ml="2"
          colorScheme={"linkedin"}
        />
        <IconButton
          icon={<FaFacebook />}
          isRound={true}
          ml="2"
          onClick={() => {
            window.open(
              "https://www.facebook.com/profile.php?id=100078210323763"
            );
          }}
          colorScheme={"facebook"}
        />
        <IconButton
          icon={<FaGithub />}
          isRound={true}
          ml="2"
          onClick={() => {
            window.open("https://github.com/phongvudz");
          }}
          colorScheme={"green"}
        />
        <IconButton
          ml={"8"}
          aria-label="Search database"
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound={true}
        ></IconButton>
      </Flex>

      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
