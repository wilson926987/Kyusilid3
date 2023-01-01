import './App.css';
import './assets/css/bootstrap-grid.css';
import { useState } from 'react';
import { themeContext , userInfoContext} from './Globalcontext';
import Container from './1general/components/Container';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa'


import Login from './1general/containerpages/Login';
import MyClasses from './1general/containerpages/MyClasses';
import Dashboard from './1general/containerpages/Dashboard';
import Archived from './1general/containerpages/Archived';
import ClassContainer from './1general/containerpages/ClassContainer';
import MyclassesDefault from './1general/containerpages/MyclassesDefault';
import ClassStats from './1general/containerpages/ClassStats';
import ClassInfo from './1general/containerpages/ClassInfo';
import ClassActivity from './1general/containerpages/ClassActivity';
import Classmarks from './2prof/Classmarks';
import ClassModules from './2prof/ClassModules';
import Createnew from './2prof/Createnew';

import AdminContainer from './4admin/AdminContainer';
import AdminDashboard from './4admin/AdminDashboard';
import Accounts from './4admin/Accounts';
import FileManager from './4admin/FileManager';

import COURSE_IE from './4admin/COURSE_IE';
import COURSE_IT from  './4admin/COURSE_IT';
import COURSE_ENTREP from './4admin/COURSE_ENTREP';
import COURSE_BSBA from './4admin/COURSE_BSBA';




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
                    <Route path='' element={<MyclassesDefault/>} />
                    <Route path={'sampleclass'} element={<ClassContainer/>}>          
                        <Route path='' element ={ <ClassStats/>} />
                        <Route path='createnew' element={<Createnew/> }/>
                        <Route path='info'  element={<ClassInfo/>} />
                        <Route path= 'activities' element={<ClassActivity/>} />
                        <Route path='marks' element={<Classmarks/>} />
                        <Route path='modules' element={<ClassModules/>} />
                    </Route>
                </Route> 
                <Route path={'archived'} element={<Archived/>} /> 
              </Route> 
              <Route path='/kyusilidAdmin' element={userinfo!=null ? <AdminContainer/> : <Login/>}>
                <Route path='' element={<AdminDashboard/>} />
                <Route path='Information_Technology' element={<COURSE_IT/>}></Route>
                <Route path='Business_Administration' element={<COURSE_BSBA/>}></Route>
                <Route path='Industrial_Engineering' element={<COURSE_IE/>}></Route>
                <Route path='Entrepreneurship' element={<COURSE_ENTREP/>}></Route>
                <Route path='accounts' element={<Accounts/>}> </Route>
                <Route path='filemanager' element={<FileManager/>}></Route>
              </Route>
            </Routes>   
            
              <div className='createNewbutton secondary'>
                <FaPlus/>
              </div>
          
        </BrowserRouter>
      </div>
      </div>

    </themeContext.Provider>
    </userInfoContext.Provider>
  

  );
}

export default App;
