import React from 'react'

export default function Card(props) {

    return (
        <div className='row gy-4'>
            {
                props.movies.map((data, index) => {
                    return (
                        <div className='col-4'>
                            <div>
                                <div className="card">
                                    <img style={{ height: "250px" }} src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.original_title}</h5>
                                        <p className="card-text"><b>Release Date:</b>-{data.release_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
