import React, { Component } from 'react';
import Services from '../../../services';
import Moment from 'react-moment';

class MatchHistory extends Component {

    constructor(props) {
        super(props);
        this.services = new Services();

        this.state = {
            matchHistory: []
        }
    }

    componentWillMount() {
        //this.props.getContacts();
        this.services.getGames((err, response) => {
            console.log('will mount');
            console.log(JSON.parse(response));
            this.setState({matchHistory: JSON.parse(response)});
        })
    }

    render () {
        return (
            <div class="row justify-content-md-center">
                <div class="col  col-lg-8">
                    <table className="table table-hover contacts-table">
                        <thead>
                        <tr>
                            <th scope="col" className="active-blue-label">#</th>
                            <th scope="col">Player One</th>
                            <th className='mobile--hide' scope="col">Score</th>
                            <th scope="col">Player Two</th>
                            <th className='mobile--hide' scope="col">Score</th>
                            <th scope="col">Winner</th>
                            <th className='mobile--hide' scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.matchHistory.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row" className="active-blue-label">{index}</th>
                                        <td>{element.playerOneName}</td>
                                        <td className='mobile--hide'>{element.playerOneScore}</td>
                                        <td>{element.playerTwoName}</td>
                                        <td className='mobile--hide'>{element.playerTwoScore}</td>
                                        <td>{element.winner}</td>
                                        <td className='mobile--hide'><Moment parse="YYYY-MM-DD HH:mm">{element.date}</Moment></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
}

export default MatchHistory;