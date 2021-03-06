import React from 'react'
import { NavLink} from "react-router-dom"
import styled from "styled-components"
import {connect} from "react-redux"
import logoLight from "assets/svgs/SavvyPlan_logo_final_grey.svg"

 function Header() {

    return (
        <HeaderContainer>
            <Left>
                <Logo>
                    <img src={logoLight} height="100%" width="100%" fontSize="10rem" alt="logo"/>
                </Logo>
                <Header3>
                    Savvy Plan
                </Header3>
            </Left>
            <Right>
          
          <StyledNavLink to="/plan" activeClassName="active">
              <PageSelect>
                      YOUR PLAN
              </PageSelect>
          </StyledNavLink>
          <Hr/>
          <StyledNavLink to="/" activeClassName="active">
              <PageSelect>
                      DASHBOARD
              </PageSelect>
          </StyledNavLink>
          <Hr/>
          <StyledNavLink to="/Learn" activeClassName="active">
                  <PageSelect>
                     ACCOUNT
                  </PageSelect>
          </StyledNavLink>
          <Hr/>
          <StyledNavLink to="/assumptions" activeClassName="active">
                  <PageSelect>
                     ASSUMPTIONS
                  </PageSelect>
          </StyledNavLink>     
          </Right>
        </HeaderContainer>
    )
}


export default connect(null, {})(Header)

//--------HEADER GRID LAYOUT---------------------------------------------------------------//

export const HeaderContainer = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    height: 6rem;
    background: ${props => props.theme.color.slate};
    font-weight: 200;    
`
const Logo = styled.div`
        width: 10rem;
        height: 10rem;
        margin-top: -2rem;

`
const Left = styled.div`
        flex: 1;
        display: flex;
        width: 10%;
        align-content: center;
        flex-direction: row;
        align-items: center
        justify-content: left;
`

const Header3 = styled.div`
        font-size: ${props => props.theme.fontSize.medium};
        color: ${props => props.theme.color.ice};
        font-weight: 300;
        display: flex;
        align-items: center;
     
`
const Right = styled.div`
     display: flex;
     jusitfy-content: space-between;
     width: 50%;
     align-items: center;
     font-weight: 300;

`
export const PagePointer = styled.div`
        height: 5rem;
        width: 5rem;
        background: transparent;
        clip-path: polygon(25% 73%, 0% 100%, 100% 100%);
        position: absolute;
        top: -2rem;
        z-index: 3;
`
export const PageSelect = styled.div`
       padding: 1rem;
       margin: 1rem;
       font-size: ${props => props.theme.fontSize.small};
       ${props => props.theme.flexContent.center};
       height: 100%;
       cursor: pointer;
       position: relative
       border-radius: 1px;
       transition: all .1s ease-in;
       &:hover {
           background: ${props => props.theme.color.ice};
           color:  ${props => props.theme.color.slate};
       }
`
const Hr = styled.hr`
    width: 1rem;
    color: white;
`


export const StyledNavLink = styled(NavLink)`
       text-decoration: none;
       color: white;
    &.active ${PagePointer} {
        background-color: ${props => props.theme.color.slate};
    } 
  } 
  `

//
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// Website header rendering the website title, buttons that change the theme, and a login button. 