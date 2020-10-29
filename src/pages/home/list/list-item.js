import React from 'react'

export const ListItem = ({
  name,
  description,
  price,
  rowColor,
}) => (
  <>
    <div style={{background: rowColor}}>
      <span>{name}</span>
      <span style={{paddingLeft: "5px"}}>{description}</span>
      <span>{price}</span>
    </div>
  </>
)