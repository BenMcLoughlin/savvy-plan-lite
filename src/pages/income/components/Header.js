import React, { Component } from 'react'
import styled from "styled-components"
//import calculateMarginalTaxRate from "services/taxCalculationServices/taxCalculator"
//import Tooltip from "UI/toolTip/Tooltip"
export default class HeaderValues extends Component {

//GRAB MOUSE COORDINATES FOR TOOLTIP
    state = { 
              x: 0,                                                                                                              //These coordinates are set onMouseMove placing the tootip beside the mouse
              y: 0,                                                                                                              //They are passed as props to the Tooltip componnent 
            }
   handleMouseMove(e) {
                this.setState({ x: e.clientX -120, y: e.clientY -140 })                                                          //Sets the state according to mouse position
              }                                                                                                                  //They are passed as props to the Tooltip componnent                                                                                             //They are passed as props to the Tooltip componnent 

    render() {

//DESTRUCTURE REDUCERS TO ASSIGN VARIABLES
        const {
             cppIncome : {financialValue: cppIncome },                                                                          //Grabs and assigns variable names from reducer
             oasIncome : {financialValue: oasIncome },
             rrsp: {financialValue: rrsp },
             tfsa: {financialValue: tfsa },
             nonRegistered: {financialValue: nonRegistered },
        } = this.props.income_reducer[75]            



return (
            <HeaderValuesWrapper onMouseMove={(e) => this.handleMouseMove(e)}>
            <Left >
                                                                                                                 {/* Displays the total shortfall, the value determines the color of the number negative for red or  positive for lightGrey */}
                <h1>
                    Lifetime Income Chart BUILD 2
                </h1>
            </Left>
            <Right>
            <h2>Optimized Retirement Income Plan</h2>
            <PensionIncomeWrapper onMouseMove={(e) => this.handleMouseMove(e) }>
                    <CPPSummary>
                    {`${(cppIncome)/1000}k`}  
                        <h4>CPP</h4>
                        <Circle color={"#F29278"}/>
                    </CPPSummary>
                    <OASSummary >
                    {`${(oasIncome)/1000}k`}
                        <h4 >OAS</h4>
                        <Circle color={"#7DA8B8"}/>
                    </OASSummary>
                    <Vr/>
                    <RRIFSummary>
                    {`${(rrsp)/1000}k`}
                    <h4 >RRSP</h4>
                         <Circle color={"#B0CFE3"}/>
                    </RRIFSummary>
                    <NRegSummary>
                    {`${tfsa/1000}k`}
                    <h4>TFSA</h4>
                         <Circle color={"#81CCAF"}/>

                    </NRegSummary>
                    {
                        nonRegistered > 1000 ? 
                        <NRegSummary>
                        {`${nonRegistered/1000}k`}
                        <h4>N-Reg</h4>
                             <Circle color={"#B9B0A2"}/>

                      </NRegSummary>
                    : null
                    }

            </PensionIncomeWrapper>
            <Summary>
             {`${(cppIncome + oasIncome + rrsp + tfsa + nonRegistered)/1000}k`}
            <h4>Total</h4>
            </Summary>
            </Right>
            
            </HeaderValuesWrapper>
        )
    }
}

//-----------------------------------------------style-----------------------------------------------//


const HeaderValuesWrapper = styled.div`
    grid-area: a;                                                                                             {/*Grid-area set in Income, "a" positions it at the top */}
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 4rem;
    position: relative;
    color: ${props => props.theme.color.slate};
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Summary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    font-size: ${props => props.theme.fontSize.medium};
    align-items: center;
    justify-content: center;

  
`
const CPPSummary = styled(Summary)`
    &:hover .cppTooltip {
        opacity: 1;
        visibility: visible;
    }
`
const OASSummary = styled(Summary)`
    &:hover .oasTooltip {
        opacity: 1;
        visibility: visible;
    }
`
const RRIFSummary = styled(Summary)`
    &:hover .rrifTooltip {
        opacity: 1;
        visibility: visible;
    }
`
const NRegSummary = styled(Summary)`
    &:hover .taxTooltip {
        opacity: 1;
        visibility: visible;
    }
`

const Vr = styled.div`
    height: 60%;
    width: 1%;
    margin-top: 2rem;
    flex-basis: 0.1;
    flex: 1 0.1 1;
    border-left: ${props => props.theme.border.primary};
`

const Right = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const Circle = styled.div`
   border-radius: 50%;
   height: 1rem;
   width: 1rem;
   margin-top: .5rem;
   background: ${props => props.color}
   display: flex;
   align-items: center;
`


const PensionIncomeWrapper = styled.div`
    display: flex;
    width: 60%;
    border-bottom: ${props => props.theme.border.primary};
`




