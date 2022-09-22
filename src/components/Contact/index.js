import React from 'react';

function Contact() {
    return (
        <section className="content-section container mt-3" id="contact">
            <form action="submit" id="contact-form">
                <h3 className='mb-3'>Contact Me!</h3>
                <div className='form-floating mb-3'>
                    <input type="text" className="form-control" id="floatInput" placeholder='Name' />
                    <label htmlFor="floatInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" placeholder="Email" className="form-control" id="emailInput" />
                    <label htmlFor="emailInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea id="messageInput" className="form-control" placeholder='Type a message'></textarea>
                    <label htmlFor="messageInput">Message</label>
                </div>
                <div className="float-sm-end d-flex align-items-center justify-content-sm-center flex-column flex-sm-row">
                    <span className='text-danger mx-3 order-last order-sm-first'>Please enter a valid email.</span>
                    <button className="btn btn-success mb-3 mb-sm-0 px-5 my-auto order-first order-sm-last" id="submit-btn">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;