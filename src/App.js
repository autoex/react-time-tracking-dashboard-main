import React, {useEffect, useState} from 'react';
import Person from "./components/Person";
import DashboardItem from "./components/DashboardItem";

const App = () => {
    const [activePeriod, setActivePeriod] = useState('daily');
    const [dashboardData, setDashboardData] = useState([])
    useEffect(()=> {
        const getDashboardData = async (url = '/data.json') => {
            const response = await fetch(url);
            const data = await response.json();
            return data
        }
        getDashboardData().then(
            data=>setDashboardData(data)
        )
    }, [])
    return (
        <section className="dashboard">
            <div className="dashboard__content">
            <Person
                activePeriod={activePeriod}
                setActivePeriod={setActivePeriod}/>
                {dashboardData.map(item=> <DashboardItem key={item.title} {...item} activePeriod={activePeriod}/>)}

            </div>
          
        </section>
    );
};

export default App;