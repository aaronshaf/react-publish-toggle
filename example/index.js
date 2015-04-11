import React from 'react'
import PublishToggle from '../index.es6'

require('../style.css')
require('./example.css')

var App = React.createClass({
  getInitialState() {
    return {
      published: true
    }
  },

  handleChange(event) {
    this.setState({published: event.target.checked})
  },

  render () {
    return (
      <div>
        <PublishToggle published={this.state.published} onChange={this.handleChange} />
        <pre>
{`<PublishToggle
  onChange={this.handleChange}
  status='published'
  publishable={true}
  unpublishable={true}
  aria-labels={{
    published: 'Published. Click to unpublish.'
    unpublished: 'Unpublished. Click to publish.'
  }}
/>`}
        </pre>
        <pre>published: {this.state.published ? 'true' : 'false'}</pre>
      </div>
    )
  }
})

React.render(<App />, document.getElementById('application'))
