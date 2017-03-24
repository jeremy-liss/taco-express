import React from 'react'
import TacoListItem from './TacoListItem'

export default React.createClass({
  render () {
    return (
      <div className="taco-list">
      <h2>Tacos</h2>
      {this.props.tacos.map((taco) => {
        return <TacoListItem
          key={taco.id}
          taco={taco}
          showDetails={this.props.showDetails}
         />
      })}
      </div>
    )
  } 
})
