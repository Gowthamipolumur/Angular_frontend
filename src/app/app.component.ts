import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
//import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark the component as standalone
  imports: [RouterOutlet, HeaderComponent]  // Import HttpClientModule and other components
})
export class AppComponent {
  title = 'Angular_demoprj';
}
