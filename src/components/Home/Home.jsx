import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Nativigate from './Nativigate'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="d-flex vh-75">
    <div className="w-25">
        <Nativigate/>
    </div>
    <div className="w-75">
        <Content/>
    </div>
    </section>
    <footer>
        <Footer/>
    </footer>
      </div>
    )
  }
}
