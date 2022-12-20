import './App.css';
import './assets/css/bootstrap-grid.css'
import Sidebar from './1general/components/Sidebar';
import { useState } from 'react';
import { themeContext , userInfoContext, currentpageContext} from './Globalcontext';
import Container from './1general/components/Container';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import Login from './1general/containerpages/Login';
import MyClasses from './1general/containerpages/MyClasses';
import Dashboard from './1general/containerpages/Dashboard';
import Archived from './1general/containerpages/Archived';
import ClassContainer from './1general/containerpages/ClassContainer';
import MyclassesDefault from './1general/containerpages/MyclassesDefault';
import Classstream from './1general/containerpages/Classstream';
import ClassInfo from './1general/containerpages/ClassInfo';
import ClassActivity from './1general/containerpages/ClassActivity';
import Classmarks from './2prof/Classmarks';
import ClassModules from './2prof/ClassModules';





function App() {

  const [theme, settheme] = useState('default');
  const [userinfo, setuserinfo ] = useState();
 
  return (

    <userInfoContext.Provider value={{userinfo, setuserinfo}}>
    <themeContext.Provider value={{theme, settheme}}>


      <div className={theme}>
      <div className='appbody background'>
        <BrowserRouter>
            <Routes>
              <Route path={'/'} element={userinfo!=null ? <Container/> : <Login/> } > 
                <Route path={''} element={<Dashboard/>}></Route>  {/*this is the dashboard*/}
                <Route path={'classes'} element={<MyClasses/>}>  {/*this is the class list*/}
                    <Route path='' element={<MyclassesDefault/>}></Route>
                    <Route path={'sampleclass'} element={<ClassContainer/>}>
                        <Route path='' element ={ <Classstream/>}></Route>
                        <Route path='info'  element={<ClassInfo/>}></Route>
                        <Route path= 'activities' element={<ClassActivity/>}></Route>
                        <Route path='marks' element={<Classmarks/>}></Route>
                        <Route path='modules' element={<ClassModules/>}></Route>
                    </Route>
                </Route> 
                <Route path={'archived'} element={<Archived/>}> </Route>
              </Route> 
          
           

            </Routes>   
        </BrowserRouter>
      </div>
      </div>

    </themeContext.Provider>
    </userInfoContext.Provider>
  

  );
}

export default App;
