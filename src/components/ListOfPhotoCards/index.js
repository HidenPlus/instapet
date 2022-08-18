import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  if (loading) {
    return <h1>Cargando...</h1>
  }
  if (error) {
    return <h1>Error del servidor</h1>
  }
  return (
    <ul>
      {
        data?.photos?.map((photo) => <PhotoCard {...photo} key={photo.id} />)
      }
    </ul>
  )
}

