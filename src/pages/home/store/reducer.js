//import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        url: 'https://pic4.zhimg.com/100/v2-e4a4354b581f4ed675bf30a796da4dfb_hd.png'
    }, {
        id: 2,
        title: '手绘',
        url: 'https://pic4.zhimg.com/100/v2-e4a4354b581f4ed675bf30a796da4dfb_hd.png'
    }],
    articleList: [{
        id: 1,
        title: '时光旅人 | 宝藏伙计',
        url:"",
        desc: '楼下有一家清真面馆，汤面、炒面、拌面都做得极为地道、有嚼劲，当然，为了配合更多人的胃口，也有炒菜、盖浇饭等不同的选择。 如果吃的是炒面或者饭，还...'
    },
    {
        id: 2,
        title: '时光旅人 | 宝藏伙计',
        url:"",
        desc: '楼下有一家清真面馆，汤面、炒面、拌面都做得极为地道、有嚼劲，当然，为了配合更多人的胃口，也有炒菜、盖浇饭等不同的选择。 如果吃的是炒面或者饭，还...'
    }],
    recommendList:[{
        id:1,
        url:"https://pic1.zhimg.com/100/v2-e50033ab8e708451cfa51af255fa8064_hd.png"
    },{
        id:2,
        url:"https://pic2.zhimg.com/100/v2-ce95fb0f6d2f09aaa53626730686407d_hd.png"
    }]
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}