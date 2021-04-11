import React, { Component } from 'react';
import { SummaryDiv,
    NavbarDiv,
    SummaryMainDiv, 
    MovesDiv, 
    DataDiv, 
    PositionsDiv } from './SummaryStyledComponents';
import IndividualController from './individual/IndividualController';
import MovesController from './moves/MovesController';
import PositionsController from './positions/PositionsController';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';

export class Summary extends Component {

    render() {
        console.log('Summary');
        return (
            <SummaryDiv>
                <NavbarDiv>
                    <DashboardNavBar />
                </NavbarDiv>
                <SummaryMainDiv>
                    <DataDiv>
                        <IndividualController/>
                    </DataDiv>

                    <MovesDiv>
                        <MovesController />
                    </MovesDiv>

                    <PositionsDiv>
                        <PositionsController />
                    </PositionsDiv>
                </SummaryMainDiv>

            </SummaryDiv>
        )
    }
}

export default Summary
