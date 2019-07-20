import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  obterListaFilmes() {
    return this.http.get('http://www.omdbapi.com/?apikey=5c1952d7&s=digital&page=1');
  }
}
