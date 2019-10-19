import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {compose, withProps} from 'recompose';
import {connect} from 'react-redux';
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoubleSlider from "../sliders/DoubleSlider";
import SingleSlider from "../sliders/SingleSlider";

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
        margin: '15px 0 0 15px'
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

    const togglePlayingTime = () => {
        playingTimeOpen = !playingTimeOpen;
        setTabOpenState({
            playingTime: playingTimeOpen
        });
    };
    const togglePublisher = () => {
        publisherOpen = !publisherOpen;
        setTabOpenState({
            publisher: publisherOpen
        });
    };
    const toggleArtists = () => {
        artistsOpen = !artistsOpen;
        setTabOpenState({
            artists: artistsOpen
        });
    };
    const toggleDesigner = () => {
        designerOpen = !designerOpen;
        setTabOpenState({
            designer: designerOpen
        });
    };
    const toggleAgeRange = () => {
        ageRangeOpen = !ageRangeOpen;
        setTabOpenState({
            ageRange: ageRangeOpen
        });
    };
    const toggleCategories = () => {
        categoriesOpen = !categoriesOpen;
        setTabOpenState({
            categories: categoriesOpen
        });
    };

    const toggleNumPlayers = () => {
        numPlayersOpen = !numPlayersOpen;
        setTabOpenState({
            numPlayers: numPlayersOpen
        });
    };

    const toggleComplexity = () => {
        complexityOpen = !complexityOpen;
        setTabOpenState({
            complexity: complexityOpen
        });
    };

    const toggleNumReviewers = () => {
        numReviewersOpen = !numReviewersOpen;
        setTabOpenState({
            numReviewers: numReviewersOpen
        });
    };
    const toggleReviewScore = () => {
        reviewScoreOpen = !reviewScoreOpen;
        setTabOpenState({
            reviewScore: reviewScoreOpen
        });
    };
    const toggleSuggestPlayers = () => {
        suggestPlayersOpen = !suggestPlayersOpen;
        setTabOpenState({
            suggestPlayers: suggestPlayersOpen
        });
    };

    const Collapser = withStyles({
        container: {
            minHeight: "400px",
        }
    })(Collapse);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <div className={classes.hamburgerContainer}
                 onClick={toggleDrawer}
            >
                <MenuIcon className={classes.hamburgerIcon}/>
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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>


                <List>
                    <ListItem button onClick={togglePlayingTime}>
                        <ListItemText primary={"Playing Time"}/>
                        {playingTimeOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapser in={playingTimeOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText primary="Starred"/>
                            </ListItem>
                        </List>
                    </Collapser>
                    <ListItem button onClick={toggleSuggestPlayers}>
                        <ListItemText primary={"Suggested Number of Players"}/>
                        {suggestPlayersOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapser in={suggestPlayersOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <SingleSlider/>
                            </ListItem>
                        </List>
                    </Collapser>
                </List>
                <Divider/>
                <List>
                    <ListItem button onClick={toggleReviewScore}>
                        <ListItemText primary={"Average Review Score"}/>
                        {reviewScoreOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapser in={reviewScoreOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <SingleSlider/>
                            </ListItem>
                        </List>
                    </Collapser>
                    <ListItem button onClick={toggleNumReviewers}>
                        <ListItemText primary={"Number of Reviews"}/>
                        {numReviewersOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapser in={numReviewersOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <SingleSlider/>
                            </ListItem>
                        </List>
                    </Collapser>
                    <ListItem button onClick={toggleComplexity}>
                        <ListItemText primary={"Complexity"}/>
                        {complexityOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapser in={complexityOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText primary="Starred"/>
                            </ListItem>
                        </List>
                    </Collapser>
                </List>
                <Divider/>

                <ListItem button onClick={toggleNumPlayers}>
                    <ListItemText primary={"Number of players"}/>
                    {numPlayersOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={numPlayersOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItem>
                    </List>
                </Collapser>
                <ListItem button onClick={toggleCategories}>
                    <ListItemText primary={"Categories"}/>
                    {categoriesOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={categoriesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItem>
                    </List>
                </Collapser>
                <ListItem button onClick={toggleAgeRange}>
                    <ListItemText primary={"Age Range"}/>
                    {ageRangeOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={ageRangeOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <DoubleSlider/>
                    </List>
                </Collapser>

                <ListItem button onClick={toggleDesigner}>
                    <ListItemText primary={"Designer"}/>
                    {designerOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={designerOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItem>
                    </List>
                </Collapser>
                <ListItem button>
                    <ListItemText primary={"Artists"} onClick={toggleArtists}/>
                    {artistsOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={artistsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItem>
                    </List>
                </Collapser>
                <ListItem button>
                    <ListItemText primary={"Publisher"} onClick={togglePublisher}/>
                    {publisherOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapser in={publisherOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItem>
                    </List>
                </Collapser>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: leftNavOpen,
                })}
            >
                <div className={classes.drawerHeader}/>
            </main>
        </div>
    );
}

const enhance = compose(
    connect(
        ({openTabs, leftNavOpen}) => ({
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
    withProps(({openTabs}) => ({
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
