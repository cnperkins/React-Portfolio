import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';

class Projects extends Component {


    render() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'aqua', height: '176px', background: 'url(https://imagizer.imageshack.com/img923/925/xKGhFB.png) center / cover' }} ></CardTitle>
                    <CardText>Travel Buddy</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/LarraineG/Project1" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://larraineg.github.io/Project1/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagizer.imageshack.com/img923/5550/wQ9mrd.png) center / cover' }} ></CardTitle>
                    <CardText>NotePad--</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/chrscchrn/Notepad--" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://oscarcat.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagizer.imageshack.com/img922/645/yVxtpN.png) center / cover' }} ></CardTitle>
                    <CardText>Online-Offline-Budget-Tracker</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/cnperkins/Online-Offline-Budget-Tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://damp-waters-81195.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagizer.imageshack.com/img923/2416/SKBIbd.png) center / cover' }} ></CardTitle>
                    <CardText>Work Day Scheduler</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/cnperkins/DayPlanner" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://cnperkins.github.io/DayPlanner/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagizer.imageshack.com/img922/1771/FNXw71.png) center / cover' }} ></CardTitle>
                    <CardText>Weather Dashboard</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/cnperkins/WeatherDashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://cnperkins.github.io/WeatherDashboard/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://imagizer.imageshack.com/img923/6051/Mqq5GN.png) center / cover' }} ></CardTitle>
                    <CardText>Employee Directory</CardText>
                    <CardActions border>
                        <Button colored>
                            <a href="https://github.com/cnperkins/Employee-Directory" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://whispering-shore-15346.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: "fff" }}>
                    </CardMenu>
                </Card>
            </div>


        )
    }
}

export default Projects;