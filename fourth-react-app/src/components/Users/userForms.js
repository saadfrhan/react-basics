import React, { useState } from 'react'
import '../stateful.css'
function UserForm() {
    const [uName, setName] = useState('')
    return (
        <>
            <h2>21) Your given username is: {uName}</h2>
            <input type="text" placeholder="Enter your name..." onChange={(e) => { setName(e.target.value) }} className="btn" />
        </>
    )
}

export default UserForm;