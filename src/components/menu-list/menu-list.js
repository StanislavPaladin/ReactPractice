import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from "../hoc/";
import {menuLoaded, menuRequested, addedToCart} from "../../actions/";
import Spinner from "../spinner/spinner";


import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems() 
            .then(res => this.props.menuLoaded(res))
    }
    render() {
        const {menuItems, loading, addedToCart} = this.props;

        if(loading) {
            return (
                <Spinner/>
            )
        }

        let key = 0;
        const foo = () => {
           key = Math.floor(Math.random()*10000);
        }

        return (
            <ul className="menu__list">
                {
                menuItems.map(menuItem => {
                    foo()
                    console.log(key);
                    return <MenuListItem 
                    key={key} 
                    menuItem={menuItem}
                    onAddToCart={() => addedToCart(menuItem.id)}
                    />
                }) 
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCart
    
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));