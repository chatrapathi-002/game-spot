import { Heading, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo_course.webp";
import SearchInput, { Props } from "./SearchInput";

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Heading
        backgroundColor="#5752DA"
        paddingY={2}
        paddingX={4}
        borderRadius={8}
        fontSize="2xl"
        color="#FFFFFF"
      >
        GameSpot
      </Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
