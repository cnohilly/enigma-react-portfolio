import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Watch It Later',
            description: 'Full-stack application using TheMovieDatabase API to view and search movies and television shows. Users can create an account to then rate and leave comments on their favorite movies or television shows and even create a personal watchlist.',
            deployed: 'https://watch-it-later.herokuapp.com/',
            repository: 'https://github.com/cnohilly/watch-it-later',
            technology: ['Node', 'Express', 'MySQL', 'Sequelize', 'Handlebars', 'Bulma', 'MVC'],
            image: require('../../assets/images/watch-it-later.jpg'),
            gif: require('../../assets/images/watch-it-later.gif')
        },
        {
            name: 'Movie TV Watchlist',
            description: 'Using TheMovieDatabase API, users can view and search movies and television shows to see relevant information and can add the piece of media to their own personal watchlist of content they plan to watch.',
            deployed: 'https://cnohilly.github.io/movie-tv-watchlist/index.html',
            repository: 'https://github.com/cnohilly/watchlist',
            technology: ['HTML', 'CSS', 'JavaScript', 'Bulma', 'jQuery', '3rd Party API'],
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: ''
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: ''
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: ''
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: ''
        }
    ])
    return (
        <section className="content-section container">
            {projects.map(project => (
                <Project project={project} />
            ))}
        </section>
    )
}

export default Portfolio;