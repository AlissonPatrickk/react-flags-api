import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../App.css'

function CountryDetails({darkMode}) {
    return (
        <div className="country-details" >
            <buttom className={`back ${darkMode ? 'darkMode' : ''}`}>
                <ArrowBackIcon />
                <p>Go Back</p>
            </buttom>

            <div className="country-details-body">
                <div className="img-container">
                    <img src="" alt="" />
                </div>

                <div className="info">
                    <h2>Name</h2>
                    <div className="info-container">
                        <div className="left-info">
                            <p>
                                Native Name: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Population: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Sub Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>

                        </div>
                        <div className="right-info">
                            <p>
                                Capital: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Top-level Domain: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Currencies: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                            <p>
                                Languages: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
                            </p>
                        </div>
                    </div>
                    Border Countries:
                    <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
                        <p>test</p>
                    </div>
                    <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
                        <p>test</p>
                    </div>
                    <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
                        <p>test</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountryDetails