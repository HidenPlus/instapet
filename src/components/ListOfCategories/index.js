import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://petgram-server-mauve-nu.vercel.app/categories')
        setCategories(await res.json())
      } catch (error) {
        throw new Error(error)
      }
    }
    fetchCategories().finally(() => setLoading(false))
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading
          ? <Item key='cargando'><Category /></Item>
          : categories.map((category) => (
            <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>
          ))}
      </List>
    )
  }

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
