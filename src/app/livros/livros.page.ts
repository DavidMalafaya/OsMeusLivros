import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro, LivrosService } from "../livros.service";

@Component({
  selector: "app-livros",
  templateUrl: "./livros.page.html",
  styleUrls: ["./livros.page.scss"],
  standalone: false,
})
export class LivrosPage implements OnInit {
  todosLivros: Livro[] = [];
  livrosFiltrados: Livro[] = [];
  filtroAtivo: "todos"|"lidos"|"porler" = "todos";
  termoPesquisa = "";
  mostrarPesquisa = false;

  constructor(private livrosService: LivrosService, private router: Router) {}

  ngOnInit() { this.todosLivros = this.livrosService.getTodos(); this.aplicarFiltro(); }

  togglePesquisa() {
    this.mostrarPesquisa = !this.mostrarPesquisa;
    if (!this.mostrarPesquisa) { this.termoPesquisa = ""; this.aplicarFiltro(); }
  }

  pesquisar() { this.aplicarFiltro(); }

  setFiltro(f: "todos"|"lidos"|"porler") { this.filtroAtivo = f; this.aplicarFiltro(); }

  aplicarFiltro() {
    let lista = this.todosLivros;
    if (this.filtroAtivo === "lidos")  lista = lista.filter(l => l.lido);
    if (this.filtroAtivo === "porler") lista = lista.filter(l => !l.lido);
    if (this.termoPesquisa.trim()) {
      const t = this.termoPesquisa.toLowerCase();
      lista = lista.filter(l => l.titulo.toLowerCase().includes(t) || l.autor.toLowerCase().includes(t));
    }
    this.livrosFiltrados = lista;
  }

  abrirDetalhe(id: number) { this.router.navigate(["/livro-detalhe", id]); }
  getEstrelas(n: number): string { return "★".repeat(n) + "☆".repeat(5 - n); }
  get totalLivros() { return this.todosLivros.length; }
  get totalLidos()  { return this.todosLivros.filter(l => l.lido).length; }
  get totalPorLer() { return this.todosLivros.filter(l => !l.lido).length; }
}
