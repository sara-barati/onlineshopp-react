import {createTheme} from "@mui/material";

export const themeLight = createTheme(
    {
        palette: {
            type: 'light',
            primary: {
                main: '#2c2c2c',
                light:'#686868'
            },
            secondary: {
                main: '#f50057',
            },
            info: {
                main: '#2196f3',
            },
            error: {
                main: '#c61010',
            },
            warning: {
                main: '#ff9800',
            },
            success: {
                main: '#4caf50',
            },
        },

    }
);
