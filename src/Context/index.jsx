import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [Weather, setWeather] = useState([]);
    const [place, setPlace] = useState('Antalya');
    const [thisLocation, setLocation] = useState('');
    const [weatherData7001, setWeatherData7001] = useState(null);
    const [weatherData7002, setWeatherData7002] = useState(null);
    const [weatherData7003, setWeatherData7003] = useState(null);
    const [dailyHistoricalData, setDailyHistoricalData] = useState({
        7001: [],
        7002: [],
        7003: []
    });

    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/api/data',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnName: 0,
            },
        };

        try {
            const response = await axios.request(options);
            console.log('Response Data:', response.data);

            if (response.data && response.data.length > 0) {
                setLocation(`${response.data[0].ProvinceName}, ${response.data[0].CountryName}`);
                
                // Ayırma işlemi
                const data7001 = response.data.find(item => item.MainID === 7001);
                const data7002 = response.data.find(item => item.MainID === 7002);
                const data7003 = response.data.find(item => item.MainID === 7003);
                
                setWeatherData7001(data7001);
                setWeatherData7002(data7002);
                setWeatherData7003(data7003);
                setWeather(response.data[0]); // Tüm hava durumu verisini set et

                // Verileri ID'ye göre güncelle
                if (data7001) {
                    setDailyHistoricalData(prevData => ({
                        ...prevData,
                        7001: [...prevData[7001], data7001]
                    }));
                }
                if (data7002) {
                    setDailyHistoricalData(prevData => ({
                        ...prevData,
                        7002: [...prevData[7002], data7002]
                    }));
                }
                if (data7003) {
                    setDailyHistoricalData(prevData => ({
                        ...prevData,
                        7003: [...prevData[7003], data7003]
                    }));
                }
            } else {
                console.error("Data is undefined, null, or empty");
            }
        } catch (e) {
            console.error(e);
            alert('This place does not exist');
        }
    };

    useEffect(() => {
        fetchWeather();
        const interval = setInterval(fetchWeather, 3600000); // Her saat başı veriyi güncelle
        return () => clearInterval(interval);
    }, [place]);

    return (
        <StateContext.Provider value={{
            Weather,
            weatherData7001,
            weatherData7002,
            weatherData7003,
            dailyHistoricalData,
            setPlace,
            thisLocation,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
