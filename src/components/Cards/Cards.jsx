import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>

            <div className={cx(styles.card, styles.cardInfected)}>
                <h2 className={styles.name}>
                    Infected
                </h2>
                <div >
                <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    seperator=","
                    className={styles.count}
                />
                <div>
                    {new Date(lastUpdate).toDateString()}
                </div>
                <div className={styles.info}>
                    Number of active cases of covid-19
                </div>
                </div>

            </div>
            <div className={cx(styles.card, styles.cardRecovered)}>
                <h2 className={styles.name}>
                    Recovered
                </h2>
                <div >
                <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    seperator=","
                    className={styles.count}
                />
                <div>
                    {new Date(lastUpdate).toDateString()}
                </div>
                <div className={styles.info}>
                    Number of recovered cases of covid-19
                </div>
                </div>
            </div>
            <div className={cx(styles.card, styles.cardDeaths)}>
                <h2 className={styles.name}>
                    Deaths
                </h2>
                <div>
                <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    seperator=","
                    className={styles.count}
                />
                <div>
                    {new Date(lastUpdate).toDateString()}
                </div>
                <div className={styles.info}>
                    Number of deaths due to covid-19
                </div>
                </div>
            </div>
            {/* <Grid container spacing={3} justify="center"> 
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths due to covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default Cards
