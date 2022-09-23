import React from 'react';

function Project({ project }) {
    const { name, description, deployed, repository, image, gif } = project;
    return (
        <div className="card">
            <img src={image} alt="demo of project" />
        </div>
    )
}

export default Project;