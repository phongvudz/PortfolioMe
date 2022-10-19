import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

const Social = () => {
  return (
    <HStack spacing={"20"}>
      <Icon as={FaFacebook} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaSpotify} boxSize="50" />
      <Icon as={FaShopify} boxSize="50" />
    </HStack>
  );
};

export default Social;
