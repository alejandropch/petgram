import { useState, useEffect } from 'react'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(async () => {
    setLoading(true)
    const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
    const data = await response.json()
    setCategories(data)
    setLoading(false)
  }, [])

  return { categories, loading }
}
