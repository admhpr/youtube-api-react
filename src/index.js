import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import API_KEY from './config/key.js';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YoutubeSearch({
      key: API_KEY,
      term: 'surfboards',
    }, (videos) => {
      this.setState({ videos } )
    })
  }
  render(){
    return (
      <div>
         <SearchBar/>
         <VideoDetail video={this.state.videos[0]}/>
         <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render( <App/> , document.querySelector('.root'));