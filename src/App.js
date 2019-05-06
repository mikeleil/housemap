import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost, fetchSchema } from './actions/postActions';

import HouseMap from './components/HouseMap.js'
class App extends Component {

  componentDidMount() {
    this.props.fetchPost();
    this.props.fetchSchema();
  }
  
  render() {
    return (
      <div>
        { this.props.posts.map((post,index)  =>
          <HouseMap 
            key={index}
            data={post}
            schema={this.props.schema}
          />
        )}
      </div>
    );
  }
}

App.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  fetchSchema: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.postss,
  schema: state.schema.schemas,
});

export default connect(mapStateToProps, { fetchPost, fetchSchema })(App);