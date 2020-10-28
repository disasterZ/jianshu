import React from 'react';
import { connect } from "react-redux";
import { SearchInfoItem, SearchInfoSwitch, SearchInfoTitle, SearchInfo, Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, SearchWrapper, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from "./store";

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>)
    } else {
        return null;
    }
}

const Header = (props) => {
    return (
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
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocused}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe77d;</i>
                    {getListArea(props.focused)}
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


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused() {
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);