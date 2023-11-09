
import { useState } from "react";
import MapGame from "../../Map/index";
import Button from "../../common/Button"
import InputComp from "../../common/InputComp"
import classes from "./List.module.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const GameList = () => {

    const [filter, setFilter] = useState("");

    const navigate = useNavigate();
    const game = useSelector((state) => state.game);


    return (
        <div className={classes.container}>
            <div className={classes.title}>Game List</div>
            <div className={classes.wrapper}>
                <InputComp onChange={(e) => setFilter(e.target.value)} class="listInput" placeholder="search" />
                <Button onClick={() => navigate("/create_game")} text="New Game" />
            </div>
            {game && <MapGame filter={filter} game={game} />}
        </div>
    )
}

export default GameList