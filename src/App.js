import React, { Component } from 'react';
import axios from 'axios';
import './App.css'


class myPicsumApi extends Component {
  state = {isLoading : true}
  async componentDidMount(){
    let array = await axios.get('https://picsum.photos/v2/list')
    console.log(array.data)
    this.setState({ myData: array.data });
    this.setState({ isLoading: false });
  }
  render() { 
    return (
      <div id="boxes">
        {this.state.isLoading ? 'Loading' :  

         this.state.myData.map((elt) =>{
         return <article id="box" key={elt.id}>
            <img src={elt.download_url} alt=""></img>
            <h4>{elt.author}</h4>
            <button>See more</button>
          </article>

        })}
        {/* <img src="https://picsum.photos/200/300" alt=""/>
        <h4>Text</h4>
        <button>See more</button> */}
      </div>
      );
  }
}
 
export default myPicsumApi;