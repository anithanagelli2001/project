//SpecificAlbumDetails/index.js
import React, {useEffect, useState} from 'react'

const SpecificAlbumDetails = ({match}) => {
  const [albumDetails, setAlbumDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const response = await fetch(
          `https://apis2.ccbp.in/spotify-clone/album-details/${match.params.id}`,
        )
        const data = await response.json()
        setAlbumDetails(data.album)
        setLoading(false)
      } catch (error) {
        console.error('Album details fetching error:', error)
      }
    }

    fetchAlbumDetails()
  }, [match.params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>{/* Render album details */}</div>
}

export default SpecificAlbumDetails
