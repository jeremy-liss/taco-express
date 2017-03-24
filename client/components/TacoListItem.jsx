import React from 'react'

export default React.createClass({
  render () {
    const taco = this.props.taco
    return (
      <div className="taco-list-item">
        {`${taco.name} `}
        <a href="#" onClick={() => this.props.showDetails(taco)}>details</a>
      </div>
    )
  }
})
