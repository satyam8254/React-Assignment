// import logo from './logo.svg';
import './App.css';

// function App() {
//     return ( <div className = "App" >
//         <header className = "App-header" >
//         <img src = { logo }
//         className = "App-logo"
//         alt = "logo"/>
//         <p>
//         Edit <code> src / App.js </code> and save to reload. 
//         </p > 
//         <a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React 
//         </a> 
//         </header > 
//         </div>
//     );
// }

function App(props){
    debugger;
    const{employee}=props;
    return(
        <div className='container'>
            
            <div className='profile-img-comtainer'>
                <img className='avatar' src={employee.profileImg} alt='profile-avatar'></img>
            </div>
            
            <div className='title-container'>
                <h1>{employee.name}</h1>
            </div>
            
            <div className='profile-info-container'>
                <label>
                    Location
                </label>
                <strong>
                    {employee.location}
                </strong>
            </div>

            <div className='profile-info-container'>
                <label>
                    bloodGroup
                </label>
                <strong>
                    {employee.bloodGroup}
                </strong>
            </div>

            <div className='profile-info-container'>
                <label>
                    Age
                </label>
                <strong>
                    {employee.age}
                </strong>
            </div>
        </div>
    );
};


export default App;


