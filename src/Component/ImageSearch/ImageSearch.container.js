import React, { PureComponent } from 'react';
import ImageSearchComponents from './ImageSearch.components';

export class ImageSearchContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state.query)
    this.props.searchImages(this.state.query);
    e.preventDefault();
  };

  render() {
    return (
      <>
        <ImageSearchComponents
          query={this.state.query}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default ImageSearchContainer;
