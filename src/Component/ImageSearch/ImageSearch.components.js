import React, { PureComponent } from 'react';
import './ImageSearch.scss'

export class ImageSearchComponents extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Search for images..."
            value={this.props.query}
            onChange={this.props.handleInputChange}
          />
          <button type="submit" >Search</button>
        </form>
      </div>
    );
  }
}

export default ImageSearchComponents;
