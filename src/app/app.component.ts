import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  nomeAutor = 'David Malafaya';
  paginas = [
    { titulo: 'Sobre o Autor',  url: '/tabs/autor',      icon: 'person-outline' },
    { titulo: 'Os Meus Livros', url: '/tabs/livros',     icon: 'library-outline' },
    { titulo: 'Categorias',     url: '/tabs/categorias', icon: 'bookmark-outline' },
    { titulo: 'Citações',       url: '/tabs/citacoes',   icon: 'chatbubble-ellipses-outline' },
  ];
}


