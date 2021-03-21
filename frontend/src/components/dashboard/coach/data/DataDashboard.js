import React, { Component } from 'react';
import { DashboardDiv, CoverDiv } from './DataStyledComponents';
import Individual from './individual/Individual';
import Summary from './summary/Summary';
import io from "socket.io-client";
// import { traceLifecycle } from 'react-lifecycle-visualizer';

let i = 0;
let j = 0;
let k = 0;
let m = 0;

// how to update an object with setState: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
// how to fix experimental decorators vs code warning: https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/
// @traceLifecycle
export class DataDashboard extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`Frontend socket connected to backend ${socket.id}`);
        })
        socket.on("onNewTraineeOneData", async (data) => {
            i += 1;
            console.log(`${i}th data ` + JSON.stringify(data));
            
            this.updateTraineeOneInfo(data);
        })
        socket.on("onNewTraineeTwoData", (data) => {
            j += 1;
            console.log(`${j}th data ` + JSON.stringify(data));
            this.updateTraineeTwoInfo(data);
        })
        socket.on("onNewTraineeThreeData", (data) => {
            k += 1;
            console.log(`${k}th data ` + JSON.stringify(data));
            this.updateTraineeThreeInfo(data);
        })

        socket.on("newResult", async (result) => {
            m += 1;
            console.log(`${j}th result: `+ JSON.stringify(this.state.currentResult));

            // this.updatePositions(result.dancerIds);
            // this.updateCurrentMove(result.predictedMove);

            await this.setState({
                currentResult: result
            });

            await this.handleHistoryState(result);  
        })

        socket.on("newEMG", async (result) => {
            await this.setState({
                currentEmg: result
            })
        })

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
              }
            console.log('Frontend socket disconnected. Reason: ' + reason);
        })
    }
    state = {
        posTraineeOne: 1,
        posTraineeTwo: 2,
        posTraineeThree: 3,
        modeTraineeOne: 1,
        modeTraineeTwo: 1,
        modeTraineeThree: 1,
        currentResult: {},
        t1Data: {},
        t2Data: {},
        t3Data: {},
        currentEmg: {},
        history: []
    }

    updateTraineeOneInfo = async (data) => {
        if (data.mode != this.state.modeTraineeOne) {
            await this.setState({
                modeTraineeOne: data.mode
            });
        }
        await this.setState({
            t1Data: data
        })
    }

    updateTraineeTwoInfo = async (data) => {
        if (data.mode != this.state.modeTraineeTwo) {
            await this.setState({
                modeTraineeTwo: data.mode
            });
        }
        await this.setState({
            t2Data: data
        })
    }

    updateTraineeThreeInfo = async (data) => {
        if (data.mode != this.state.modeTraineeThree) {
            await this.setState({
                modeTraineeThree: data.mode
            });
        }
        await this.setState({
            t3Data: data
        })
    }

    updatePositions = async (positions) => {
        const positionsArray = positions.split(' ');

        if (positionsArray[0] == '1') {
            await this.setState({
                posTraineeOne: 1
            });
        } else if (positionsArray[0] == '2') {
            await this.setState({
                posTraineeOne: 2
            });
        } else if (positionsArray[0] == '3') {
            await this.setState({
                posTraineeOne: 3
            });
        }

        if (positionsArray[1] == '1') {
            await this.setState({
                posTraineeTwo: 1
            });
        } else if (positionsArray[1] == '2') {
            await this.setState({
                posTraineeTwo: 2
            });
        } else if (positionsArray[1] == '3') {
            await this.setState({
                posTraineeTwo: 3
            });
        }

        if (positionsArray[2] == '1') {
            await this.setState({
                posTraineeThree: 1
            })
        } else if (positionsArray[2] == '2') {
            await this.setState({
                posTraineeThree: 2
            })
        } else if (positionsArray[2] == '3') {
            await this.setState({
                posTraineeThree: 3
            })
        }
    }

    handleHistoryState = async (result) => {
        if (this.state.history.length == 0) {
            const history = [];
            history.push(result)
            await this.setState({
                history
            })
        } else if (this.state.history.length == 1) {
            const previousFirstItem = this.state.history[0];
            const history = [result, previousFirstItem];
            await this.setState({
                history
            })
        } else if (this.state.history.length > 1) {
            const previousFirstItem = this.state.history[0];
            const previousSecondItem = this.state.history[1];
            const history = [result, previousFirstItem, previousSecondItem];
            await this.setState({
                history
            })
        } 
    }

    render() {
    
        return (
            <React.Fragment>
                <DashboardDiv>
                    <Individual data={this.state.t1Data} no='1' name='Riyas' position={this.state.posTraineeOne} />
                    <Individual data={this.state.t2Data} no='2' name='Zeng Hao' position={this.state.posTraineeTwo} />
                    <Individual data={this.state.t3Data} no='3' name='Brandon' position={this.state.posTraineeThree} />
                </DashboardDiv>
                <Summary 
                    currentResult={this.state.currentResult} 
                    emgs={this.state.currentEmg}
                    modeTraineeOne={this.state.modeTraineeOne}
                    modeTraineeTwo={this.state.modeTraineeTwo}
                    modeTraineeThree={this.state.modeTraineeThree}
                    history={this.state.history}
                    traineeOneName='Riyas'
                    traineeTwoName='Zeng Hao'
                    traineeThreeName='Brandon' />
            </React.Fragment>
        )
    }
}

export default DataDashboard;