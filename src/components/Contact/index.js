import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';


function Contact() {

    // const inputs = [
    //     {
    //         name: 'email',
    //         element: document.querySelector("input[name='email']")
    //     },
    //     {
    //         name: 'name',
    //         element: document.querySelector("input[name='name']")
    //     },
    //     {
    //         name: 'message',
    //         element: document.querySelector("textarea[name='message']")
    //     }
    // ]


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [formComplete, setFormComplete] = useState(false);
    // use effect to determine if a form is complete with values
    useEffect(() => {
        setFormComplete(Object.values(formState).every(input => {
            return input;
        }))
    }, [formState]);

    // function to call when a form field loses focus
    // variable used to hold error message to avoid async issues
    function handleChange(e) {
        let errorText = '';
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                errorText = 'Please enter a valid email.';
            }
        } else {
            if (!e.target.value.length) {
                errorText = `${capitalizeFirstLetter(e.target.name)} is required.`;
            }
        }
        if (errorText) {
            setErrorMessage(errorText, setFormState({ ...formState, [e.target.name]: '' }));
        } else {
            setErrorMessage('', setFormState({ ...formState, [e.target.name]: e.target.value }));
        }
    }

    // handles submitting the form, verifies that there is currently no error message and the form is completed
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage && formComplete) {
            console.log(formState);
        }
    }

    return (
        <section className="content-section container my-3" id="contact">
            <form action="submit" id="contact-form" onSubmit={handleSubmit}>
                <h3 className='mb-3 text-light'>Contact Me!</h3>
                <div className='form-floating mb-3'>
                    <input name='name' type="text"
                        className="form-control text-white bg-secondary border-secondary" id="floatInput"
                        placeholder='Name' onBlur={handleChange} />
                    <label htmlFor="floatInput" className='text-white'>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input name='email' type="email"
                        className="form-control text-white bg-secondary border-secondary" id="emailInput"
                        placeholder="Email" onBlur={handleChange} />
                    <label htmlFor="emailInput" className='text-white'>Email</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea name='message' id="messageInput"
                        className="form-control text-white bg-secondary border-secondary" placeholder='Type a message'
                        onBlur={handleChange}></textarea>
                    <label htmlFor="messageInput" className='text-white'>Message</label>
                </div>
                <div className="float-sm-end d-flex align-items-center justify-content-sm-center flex-column flex-sm-row">
                    <span className='text-danger mx-3 order-last order-sm-first'>{errorMessage}</span>
                    <button className="btn btn-primary mb-3 mb-sm-0 px-5 my-auto order-first order-sm-last" id="submit-btn">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;