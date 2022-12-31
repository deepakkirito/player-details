import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:8000/player?skip="
// const baseURL2 = "http://localhost:8000/player"


function PlayerDetails() {

    const [player, setPlayer] = useState(null);
    const [toggle, setToggle] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        axios.get(baseURL + "0").then((response) => {
            setPlayer(response.data);
        });
    }, []);

    useEffect(() => {
        player && console.log(player[0].end)
        player && setDisabled(player[0].end)
    }, [player]);

    useEffect(() => {
        axios.get(baseURL + toggle).then((response) => {
            setPlayer(response.data);
        });
    }, [toggle]);

    const previous = () => {
        setToggle(toggle-1)
    }
    const next = () => {
        setToggle(toggle+1)
    }
    

    player && console.log(player[0].end, disabled);

    return <div>
        <nav>Top Footbal Players</nav>
        <div className="playerDetails">
        <button disabled={toggle == 0 && true} className="playerButton" onClick={previous}>Previous</button>
        {player && <div className="player">
            <img src={player[0].profile} className="profile"></img>
            <div className="playerData">
                <h1>{player[0].name}</h1>
                <p><span>Ranking: </span>{player[0].ranking}</p>
                <p><span>Age: </span>{player[0].age}</p>
                <p><span>Team: </span>{player[0].team}</p>
                <p><span>Position: </span>{player[0].position}</p>
                <p><span>Total Goals: </span>{player[0].totalGoals}</p>
                <p><span>Totlal Matches: </span>{player[0].totalMatches}</p>
            </div>
        </div>}
        <button disabled={player && disabled == "true"} className="playerButton" onClick={next}>Next</button>

    </div>
    </div>

}

export default PlayerDetails
