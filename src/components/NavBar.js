import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';
import {useState} from 'react';
import toDoList from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';
import menu from '../images/icon-menu.svg';
import close from '../images/icon-close-menu.svg';

const FeaturesToggle = ({featuresDropDown}) =>{
    if(!featuresDropDown){
        return null;
    }
    return(
        <>
            <div className='features'>
                <div className='features-container'>
                        <div className='features-icon'>
                            <div className='box'>
                            <img className='icon' src={toDoList} alt="todo"/>
                            <p>Todo List</p>
                            </div>
                        </div>
                        <div className='features-icon'>
                            <div className='box'>
                                <img className='icon' src={calendar} alt="calendar"/>
                                <p>Calendar</p>
                            </div>
                            
                        </div>
                        <div className='features-icon'>
                            <div className='box'>
                                <img className='icon' src={reminders} alt="reminders"/>
                                <p>Reminders</p>
                            </div>
                            
                        </div>
                        <div className='features-icon'>
                            <div className='box'>
                                <img className='icon' src={planning} alt="planning"/>
                                <p>Planning</p>
                            </div>
                        </div>    
                </div>
            </div>
        </>
    )
}

const CompanyToggle = ({companyDropDown}) =>{
    if(!companyDropDown){
        return null
    }
    return(
        <>
            <div className='company'>
                <div className='company-container'>
                    <div className='company-box'>
                        <p>History</p>
                        <p>Our Team</p>
                        <p>Blog</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const NavBar = () =>{

    const [featuresDropDown, setFeaturesDropDown] = useState(false);
    const [companyDropDown, setcompanyDropDown] = useState(false);
    const [menuToggle, setmenuToggle] = useState(false)

    return(
        <nav className="main-nav">
            <div className='nav-container'>

                <div className="nav">
                <h1 className='brand'>snap</h1>   
                    <ul className={menuToggle ? 'nav-list active' : 'nav-list'}>
                        <li className='dropdown' onClick={() => setFeaturesDropDown(!featuresDropDown)}>Features <img className='dropdown-icon' src={!featuresDropDown ? arrowDown : arrowUp} alt="dropdown"/></li>
                        <li className='dropdown' onClick={() => setcompanyDropDown(!companyDropDown)}>Company <img className='dropdown-icon' src={!companyDropDown ? arrowDown : arrowUp} alt="dropdown"/></li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>

                    <FeaturesToggle featuresDropDown={featuresDropDown}/>
                    <CompanyToggle companyDropDown={companyDropDown}/>

                </div>
            
                <div className="nav-btn">
                    <button  className="btn">Login</button>
                    <button className="btn register">Register</button>
                </div>
                <div className='menu'> 
                    <img className='burger' onClick={() => setmenuToggle(!menuToggle )} src={menuToggle ? close : menu} alt='menu'/>
                </div>
            </div>

        </nav>
    )
}

export default NavBar