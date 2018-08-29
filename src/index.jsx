import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import YoutubeSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import API_KEY from "./config/key.js";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  videoSearch(term) {
    YoutubeSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    );
  }
  render() {
    const videoSeach = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSeach} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));
