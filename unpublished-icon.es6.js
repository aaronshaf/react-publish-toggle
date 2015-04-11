import React from 'react'

const UnublishedIcon = React.createClass({
  render() {
    return (
      <div className="ReactPublishToggle-unpublished-icon">
        <svg className="ReactPublishToggle-unpublished-icon-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path d="M26.287 12.893c.073-.406.125-.82.125-1.248 0-3.824-3.097-6.925-6.927-6.925-3.35 0-6.14 2.377-6.783 5.534-.583-.227-1.21-.362-1.873-.362-2.87 0-5.193 2.326-5.193 5.194 0 .203.037.397.06.595-2.075.96-3.522 3.05-3.522 5.487 0 3.05 2.245 6.06 5.194 6.06h14.71c4.31 0 7.795-3.49 7.795-7.792 0-2.75-1.434-5.157-3.588-6.543z"/>
        </svg>
      </div>
    )
  }
})

export default UnublishedIcon