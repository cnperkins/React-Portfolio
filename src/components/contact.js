import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Chloe Perkins</h2>
                        <img src="https://imagizer.imageshack.com/img923/3143/RH5JYV.jpg"
                            alt="chloe"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Hi, I'm Chloe! I'm a student coder at Fullstack Academy. This is my first React portfolio. The past seven years I've been in the Dental field.
                            I'm a Registered Dental Hygienist.
                            I'm excited to be in a more creative field. I look forward to make really awesome things.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className = "contact-list"><List>
                            <ListItem>
                                <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className = "fa fa-phone" aria-hidden = "true" />
                                    <a href="tel:3615101832">(361) 510-1832</a>
                                </ListItemContent>
                            </ListItem>
                           
                            <ListItem>
                                <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className = "fa fa-envelope" aria-hidden = "true" />
                                    <a href="mailto:cnpolansky@gmail.com">cnpolansky@gmail.com</a>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className = "fa fa-suitcase" aria-hidden = "true" />
                                    <a href="https://docs.google.com/document/d/17SddhD-GY5o-Qx9HfR3zg0BslXtvJkVsDgPX7GENPhc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;