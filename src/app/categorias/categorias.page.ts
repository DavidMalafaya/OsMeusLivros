import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro, LivrosService } from "../livros.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.page.html",
  styleUrls: ["./categorias.page.scss"],
  standalone: false,
})
export class CategoriasPage implements OnInit {
  generos: string[] = [];
  categoriaAtiva: string | null = null;
  livrosDaCategoria: Livro[] = [];

  constructor(private livrosService: LivrosService, private router: Router) {}

  ngOnInit() { this.generos = this.livrosService.getGeneros(); }

  abrirCategoria(g: string) {
    if (this.categoriaAtiva === g) { this.categoriaAtiva = null; this.livrosDaCategoria = []; }
    else { this.categoriaAtiva = g; this.livrosDaCategoria = this.livrosService.getPorGenero(g); }
  }

  abrirDetalhe(id: number) { this.router.navigate(["/livro-detalhe", id]); }
  contar(g: string): number { return this.livrosService.contarPorGenero(g); }
  emoji(g: string): string  { return this.livrosService.emojiGenero(g); }
  getEstrelas(n: number): string { return "★".repeat(n) + "☆".repeat(5 - n); }
}
