import { Injectable } from '@angular/core';
import {Movie} from './../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    new Movie(1, 'Jonh Wick', 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1558648211410-D8O2FK5ADKNUDJXFD8BT/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w', 'Mon Nguyen'),
    new Movie(2, 'End Game', 'https://cnet4.cbsistatic.com/img/akZrnDl8tdq8RvSuLNnqAgPJCHU=/2019/04/25/9277c764-601d-4ab3-85f9-9c39d7f1ac5a/avengers-endgame-promo-crop.jpg', 'Mon')
  ];
  constructor() { }

  getAllMovies(){
    return this.movies;
  }

  addMovie(movie: Movie){
    movie.id = this.getLastID(this.movies);
    this.movies.push(movie);
  }

  getLastID(movies){
    let lastID = movies.length > 0 ? movies.sort((a,b) => {
      if(a.id > b.id) return -1;
      else if(a.id < b.id) return 1;
      else return 0;
    })[0].id + 1 : 1;
    console.log('>>', movies);
    return lastID;
  }
}
