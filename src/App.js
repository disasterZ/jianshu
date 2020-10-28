import React,{Component} from "react";
import Header from './common/header';
import { Provider } from "react-redux";
import {Iconfont} from './statics/iconfont/iconfont';
import store from './store';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Iconfont />
                <Header />
            </Provider>
        )
    }
}

export default App;