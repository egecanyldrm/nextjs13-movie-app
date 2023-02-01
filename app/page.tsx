import { FeaturedMovie } from '@/components/FeaturedMovie';
import { Genres } from '@/components/Genres';
import { MovieSection } from '@/components/MovieSection';
import { fetchGenres, fetchPopularMovies, fetchTopRatedMovies } from '@/services/movie'

async function Delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Home() {

  const [popularMovies, topRatedMovies, genres] = await Promise.all([fetchPopularMovies(), fetchTopRatedMovies(), fetchGenres()]);

  return (
    <>
      <FeaturedMovie movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]} />
      <Genres genres={genres} />
      <MovieSection title='Popular Films' movies={popularMovies} />
      <MovieSection title='Top Rated Movies' movies={topRatedMovies} />
    </>
  )
}
