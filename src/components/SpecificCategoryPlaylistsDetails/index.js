//SpecificCategoryPlaylistsDetails/index.js
import React, {useEffect, useState} from 'react'

const SpecificCategoryPlaylistsDetails = ({match}) => {
  const [categoryDetails, setCategoryDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(
          `https://apis2.ccbp.in/spotify-clone/category-playlists/${match.params.id}`,
        )
        const data = await response.json()
        setCategoryDetails(data.category)
        setLoading(false)
      } catch (error) {
        console.error('Category details fetching error:', error)
      }
    }

    fetchCategoryDetails()
  }, [match.params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>{/* Render category details */}</div>
}

export default SpecificCategoryPlaylistsDetails
