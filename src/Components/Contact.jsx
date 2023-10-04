import React from 'react';
import '../StylePage/Contact.css';

function Contact() {
    return (
        <div className="container">
            <form action="action_page.php">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name" />

                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="" name="email" placeholder="Your email" />

                <label htmlFor="contact">Contact Number:</label>
                <input type="text" id="conctact" name="conctact" placeholder="Your best contact number" />

                <label htmlFor="country">Package:</label>
                <select id="country" name="package">
                    <option value="Packages">Please Pick A Package:</option>
                    <option value="package#1">Package #1</option>
                    <option value="package#2">Package #2</option>
                    <option value="package#3">Package #3</option>
                    <option value="question">Question?</option>

                </select>

                <label htmlFor="subject">Message:</label>
                <textarea id="subject" name="subject" placeholder="Write your message here :)" style={{ height: '100px', width: '100%' }}></textarea>

                <div className="SubmitButton">
                    <input type="submit" value="Submit" className="SubmitButton" />
                </div>
            </form>
        </div>
    )
}

export default Contact;
