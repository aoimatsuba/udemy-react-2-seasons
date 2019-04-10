import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props); // paretns constructor

        this.state = { latitude: null, errMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    }

    render() {
        if (this.state.errMessage && !this.state.latitude) {
            return <div>Error: {this.state.errMessage}</div>;
        }

        if (!this.state.errMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)