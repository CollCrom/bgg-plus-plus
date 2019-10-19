import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SingleSlider from '../sliders/SingleSlider';

const SingleDotSliderTab = ({
    openClickHandler,
    openVariable,
    text
}) => {
    return (
        <>
            <ListItem button onClick={openClickHandler}>
                <ListItemText primary={text} />
                {openVariable ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openVariable} timeout="auto">
                {SingleSlider()}
            </Collapse>
        </>
    );
};

export default SingleDotSliderTab;