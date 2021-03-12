import { Component } from 'react';
import './App.css';
import Movies from './components/movies';
// import Rating from '@material-ui/lab/Rating';

class App extends Component {
  constructor(props) {
    super(props)

    const movieRows = []
    Movies.forEach((film) => {
      const movieRow = <table key={film.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src={film.poster}/>
            </td>
            <td>
              <h2>{film.name}</h2>
              <p>{film.overview}</p>
              {/* <p>рейтинг: <Rating value={film.rayting} max={10} /></p> */}
              <a href={film.youtube} target="_blank">Посмотреть трейлер "{film.name}" на YouTube</a>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }
  render() {
    return (
      <div>
        {this.state.rows} 
      </div>    
    );
    }
}

export default App;
