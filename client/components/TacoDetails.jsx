import React from 'react'

export default React.createClass({
  render () {
    const taco = this.props.taco
    console.log(taco);
    const isVisble = this.props.isVisible
    const hide = () => this.props.hideDetails()
    const classes = "taco-details " + isVisble ? 'visible' : 'hidden'
    return (
      <div className={classes}>
        <h2>Details</h2>
        <p>Name: {taco.name}</p>
        <p>Topping: {taco.topping}</p>
        <p>Shell: {taco.shell}</p>
        <p>Cheese: {taco.cheese}</p>
        <p>Price: {taco.price}</p>
        <a href="#" onClick={hide}>Close</a>
      </div>
    )
  }
})
