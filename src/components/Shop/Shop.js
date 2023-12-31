import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/FaceBook Logo.png' },
            ],
        }


    }

    addToCartHandler(idNum){
        // let item = this.state.products.findIndex((product)=>{
        //     return (product.id === idNum) 
     
        // })
        // let {id,title,price,img} = this.state.products[item]
        // let newItem = {id,title,price,img}
        // this.setState({shoppingCart:[...this.state.shoppingCart,newItem]})
        let item = this.state.products.find((product)=>{
            return (product.id === idNum) 

        })
        this.setState((prevstate)=> {
            return {shoppingCart: [...prevstate.shoppingCart, item]}

        })

    }

    removeProductFromCart(idNum){
        // let item = this.state.shoppingCart.findIndex((product)=>{
        //    return(product.id === idNum) 
       
            
        // })

        // this.setState(({ shoppingCart }) => {
        //     const newShoppingCart = [ ...shoppingCart ]
        //     newShoppingCart.splice(item, 1)
        //     return { shoppingCart:newShoppingCart }
        //   })

        let newShoppingCart = this.state.shoppingCart.filter((product)=>{
            return (product.id !== idNum)

        })

        this.setState({shoppingCart: newShoppingCart})
       
    }

    removeAllProduct(){
        this.setState({
            shoppingCart: []
        })

    }

    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                        {this.state.products.map((product)=>{
                            return(<Product {...product} clicked={()=>this.addToCartHandler(product.id)}/>)

                        })}
                        

                        
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                        {this.state.shoppingCart.map((shoppingProduct)=>{
                            return(<CartProduct {...shoppingProduct} clicked={()=>{this.removeProductFromCart(shoppingProduct.id)}} />)


                        })}

                        


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button" onClick={()=>this.removeAllProduct()}>
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {this.state.socials.map((social)=>{
                                return (<Social {...social} />)

                            })}

                           
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}