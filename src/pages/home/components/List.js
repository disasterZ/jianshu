import React, { Component } from "react";
import { connect } from 'react-redux';
import {actionCreator} from '../store';
import { ListItem, ListInfo,LoadMore } from '../style';

class List extends Component {
    render() {
        const { list,getMoreList,page } = this.props
        return (
            <div>
                {list.map((item)=>{
                    return (
                        <ListItem key={item.get('id')}>
                            <img className="pic" alt="" src={item.get('url')} />
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
                <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home','articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreator.getMoreList(page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);