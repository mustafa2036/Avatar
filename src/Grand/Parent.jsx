import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        products : [
            {id:0, name:"Samsung", count:22, price:3000, onSale:true},
            {id:1, name:"Iphone6x", count:92, price:9000, onSale:false},
            {id:2, name:"Nokia", count:82, price:10000, onSale:true},
            {id:3, name:"Toshiba", count:52, price:3000, onSale:true},
            {id:4, name:"Samsung", count:42, price:5500, onSale:false},
            {id:5, name:"Ihpone", count:212, price:400, onSale:true},
            {id:6, name:"Appo", count:2, price:5000, onSale:false},
        ]
    }
    deleteProduct = (id) => {
        // deep copy
        let products = [...this.state.products]
        // action
        products = products.filter((product) => product.id !== id)
        // setState()
        this.setState({products})
    }
    updateProduct = (index) => {
        // deep copy
        let products = [...this.state.products]
        // Action 
        products[index].count = products[index].count + 1
        // 
        this.setState({products})
    }
  render() {
    return (
      <div>
        <div className="container bg-info p-3">
            <div className="row gy-3">
               {this.state.products.map((product , i)=> 
               <Child 
               key={i}
               update={this.updateProduct}
               delete={this.deleteProduct}
               proInfo={product}/>)}
            </div>
        </div>
      </div>
    )
  }
}
