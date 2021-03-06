import makeRequest from './makeRequest';

export default function fetchFeatured() {
  return makeRequest('featured-playlists', 'playlists');
}