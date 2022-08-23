import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { PhotoCard } from '../PhotoCard'

const PHOTO_QUERY = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    liked
    userId
  }
}
`

export const PhotoCardWithQuery = () => {
  const params = useParams()
  const { data, loading, error } = useQuery(PHOTO_QUERY, { variables: { id: params.id } })
  console.log(data)
  if (loading) {
    return <h1>Cargando...</h1>
  }
  if (error) {
    return <h1>Error del servidor</h1>
  }
  return <PhotoCard {...data.photo} />
}
