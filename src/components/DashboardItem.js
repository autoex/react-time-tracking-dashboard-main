import React from 'react';
import icon from '../images/icon-ellipsis.svg'

const DashboardItem = ({title, timeframes, activePeriod}) => {
    return (
        <div className={"dashboard__item dashboard__item--"+title.toLowerCase().replace(/ /g,"-")}>
            <article className="tracking-card">
                <header className="tracking-card__header">
                    <h4 className="tracking-card__title">{title}</h4>
                    <img src={icon} alt="menu" className="tracking-card__menu" />
                </header>
                <div className="tracking-card__body">

                    <div className="tracking-card__time">
                        {timeframes[activePeriod].current}hrs
                    </div>
                    <div className="tracking-card__prev-period">
                        Previous - {timeframes[activePeriod].previous}hrs
                    </div>
                </div>
            </article>
        </div>
    );
};

export default DashboardItem;