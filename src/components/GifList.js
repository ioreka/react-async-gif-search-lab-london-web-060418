import React from 'react'


class GifList extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <ul>
        {this.props.gifList.map((gif) => {
          return (
            <li key={gif.images.downsized.url}>
              <img src={gif.images.downsized.url} alt="" />
            </li>
          )
          })}
      </ul>
    )
  }

}

export default GifList
