import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCart} from "../../actions"

const CartTable = ({items, deleteFromCart}) => {

    let key = 0;
    let counter = 0;
    const getRandomId = () =>{
         key = Math.floor(Math.random() * 10000)
        }
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {    
                    items.map(item => {
                        const {title, price, url, id} = item;
                        getRandomId();
                        
                        return (
                            <div key={key} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                        </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);