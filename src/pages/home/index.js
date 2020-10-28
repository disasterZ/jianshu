import React,{Component} from "react";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';

class Home extends Component{
    render(){
        return(
            <div>
                <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt=" " src="https://pic4.zhimg.com/100/v2-72f36027142daf7eab36116b2ffb482f_hd.png"/>
                    <Topic></Topic>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                </HomeWrapper>
            </div>
        )
    }
}

export default Home;