import React, { Component } from 'react';
import { SummaryDiv,
    NavbarDiv,
    SummaryMainDiv, 
    MovesDiv, 
    DataDiv, 
    PositionsDiv,
    SummaryStatsDiv,
    IndividualTraineeStatsDiv,
    StatsDiv,
    IndividualChartsDiv,
    TableDiv } from './SummaryStyledComponents';
import IndividualDataController from './individual/IndividualDataController';
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
                       
                        <IndividualChartsDiv>
                            <IndividualDataController/>
                        </IndividualChartsDiv>
                        <TableDiv>

                        </TableDiv>
                    </DataDiv>

                    <StatsDiv>
                        <SummaryStatsDiv>
                        <MovesDiv>
                            <MovesController />
=                       </MovesDiv>

                        <PositionsDiv>
                            <PositionsController />
                        </PositionsDiv>

                        </SummaryStatsDiv>

                        <IndividualTraineeStatsDiv>

                        </IndividualTraineeStatsDiv>
                    </StatsDiv>

                    
                </SummaryMainDiv>

            </SummaryDiv>
        )
    }
}

export default Summary
