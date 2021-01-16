import React from 'react'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <h2>{this.props.user.name}</h2>
                <b>{this.props.user.email}</b>
            </li>
        )
    }
}

export default UserProfile;