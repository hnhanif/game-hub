import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Box marginBottom={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SortSelector;