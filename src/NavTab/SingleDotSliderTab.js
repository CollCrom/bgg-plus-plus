import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SingleSlider from '../sliders/SingleSlider';
import Slider from '@material-ui/core/Slider';

const SingleDotSliderTab = ({
    openClickHandler,
    openVariable,
    text,
    value,
    onChangeHandler
}) => {
    return (
        <>
            <ListItem button onClick={openClickHandler}>
                <ListItemText primary={text} />
                {openVariable ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openVariable} timeout="auto">
                <Slider
                    value={value}
                    onChange={onChangeHandler}
                    valueLabelDisplay="on"
                />
            </Collapse>
        </>
    );
};

export default SingleDotSliderTab;