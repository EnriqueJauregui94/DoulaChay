import React from 'react';
import '../StylePage/Abortions.css';
import { Link } from 'react-router-dom';
import body from '../Components/Images/body.png';



function Abortions() {

    return (
        <div className="Abortions1-Container">

            <div className="Abortions1">
                <div className="header-1">
                    <h1>Abortions & Misscarriages</h1>

                    <img
                        src={body}
                        alt="body-image"
                        className="body1"
                    />

                </div>
                <div className="p-common">
                    <p>Data shows that a third of women in the US have had an abortion.
                        It is also estimated that 30% of all pregnancies will result in a miscarriage.
                        Despite this common experience, many people undergo abortions and miscarriage in isolation or with little support.
                        With every pregnancy outcome, my job is to provide non-judgemental support and ensure you feel safe, heard, and cared for throughout your journey.</p>
                    <p>Support could look like any combination of the following:</p>
                    <ul>
                        <li>Accompaniment during appointments</li>
                        <li>Care at home during medical abortions</li>
                        <li>Traditional aftercare treatments (<Link to="/remedies">see Traditional Remedies</Link>)
                        </li>
                        <li>Ceremony</li>
                        <li>Grief processing program</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Abortions;