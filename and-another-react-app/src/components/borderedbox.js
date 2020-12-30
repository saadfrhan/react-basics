import React from 'react'
import './borderedbox.css'
class BorderedBox extends React.Component {
    render() {
        return <>
            <div className="box">
<b>14) You are going to see some text below:</b>
{this.props.children}
            </div>
        </>
    }
}

export default BorderedBox;