import React from "react"
import "./styles.css"
import Home from "../Home"
import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import { MuiThemeProvider, createTheme, CircularProgress } from "@material-ui/core"
import { CssBaseline } from "@material-ui/core"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import config from "../config"

const theme = createTheme();

const App = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        config.isInit().then(val => {
            setInit(val);
        });
    })

    return init !== false ? (
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                    </Routes>
                </BrowserRouter>
            </CssBaseline>
        </MuiThemeProvider>
    ) : <div id="loading"><CircularProgress/></div>
}

export default App;