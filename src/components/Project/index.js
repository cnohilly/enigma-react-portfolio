import React from 'react';

function Project({ project }) {
    const { name, description, deployed, repository, technology, image, gif } = project;
    return (
        <div className="col">
            <div className="card bg-secondary text-white ">
                <img className='card-img-top' src={image} alt="demo of project" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {technology.length &&
                        <p className="card-text">
                            <strong>Technology and Resources:</strong> {technology.join(', ')}
                        </p>}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a href={deployed} target='_blank' rel='noreferrer nooepener'>
                        <button className="btn btn-primary">Website <i class="bi bi-box-arrow-up-right"></i></button>
                    </a>
                    <a href={repository} className='float-end fs-1 text-light'>
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;