import axios from 'axios'
import { fromJS } from 'immutable'
import {constants} from './index'

const changeHomeData=(result) => ({
    type:constants.GET_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})

const addHomeList = (list,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const getHomeData = ()=>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}
export const getMoreList = (page) =>{
    return (dispatch) =>{
        axios.get('/api/list.json?page='+page).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result,page+1));
        })
    }
}

export const toggleTopShow = (show) =>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})