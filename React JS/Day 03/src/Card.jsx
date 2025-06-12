import React from 'react'

export default function Card(props) {
    return (
        <div className="card col-3" >
            <div>
                <img style={{height:'250px'}} src={props.sourse} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.rating}
                    </p>
                    <a href="#" className={`btn ${props.rating >= 4 ? 'btn-danger' : 'btn-primary'} `}>
                        Go somewhere
                    </a>
                </div>
            </div>

        </div>

    )
}
