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
      hasFocus: false,
      active: false
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
    this.setState({
      hasFocus: false,
      active: false
    })
  },

  handleKeyDown () {
    this.setState({active: true})
  },

  handleKeyUp () {
    this.setState({active: false})
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
      'ReactPublishToggle--active': this.state.active,
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
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          {...this.props}
      />
        <svg className="ReactPublishToggle__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 32 32">
          <path className="ReactPublishToggle__cloud"
            d="M26.287 12.893c.073-.406.125-.82.125-1.248 0-3.824-3.097-6.925-6.927-6.925-3.35 0-6.14 2.377-6.783 5.534-.583-.227-1.21-.362-1.873-.362-2.87 0-5.193 2.326-5.193 5.194 0 .203.037.397.06.595-2.075.96-3.522 3.05-3.522 5.487 0 3.05 2.245 6.06 5.194 6.06h14.71c4.31 0 7.795-3.49 7.795-7.792 0-2.75-1.434-5.157-3.588-6.543z"/>
          <path
             className="ReactPublishToggle__check"
             d="m 22.415,11.168 c -0.763,-0.562 -1.852,-0.408 -2.424,0.346 l -5.265,6.924 -2.886,-2.832 c -0.678,-0.665 -1.774,-0.665 -2.45,0 -0.678,0.663 -0.678,1.74 0,2.404 l 5.717,5.61 7.662,-10.073 c 0.57,-0.753 0.413,-1.818 -0.355,-2.378 z" />
        </svg>
      </div>
    )
  }
})

export default PublishToggle
