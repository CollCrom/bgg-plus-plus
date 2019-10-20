import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Input from "@material-ui/core/Input";
import categories from "../reducers/categories";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const MultiselectTab = ({
    openClickHandler,
    openVariable,
    text,
    names,
    action,
    store$,
    onActiveHandler,
    active
}) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300,
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
    }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const classes = useStyles();
    let values = [];

    const handleChange = event => {
        const option = event.target.name;
        values = store$.slice();

        let  idx = values.indexOf(option);
        if (idx < 0){
            values.push(option);
        } else {
            values.splice(idx, 1);
        }
        action(values);
    };

    const handleChecked = (event) => {

    }

    return (
        <>
            <ListItem button onClick={openClickHandler}  className={openVariable ? 'tab-active' : null}>
                <Checkbox checked={active} onChange={onActiveHandler} value="active" />
                <ListItemText primary={text} />
                {openVariable ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openVariable} timeout="auto">

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">{text}</InputLabel>
                    <Select
                        multiple
                        value={store$}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}>
                        {
                            names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox name={name} onChange={handleChange} checked={store$.indexOf(name) >= 0} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>

            </Collapse>
        </>
    );
};

export default MultiselectTab;
