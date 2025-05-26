// lib/getTrailerId.js

export const getTrailerId = async (movieId) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      }
    );

    const data = await res.json();

    // YouTube trailer-уудын дундаас Trailer нэртэйг олох
    const trailer = data.results.find(
      (vid) =>
        vid.type === "Trailer" && vid.site === "YouTube"
    );

    return trailer?.key; // YouTube videoId
  } catch (error) {
    console.error("Trailer fetch error:", error);
    return null;
  }
};
