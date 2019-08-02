import { Component, OnInit } from '@angular/core';
import {MovieService} from './../../services/movie.service';
import {Movie} from './../../models/movie.class';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  addVideo(name:string, link:string, author: string){
    let movie = new Movie(null, name, link, author);
    this.movieService.addMovie(movie);
  }

}
