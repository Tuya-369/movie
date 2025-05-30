export const getMoreMovieID = async (movie) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movie.id}/similar?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
