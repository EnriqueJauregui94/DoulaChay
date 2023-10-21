import React from 'react';
import '../StylePage/Remedies.css';
import Remedies1 from '../Components/Images/Remedies1.jpeg';

function Remedies() {

    return (
        <div className="Remedies">
            <div className="header">
                <h1>Traditional Remedies</h1>

                <img
                    src={Remedies1}
                    alt="remedies-image"
                    className="Remedies1"
                />

                <div className="p1">
                    <p>Traditional remedies are often incorporated in postpartum visits and are catered to the needs of the client.</p>

                    <p>
                        Having access to support during pregnancy can have a lasting impact on a person’s well being. As a full spectrum doula, I am trained to provide support for the full range of pregnancy outcomes, ​including abortion.
                    </p>
                </div>

                <div className="p2">
                    <p>My offerings include a variety of educational, physical, emotional, and spiritual forms of support. Whether it is a medicated or unmedicated birth, vaginal or cesarean, a miscarriage or an abortion, I would be honored to be part of your journey and I am here to support you wholeheartedly. My intention is for all people to feel safe, heard, and cared for throughout their journey.</p>
                </div>


                <div className="title"><h2>Traditional Remedies Offered:</h2></div>

                <div className="list">
                    <ul>
                        <li>Cerrada/closing of the bones ceremony</li>
                        <li>Abdominal massage/sobada and binding</li>
                        <li>Cesarean scar tissue remediation massage <span class="purple-text">(only performed 6+ weeks postpartum)</span></li>
                        <li>Pelvic steam</li>
                        <li>Herbal bath</li>
                        <li>Birth processing support</li>
                        <li>Limpias</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Remedies;