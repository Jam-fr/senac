import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NaoEncotradoComponent } from './components/nao-encotrado/nao-encotrado.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quem-somos', component: QuemSomosComponent},
    {path: 'artigo', component: ArtigoComponent},
    {path: 'contato', component: ContatoComponent},
    {path: '**', component: NaoEncotradoComponent}
]

