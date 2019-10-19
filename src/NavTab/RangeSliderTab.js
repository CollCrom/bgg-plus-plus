import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Slider from '@material-ui/core/Slider';
import styles from './RangeSlider.module.css';

const RangeSliderTab = ({
    openClickHandler,
    openVariable,
    text,
    value,
    onChangeHandler,
    min,
    max,
    marks
}) => {
    return (
        <>
            <ListItem button onClick={openClickHandler}>
                <ListItemText primary={text} />
                {openVariable ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openVariable} timeout="auto">
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