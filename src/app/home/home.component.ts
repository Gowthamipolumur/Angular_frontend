/*import { Component } from '@angular/core';
import{MoviesService} from '../services/movies/movies.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    movies:String[] = [];
    constructor(private moviesService:MoviesService) {}

    ngOnInit(): void{
      this.movies = this.moviesService.getAll();
    }
} 

import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Import NgFor from the CommonModule
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor], // Add NgFor to the imports array
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class HomeComponent {
  movies: String[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getAll();
  }
}

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],  // Import NgFor from CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    movies: Movie[] = [];
    constructor(private moviesService: MoviesService, private route:ActivatedRoute) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params['searchTerm']) 
         this.movies = this.moviesService.getAll().filter(movie =>
            movie.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
        
       else 
          this.movies = this.moviesService.getAll();
        
      });
    }
    
      
    
} */
/*
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component'; // Import SearchComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SearchComponent],  // Import SearchComponent here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    movies: Movie[] = [];
    constructor(private moviesService: MoviesService, private route: ActivatedRoute,  private router: Router) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params['searchTerm']) 
          this.movies = this.moviesService.getAll().filter(movie =>
            movie.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
        else 
          this.movies = this.moviesService.getAll();
      });
    }

 // Handle "Book Now" action
  BookNow(movie: Movie): void 
    {
      alert(`Booking for: ${movie.name}`);
      // You can navigate to a booking page here once it's created:
       // this.router.navigate(['/booking', movie.id]);
    }

// Handle "Details" action
    goToDetails(movie: Movie): void
     {
      this.router.navigate(['/movie', movie.id]);
    } 

}*/


import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { ActivatedRoute, Router } from '@angular/router';  // Import Router for navigation
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SearchComponent],  // Import SearchComponent here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router // Inject the Router for navigation
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.movies = this.moviesService.getAll().filter(movie =>
          movie.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      } else {
        this.movies = this.moviesService.getAll();
      }
    });
  }

  // Handle "Book Now" action
  bookNow(movie: Movie): void {
    alert(`Booking for: ${movie.name}`);
    // You can navigate to a booking page here once it's created:
    // this.router.navigate(['/booking', movie.id]);
  }

  // Handle "Details" action
  goToDetails(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
