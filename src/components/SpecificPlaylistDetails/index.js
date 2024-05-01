//SpecificPlaylistDetails/index.js
import React, {useEffect, useState} from 'react'

const SpecificPlaylistDetails = ({match}) => {
  const [playlistDetails, setPlaylistDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaylistDetails = async () => {
      try {
        const response = await fetch(
          `https://apis2.ccbp.in/spotify-clone/playlists-details/${match.params.id}`,
        )
        const data = await response.json()
        setPlaylistDetails(data.playlist)
        setLoading(false)
      } catch (error) {
        console.error('Playlist details fetching error:', error)
      }
    }

    fetchPlaylistDetails()
  }, [match.params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>{/* Render playlist details */}</div>
}

export default SpecificPlaylistDetails
