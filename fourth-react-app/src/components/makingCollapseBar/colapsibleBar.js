import React from 'react';
import './colapsibleBar.css';

class CollapseibleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }
    }

    toggleExpandedState() {
        let currentValue = this.state.isExpanded
        this.setState({ isExpanded: !currentValue })
    }

    render() {
        return (
            <>
                <div className='wrapper'>
                    <div className='header' onClick={() => { this.toggleExpandedState() }}>
                        {this.props.title}
                    </div>
                    <div className={`body ${this.state.isExpanded ? 'body-expanded' : ''}`} >
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }

}

export default CollapseibleItem