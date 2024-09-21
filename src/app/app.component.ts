/*// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { safeurlPipe } from './safeurl.pipe';  // Adjust the import path
import { SafeUrlPipe } from './safeUrl.pipe';  // Adjust the import path


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed 'styleUrl' to 'styleUrls'
  standalone: true, // Standalone component
  imports: [RouterOutlet, HeaderComponent] // Import necessary components
})
export class AppComponent {
  title = 'Angular_demoprj';
}


@NgModule({
  declarations: [
  SafeUrlPipe,  // Declare the pipe here
    // Other components...
  ],
  imports: [
    BrowserModule,
    // Other modules...
  ],
  bootstrap: [/* Your bootstrap component 

export class AppModule { } */


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Standalone component
  imports: [RouterOutlet, HeaderComponent]  // Import necessary components only
})
export class AppComponent {
  title = 'Angular_demoprj';
}
