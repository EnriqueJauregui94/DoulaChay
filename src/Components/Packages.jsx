import React from 'react';
import '../StylePage/Packages.css';
import birth from '../Components/Images/birth.png';
import birth2 from '../Components/Images/birth2.png';
import birth3 from '../Components/Images/birth3.png';


function Packages() {
    return (
        <div className="flex-gap">
            <div className="package-container">
                <div className="package1 package-box">

                    <img
                        src={birth}
                        alt="birth-image"
                        className="birth"
                    />

                    <br></br>
                    <ul className="Pack-List">
                        <li>2-3 prenatal visits</li>
                        <li>On-call availability starting at week 37</li>
                        <li>Labor and birth support</li>
                        <li>Immediate postpartum support up to 2 hours after the birth</li>
                        <li>2-3 postpartum visits</li>
                        <li>A backup doula</li>
                    </ul>
                </div>

                <div className="package2 package-box">

                    <img
                        src={birth2}
                        alt="birth-image"
                        className="birth"
                    />



                    <br></br>
                    <ul className="Pack-List">
                        <li>2-3 prenatal visits</li>
                        <li>On-call availability starting at week 37</li>
                        <li>Labor and birth support</li>
                        <li>Immediate postpartum support up to 2 hours after the birth</li>
                        <li>1 postpartum visit</li>
                        <li>A backup doula</li>
                    </ul>
                </div>
                <div className="package3 package-box">


                    <img
                        src={birth3}
                        alt="birth-image"
                        className="birth"
                    />


                    <br></br>
                    <ul className="Pack-List">
                        <li>1 postpartum planning meeting (completed before birth)</li>
                        <li>1 postpartum meal delivery</li>
                        <li>3 postpartum visits</li>
                    </ul>

                    <br></br>

                    <p className="Pack-Text">
                        Clients may take advantage of the following offerings during postpartum visits:
                    </p>
                    <ul className="Pack-List">
                        <li>Traditional remedies to support emotional and physical recovery</li>
                        <li>Birth processing support</li>
                        <li>Basic newborn care</li>
                        <li>Peer breastfeeding support</li>
                        <li>Light housework</li>
                        <li>Light meal preparation</li>
                        <li>Watch over the baby or other children while you rest or shower</li>
                        <li>Referrals to local resources</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Packages;
