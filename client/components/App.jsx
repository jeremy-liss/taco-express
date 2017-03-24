import React from 'react'

import api from '../api'
import AddTaco from './AddTaco'
import TacoList from './TacoList'
import TacoDetails from './TacoDetails'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      tacos: [],
      activeTaco: null,
      detailsVisible: false,
      addtacoVisible: false,
      listVisible: true
    }
  },

  componentDidMount () {
    api.getTacos(this.renderTacos)
  },

  renderTacos (err, tacos) {
    this.setState({
      error: err,
      tacos: tacos
    })
  },

  refreshList (err) {
    this.setState({
      error: err,
      addtacoVisible: false
    })
    api.getTacos(this.renderTacos)
  },

  showAddtaco () {
    this.setState({
      addtacoVisible: true
    })
  },

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Taco Express!</h1>
        {this.state.listVisible && <TacoList
          showDetails={this.showDetails}
          tacos={this.state.tacos} />}
        {this.state.addtacoVisible && <Addtaco
          finishAdd={this.refreshList} />}
        {this.state.detailsVisible && <TacoDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          taco={this.state.activeTaco}
          list={this.state.hideList} />}
      </div>
    )
  },

  showDetails (taco) {
    this.setState({
      activeTaco: taco,
      detailsVisible: true
    })
  },

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  },

  hideList () {
    this.setState({
      listVisible: false
    })
  },



})
