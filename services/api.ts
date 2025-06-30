export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
    // const endpoint = '/discover/movie?sort_by=popularirty.desc';
    const endpoint = '/discover/movie?sort_by=popularirty.desc';

    const response = await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.headers,
    });

    if(!response.ok){
        //@ts-ignore
        throw new Error('Failed to fetch movies',response.statusText);
    }

    const data = await response.json();

    return data;
};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDMxNTUxYjMwM2Y3ZTVlOTVlNmUyODQyZmMxYTM3ZiIsIm5iZiI6MTc1MTAyMjQ5Ny4xMzQsInN1YiI6IjY4NWU3YmExZDdiNDU4MTcyYTdlY2U1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uKbfZBXWZOHVICK_HdtbUS83JkufipgEiSjGYcyIVc'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
