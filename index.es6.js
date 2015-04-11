import React from 'react'
import PublishedIcon from './published-icon.es6'
import UnpublishedIcon from './unpublished-icon.es6'
import classSet from 'class-set'

const PublishToggle = React.createClass({
  propTypes: {
    published: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    ariaLabels: React.PropTypes.object
  },

  getInitialState() {
    return {
      hasFocus: false
    }
  },

  handleClick(event) {
    var checkbox = this.refs.input.getDOMNode()
    var checkboxWasDirectlyClicked = event.target === checkbox
    if(checkboxWasDirectlyClicked) {
      return
    }
    event.preventDefault()
    checkbox.click()
    checkbox.focus()
  },

  handleFocus() {
    this.setState({hasFocus: true})
  },

  handleBlur() {
    this.setState({hasFocus: false})
  },

  isChecked() {
    if (this.props.checked != null) {
      return this.props.checked
    }
    if (this.refs.input) {
      return this.refs.input.getDOMNode().checked
    }
    return this.props.defaultChecked || false
  },

  render () {
    var classes = classSet('ReactPublishToggle', {
      'ReactPublishToggle': this.isChecked(),
      'ReactPublishToggle--published': this.props.published,
      'ReactPublishToggle--unpublished': !this.props.published,
      'ReactPublishToggle--focus': this.state.hasFocus,
      'ReactPublishToggle--disabled': this.props.disabled
    })

    const icon = this.props.published ?
       <PublishedIcon /> : <UnpublishedIcon />
    return (
      <div className={classes} onClick={this.handleClick}>
        <input
          type="checkbox"
          className="ReactPublishToggle__screenreader-only"
          ref="input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props}
        />
        {icon}
      </div>
    )
  }
})

export default PublishToggle
