import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Route} from "react-router-dom"
import Income from "pages/income/Income"
import {ThemeProvider} from "styled-components"
import { lightTheme} from "style/Themes"
import styled from "styled-components"
import {connect} from "react-redux"




const Layout = () => {
        return (
            <ThemeProvider theme={lightTheme}>
                <>
                <Header />
                <GridContainer>  
                        <Route path="/" component={Income}/>  
                </GridContainer>                        
                <Footer/>
                </>
            </ThemeProvider>
        )

}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Layout)
//
//------------------style---------------------------------------------------------------
 const GridContainer = styled.div`
    height: 100vh;
    margin: 4px auto;
    width: 100vw;
    display: grid;
    grid-template-rows: 98vh;
    overflow: scroll;
    color: ${props => props.theme.color.slate};
    grid-template-areas: 
    "m"

    /* The Grid container holds the grid item "m" for "main" and "f" for footer. When a sub-app is clicked
     on its grid location becomes m placing it in the "main position" */
`


    //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
    // This is the switch board of the app. The header and footer are rendred and always present. Then the 
    // center panel can be changed using routing to move through and visit various sub apps such as the net worth
    // calculator. 