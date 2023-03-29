import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function PlaylistsPage() {

  // Use Spotify API to display all of the playlists that I have made.
  const SPOTIFY_CLIENT_ID = process.env.GATSBY_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let accessToken = null;
      let expirationTime = 0;

      const accessTokenReceivedTime = window.localStorage.getItem('accessTokenReceivedTime');
      if (window.localStorage.getItem('accessToken') && (Date.now() - accessTokenReceivedTime < 3600000)) {
        accessToken = window.localStorage.getItem('accessToken');
      } else {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
          },
          body: 'grant_type=client_credentials'
        });
      
        const tokenData = await tokenResponse.json();
        accessToken = tokenData.access_token;
        // Set expiration time to one hour from now
        expirationTime = Date.now() + (tokenData.expires_in * 1000);
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('accessTokenReceivedTime', Date.now());
      }

      const playlistsResponse = await fetch('https://api.spotify.com/v1/users/12150582226/playlists?offset=0&limit=50', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const playlistsData = await playlistsResponse.json();
      console.log(playlistsData.total)
      setPlaylists(playlistsData.items);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1>music for me and you</h1>
      <div class="row row-example">
        {
          playlists.map((playlist) => (
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
              <article key={playlist.id}>
                <header>
                  <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" title={playlist.name}><img src={playlist.images[0].url} alt={playlist.name} title="Open playlist in new tab"/></a>
                  <div class="playlist-name">
                    <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" title={playlist.name}>{playlist.name}</a>
                  </div>
                </header>
                <p>{playlist.description}</p>
                <footer>tags: </footer>
              </article>
            </div>


          ))
        }
      </div>

    </Layout>
  );

}
