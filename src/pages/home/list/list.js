import React from 'react'
import { ListItem } from './list-item'

export const List = ({
  list,
}) => (
  list.map((item, idx) => (
    <ListItem
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
      rowColor={idx % 2 ? "green" : "orange"}
    />
  ))
)