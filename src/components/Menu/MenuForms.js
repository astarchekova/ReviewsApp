import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@mui/icons-material/Room';
import ArticleIcon from '@mui/icons-material/Article';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@material-ui/core';
import BallotIcon from '@mui/icons-material/Ballot';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { ERouterLinks } from "../../App";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        borderRadius: '0px 15px 15px 0px',
        marginTop: "2%",
    },
    menuList: {
        color: '#5B6B88',
    },
    menuItem: {
        // fontWeight: "500",
        fontSize: "15px",
        lineHeight: '2.5',
        paddingRight: "5%",
    },
    typography: {
        fontWeight: "500",
        marginLeft: '5%',
        lineHeight: '4.58',
    },
    paper: {
        marginRight: theme.spacing(2),
        width: '237px',
        height: '492ph'
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: '16px'
    },
    icon: {
        color: "#98A9C7",
        marginRight: '5%',
        fontSize: "15px",
    },
    iconMain: {
        color: "#465EEF",
        marginRight: '5%',
    },
    mainTitle: {
        color: "#465EEF",
        fontSize: "15px",
        lineHeight: '2.5',
    },
    link: {
        color: "#5B6B88",
        textDecorationLine: "none",
    }
}));

export default function MenuForms() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.title}>
                    <Avatar color='#98A9C7'></Avatar>
                    <Typography className={classes.typography}> Company</Typography>
                </div>
                <Divider sx={{ my: 0.5 }} />
                <MenuList className={classes.menuList}>
                    <Link to={ERouterLinks.home} className={classes.link} >
                        <MenuItem className={classes.menuItem}>
                            <RoomIcon className={classes.icon} />
                            Локации
                        </MenuItem >
                    </Link>
                    <MenuItem className={classes.mainTitle}>
                        <ArticleIcon className={classes.iconMain} />Формы</MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <InsertCommentIcon className={classes.icon} /> Отзывы
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <SignalCellularAltIcon className={classes.icon} />
                        Аналитика</MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem className={classes.menuItem}>
                        <BallotIcon className={classes.icon} />
                        Тарифы
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <SettingsIcon className={classes.icon} />Настройки</MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <ExitToAppIcon className={classes.icon} />Выйти
                    </MenuItem>
                </MenuList>
            </Paper>
        </div >
    );
}