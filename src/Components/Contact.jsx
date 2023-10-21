import React from 'react';
import '../StylePage/Contact.css';
import contactme1 from '../Components/Images/contactme1.png';


function Contact() {
    return (
        <div className="Container-container">
            <div className="container">
                <form action="action_page.php">

                    <img
                        src={contactme1}
                        alt="contact-image"
                        className="contactme"
                    />
                    <br></br>


                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name" />

                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name" />

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="" name="email" placeholder="Your email" />

                    <label htmlFor="contact">Contact Number:</label>
                    <input type="text" id="conctact" name="conctact" placeholder="Your best contact number" />

                    <label htmlFor="package">Services:</label>
                    <select id="package" name="package">
                        <option value="Packages">Select A Package:</option>
                        <option value="package#1">Birth & Postpartum Package</option>
                        <option value="package#2">Postpartum Package</option>
                        <option value="package#3">Birth Package</option>
                        <option value="question">Questions?</option>

                    </select>

                    <label htmlFor="subject">Message Me:</label>
                    <textarea id="subject" name="subject" placeholder="Write your message here :)" style={{ height: '100px', width: '100%' }}></textarea>

                    <div className="SubmitButton">
                        Submit
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
