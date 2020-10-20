import React from 'react'

export const ListItem = ({
  name,
  description,
  price,
}) => (
  <>
    <div>
      <span>{name}</span>
      <span>{description}</span>
      <span>{price}</span>
    </div>
  </>
)