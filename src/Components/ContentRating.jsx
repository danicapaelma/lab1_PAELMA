
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
  super();
  this.state = {
    likes: 0,
    dislikes: 0,
    handleLike: () => {
  this.setState((prevState) => ({
    likes: prevState.likes + 1
  }));
  },

handleDislike: () => {
  this.setState((prevState) => ({
    dislikes: prevState.dislikes + 1
  }));
}
  }
    }
  render() {
    return (
     <>
     <div className='content-rating'>
  <p>
    React is a JavaScript library developed by Facebook that has revolutionized front-end web development through its component-based architecture. It enables developers to break down complex user interfaces into reusable, encapsulated components, each managing its own state and behavior.

One of React’s key innovations is the use of a virtual DOM, which allows for efficient UI updates and results in faster, smoother user experiences. React is widely adopted for building single-page applications (SPAs), web applications, and mobile apps through frameworks like React Native.

React promotes a declarative approach to UI development, making code more predictable and easier to debug. Its ecosystem includes powerful tools and libraries such as React Router for navigation and Redux for state management. These tools enhance React’s capabilities, allowing developers to build dynamic and interactive user interfaces with performance optimizations and cross-platform support.
  </p>
  <div className='rating-buttons'>
    <button className='like-button' onClick={this.state.handleLike}>
      Like ({this.state.likes})
    </button>
    <button className='dislike-button' onClick={this.state.handleDislike}>
      Dislike ({this.state.dislikes})
    </button>
  </div>
</div>
     </>
    );
  }
}

export default ContentRating;
