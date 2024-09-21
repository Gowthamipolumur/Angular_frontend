import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nowPlayingMovies: Movie[] = [];
  comingSoonMovies: Movie[] = [];
  searchTerm: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'] || '';
      this.loadMovies();
    });
  }

  loadMovies(): void {
    this.moviesService.getAll().subscribe({
      next: (allMovies: Movie[]) => {
        console.log('Movies fetched:', allMovies);

        this.nowPlayingMovies = allMovies.filter(movie => movie.category === 'NOW_PLAYING');
        this.comingSoonMovies = allMovies.filter(movie => movie.category === 'COMING_SOON');
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  goToDetails(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }

  bookNow(movie: Movie): void {
    alert(`Booking for: ${movie.movieName}`);
  }
}


/*import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule, SearchComponent],  // Ensure NgFor and CommonModule are included
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nowPlayingMovies: Movie[] = [];
  comingSoonMovies: Movie[] = [];
  searchTerm: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters and update searchTerm accordingly
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'] || '';
      this.loadMovies();
    });
  }


  loadMovies(): void {
    this.moviesService.getAll().subscribe(
      (allMovies: Movie[]) => {
        console.log('Movies fetched:', allMovies);  // Check this log in the browser console to ensure movies are fetched

        // Filtering movies for "Now Playing" and "Coming Soon"
        this.nowPlayingMovies = allMovies.filter(movie => movie.category === 'NOW_PLAYING');
        this.comingSoonMovies = allMovies.filter(movie => movie.category === 'COMING_SOON');

        console.log('Now Playing Movies:', this.nowPlayingMovies);
        console.log('Coming Soon Movies:', this.comingSoonMovies);
      },
      (error) => {
        console.error('Error fetching movies:', error); // Log errors if any
      }
    );
  }


  // Navigate to movie details page
  goToDetails(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }

  // Function to handle booking logic (currently showing an alert)
  bookNow(movie: Movie): void {
    alert(`Booking for: ${movie.movieName}`);
  }
}

 */
