import useGenres from "../hooks/useGenres.ts";
import { ListItem, List, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <GenreSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
