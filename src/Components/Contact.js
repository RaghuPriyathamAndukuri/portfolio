import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me with any questions or inquiries. (Not Functional)</p>
            <div className="contact-form">
                <form action="#" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;