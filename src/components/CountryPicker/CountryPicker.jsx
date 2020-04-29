import React, { useState, useEffect } from 'react'
import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [state, setState] = useState('')

    useEffect( () => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
            <form className={styles.fromControl}>
                <select value={state} onChange={ e => { handleCountryChange(e.target.value)
                setState(e.target.value)
                }} className="selectColor">
                    <option value="">Global</option>
                    {fetchedCountries.map((country,i )=> <option key={i} value={country}>{country}</option>)}
                </select>
            </form>
    )
}

export default CountryPicker
