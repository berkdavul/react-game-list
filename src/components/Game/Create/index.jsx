import { useState } from "react";
import classes from "./Create.module.css";
import {
    nameValidator,
    bundleValidator,
    emailValidator,
} from "../../../helpers/validator";
import InputComp from "../../common/InputComp";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

const CreateGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ownerErr, setownerErr] = useState("");
    const [bundleErr, setbundleErr] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [iconErr, setIconErr] = useState("");

    const [name, setName] = useState("");
    const [bundle, setBundle] = useState("");
    const [owner, setOwner] = useState("");
    const [icon, setIcon] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const iconHandler = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setIcon(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setIcon("");
        }
    }
    const validateFrom = () => {

        var isValid = true;

        if (nameValidator(name)) {
            isValid = false;
            setNameErr(nameValidator(name));
        }

        if (bundleValidator(bundle)) {
            isValid = false;
            setbundleErr(bundleValidator(bundle));
        }
        if (emailValidator(owner)) {
            isValid = false;
            setownerErr(emailValidator(owner));
        }
        if (icon === "") {
            isValid = false;
            setIconErr("Image field is required.");
        }
        if (!isValid) return;

        dispatch({
            type: "ADD_GAME",
            payload: {
                name,
                bundle,
                owner,
                icon,
                id: Math.ceil(Math.random() * 100),
            },
        });
        navigate("/")
        enqueueSnackbar('Game Created!', { variant: 'success' });

    };


    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!validateFrom()) return;
    };

    return (
        <div className={classes.wrapper}>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.title}>New Game</div>
                <InputComp
                    setError={setNameErr}
                    value={name}
                    error={nameErr}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Game Name"
                    type="text"
                ></InputComp>

                <InputComp
                    name="bundle"
                    error={bundleErr}
                    setError={setbundleErr}
                    value={bundle}
                    onChange={(e) => setBundle(e.target.value)}
                    placeholder="Bundle"
                    type="text"
                ></InputComp>

                <InputComp
                    name="owner"
                    error={ownerErr}
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Owner"
                    type="text"
                    setError={setownerErr}
                ></InputComp>

                <InputComp
                    value={icon}
                    class="file"
                    onChange={iconHandler}
                    type="file"
                    accept="image/*"
                    error={iconErr}
                    setError={setIconErr}
                ></InputComp>
                <Button type="submit" text="Save" class="save"></Button>
            </form>
        </div>
    );
};

export default CreateGame;
