import React from 'react'
import { Header } from '../Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Howitworks } from '../Howitworks/Howitworks';
import { RapidTest } from '../Test/RapidTest/RapidTest';
import { AdvancedTest } from '../Test/AdvancedTest/AdvancedTest';
import { Info } from '../Info/Info';
import { Contactus } from '../Contactus/Contactus';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Success } from '../SuccessPage/Success';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Footer } from '../Footer/Footer';

export const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/how-it-works" component={Howitworks} />
                <Route path="/rapid-test" component={RapidTest}/>
                <Route path="/advanced-test" component={AdvancedTest}/>
                <Route path="/info" component={Info}/>
                <Route path="/contact-us" component={Contactus}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/success" component={Success}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
