import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([])
  const [categories, setCategories] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistsResponse = await fetch(
          'https://apis2.ccbp.in/spotify-clone/featured-playlists',
        )
        const playlistsData = await playlistsResponse.json()
        setFeaturedPlaylists(playlistsData.playlists)

        const categoriesResponse = await fetch(
          'https://apis2.ccbp.in/spotify-clone/categories',
        )
        const categoriesData = await categoriesResponse.json()
        setCategories(categoriesData.categories)

        const newReleasesResponse = await fetch(
          'https://apis2.ccbp.in/spotify-clone/new-releases',
        )
        const newReleasesData = await newReleasesResponse.json()
        setNewReleases(newReleasesData.albums)

        setLoading(false)
      } catch (error) {
        console.error('Home data fetching error:', error)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Editor's Picks</h1>
      <ul>
        {featuredPlaylists.map(playlist => (
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>
              <img src={playlist.thumbnail_url} alt="featured playlist" />
              <p>{playlist.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h1>Genres & Moods</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              <img src={category.icon_url} alt="category" />
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h1>New Releases</h1>
      <ul>
        {newReleases.map(release => (
          <li key={release.id}>
            <Link to={`/album/${release.id}`}>
              <img src={release.thumbnail_url} alt="new release album" />
              <p>{release.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
