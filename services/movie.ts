import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IResult {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}


export async function fetchData(path: string) {
    try {
        const response = await axios.get<IResult>(`${BASE_URL}${path}?api_key=${process.env.API_KEY}`);
        return response.data
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function fetchPopularMovies() {
    try {
        const res = await fetchData('/movie/popular');
        return res.results
    } catch (error: any) {
        throw new Error('Error happened while single movie', error)
    }
}

export async function fetchGenres() {
    try {
        const res = await fetchData('/genre/movie/list');
        return res
    } catch (error: any) {
        throw new Error('Error happened while fetching genres', error)
    }
}


export async function fetchTopRatedMovies() {
    try {
        const res = await fetchData('/movie/top_rated');
        return res.results
    } catch (error: any) {
        throw new Error('Error happened while Top rated movies ', error)
    }
}

export async function fetchSingleMovie(movieId: string) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`);
        return response.data
    } catch (error: any) {
        throw new Error("Error happened while fetching single movie", error);
    }
}
