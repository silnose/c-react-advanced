import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import NProgress from 'nprogress'
import { List, Item } from './styles.js'

const useCategoryData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      try {
        const response = await window.fetch(
          'https://silnose-petgram-api.vercel.app/categories'
        )
        const data = await response.json()
        setCategories(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    getCategories()
  }, [])

  return { categories, loading, error }
}
export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading, error } = useCategoryData()

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  useEffect(() => {
    if (loading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [loading])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
