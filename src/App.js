import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import VideoUploadForm from './components/VideoUploadForm/VideoUploadForm'
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <VideoUploadForm /> */}
      <Videos />
    </div>
  );
}

export default App;
