import React from 'react';

const ViewSelector = ({activePeriod, setActivePeriod}) => {
    const periods = [
        {id: 'daily', period: 'daily'},
        {id: 'weekly', period: 'weekly'},
        {id: 'monthly', period: 'monthly'}
    ];

    return (
        <div className="view-selector">
            {periods.map(period =>
                <div key={period.id}
                     className={activePeriod === period.id ? 'view-selector__item view-selector__item--active' : 'view-selector__item'}
                     onClick={() => setActivePeriod(period.id)}>
                    {period.period}
                </div>
            )}

        </div>
    );
};

export default ViewSelector;