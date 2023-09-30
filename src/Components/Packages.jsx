import React from 'react';
import '../StylePage/Packages.css';

function Packages() {
    return (
        <div className="package-container" style={{ backgroundColor: 'black', color: 'white' }}>
            <ul className='Packages'>
                <li className="package1">
                    <h1>Package #1</h1>
                    <p>
                        <li className="Pack-List">
                            <li>2-3 prenatal visits</li>
                        </li>
                        <li className="Pack-List">
                            <li>On-call availability starting at week 37</li>

                        </li>
                        <li className="Pack-List">
                            <li>Labor and birth support</li>
                        </li>
                        <li className="Pack-List">
                            <li>Immediate postpartum support up to 2 hours after the birth</li>
                        </li>
                        <li className="Pack-List">
                            <li>2-3 postpartum visits</li>
                        </li>
                        <li className="Pack-List">
                            <li>A back up doula</li>
                        </li>

                    </p>
                </li>

                <li className="package2">
                    <h1>Package #2</h1>
                    <p>
                        <li className="Pack-List">
                            <li>2-3 prenatal visits</li>
                        </li>
                        <li className="Pack-List">
                            <li>On-call availability starting at week 37</li>

                        </li>
                        <li className="Pack-List">
                            <li>Labor and birth support</li>
                        </li>
                        <li className="Pack-List">
                            <li>Immediate postpartum support up to 2 hours after the birth</li>
                        </li>
                        <li className="Pack-List">
                            <li>1 postpartum visit</li>
                        </li>
                        <li className="Pack-List">
                            <li>A back up doula</li>
                        </li>

                    </p>
                </li>

                <li className="package3">
                    <h1>Package #3</h1>
                    <p>
                        <li className="Pack-List">
                            <li>1 postpartum planning meeting (completed before birth)</li>
                        </li>
                        <li className="Pack-List">
                            <li>1 postpartum meal delivery</li>
                        </li>
                        <li className="Pack-List">
                            <li>3 postpartum visits</li>
                        </li>
                        <li className="Pack-Text">
                            <li>Clients may take advantage of the following offerings during postpartum visits:</li>
                        </li>
                        <li className="Pack-List">
                            <li>-Traditional remedies to support emotional and physical recovery (See next card)</li>
                            <li>-Birth processing support</li>
                            <li>-Basic newborn care</li>
                            <li>-Peer breastfeeding support</li>
                            <li>-Light house work</li>
                            <li>-Light meal preparation</li>
                            <li>-Watch over baby or other children while you rest or shower</li>
                            <li>-Referrals to local resources</li>
                        </li>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Packages;
