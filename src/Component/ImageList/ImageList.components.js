import React, { PureComponent } from 'react';
import './ImageList.scss'

export class ImageListComponents extends PureComponent {
  render() {
    const { images } = this.props;
    return (
      <div className="image-list">
        {images.map((image) => (
          <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
        ))}
      </div>
    );
  }
}

export default ImageListComponents;
