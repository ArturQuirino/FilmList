import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShortComponent } from './film-short.component';

describe('FilmShortComponent', () => {
  let component: FilmShortComponent;
  let fixture: ComponentFixture<FilmShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
