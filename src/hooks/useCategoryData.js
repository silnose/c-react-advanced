import { useState, useEffect } from 'react'

export const useCategoryData = () => {
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
