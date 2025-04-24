import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HomeComponent, QuemSomosComponent, ArtigoComponent, ContatoComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectAngular';
}
