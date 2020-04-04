import React from 'react'

const validation = props => {
  let sizeMatters = "Text too short.";

  if (props.inputLength > 5) {
    sizeMatters = "Text long enough.";
  }

  return (
    <div>
      <p>{sizeMatters}</p>
    </div>
  );
};

export default validation;