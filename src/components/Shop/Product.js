import React, { Component } from 'react'
import CartProduct from './CartProduct';

export default class Product extends Component {
    constructor(props){
        super(props);
    }
   
    
  
    render() {
        return (
            <div key={this.props.id} class="shop-item">
                <span class="shop-item-title">{this.props.title}</span>
                <img class="shop-item-image" src={this.props.img} />
                <div class="shop-item-details">
                    <span class="shop-item-price">{this.props.price}$</span>
                    <button
                        class="btn btn-primary shop-item-button"
                        type="button" onClick={this.props.clicked}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
