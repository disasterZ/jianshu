import React, { Component } from "react";
import Header from './common/header';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Iconfont } from './statics/iconfont/iconfont';
import store from './store';
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Iconfont />
                    <Header />
                    <BrowserRouter>
                        <Route path='/' exact component={Home}
                        ></Route>
                        <Route path='/detail' exact component={Detail}
                        ></Route>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App;