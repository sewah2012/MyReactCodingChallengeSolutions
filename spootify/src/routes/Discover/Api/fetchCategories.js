import makeRequest from './makeRequest';

export default function fetchCategories() {
  return makeRequest('categories', 'categories');
}