import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // For handling YouTube URLs safely

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  trailerUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];  // Get movie ID from the URL
      this.fetchMovieDetails(movieId);
    });
  }

  // Fetch the movie details from the backend
  fetchMovieDetails(movieId: string): void {
    this.moviesService.getById(movieId).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;

        // Safely sanitize trailer URL if available
        if (this.movie.trailerUrl) {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
        }

        console.log('Movie details fetched:', movie);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error fetching movie details:', err);
        // Optionally, navigate back to the home page or show an error message
        this.router.navigate(['/']);
      }
    });
  }
}
