import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Slider from '@material-ui/core/Slider';
import styles from './RangeSlider.module.css';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Container} from "@material-ui/core";

const RangeSliderTab = ({
    openClickHandler,
    openVariable,
    text,
    value,
    onChangeHandler,
    min,
    max,
    marks,
    onActiveHandler,
    active
}) => {
    return (
        <>
            <ListItem button className={active ? 'tab-active' : null}>
                <Checkbox checked={active} onChange={onActiveHandler} value="active" />
                <div className={"flexy"}  onClick={openClickHandler}>
                    <ListItemText primary={text}/>
                    {openVariable ? <ExpandLess /> : <ExpandMore />}
                </div>
            </ListItem>
            <Collapse in={openVariable} timeout="auto" >
                <div className={styles.sliderContainer}>
                    <Slider
                        value={value}
                        onChange={onChangeHandler}
                        valueLabelDisplay="on"
                        min={min}
                        max={max}
                        marks={marks}
                    />
                </div>
            </Collapse>
        </>
    );
};

export default RangeSliderTab;
