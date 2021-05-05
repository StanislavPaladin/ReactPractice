import React from 'react';
import searchIcon from '../app-header/loupe.svg'
import {connect} from "react-redux";
import {searchInCart} from "../../actions"

import './search-pannel.css';

var _ = require('lodash');

const SearchPanel = ({searchInCart, items, search}) => {
    const input = document.getElementsByName('search-input')
    
    const onChange = _.debounce(function() {
        const val = input[0].value;
        searchInCart(val)
    },300)


    const hideSearch = () => {
        if(input[0].value) {
            input[0].value = ''
            searchInCart(input[0].value)
        }
    }

    let url,
        title;
    
    return (
        <div 
        className="search-group">
            <div className='wrapper'>
            <input 
            name="search-input"
            onChange={onChange}
            onBlur={hideSearch}
            type='search'
            placeholder='search'
            className="search-elem"/>
            <img className="wrapper-img"src={searchIcon} alt='search'></img>
            </div>

            {
                items.map(item => {
                    if (item.title.includes(search) && search.length !== 0) {
                        url = item.url;
                        title = item.title;
                        const showInfo = () => {
                            console.log(item)
                        }
                        return (
                            <div 
                            onClick={showInfo}
                            className="preview-wrapper">
                                <img className="img-preview"src={url} alt='121233'></img>
                                <span className="title-preview">{title}</span>
                            </div>
                        )
                    }
                })
            }
        </div>
        )
    
}
const mapStateToProps = ({items, search}) => {
    return {
        items,
        search
    }
};

const mapDispatchToProps = {
    searchInCart
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
