import React from 'react';
import './MovieList.css';

function MovieList({ movies }) {
    return (
        <div className='movieList'>
            <br />
            <table border={1} cellPadding={10}>
                <tbody>
                    <tr>
                        <th>Movie Name</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Produced By</th>
                    </tr>
                    {
                        movies.map(
                            (movie, index) => {
                                return (<tr key={index}>
                                    <td>{movie.name}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.year}</td>
                                    <td>{movie.producer}</td>
                                </tr>)
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;