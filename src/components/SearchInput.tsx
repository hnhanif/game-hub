import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={inputRef}
          placeholder="Search games..."
          variant={"filled"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
