import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Address from './Address'
import Area from './Area'
import Price from './Price'

const Image = props => { 
  return (
    <div>
      <Carousel>
        {props.data.images.map ((image,index)  =>
          <Carousel.Item key={index}>
            <img src={image} alt="slide"/>
            <Carousel.Caption>
              {
                props.inside.hasOwnProperty('children') ? 
                  props.inside.children[0].component === 'PRICE' ?
                    <Price price={props.data.price}/>: 
                      props.inside.children[0].component === 'AREA' ?
                      <Area price={props.data.area}/>:
                      props.inside.children[0].component === 'ADDRESS' ?
                      <Address full_address={props.data.full_address}/>: null: null
              }
            </Carousel.Caption>
          </Carousel.Item> 
        )}
      </Carousel>
    </div>
  );
}

export default Image