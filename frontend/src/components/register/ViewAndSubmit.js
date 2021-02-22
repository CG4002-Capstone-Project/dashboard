import React, { Component } from 'react';
import { ViewAndSubmitDiv, CoachInfo, Trainee1Info, Trainee2Info, Trainee3Info } from './ViewAndSubmitStyledComponents';
import { Button } from 'evergreen-ui';


export class ViewAndSubmit extends Component {
    onSubmitButtonClicked = event => {
        console.log('Submit button in View & Submit page clicked.');
        event.preventDefault();
        this.props.onSubmit();
    }
    render() {
        let content;

        if (this.props.display) {
            content = (
                <React.Fragment>
                    <CoachInfo>
                        <h3> Coach </h3>
                        <h4> Name: {this.props.coach.name} </h4>
                        <h4> Email: {this.props.coach.email} </h4>
                        <h4> Username: {this.props.coach.username} </h4>
                        <h4> Password: {this.props.coach.password} </h4>

                    </CoachInfo>
                    
                    
                    <Trainee1Info>

                        <h3> Trainee 1 </h3>
                        <h4> Name: {this.props.trainee1.name} </h4>
                        <h4> Email: {this.props.trainee1.email} </h4>
                        <h4> Username: {this.props.trainee1.username} </h4>
                        <h4> Password: {this.props.trainee1.password} </h4>

                    </Trainee1Info>

                    <Trainee2Info>

                        <h3> Trainee 2 </h3>
                        <h4> Name: {this.props.trainee2.name} </h4>
                        <h4> Email: {this.props.trainee2.email} </h4>
                        <h4> Username: {this.props.trainee2.username} </h4>
                        <h4> Password: {this.props.trainee2.password} </h4>

                    </Trainee2Info>

                    <Trainee3Info>
                        <h3> Trainee 3 </h3>
                        <h4> Name: {this.props.trainee3.name} </h4>
                        <h4> Email: {this.props.trainee3.email} </h4>
                        <h4> Username: {this.props.trainee3.username} </h4>
                        <h4> Password: {this.props.trainee3.password} </h4>
                    </Trainee3Info>

                    <Button appearance='primary' marginRight={30} onClick={this.onSubmitButtonClicked}> Submit </Button>

                </React.Fragment>
            )
        } else {
            content = <h1> Please save all of the other sections before processing </h1>
        }
 
        return (
            <ViewAndSubmitDiv>  {content} </ViewAndSubmitDiv>
        )
    }
}

export default ViewAndSubmit
