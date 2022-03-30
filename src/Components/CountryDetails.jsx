import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import  { useParams, useNavigate } from 'react-router'
import '../App.css'

function CountryDetails({darkMode, countries}) {
    const params = useParams();
    const navigate = useNavigate();

    let name;
    let flagImg;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevalDomain;
    let currencies = [];
    let languages = [];
    let borders = [];

    countries.forEach(country => {
        if(country.alpha3Code === params.countryCode){
            name = country.name;
            flagImg = country.flag;
            nativeName = country.nativeName;
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;
            topLevalDomain = country.topLevalDomain;
        }
    })

    const goBack =() => {
        navigate("/");
    }
    
    return (
        <div className="country-details" >
            <buttom className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBack}>
                <ArrowBackIcon />
                <p>Go Back</p>
            </buttom>

            <div className="country-details-body">
                <div className="img-container">
                    <img src={flagImg} alt="" />
                </div>

                <div className="info">
                    <h2>{name}</h2>
                    <div className="info-container">
                        <div className="left-info">
                            <p>
                                Native Name: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{nativeName}</span>
                            </p>
                            <p>
                                Population: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{population}</span>
                            </p>
                            <p>
                                Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
                            </p>
                            <p>
                                Sub Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{subregion}</span>
                            </p>

                        </div>
                        <div className="right-info">
                            <p>
                                Capital: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
                            </p>
                            <p>
                                Top-level Domain: <span className={`values ${darkMode ? 'darkMode' : ''}`}>{topLevalDomain}</span>
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