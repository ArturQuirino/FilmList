import { Component, OnInit } from '@angular/core';
import { OmdbService } from './services/omdb.service';
import { FilmShort } from './models/film-short.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  films: FilmShort[];

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
    this.omdbService.obterListaFilmes().subscribe((response: any) => {
      this.films = response.Search;
    });
  }



}
