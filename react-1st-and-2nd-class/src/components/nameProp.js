import React from 'react';

class Quote extends React.Component {
    render() {
        return <h2>{this.props.quote}</h2>;
    }
}

export default Quote;