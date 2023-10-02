import React from 'react';
import '../StylePage/Packages.css';

function Packages() {
    return (
        <div className="flex-gap">
            <div className="package-container">
                <div className="package1 package-box">
                    <h1>Package #1</h1>
                    <h2>Birth and Postpartum Doula
                    </h2>
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
                    <h1>Package #2</h1>
                    <h2>Birth Doula
                    </h2>
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
                    <h1>Package #3</h1>
                    <h2>Postpartum Doula
                    </h2>
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
                        <li>Traditional remedies to support emotional and physical recovery (See next card)</li>
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
