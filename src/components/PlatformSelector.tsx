import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms();
  if (error) return null;
  else if (isLoading)
    return (
      <Box paddingBottom={"10px"} marginX={"30px"}>
        <Spinner size={"md"} />
      </Box>
    );
  return (
    <Box marginBottom={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
