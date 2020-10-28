import React,{Component} from 'react';
import { connect } from "react-redux";
import { SearchInfoItem, SearchInfoSwitch, SearchInfoTitle, SearchInfo, Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, SearchWrapper, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from "./store";


class Header extends Component{
    getListArea(){
        const {mouseIn,focused,list,totalPage,page,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const jsList = list.toJS();
        const pageList=[];
        if(jsList.length){
            for(let i=(page-1)*5;i<page*5;i++){
                pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch
                        onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
                    >
                        <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe606;</i>
                        换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>)
        } else {
            return null;
        }
    }
    render(){
        const {focused,handleInputBlur,handleInputFocused,list} = this.props;
        return(
            <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={()=>{handleInputFocused(list)}}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe77d;</i>
                    {this.getListArea()}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className='iconfont'>&#xe600;</i>
                        写文章
                    </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused(list) {
            if(list.size === 0){
                dispatch(actionCreator.getList());
            }
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+originAngle+360+'deg)';
            if(page<totalPage){
                dispatch(actionCreator.changePage(page+1))
            }
            else{
                dispatch(actionCreator.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);