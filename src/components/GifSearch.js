import React from 'react'

class GifSearch extends React.Component {
  state = {
    input: ""
  }

  handleUserInput = (event) =>{
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
        <form onSubmit={this.props.submitHandler}>
          <label>Enter a search term:
            <input type="text" id="input" onChange={this.handleUserInput} value={this.state.input}/>
            <button >Find GIFs</button>
          </label>
        </form>
    )
  }
}



export default GifSearch
