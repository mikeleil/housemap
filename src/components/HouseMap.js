import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Address from './Address'
import Area from './Area'
import Price from './Price'
import Image from './Image'

class HouseMap extends Component {

  state = {
    key: 0
  };


  renderSwitch = (param, child) => {
    switch(param) {
      case 'ADDRESS':
        return <Address full_address={this.props.data.full_address}/>;
      case 'IMAGE':
        return <Image data={this.props.data} inside={child}/>;
      case 'PRICE':
        return <Price price={this.props.data.price}/>;
      case 'AREA':
        return <Area area={this.props.data.area}/>;      
      default:
        return <div/>;
    }
  }

  render() {
    return (
      <div className="card">
        <Tabs
          id="controlled-tab"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          {this.props.schema.map ((schema,index)  =>
            <Tab 
              key={ index } 
              eventKey={ index } 
              title={ index+1 + '  schema' }>
            </Tab>
          )}
        </Tabs>

        <div className="card-body">
          {this.props.schema.length > 0 ? 
            <div>
              {this.props.schema[this.state.key].template.map ((component,index)  =>
                <div key = {index}>
                  {this.renderSwitch(component.component,component)}
                </div>
              )}
            </div>: 
            <div>  
            </div>
          }
        </div>
      </div>
    );
  }
}


export default HouseMap;