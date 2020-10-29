import React,{Component} from "react"
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component{

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div>
                <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt=" " src="https://pic4.zhimg.com/100/v2-72f36027142daf7eab36116b2ffb482f_hd.png"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action =actionCreator.getHomeData();
        dispatch(action);
    },
    changeScrollTopShow(){
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreator.toggleTopShow(true))
        }else{
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)