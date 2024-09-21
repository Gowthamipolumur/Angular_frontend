import { Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


export const routes: Routes =[
    {path: '', component:HomeComponent},
    {path: 'search/:searchTerm', component:HomeComponent},
    { path: 'movie/:id', component: MovieDetailsComponent }

];


//export const routes: Routes = [];
//import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';

//export const routes: Routes = [
  //{ path: '', component: HomeComponent },
  // Add other routes if needed
//];
