import { FeaturedMovie } from '@/components/FeaturedMovie';
import { Genres } from '@/components/Genres';
import { MovieSection } from '@/components/MovieSection';
import { fetchGenres, fetchMoviesByGenre, fetchPopularMovies, fetchTopRatedMovies } from '@/services/movie'

export default async function Home({ params }: any) {

  const promises: any[] = [fetchPopularMovies(), fetchTopRatedMovies(), fetchGenres()]

  if (params?.category) promises.push(fetchMoviesByGenre(params?.category[0]))

  const [popularMovies, topRatedMovies, genres, selectedCategory] = await Promise.all(promises);

  return (
    <>
      <FeaturedMovie movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]} />
      <Genres genres={genres} />
      <MovieSection title='Popular Films' movies={selectedCategory ?? popularMovies} />
      <MovieSection title='Top Rated Movies' movies={topRatedMovies} />
    </>
  )
}
