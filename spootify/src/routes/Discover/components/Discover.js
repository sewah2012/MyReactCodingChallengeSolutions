
import React, { Component } from 'react';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {fetchCategories,fetchFeatured,fetchNewReleases} from'../Api/index'

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],

    };
  }

  componentDidMount= async()=>{
    await this.requestData('categories',fetchCategories);
    await this.requestData('newReleases',fetchNewReleases);
    await this.requestData('playlists',fetchFeatured);
  }

  requestData  = async (key, reqFunction) => {
    const data = await reqFunction();
    this.setState({[key]:data});

    // console.log(data)
  };

  render() {
    const { newReleases, playlists, categories} = this.state;


    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
