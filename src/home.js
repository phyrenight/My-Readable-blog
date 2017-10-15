import React, { Component } from 'react';
import Header from './Header.js';

class Home extends Component {
	render(){
	  return (
      <div>
        <Header />
        <main>
          <h2> This is the home page</h2>
        </main>
      </div>
    );
	}
}

export default Home