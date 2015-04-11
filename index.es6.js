import React from 'react'
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
    return this.props.published || false
  },

  render () {
    var classes = classSet('ReactPublishToggle', {
      'ReactPublishToggle': this.isChecked(),
      'ReactPublishToggle--published': this.props.published,
      'ReactPublishToggle--unpublished': !this.props.published,
      'ReactPublishToggle--focus': this.state.hasFocus,
      'ReactPublishToggle--disabled': this.props.disabled
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <input
          type="checkbox"
          className="ReactPublishToggle__screenreader-only"
          defaultChecked={this.props.published}
          ref="input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props}
      />
        <svg className="ReactPublishToggle-published-icon-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path d="M29.867 19.418c0 4.305-3.488 7.795-7.8 7.795H7.348c-2.933-.423-5.197-3.01-5.197-6.063 0-2.44 1.448-4.53 3.526-5.49-.024-.197-.06-.392-.06-.594 0-2.87 2.324-5.197 5.194-5.197.663 0 1.29.134 1.874.36.645-3.158 3.436-5.536 6.787-5.536 3.833 0 6.932 3.103 6.932 6.93 0 .427-.05.84-.125 1.248 2.155 1.387 3.59 3.794 3.59 6.547zm-7.452-8.25c-.763-.562-1.852-.408-2.424.346l-5.265 6.924-2.886-2.832c-.678-.665-1.774-.665-2.45 0-.678.663-.678 1.74 0 2.404l5.717 5.61 7.662-10.073c.57-.753.413-1.818-.355-2.378z"/>
        </svg>
      </div>
    )
  }
})

export default PublishToggle
