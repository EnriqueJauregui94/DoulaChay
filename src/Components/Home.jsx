import React from 'react';
import '../StylePage/Home.css';
import Chay1 from './Images/Chay1.jpeg';


function Home() {
    return (
        <div className="Home">

            <div className="h1">
                <h1>Hello I'm Chay Tadeo!</h1>
            </div>
            <img
                src={Chay1}
                alt="Welcome Image"
                className="Home-Image"
            />
            <div className="text">
                <p>
                    Having access to support during pregnancy can have a lasting impact on a person’s well being.
                    As a full spectrum doula, I am trained to provide support for the full range of pregnancy outcomes, ​including abortion.
                    My offerings include a variety of educational, physical, emotional, and spiritual forms of support.
                    Whether it is a medicated or unmedicated birth, vaginal or cesarean, a miscarriage or an abortion, I would be honored to be part of your journey and I am here to support you wholeheartedly.
                    My intention is for all people to feel safe, heard, and cared for throughout their journey.
                </p>
            </div>
        </div >
    );
}
export default Home;