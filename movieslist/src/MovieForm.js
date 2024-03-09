import React, { useState } from 'react';
import './MovieForm.css';

function MovieForm({ addMovie }) {
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        year: '',
        producer: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(formData);
        setFormData({
            name: '',
            genre: '',
            year: '',
            producer: '',
        });
    };
    return (
        <div className="movieForm">
            <form onSubmit={handleSubmit} className="formStyle">
                <label className="form-group"> Movie Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </label>
                <br />
                <label className="form-group"> Genre:
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} className="form-control" />
                </label>
                <br />
                <label className="form-group"> Year:
                    <input type="text" name="year" value={formData.year} onChange={handleChange} className="form-control" />
                </label>
                <br />
                <label className="form-group"> Producer:
                    <input type="text" name="producer" value={formData.producer} onChange={handleChange} className="form-control" />
                </label>
                <br />
                <button type="submit" className="submit-btn">Add Movie</button>
            </form>
        </div>
    );
}

export default MovieForm;