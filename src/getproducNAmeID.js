export const getproducNAmeID = async (name) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}	GET: /movie/${name.id}/credits?language=en-US`,
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
