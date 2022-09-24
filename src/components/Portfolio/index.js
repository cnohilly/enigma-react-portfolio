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
            image: require('../../assets/images/movie-tv-watchlist.jpg'),
            gif: require('../../assets/images/movie-tv-watchlist.gif')
        },
        {
            name: 'Tech It Out',
            description: 'Tech It Out is a simple blog style website where users can create accounts, create posts of their own, and comment on posts. Users can use the dashboard to edit posts or to be directed to the page to create a new post.',
            deployed: 'https://tech-it-out-blog.herokuapp.com/',
            repository: 'https://github.com/cnohilly/mvc-tech-blog-tech-it-out',
            technology: ['Express', 'Handlebars', 'MySQL', 'Sequelize', 'Express-Session'],
            image: require('../../assets/images/tech-it-out.jpg'),
            gif: require('../../assets/images/tech-it-out.gif')
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: '',
            technology: [],
            image: require('../../assets/images/tech-it-out.jpg'),
            gif: require('../../assets/images/tech-it-out.gif')
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: '',
            technology: [],
            image: require('../../assets/images/tech-it-out.jpg'),
            gif: require('../../assets/images/tech-it-out.gif')
        },
        {
            name: '',
            description: '',
            deployed: '',
            repository: '',
            technology: [],
            image: require('../../assets/images/tech-it-out.jpg'),
            gif: require('../../assets/images/tech-it-out.gif')
        }
    ])
    return (
        <section className="content-section container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {projects.map(project => (
                    <Project project={project} key={project.name} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;