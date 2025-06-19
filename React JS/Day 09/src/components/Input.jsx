import React from 'react'

export default function Input(props) {
    return (
        <div className="input-group mb-3">
            <input
                onChange={(e) => props.setSearchValue(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search Movie....."
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>

    )
}
