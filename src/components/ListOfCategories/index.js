import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import NProgress from 'nprogress'
import { List, Item } from './styles.js'
import { useCategoryData } from '../../hooks/useCategoryData.js'

const ListOfCategoriesComponent = () => {
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

  if (error) {
    return <h1>Error :( </h1>
  }
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
