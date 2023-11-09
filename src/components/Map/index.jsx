import Button from "../common/Button";
import { useDispatch } from "react-redux";
import classes from "./Map.module.css"
import { useSnackbar } from 'notistack';

const MapGame = (props) => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const deleteData = (id) => {
        dispatch({
            type: "REMOVE_GAME",
            payload: {
                id,
            },
        });
        enqueueSnackbar('Game Deleted!', { variant: 'success' });
    };

    return (
        <div className={classes.container}>
            {
                props.game
                    .filter((item) =>
                        item.name.toLowerCase().includes(props.filter) ||
                        item.bundle.toLowerCase().includes(props.filter) ||
                        item.owner.toLowerCase().includes(props.filter)
                    )
                    .map((item) => (
                        <div className={classes.card} key={item.id}>
                            <img src={item.icon} alt={item.name} />
                            <div className={classes.info}><div className={classes.title}>Game Name: </div>{item.name}</div>
                            <div className={classes.info}><div className={classes.title}>Bundle: </div> {item.bundle}</div>
                            <div className={classes.info}><div className={classes.title}>Owner: </div> {item.owner}</div>
                            <Button class="delete" onClick={() => deleteData(item.id)} text="Delete" />
                        </div>
                    ))
            }
        </div>
    );
};

export default MapGame;
