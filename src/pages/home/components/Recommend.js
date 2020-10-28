import React,{Component} from "react";
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from 'react-redux';

class Recommend extends Component{
    render(){
        const {list} = this.props;
        return(
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return(
                            <RecommendItem imgUrl={item.get('url')} key={item.get('id')} />
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list:state.getIn(['home','recommendList'])
    }
}

export default connect(mapStateToProps,null)(Recommend);