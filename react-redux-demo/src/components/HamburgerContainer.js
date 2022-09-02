import React from 'react'
import { connect } from 'react-redux'
import { buyHamburger } from '../redux'

function HamburgerContainer(props) {
  return (
    <div>
        <h2>Number of hamburgers - {props.numOfHamburgers}</h2>
        <button onClick={props.buyHamburger}>Buy Hamburger</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfHamburgers: state.hamburger.numOfHamburgers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyHamburger: () => dispatch(buyHamburger())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerContainer)