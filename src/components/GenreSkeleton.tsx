import { Stack, Skeleton } from "@chakra-ui/react";

function GenreSkeleton() {
  const skeletons = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Stack>
      {skeletons.map((ske) => {
        return <Skeleton key={ske} height="32px" />;
      })}
    </Stack>
  );
}

export default GenreSkeleton;
