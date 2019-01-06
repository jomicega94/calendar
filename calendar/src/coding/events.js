import React, { Component } from 'react';
import Day from './day';
import './styles.css';

class Events extends Component {

    

    render() {
        const g1 = ["","",1, 2, 3, 4, 5]
        const g2 = [6, 7, 8, 9, 10, 11, 12]
        const g3 = [13, 14, 15, 16, 17, 18, 19]
        const g4 = [20, 21, 22, 23, 24, 25, 26]
        const g5 = [27, 28, 29, 30, 31," "," "]

        const upDate = (event) => {

            console.log("llega aqui",event)
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <div >
                    <div style={{ display: 'inline-flex' }}>
                        <div className="menu">Sun</div>
                        <div className="menu">Mon</div>
                        <div className="menu">Tue</div>
                        <div className="menu">Wed</div>
                        <div className="menu">Thu</div>
                        <div className="menu">Fri</div>
                        <div className="menu">Sat</div>
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }}>
                                 {g1.map(id =>
                                    <Day
                                        id={id}
                                        upDate={upDate()}
                                    />
                                )}
                        
                            
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }} x>
                        {g2.map(id =>
                            <Day
                                id={id}
                                upDate={upDate()}
                            />
                        )}
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }} x>
                        {g3.map(id =>
                            <Day
                                id={id}
                                upDate={upDate()}
                            />
                        )}
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex' }} x>
                        {g4.map(id =>
                            <Day
                                id={id}
                                upDate={upDate()}
                            />
                        )}
                    </div>
                </div>
                <div style={{ textAlign: '' }}>
                    <div style={{ display: 'inline-flex' }} x>
                        {g5.map(id =>
                            <Day
                                id={id}
                                upDate={upDate()}
                            />
                        )}
                        
                    </div>
                    
                </div>
            </div>



        )
    }
}

export default Events;