import React from 'react'
import { PhotoCat } from '../PhotoCat'

export const ListOfPhotoCats = () => {
  return (
    <ul>
      {
            [1, 2, 3].map((id) => <PhotoCat key={id} />)
        }
    </ul>
  )
}
