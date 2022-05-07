import React, {Component} from 'react';
import axios from "axios";

class Covid19 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            covid19: []
        }
    }

    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
        .then((res) => {
            console.log(res)
            this.setState({
                covid19: res.data.Countries
            })
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-striped">
                            <thead className="table-success">
                            <tr>
                                <th>№</th>
                                <th>Country</th>
                                <th>Country Code</th>
                                <th>Total Confirmed</th>
                                <th>Total Deaths</th>
                                <th>Total Recovered</th>
                                <th>New Confirmed</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.covid19.map((item, index) =>{
                                return(
                                    <tr>
                                        <td>{(index + 1)}</td>
                                        <td>{(item.Country)}</td>
                                        <td>{(item.CountryCode)}</td>
                                        <td>{(item.TotalConfirmed)}</td>
                                        <td>{(item.TotalDeathis)}</td>
                                        <td>{(item.TotalRecovered)}</td>
                                        <td>{(item.NewConfirmed)}</td>
                                        <td>{item.Date.slice(0, 10) + " " + item.Date.slice(11, 16)}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Covid19;