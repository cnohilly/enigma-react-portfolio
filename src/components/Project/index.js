import React, { useState } from 'react';

function Project({ project }) {
    const { name, description, deployed, repository, technology, image, gif } = project;
    const [cardImage, setCardImage] = useState(image);
    return (
        <div className="col" key={name}>
            <div className="card h-100 bg-secondary text-white"
                onMouseEnter={() => setCardImage(gif)}
                onMouseLeave={() => setCardImage(image)}
            >
                <img className='card-img-top' src={cardImage} alt="demo of project" />
                <div className="card-header my-0 py-2">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-body bg-primary text-white">
                    <p className="card-text">{description}</p>
                    <hr />
                    {technology.length > 0 &&
                        <div>
                            <h6>Technology and Resources: </h6>
                            <p className="card-text">
                                {technology.join(', ')}
                            </p>
                        </div>}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a href={deployed} target='_blank' rel='noreferrer nooepener'>
                        <button className="btn btn-primary text-white">Website <i className="bi bi-box-arrow-up-right"></i></button>
                    </a>
                    <a href={repository} target='_blank' rel='noreferrer nooepener'
                        className='float-end fs-1 text-light'>
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;