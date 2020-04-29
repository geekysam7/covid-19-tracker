import React, {useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData());
        }

        // console.log(dailyData);

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor:'#7e8ce0',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor:'#ef6950',
                backgroundColor: '#ef6950',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    const barChart = (
        confirmed ?
        (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People', 
                        backgroundColor: ['#7e8ce0','#4acfac', '#ef6950'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options={{
                    legend: { display: false},
                    title: {display: true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    )

    return (
        <div className={styles.container}>
            {/* {console.log("country",country)} */}
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
