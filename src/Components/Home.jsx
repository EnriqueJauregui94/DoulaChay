import React from 'react';
import '../StylePage/Home.css';
import Chay1 from './Images/Chay1.jpeg';
import Chay from './Images/Chay.jpg';
import Chayy from './Images/Chayy.jpg';


function Home() {
    return (
        <div className="Home-container">
            <div className="Home">
                <div className="center-content">
                    <div className="h1">
                        <h1>Doula Chay Tadeo</h1>
                    </div>

                    <div className="Column Container">
                        <div className="column">
                            <img
                                src={Chayy}
                                alt="Welcome Image"
                                className="Home-Image"
                            />

                            <img
                                src={Chay1}
                                alt="Welcome Image"
                                className="Home-Image"
                            />

                            <img
                                src={Chay}
                                alt="Welcome Image"
                                className="Home-Image"
                            />
                        </div>
                    </div>


                    <div className="text">
                        <div className="h2">
                            <h2>Full Spectrum Doula</h2>
                        </div>
                        <p>
                            Having access to support during pregnancy can have a lasting impact on a person’s well being. As a full spectrum doula, I am trained to provide support for the full range of pregnancy outcomes, ​including abortion.
                        </p>
                        <p>My offerings include a variety of educational, physical, emotional, and spiritual forms of support. Whether it is a medicated or unmedicated birth, vaginal or cesarean, a miscarriage or an abortion, I would be honored to be part of your journey and I am here to support you wholeheartedly. My intention is for all people to feel safe, heard, and cared for throughout their journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
