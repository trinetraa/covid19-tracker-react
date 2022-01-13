export default function GlobalCount(props){
    return(
        <div className="global-count">
            <div className="total-global-cases">
                Total Cases: {props.totalCovidCases}
            </div>
            <div className="global-deaths">
                Total Deaths: {props.deaths}
            </div>
            <div className="global-recovered">
                Total Recovered: {props.recovered}
            </div>
        </div>
    )
}