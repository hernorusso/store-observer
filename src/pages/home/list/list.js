import React from 'react'
import { ListItem } from './list-item'

export const List = ({
  list
}) => (
  list.map(item => (
    <ListItem
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ))
)