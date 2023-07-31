import React, { PureComponent } from 'react';
import ImageListComponents from './ImageList.components';

export class ImageListContainer extends PureComponent {
  render() {
    return (
      <>
        <ImageListComponents images={this.props.images} />
      </>
    );
  }
}

export default ImageListContainer;
