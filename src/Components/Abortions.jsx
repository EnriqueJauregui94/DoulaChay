import React from 'react';
import '../StylePage/Abortions.css';
import { Link } from 'react-router-dom';


function Abortions() {

    return (
        <div className="Abortions1">
            <div className="header-1">
                <h1>Abortion & Misscarriages</h1>
            </div>
            <div className="p-1">
                <p>Data shows that a third of women in the US have had an abortion.
                    It is also estimated that 30% of all pregnancies will result in a miscarriage.
                    Despite this common experience, many people undergo abortions and miscarriage in isolation or with little support.
                    With every pregnancy outcome, my job is to provide non-judgemental support and ensure you feel safe, heard, and cared for throughout your journey.
                    Support could look like any combination of the following:
                    <ul>
                        <li>Accompaniment during appointments</li>
                        <li>Care at home during medical abortions</li>
                        <li>Traditional aftercare treatments (<Link to="/remedies">see Traditional Remedies)</Link>
                        </li>
                        <li>Ceremony</li>
                        <li>Grief processing program</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Abortions;