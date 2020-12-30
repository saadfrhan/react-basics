import '../stateful.css'
import { Link } from 'react-router-dom';
import '../../App.css';
import LoginForm from '../loginFormComponent';
import Posts from '../posts';

function Buttons() {
    return(
        <div>
        <h1 className="top-heading">25) Routing</h1><br />
        <Link to='/home' exact>Home</Link><br />
        <br /><br />
        <Link to='/signin'>Sign in</Link><br />
        <br /><br />
        <Link to='/signup'>Sign up</Link>
        
        </div>
    )
}

export default Buttons;