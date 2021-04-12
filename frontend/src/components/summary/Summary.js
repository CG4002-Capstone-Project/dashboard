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
    MovesSummaryDiv,
    MovesStatsDiv,
    PositionsStatsDiv,
    PositionsSummaryDiv,
    TableDiv } from './SummaryStyledComponents';
import IndividualDataController from './individual-data/IndividualDataController';
import IndividualStatsController from './individual-stats/IndividualStatsController';
import MovesSummaryController from './moves/MovesSummaryController';
import MovesStatsController from './moves/MovesStatsController';
import PositionsSummaryController from './positions/PositionsSummaryController';
import PositionsStatsController from './positions/PositionsStatsController';
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
                                <MovesSummaryDiv>
                                    <MovesSummaryController />
                                </MovesSummaryDiv>
                                <MovesStatsDiv>
                                    <MovesStatsController />
                                </MovesStatsDiv>
                            </MovesDiv>

                            <PositionsDiv>
                                <PositionsSummaryDiv>
                                    <PositionsSummaryController />
                                </PositionsSummaryDiv>

                                <PositionsStatsDiv>
                                    <PositionsStatsController />
                                </PositionsStatsDiv>
                            </PositionsDiv>

                        </SummaryStatsDiv>

                        <IndividualTraineeStatsDiv>
                            <IndividualStatsController />
                        </IndividualTraineeStatsDiv>
                    </StatsDiv>

                    
                </SummaryMainDiv>

            </SummaryDiv>
        )
    }
}

export default Summary
