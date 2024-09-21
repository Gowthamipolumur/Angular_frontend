/*import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

} */
/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
} 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { SafeUrlPipe } from '../safe-url.pipe';  // Import SafeUrlPipe


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
} 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { CommonModule } from '@angular/common';  // Add this import

//import { SafeUrlPipe } from '../safe-url.pipe';  // Import SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule], 
 // imports: [SafeUrlPipe],  // Import the SafeUrlPipe
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
} */
/*

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
//import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safeUrl.pipe';  // Import SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,
 imports: [SafeUrlPipe],  // Import SafeUrlPipe here
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
} */

/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }

  closeModal(): void {
    this.router.navigate(['/']);  // Navigate back to the main page
  }
} */
/*

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safeUrl.pipe';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],  
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;  // Movie can be undefined initially

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }

  // Method to close the modal and navigate back
  closeModal(): void {
    this.router.navigate(['/']);  // Navigate back to the main page or previous page
  }
}

/*import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';  // Ensure correct path to SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],  // Import SafeUrlPipe here
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }

  closeModal(): void {
    this.router.navigate(['/']);
  }
}*//*


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safeUrl.pipe';  // Import SafeUrlPipe for the safe YouTube URL

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],  // Import SafeUrlPipe and CommonModule
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;  // Movie can be undefined initially

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }

  // Method to close the modal and navigate back
  closeModal(): void {
    this.router.navigate(['/']);  // Navigate back to the main page or previous page
  }
}
 */
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { SafeUrlPipe } from '../safeUrl.pipe';  // Ensure SafeUrlPipe is imported

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  imports: [SafeUrlPipe], 
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
} */
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { SafeUrlPipe } from '../safeUrl.pipe';  // Import SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,  // Enable standalone mode
  imports: [SafeUrlPipe],  // Add SafeUrlPipe to imports array
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { SafeUrlPipe } from '../safeUrl.pipe';  // Import SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],  // Import CommonModule and SafeUrlPipe
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { DomSanitizer } from '@angular/platform-browser'; // For SafeUrlPipe

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer  // Dependency for safeUrl pipe
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} old code-1 */
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '@shared/models/Movie';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.moviesService.getById(+movieId);
      console.log(this.movie);  // Add this to check the data
    }
  }
  

  // Ensure that the URL is sanitized for security
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url || '');
  }
}
*/