import React from 'react'
import "../stateful.css"
import UserProfile from '../userProfile/userProfiles';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            copyArray: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(fetchedUsers => {
                console.log("Users, ", fetchedUsers)
                this.setState({ userList: fetchedUsers,
                copyArray: [...fetchedUsers] })
            })
    }

    filterList(value) {
        if (value) {
            let filterArray = this.state.copyArray.filter(({name}) => name.includes(value))
            this.setState({ userList: filterArray})
        }
    }
    render() {

        return (
            <>
                {this.state.userList.length === 0 ? <h1><img src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" width='100px' height='100px' /></h1> : (
                    <>
                        <h1>20) The total number of users are {this.state.userList.length}.</h1>
                        <label for="#filterList">Search...</label> <br />
                        <input className="btn" placeholder="Search..." id="#filterList" onChange={(e) => {this.filterList(e.target.value)}} />
                        <ul>
                            {this.state.userList.map(u =>
                                <li key={u.id}>
                                    <UserProfile user={u} />
                                </li>)}
                        </ul>
                    </>
                    )}

            </>
        )

    }
}

export default Users;