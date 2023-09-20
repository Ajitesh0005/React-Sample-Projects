import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import { Login } from './login';
import reportWebVitals from './reportWebVitals';
import { NetflixIndex } from './netflix/netflix-index';
import { RegisterComponent } from './components/register/register.component';
import { NetflixIndexR } from './netflix-complete/netflix-index';
import { DataBinding01 } from './components/data-binding/data-binding01';
import { DataBinding02 } from './components/data-binding/data-binding02';
import { DataBinding03 } from './components/data-binding/data-binding03';
import { DataBinding04 } from './components/data-binding/data-binding04';
import { DataBinding05 } from './components/data-binding/data-binding05';
import { DataBinding06 } from './components/data-binding/data-binding06';
import { OneWayBinding } from './components/data-binding/data-binding07';
import { TwoWayBinding } from './components/data-binding/data-binding08';
import { TwoWayBindingA } from './components/data-binding/data-binding09';
import { StyleBinding } from './components/data-binding/style-binding01';
import { ClassBinding01 } from './components/class-binding/class-binding01';
import { ClassBinding02 } from './components/class-binding/class-binding02';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { APIDemo01 } from './components/api-demo/api-demo01';
import { APIDemo02 } from './components/api-demo/api-demo02';
import { APIDemo03 } from './components/api-demo/api-demo03';
import { APIDemo04 } from './components/api-demo/api-demo04';
import { APIDemo05 } from './components/api-demo/api-demo05';
import { NasaAPI } from './components/nasa-api/nasa-api';
import { Shopper } from './components/shopper/shopper';
import { EventDemo01 } from './components/event-demo/event-demo01';
import { EventDemo02 } from './components/event-demo/event-demo02';
import { EventDemo03 } from './components/event-demo/event-demo03';
import { EventDemo04 } from './components/event-demo/event-demo04';
import { EventDemo05 } from './components/event-demo/event-demo05';
import { EventDemo06 } from './components/event-demo/event-demo06';
import { EventDemo07 } from './components/event-demo/event-demo07';
import { EventDemo08 } from './components/event-demo/event-demo08';
import { EventDemo09 } from './components/event-demo/event-demo09';
import { EventDemo10 } from './components/event-demo/event-demo10';
import { EventDemo11 } from './components/event-demo/event-demo11';
import { EventDemo12 } from './components/event-demo/event-demo12';
import { EventDemo13 } from './components/event-demo/event-demo13';
import { EventDemo14 } from './components/event-demo/event-demo14';
import { ProjectHome } from './custom-components/project-home/project-home';
import { ProjectHomeA } from './custom-components/project-home/project-homeA';
import { ProjectHomeB } from './custom-components/project-home/project-homeB';
import { ProjectHomeB01 } from './custom-components/project-home/project-homeB01';
import { ProjectHomeC } from './custom-components/project-home/project-homeC';
import { TableDemo01 } from './custom-components/table-demo/table-demo01';
import { Login01 } from './class-components/login/login01';
import { Login02 } from './class-components/login/login02';
import { ClassST } from './class-components/login/state-component';
import { ClassMount01 } from './class-components/login/mount-component01';
import { ClassMount02 } from './class-components/login/mount-component02';
import { ClassEvents01 } from './class-components/class-events/class-events01';
import { ClassEvents02 } from './class-components/class-events/class-events02';
import { ClassEvents03 } from './class-components/class-events/class-events03';
import { ClassEvents04 } from './class-components/class-events/class-events04';
import { ClassEvents05 } from './class-components/class-events/class-events05';
import { ClassEvents06 } from './class-components/class-events/class-events06';
import { ClassEvents07 } from './class-components/class-events/class-events07';
import { Shopping01 } from './class-components/custom-class-components(props)/shopping/shopping01';
import { ReactForm01 } from './components/react-forms/react-form01';
import { ReactForm02 } from './components/react-forms/react-form02';
import { Formik01 } from './components/formik/formik01';
import { Formik02 } from './components/formik/formik02';
import { Formik03 } from './components/formik/formik03';
import { Formik04 } from './components/formik/formik04';
import { FormikValidation05 } from './components/formik/formik05';
import { FormikValidation06 } from './components/formik/formik06';
import { FormikValidation07 } from './components/formik/formik07';
import { TutorialApp01 } from './components/tutorial-app/t01-app';
import { TutorialApp02 } from './components/tutorial-app/t02-app';
import { TutorialApp03 } from './components/tutorial-app/t03-app';
import { APIAxios } from './components/tutorial-app/forNavigate';
import { ContextDemo } from './components/context-demo/context-demo';
import { ReduxDemo } from './components/redux-demo/redux-demo';
import { MUIDemo } from './components/mui-demo/mui-demo';
import { MUIDate } from './components/mui-demo/mui-date';
import { MUICHKB } from './components/mui-demo/mui-chkb';
import { SIG } from './React-Projects/signature-app/signature';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SIG />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
