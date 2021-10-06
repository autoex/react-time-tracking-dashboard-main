import React from 'react';
import icon from '../images/icon-ellipsis.svg';
import {useSpring, animated} from 'react-spring'

const DashboardItem = ({title, timeframes, activePeriod}) => {
    const styles = useSpring({to: {opacity: 1, transform: 'translateY(0)'}, from: {opacity: 0, transform: 'translateY(-4rem)'},  reset: true})
    return (
        <div className={"dashboard__item dashboard__item--" + title.toLowerCase().replace(/ /g, "-")}>
            <article className="tracking-card">
                <header className="tracking-card__header">
                    <h4 className="tracking-card__title">{title}</h4>
                    <img src={icon} alt="menu" className="tracking-card__menu"/>
                </header>
                <div className="tracking-card__body">

                    <div className="tracking-card__time">
                        <animated.div style={styles}>
                            {timeframes[activePeriod].current}hrs
                        </animated.div>
                    </div>
                    <div className="tracking-card__prev-period">
                        <animated.div style={styles}>
                            Previous - {timeframes[activePeriod].previous}hrs
                        </animated.div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default DashboardItem;