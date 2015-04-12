'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _classSet = require('class-set');

var _classSet2 = _interopRequireWildcard(_classSet);

var PublishToggle = _React2['default'].createClass({
  displayName: 'PublishToggle',

  propTypes: {
    published: _React2['default'].PropTypes.bool,
    onChange: _React2['default'].PropTypes.func,
    disabled: _React2['default'].PropTypes.bool,
    ariaLabels: _React2['default'].PropTypes.object
  },

  getInitialState: function getInitialState() {
    return {
      hasFocus: false
    };
  },

  handleClick: function handleClick(event) {
    var checkbox = this.refs.input.getDOMNode();
    var checkboxWasDirectlyClicked = event.target === checkbox;
    if (checkboxWasDirectlyClicked) {
      return;
    }
    event.preventDefault();
    checkbox.click();
    checkbox.focus();
  },

  handleFocus: function handleFocus() {
    this.setState({ hasFocus: true });
  },

  handleBlur: function handleBlur() {
    this.setState({ hasFocus: false });
  },

  isChecked: function isChecked() {
    if (this.props.checked != null) {
      return this.props.checked;
    }
    if (this.refs.input) {
      return this.refs.input.getDOMNode().checked;
    }
    return this.props.published || false;
  },

  render: function render() {
    var classes = _classSet2['default']('ReactPublishToggle', {
      ReactPublishToggle: this.isChecked(),
      'ReactPublishToggle--published': this.props.published,
      'ReactPublishToggle--unpublished': !this.props.published,
      'ReactPublishToggle--focus': this.state.hasFocus,
      'ReactPublishToggle--disabled': this.props.disabled
    });

    return _React2['default'].createElement(
      'div',
      { className: classes, onClick: this.handleClick },
      _React2['default'].createElement('input', _extends({
        type: 'checkbox',
        className: 'ReactPublishToggle__screenreader-only',
        defaultChecked: this.props.published,
        ref: 'input',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, this.props)),
      _React2['default'].createElement(
        'svg',
        { className: 'ReactPublishToggle__svg', xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', viewBox: '0 0 32 32' },
        _React2['default'].createElement('path', { className: 'ReactPublishToggle__cloud',
          d: 'M26.287 12.893c.073-.406.125-.82.125-1.248 0-3.824-3.097-6.925-6.927-6.925-3.35 0-6.14 2.377-6.783 5.534-.583-.227-1.21-.362-1.873-.362-2.87 0-5.193 2.326-5.193 5.194 0 .203.037.397.06.595-2.075.96-3.522 3.05-3.522 5.487 0 3.05 2.245 6.06 5.194 6.06h14.71c4.31 0 7.795-3.49 7.795-7.792 0-2.75-1.434-5.157-3.588-6.543z' }),
        _React2['default'].createElement('path', {
          className: 'ReactPublishToggle__check',
          d: 'm 22.415,11.168 c -0.763,-0.562 -1.852,-0.408 -2.424,0.346 l -5.265,6.924 -2.886,-2.832 c -0.678,-0.665 -1.774,-0.665 -2.45,0 -0.678,0.663 -0.678,1.74 0,2.404 l 5.717,5.61 7.662,-10.073 c 0.57,-0.753 0.413,-1.818 -0.355,-2.378 z' })
      )
    );
  }
});

exports['default'] = PublishToggle;
module.exports = exports['default'];
