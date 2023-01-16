import Axios from 'axios';
import React, { useEffect , useState } from 'react'

export default function Movies() {
    const [movies, setMovies] = useState([])

    async function getMovies(){
        let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=517bf03e41f4d68784b4d867d7274ef7`);
        console.log(data.results);
        setMovies(data.results);
    }

    useEffect(()=>{
        getMovies();
    },[])
  return (
    <div className='py-5'>
        <div className="container">
            <div className="row">
                {movies.map((movie , i)=> <div key={i} className='col-md-4'>
                    <img className='w-100' src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" />
                    <h4>{movie.title}</h4>
                    <p>{movie.overview}</p>
                </div> )}
            </div>
        </div>
    </div>
  )
}
