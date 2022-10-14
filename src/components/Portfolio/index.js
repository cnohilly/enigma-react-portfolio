import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'CodeFlow',
            description: 'Full-stack MERN application where developers can share projects and connect with others. Users can create accounts, add friends, post their projects with relevant links, and join the discussion on projects by leaving comments.',
            deployed: 'https://code-flow-app.herokuapp.com/',
            repository: 'https://github.com/cnohilly/codeflow',
            technology: ['MERN', 'Tagify', 'JWT', 'GraphQL'],
            image: require('../../assets/images/codeflow.jpg'),
            gif: require('../../assets/images/codeflow.gif')
        },
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
            name: 'Pizza Hunt',
            description: 'Pizza Hunt is a web application that allows users to create new pizza recipes or comment on and reply to comments on existing recipes. Create or find the pizza of your dreams.',
            deployed: 'https://cnohilly-pizza-hunt.herokuapp.com/',
            repository: 'https://github.com/cnohilly/pizza-hunt',
            technology: ['Node', 'Express', 'NoSQL', 'MongoDB', 'Mongoose'],
            image: require('../../assets/images/pizza-hunt.jpg'),
            gif: require('../../assets/images/pizza-hunt.gif')
        },
        {
            name: 'Weather Dashboard',
            description: "Weather Dashboard that allows users to search for city names to see the current weather and a 5-day forecast using OpenWeather API. Recent searches are saved in the user's search history using local storage.",
            deployed: 'https://cnohilly.github.io/weather-dashboard/',
            repository: 'https://github.com/cnohilly/weather-dashboard',
            technology: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', '3rd Party API'],
            image: require('../../assets/images/weather-dashboard.jpg'),
            gif: require('../../assets/images/weather-dashboard.gif')
        },
        {
            name: 'Taskmaster Pro',
            description: 'Simple application to create and manage the status of tasks to help in planning your day or week. Tasks are saved in local storage and will be displayed when returning to the webpage.',
            deployed: 'https://cnohilly.github.io/taskmaster-pro/',
            repository: 'https://github.com/cnohilly/taskmaster-pro/',
            technology: ['HTML', 'CSS', 'jQuery', 'Moment', 'jQuery UI Touch Punch', 'Bootstrap', 'Popper'],
            image: require('../../assets/images/taskmaster.jpg'),
            gif: require('../../assets/images/taskmaster.gif')
        },
        {
            name: 'Coding Quiz',
            description: 'Small coding quiz to test your knowledge an speed. Try to be fast to keep the top spot in the highscores but lose time for answering incorrectly. Scores are saved and loaded using local storage.',
            deployed: 'https://cnohilly.github.io/code-quiz/',
            repository: 'https://github.com/cnohilly/code-quiz/',
            technology: ['HTML, CSS, JavaScript'],
            image: require('../../assets/images/code-quiz.jpg'),
            gif: require('../../assets/images/code-quiz.gif')
        },
        {
            name: 'Password Generator',
            description: 'Simple application that prompts the user to specify what type of password they would like generated and then randomly generates a password within the requested parameters.',
            deployed: 'https://cnohilly.github.io/password-generator/',
            repository: 'https://github.com/cnohilly/password-generator/',
            technology: ['HTML, CSS, JavaScript'],
            image: require('../../assets/images/password-generator.jpg'),
            gif: require('../../assets/images/password-generator.gif')
        }
    ])
    return (
        <section className="content-section container my-5">
            <h2 className='text-center text-light'>Portfolio</h2>
            <p className='text-center fs-4 mb-5'>Here are a few examples of my work.
                <br />Hover over the cards to see a small demonstration video or go to the deployed application.</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {projects.map(project => (
                    <Project project={project} key={project.name} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;