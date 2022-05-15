import './App.css';
import Project from './project';
import ProjectData from './projectData.json';

function App() {
  return (
    <div className='container'>
      <h2 className='text-center'>About me</h2>
      <p>I'm a software engineer with 10+ year experience. I'm currently working full time for an italian insurance company.</p>
      <h1 className='text-center'>Projects</h1>

      <div className="">
        <div className='row'>
          {

            ProjectData.map(
              pData => {
                return (

                  <Project key={pData.id} id={pData.id} image={pData.image} title={pData.title} description={pData.description} features={pData.features} tech={pData.tech} />

                )
              }
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
