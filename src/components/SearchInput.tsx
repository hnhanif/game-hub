import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        placeholder="Search games..."
        variant={"filled"}
        borderRadius={20}
      />
    </InputGroup>
  );
}

export default SearchInput;
