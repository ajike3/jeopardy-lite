import {Link} from 'react-router-dom';
function Navigation() {
    return(
    <div className="nav-container">
        <nav>
            <ul>
                <li><Link to="/welcome">Home</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/jeopardy">Jeopardy</Link></li>                
                <li><Link to="/clock">Clock</Link></li>
            </ul>
        </nav>
    </div>
    )
}   

export default Navigation;