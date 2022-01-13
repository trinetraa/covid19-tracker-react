import { useState, useEffect } from "react";
import GlobalCount from "./GlobalCount";
import { getGlobalStats } from "./utilities";

export default function CovidStats() {

    const [stats, setStats] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [globalStats, setGlobalStats] = useState({totalCases:0, deaths:0, recovered:0})
    useEffect(() => {
        getCovidStats();
    }, []);
    useEffect(()=>{
        const temp = {totalCases: getGlobalStats(stats, "cases", "total"), deaths: getGlobalStats(stats, "cases", "recovered"), recovered: getGlobalStats(stats, "deaths", "total")};
        setGlobalStats(temp);
        console.table(stats);
    }, [stats])

    const getCovidStats = async () => {
        try{
            const fetchResponse = await fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "711bfa8026mshd398dcea80f917cp125e11jsn917c0477c078"
            }
        });
        const covidStatsResult = await fetchResponse.json();
        setStats(covidStatsResult.response);        
        }
        catch(err){
            console.log(err);
        }  
    }
    return (
            <div className="covidstats-container">
                <GlobalCount totalCovidCases = {globalStats.totalCases} deaths = {globalStats.deaths} recovered = {globalStats.recovered}/>
            </div>
        )
    }