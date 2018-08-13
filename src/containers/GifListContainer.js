import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }


  submitHandler = (event) => {
    event.preventDefault()
    console.log(event.target.input.value)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.input.value}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(resp =>{
      this.setState({
        gifs: resp.data.slice(0, 3)
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch submitHandler={this.submitHandler} />
        <GifList gifList={this.state.gifs} />
      </React.Fragment>
    )
  }


}




export default GifListContainer
