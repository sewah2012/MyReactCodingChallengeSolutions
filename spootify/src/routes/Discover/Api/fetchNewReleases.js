import makeRequest from './makeRequest';

export default function fetchNewReleases() {
  return makeRequest('new-releases', 'albums');
}