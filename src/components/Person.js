import React from 'react';
import ava from '../images/ava.png'
import ViewSelector from "./ViewSelector";

const Person = ({activePeriod, setActivePeriod}) => {
    return (
        <div className="dashboard__person">
            <div className="info-card">
                <img src={ava} alt="" className="info-card__photo"/>
                    <div className="info-card__text">
                        <p className="info-card__subtitle">Report for</p>
                        <h3 className="info-card__title">Jeremy Robson</h3>
                    </div>
            </div>
            <ViewSelector
                activePeriod={activePeriod}
                setActivePeriod={setActivePeriod}/>
        </div>
    );
};

export default Person;