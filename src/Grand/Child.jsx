import React, { Component } from 'react';

export default class Child extends Component {
    render() {
        let {id , name, price, onSale, count} = this.props.proInfo;
        return (
            <div className="col-md-4">
                <div className="box text-dark position-relative bg-light px-3 py-4">
                    <h5>Name : {name}</h5>
                    <h5>Price : {price}</h5>
                    <h5>Count : {count}</h5>
                    {onSale?<div className='position-absolute end-0 top-0 p-3 me-2 bg-danger'>Sale</div>:''}
                    <button onClick={()=> this.props.delete(id)} className='btn btn-outline-danger w-100 py-2 my-2'>Delete Product</button>
                    <button onClick={()=> this.props.update(id)} className='btn btn-outline-dark w-100 py-2 my-2'>Update Product</button>
                </div>
            </div>
        );
    }
}
