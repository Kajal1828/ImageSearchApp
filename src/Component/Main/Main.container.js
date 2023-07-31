import React, { PureComponent } from 'react'
import MainComponents from './Main.components'

const API_KEY = "nlcuhkRgRFtpYgmh7SqntX5MHBZBnBb2bNUpS02OF14";
const API_URL = "https://api.unsplash.com/search/photos";

export class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
      };
    }    
    
      searchImages = async (query) => {
        try {
          const response = await fetch(
            `${API_URL}?query=${encodeURIComponent(query)}&client_id=${API_KEY}`
          );
          const data = await response.json();
          console.log(data )
          this.setState({ images: data.results });
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      
  render() {
    return (
      <>
      <MainComponents images={this.state.images}
       searchImages={this.searchImages} />
      </>
    )
  }
}

export default MainContainer