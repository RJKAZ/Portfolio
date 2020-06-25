import React from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project(props) {

    return (
        <>
            <Card>
                <Card.Body>
                    
                    <div className='infobox'>
                        <h4>{props.title}</h4>
                        <Card.Text>{props.desc}</Card.Text>
                        <Card.Text>Made with: {props.technologies.join(', ')}</Card.Text>
                        <div>

                    <div className='imgbox' >
                        <a className='imgLink' href={props.livelink ? props.livelink : props.codelink} target='_blank' rel="noopener noreferrer">
                        <Card.Img src={require(`../assets/img/${props.img}`)} alt={props.title} rounded>
                        </Card.Img>
                        </a>
                    </div>
                        {props.livelink ?
                            <Card.Link className='projLink' href={`${props.livelink}`} target='_blank' rel="noopener noreferrer">Click here to view the deployed site!</Card.Link> : <></>
                        }

                        {props.codelink ?
                            <Card.Link className='projLink' href={`${props.codelink}`} target='_blank' rel="noopener noreferrer">Or click here to view the code! </Card.Link> : <></>
                        }
                        </div>  
                        <br/>
                        <br/>
                          <hr/>
                    </div>
                    
                </Card.Body>
               
              
               
            </Card>

        </>
    );
}

export default Project;