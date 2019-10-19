import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import Collapse from "@material-ui/core/Collapse";
import MinMaxNumInputTab from '../NavTab/MinMaxNumInputTab';
import MultiselectTab from '../NavTab/MultiselectTab';
import RangeSliderTab from '../NavTab/RangeSliderTab';
import SingleDotSlider from '../NavTab/SingleDotSliderTab';

const drawerWidth = 360;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowY: "scroll",
        overflowX: "scroll",
        height: "auto"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    hamburgerContainer: {
        cursor: 'pointer',
        height: '70px',
        width: '70px',
        padding: '15px 0 0 15px'
    },
    hamburgerIcon: {
        width: '70px',
        height: '70px'
    }
}));
const PersistentDrawerLeft = ({
    playingTimeOpen,
    suggestPlayersOpen,
    reviewScoreOpen,
    numReviewersOpen,
    complexityOpen,
    numPlayersOpen,
    categoriesOpen,
    ageRangeOpen,
    designerOpen,
    artistsOpen,
    publisherOpen,
    leftNavOpen,
    setLeftNavOpenState,
    setTabOpenState
}) => {
    const classes = useStyles();
    const theme = useTheme();

    const toggleDrawer = () => {
        leftNavOpen = !leftNavOpen;
        setLeftNavOpenState(leftNavOpen);
    };

    const toggleTab = (tabName, tabState) => () => {
        setTabOpenState({
            [tabName]: !tabState
        });
    };

    const Collapser = withStyles({
        container: {
            minHeight: "400px",
        }
    })(Collapse);

    return (
        <div>
            <CssBaseline />
            <div className={classes.hamburgerContainer}
                onClick={toggleDrawer}
            >
                <MenuIcon className={classes.hamburgerIcon} />
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={leftNavOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    <RangeSliderTab
                        openClickHandler={toggleTab('playingTime', playingTimeOpen)}
                        openVariable={playingTimeOpen}
                        text="Playing Time"
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('ageRange', ageRangeOpen)}
                        openVariable={ageRangeOpen}
                        text="Age Range"
                    />
                    <MinMaxNumInputTab
                        openClickHandler={toggleTab('numPlayers', numPlayersOpen)}
                        openVariable={numPlayersOpen}
                        text="Number of Players"
                    />
                    <MinMaxNumInputTab
                        openClickHandler={toggleTab('suggestPlayers', suggestPlayersOpen)}
                        openVariable={suggestPlayersOpen}
                        text="Suggested Number of Players"
                    />
                    <SingleDotSlider
                        openClickHandler={toggleTab('reviewScore', reviewScoreOpen)}
                        openVariable={reviewScoreOpen}
                        text="Average Review Score"
                    />
                    <SingleDotSlider
                        openClickHandler={toggleTab('numReviewers', numReviewersOpen)}
                        openVariable={numReviewersOpen}
                        text="Number of Reviews"
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('complexity', complexityOpen)}
                        openVariable={complexityOpen}
                        text="Complexity"
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('categories', categoriesOpen)}
                        openVariable={categoriesOpen}
                        text="Category"
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('designer', designerOpen)}
                        openVariable={designerOpen}
                        text="Designer"
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('artists', artistsOpen)}
                        openVariable={artistsOpen}
                        text="Artist"
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('publisher', publisherOpen)}
                        openVariable={publisherOpen}
                        text="Publisher"
                    />
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: leftNavOpen,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}

const enhance = compose(
    connect(
        ({ openTabs, leftNavOpen }) => ({
            openTabs,
            leftNavOpen,
        }),
        {
            setTabOpenState: tab => ({ // {tabName: boolean}
                type: 'SET_TAB_OPEN_STATE',
                payload: tab
            }),
            setLeftNavOpenState: state => ({ // boolean
                type: 'SET_LEFT_NAV_STATE',
                payload: state
            })
        }
    ),
    withProps(({ openTabs }) => ({
        playingTimeOpen: openTabs.playingTime,
        suggestPlayersOpen: openTabs.suggestPlayers,
        reviewScoreOpen: openTabs.reviewScore,
        numReviewersOpen: openTabs.numReviewers,
        complexityOpen: openTabs.complexity,
        numPlayersOpen: openTabs.numPlayers,
        categoriesOpen: openTabs.categories,
        ageRangeOpen: openTabs.ageRange,
        designerOpen: openTabs.designer,
        artistsOpen: openTabs.artists,
        publisherOpen: openTabs.publisher,
    }))
);

export default enhance(PersistentDrawerLeft);
