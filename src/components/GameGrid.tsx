import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenre";
// import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import GameHeading from "./GameHeading";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    // <Box padding="10px">
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {games?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))} */}
      </SimpleGrid>
    </InfiniteScroll>
    // {hasNextPage && (
    //   <Button onClick={() => fetchNextPage()} marginY={5}>
    //     {isFetchingNextPage ? "Loading..." : "Load More"}
    //   </Button>
    // )}
    // </Box>
  );
};

export default GameGrid;
