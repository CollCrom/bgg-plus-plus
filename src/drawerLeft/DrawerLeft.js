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
import MultiselectTab from '../NavTab/MultiselectTab';
import RangeSliderTab from '../NavTab/RangeSliderTab';
import { actions } from '../reducers/actions.actions';
import publishers from "../reducers/publishers";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';
import BGGService from "../service/BGGService";


const drawerWidth = 600;

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
        height: '70px',
        position: "fixed"
    },
    fab: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginBottom: theme.spacing(5),
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
    setTabOpenState,
    setPlayingTime,
    playingTime,
    setAgeRange,
    ageRange,
    setNumberOfPlayers,
    numberOfPlayers,
    suggestedPlayers,
    setSuggestedPlayers,
    setNumberOfReviewers,
    complexity,
    setComplexity,
    setAverageReviewScore,
    averageReviewScore,
    numberOfReviewers,
    setCategories,
    setDesigner,
    setArtists,
    setPublishers,
    setCriteria,
    artists,
    designers,
    publishers,
    categories,
    activeCriteria

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

    const toggleActive = (tabName, tabState, event) =>  {
        setCriteria({
            [tabName]: !tabState
        });
        event.stopPropagation();
    };

    const allCategories = BGGService.getCategories();
    const allArtists = BGGService.getArtists();
    const allDesigners = BGGService.getDesigners();
    const allPublishers = BGGService.getPublishers();

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
                        value={playingTime}
                        min={1}
                        max={300}
                        marks={[
                            { value: 1, label: '1 min' },
                            { value: 30, label: '30 min' },
                            { value: 60, label: '1 hr' },
                            { value: 120, label: '2 hrs' },
                            { value: 180, label: '3 hrs' },
                            { value: 240, label: '4 hrs' },
                            { value: 300, label: '5 hrs' }
                        ]}
                        onChangeHandler={(event, newVal) => { setPlayingTime(newVal) }}
                        onActiveHandler={(event) =>
                        { 
                            toggleActive('playingTime', activeCriteria.playingTime, event) }}
                        active={activeCriteria.playingTime}
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('numPlayers', numPlayersOpen)}
                        openVariable={numPlayersOpen}
                        text="Number of Players"
                        value={numberOfPlayers}
                        min={1}
                        max={30}
                        marks={[
                            { value: 1, label: '1 player' },
                            { value: 30, label: '30 players' }
                        ]}
                        onChangeHandler={(event, newVal) => { setNumberOfPlayers(newVal) }}
                        onActiveHandler={(event) =>
                        { toggleActive('numPlayers', activeCriteria.numPlayers, event) }}
                        active={activeCriteria.numPlayers}
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('reviewScore', reviewScoreOpen)}
                        openVariable={reviewScoreOpen}
                        text="Average Review Score"
                        value={averageReviewScore}
                        min={0}
                        max={10.0}
                        marks={[
                            { value: 0, label: '0.0' },
                            { value: 10.0, label: '10.0' }
                        ]}
                        onChangeHandler={(event, newVal) => { setAverageReviewScore(newVal) }}
                        onActiveHandler={(event) =>
                        { toggleActive('reviewScore', activeCriteria.reviewScore, event) }}
                        active={activeCriteria.reviewScore}
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('numReviewers', numReviewersOpen)}
                        openVariable={numReviewersOpen}
                        text="Number of Reviews"
                        value={numberOfReviewers}
                        min={100}
                        max={20000}
                        marks={[
                            { value: 100, label: '100' },
                            { value: 20000, label: '20,000' }
                        ]}
                        onChangeHandler={(event, newVal) => { setNumberOfReviewers(newVal) }}
                        onActiveHandler={(event) =>
                        { toggleActive('numReviewers', activeCriteria.numReviewers, event) }}
                        active={activeCriteria.numReviewers}
                    />
                    <RangeSliderTab
                        openClickHandler={toggleTab('complexity', complexityOpen)}
                        openVariable={complexityOpen}
                        text="Complexity"
                        value={complexity}
                        min={0}
                        max={5.0}
                        marks={[
                            { value: 0, label: '0.0' },
                        ]}
                        onChangeHandler={(event, newVal) => { setComplexity(newVal) }}
                        onActiveHandler={(event) =>
                        { toggleActive('complexity', activeCriteria.complexity, event) }}
                        active={activeCriteria.complexity}
                    />

                    <MultiselectTab
                        openClickHandler={toggleTab('categories', categoriesOpen)}
                        openVariable={categoriesOpen}
                        text={"Categories"}
                        names = {allCategories}
                        action={setCategories}
                        store$={categories}
                        onActiveHandler={(event) =>
                        { toggleActive('categories', activeCriteria.categories, event) }}
                        active={activeCriteria.categories}
                    />

                    <RangeSliderTab
                        openClickHandler={toggleTab('ageRange', ageRangeOpen)}
                        openVariable={ageRangeOpen}
                        text="Age Range"
                        value={ageRange}
                        min={0}
                        max={99}
                        marks={[
                            { value: 1, label: '1 year' },
                            { value: 99, label: '99 years' }
                        ]}
                        onChangeHandler={(event, newVal) => { setAgeRange(newVal) }}
                        onActiveHandler={(event) =>
                        { toggleActive('ageRange', activeCriteria.ageRange, event) }}
                        active={activeCriteria.ageRange}
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('designer', designerOpen)}
                        openVariable={designerOpen}
                        text={"Designer"}
                        names = {allDesigners}
                        action={setDesigner}
                        store$={designers}
                        onActiveHandler={(event) =>
                        { toggleActive('designers', activeCriteria.designers, event) }}
                        active={activeCriteria.designers}
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('artists', artistsOpen)}
                        openVariable={artistsOpen}
                        text={"Artists"}
                        names = {allArtists}
                        action={setArtists}
                        store$={artists}
                        onActiveHandler={(event) =>
                        { toggleActive('artists', activeCriteria.artists, event) }}
                        active={activeCriteria.artists}
                    />
                    <MultiselectTab
                        openClickHandler={toggleTab('publisher', publisherOpen)}
                        openVariable={publisherOpen}
                        text={"Publisher"}
                        names = {allPublishers}
                        action={setPublishers}
                        store$={publishers}
                        onActiveHandler={(event) =>
                        { toggleActive('publishers', activeCriteria.publishers, event) }}
                        active={activeCriteria.publishers}
                    />

                </List>
                <Fab variant="extended" aria-label="delete" className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Search
                </Fab>
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
        ({ openTabs, leftNavOpen, playingTime, ageRange, numberOfPlayers, suggestedPlayers, numberOfReviewers, averageReviewScore,complexity, artists, designers, categories, publishers,activeCriteria }) => ({
            openTabs,
            leftNavOpen,
            playingTime,
            ageRange,
            numberOfPlayers,
            suggestedPlayers,
            numberOfReviewers,
            averageReviewScore,
            complexity,
            artists,
            designers,
            publishers,
            categories,
            activeCriteria
        }),
        {
            setTabOpenState: tab => ({ // {tabName: boolean}
                type: actions.setTabOpenState,
                payload: tab
            }),
            setLeftNavOpenState: state => ({ // boolean
                type: actions.setLeftNavState,
                payload: state
            }),
            setPlayingTime: time => ({ // [num, num]
                type: actions.setPlayingTime,
                payload: time
            }),
            setAgeRange: range => ({ // [num, num]
                type: actions.setAgeRange,
                payload: range
            }),
            setAverageReviewScore: score => ({ // [num, num]
                type: actions.setAverageReviewScore,
                payload: score
            }),
            setComplexity: complexity => ({ // [num, num]
                type: actions.setComplexity,
                payload:complexity
            }),
            setNumberOfPlayers: players => ({ // [num, num]
                type: actions.setPlayers,
                payload: players
            }),
            setCategories: categories => ({ // [num, num]
                type: actions.setCategories,
                payload: categories
            }),
            setDesigner: designer => ({ // [num, num]
                type: actions.setDesigner,
                payload: designer
            }),
            setArtists: artists => ({ // [num, num]
                type: actions.setArtists,
                payload: artists
            }),
            setPublishers: publishers => ({ // [num, num]
                type: actions.setPublishers,
                payload: publishers
            }),
            setSuggestedPlayers: players => ({ // [num, num]
                type: actions.setSuggestedPlayer,
                payload: players
            }),
            setCriteria: num => ({ // [num, num]
                type: actions.setCriteria,
                payload: num
            }),
            setNumberOfReviewers: num => ({ // [num, num]
                type: actions.setNumberOfReviewers,
                payload: num
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
