import React, { Component } from 'react';

import {
    DemoDiv,
    NavbarDiv,
    DemoMainDiv,
    DemoCentreDiv,
    DemoInfoDiv,
    DemoContentDiv,
    WhiteH1,
    WhiteP,
    HeaderDiv
} from './DemoStyledComponents';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';

export class Demo extends Component {
    render() {
        return (
            <DemoDiv>
                <NavbarDiv>
                    <DashboardNavBar user='coach' />
                </NavbarDiv>
                <DemoMainDiv>
                    <DemoCentreDiv>

                        <DemoInfoDiv>
                            <HeaderDiv>
                                <WhiteH1> Demo </WhiteH1>
                                <WhiteP> Unsure of the moves? Check out the tabs below! </WhiteP>
                            </HeaderDiv>
                        </DemoInfoDiv>

                        <DemoContentDiv>

                        </DemoContentDiv>
                    </DemoCentreDiv>
                   
                </DemoMainDiv>
            </DemoDiv>
        )
    }
}

export default Demo
