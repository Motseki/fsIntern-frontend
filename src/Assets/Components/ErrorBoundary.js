import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log the error or send it to a server for tracking
    console.error(error);
    // Update state to show an error message to the user
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message here
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
