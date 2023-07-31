import React, { PureComponent } from 'react'
import ImageSearchContainer from "../ImageSearch/ImageSearch.container";
import ImageListContainer from '../ImageList/ImageList.container';
import './main.scss'

export class MainComponents extends PureComponent {
  render() {
    const { images, searchImages } = this.props
    return (
        <div className="container">
        <h1>Image Search App</h1>
        <ImageSearchContainer searchImages={searchImages} />
        <ImageListContainer images={images} />
      </div>
    )
  }
}

export default MainComponents
