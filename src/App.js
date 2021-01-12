import './App.css';
import Navbar from './components/Navbar/Navbar';
import VideoUploadForm from './components/VideoUploadForm/VideoUploadForm'
import Videos from './components/Videos/Videos';
import { Component } from 'react';
import { render } from '@testing-library/react';
import initiate, { intiate } from './js/utils';

class App extends Component{
  constructor(){
    super();
    this.state = {
      route:'videos'
    }
  }

  onRouteChange = (route) => {
    if(route === 'videos'){
      this.setState({route:'videos'});
    }else if(route === 'uploadVideo'){
      this.setState({route: 'uploadVideo'});
    }
  }

  componentDidMount() {
    initiate();
  }

  render() {
    return (
      <div className="App">
        <Navbar onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'videos'
            ? <Videos />
            : <VideoUploadForm />
        }
      </div>
    );
  }
}

export default App;
