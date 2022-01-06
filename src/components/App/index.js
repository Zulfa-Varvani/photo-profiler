import React from "react"
import "./styles.css"
import Home from "../Home"
import Dashboard from "../Dashboard"
import Login from "../Login"
import Register from "../Register"
import { MuiThemeProvider, createTheme} from "@material-ui/core"
import { CssBaseline } from "@material-ui/core"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const theme = createTheme();

const App = () => {

    return (
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
    )
}

export default App;