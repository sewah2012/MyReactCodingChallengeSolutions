import React from 'react'
import { Link } from 'react-router-dom';

const MyPage = () => {
	return (
		 <div className="app">
		<h1>My PAge</h1>

		<Link to='/'> <a className="button is-primary">Navigate to HomePage</a></Link>
	  </div>
	)
}

export default MyPage;
