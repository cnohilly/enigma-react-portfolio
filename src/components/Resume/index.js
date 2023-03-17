import React, { useState } from 'react';

function Resume() {

    const [technicalSkills] = useState([
        "JavaScript ES6+",
        "CSS3",
        "HTML5",
        "MongoDB",
        "Express",
        "React",
        "Node",
        "jQuery",
        "SQL",
        "Spring Boot",
        "Thymeleaf",
        "NoSql",
        "GitHub",
        "MySQL",
        "Handlebars",
        "Bootstrap",
        "MVC",
        "ORM",
        "GraphQL",
        "Ajax"
    ]);

    const [experience] = useState([
        {
            title: 'Inventory Specialist',
            years: '2018-Present',
            company: 'Catholic Health Services',
            location: 'West Islip, NY',
            summary: 'Maintained supply rooms and orders for hospital Emergency Room and side units for Catholic Health Services Good Samaritan Hospital',
            accomplishments: [
                'Facilitated good communication between my superiors and the managers of supply locations to meet all stock requests and necessities.',
                'Worked cohesively with the team to make sure orders are picked and delivered in a timely manner with an even distribution of responsibilities.'
            ]
        },
        {
            title: 'Shift Supervisor',
            years: '2017-2018',
            company: 'CVS Pharmacy',
            location: 'West Islip, NY',
            summary: 'Helped manage work responsibilities between team members and keep a well organized storeroom and accurate inventory.',
            accomplishments: [
                'Communicated well with superiors to smoothly handle daily operations and reports.',
                'Worked efficiently and diligently to receive, breakdown, and stock weekly deliveries in a timely manner.',
                'Patiently trained and taught newer employees to handle work responsibilities.'
            ]
        },
        {
            title: 'Clerk/Cashier',
            years: '2016-2017',
            company: 'CVS Pharmacy',
            location: 'West Islip, NY',
            summary: 'Handled responsibilities as a cashier and any other tasks assigned by superiors.',
            accomplishments: [
                'Helped customers in a friendly and efficient manner while taking initiative to solve issues.',
                'Completed assigned tasks diligently without need of constant supervision or direction.'

            ]
        }
    ])

    return (
        <section className="content-section container my-5">
            <div className="">
                <h2 className="text-center text-light">Resume</h2>
                <div className="d-flex justify-content-center">
                    <a className="my-4 mx-2" href="https://bit.ly/resume-cn" target="_blank" rel="noreferrer noopener">
                        <button className="btn btn-primary">Open Resume <i className="bi bi-box-arrow-up-right"></i></button>
                    </a>
                    <a href={require('../../assets/files/cn-resume.pdf')}
                        className="my-4 mx-2" download>
                        <button className="btn btn-success"><i className="bi bi-download"></i></button>
                    </a>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-12 col-md-4">
                    <h3 className='text-center'>Technical Skills</h3>
                    <ul className="list-group">
                        {technicalSkills.map(skill => {
                            return (
                                <li className='list-group-item' key={skill.split(' ').join('-').toLowerCase()}>
                                    {skill}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-12 col-md-8">
                    <h3 className="text-center">Experience</h3>
                    <ul className="list-group">
                        {experience.map(job => {
                            return (
                                <li className="list-group-item" key={job.title.split(' ').join('-').toLowerCase()}>
                                    <div className='d-flex align-items-sm-center justify-content-between flex-wrap flex-column flex-sm-row'>
                                        <h4 className='flex-shrink-0'>{job.title}</h4>
                                        <strong className='flex-shrink-0'>{job.years}</strong>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap flex-column flex-sm-row'>
                                        <strong className='flex-shrink-0'>{job.company}</strong>
                                        <strong className='flex-shrink-0'>{job.location}</strong>
                                    </div>

                                    <div>
                                        <p>{job.summary}</p>
                                        <span>Key Accomplishments:</span>
                                        <ul>
                                            {job.accomplishments.map((accomplishment, id) => {
                                                return <li key={id}>{accomplishment}</li>
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;