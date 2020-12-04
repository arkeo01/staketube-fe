import './App.css';
import Navbar from './components/Navbar/Navbar';
import VideoUploadForm from './components/VideoUploadForm/VideoUploadForm'
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className="App">
      {/* TODO: Implement basic routing */}
      <Navbar />
      {/* <VideoUploadForm /> */}
      <Videos />
    </div>
  );
}

export default App;
