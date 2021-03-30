import React, { Component } from 'react';
import styled from 'styled-components';
import AccLineChart from './AccLineChart';
import GccLineChart from './GccLineChart';

export const DisplayDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    box-sizing: border-box;
`;

export const MiscDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;

export const InfoDisplay = styled.div`
    margin: auto;
    box-sizing: border-box;
`;

export const AccGraphDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;

export const GCCGraphDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;

export const IndividualDiv = styled.div`
    border: 1px lightgray solid;
    box-sizing: border-box;
    flex: 1;
    text-align: center;
`;


export class Individual extends Component {
    render() {
        console.log('INDIVIDUAL', this.props)
        return (
                <React.Fragment>
                    <IndividualDiv>
                        <DisplayDiv>
                            <MiscDiv>
                                <InfoDisplay>
                                    <h3> Trainee {this.props.no} - {this.props.name} </h3>
                                </InfoDisplay>
                            </MiscDiv>
                            <AccGraphDiv>
                                <AccLineChart timestamp={this.props.timestamp} accx={this.props.accx} accy={this.props.accy} accz={this.props.accz} />
                            </AccGraphDiv>
                            <GCCGraphDiv>
                                <GccLineChart timestamp={this.props.timestamp} gccx={this.props.gccx} gccy={this.props.gccy} gccz={this.props.gccz} />
                            </GCCGraphDiv>
                        </DisplayDiv>
                    </IndividualDiv>

                </React.Fragment>
        )
    }
}

export default Individual
