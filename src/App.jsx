import './App.css'
import Character from './Character'
import React from 'react'
import Hello from './Hello'
import Yes from './Yes'
import Counter from './Counter'
import Profile from './Profile'
import Mount from './Mount'
import Update from './Update'
import UpdateStar from './UpdateStar'
import WindowToggler from './WindowToggler'

export default class App extends React.Component {
// Props are automatically generated
  render() {

    return (
      <>
        <h2>{this.props.type} components</h2>
        {/* <Character /> */}
        {/* <Hello /> */}
        {/* <Yes /> */}
        {/* <Counter /> */}
        {/* <Profile /> */}
        {/* <Mount /> */}
        {/* <Update /> */}
        {/* <UpdateStar /> */}
        <WindowToggler />
      </>
    )
  }

}
