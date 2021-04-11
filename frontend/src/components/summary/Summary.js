import React, { Component } from 'react';
import { SummaryDiv, 
    MovesDiv, 
    DataDiv, 
    PositionsDiv } from './SummaryStyledComponents';
import IndividualController from './individual/IndividualController';
import MovesController from './moves/MovesController';
import PositionsController from './positions/PositionsController';

export class Summary extends Component {

    render() {
        console.log('Summary');
        return (
            <React.Fragment>
                <SummaryDiv>
                    <DataDiv>
                        <IndividualController/>
                    </DataDiv>

                    <MovesDiv>
                        <MovesController />
                    </MovesDiv>

                    <PositionsDiv>
                        <PositionsController />
                    </PositionsDiv>
                </SummaryDiv>

            </React.Fragment>
        )
    }
}

export default Summary
