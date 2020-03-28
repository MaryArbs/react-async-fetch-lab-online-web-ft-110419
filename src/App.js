import React from 'react';

class App extends React.Component {

  render() {
    return console.log('rendered')
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then( resp => resp.json())
      .then( json => console.log(json))
  }

}

export default App 
