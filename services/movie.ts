import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = 'b6a36190fedc206b2be58a35c9b08e95';

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
export interface ISearchResponse {
    page: number;
    results: ISearchResult[];
    total_pages: number;
    total_results: number;
}

export interface ISearchResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    media_type: string;
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



export async function getSearchData(value: string) {
    try {
        const response = await axios.get<ISearchResponse>(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`);
        return response.data
    } catch (error: any) {
        throw new Error(error)
    }
}




export async function fetchData(path: string) {
    try {
        const response = await axios.get<IResult>(`${BASE_URL}${path}?api_key=${API_KEY}`);
        return response.data
    } catch (error: any) {
        throw new Error(error)
    }
}
export async function fetchMoviesByGenre(id: string) {
    try {
        const response = await axios.get<IResult>(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
        return response.data.results;
    } catch (error: any) {
        throw new Error("Error happened while fetching top rated movies", error);
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
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        return response.data
    } catch (error: any) {
        throw new Error("Error happened while fetching single movie", error);
    }
}
