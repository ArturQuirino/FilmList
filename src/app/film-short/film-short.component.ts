import { Component, OnInit, Input } from '@angular/core';
import { FilmShort } from '../models/film-short.model';

@Component({
  selector: 'app-film-short',
  templateUrl: './film-short.component.html',
  styleUrls: ['./film-short.component.scss']
})
export class FilmShortComponent implements OnInit {

  @Input() film: FilmShort;

  constructor() { }

  ngOnInit() {
  }

}
