import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import fst from '../../../assets/1.png'
import snd from '../../../assets/2.png'
import trd from '../../../assets/3.png'

const LeftFooter = () => {
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" src={fst} />
                    <Card.Body>
                        <Card.Text>
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Img variant="top" src={snd} />
                    <Card.Body>
                        <Card.Text>
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Img variant="top" src={trd} />
                    <Card.Body>
                        <Card.Text className='text-bold'>
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                        </Card.Text>
                        {/* <Card.Text>
                            <p>Spots</p
                            <p>Jan 4, 2022</p>>
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default LeftFooter;