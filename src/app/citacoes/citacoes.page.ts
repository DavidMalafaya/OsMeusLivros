import { Component, OnInit } from "@angular/core";
import { Livro, LivrosService } from "../livros.service";

@Component({
  selector: "app-citacoes",
  templateUrl: "./citacoes.page.html",
  styleUrls: ["./citacoes.page.scss"],
  standalone: false,
})
export class CitacoesPage implements OnInit {
  livrosComCitacao: Livro[] = [];
  constructor(private livrosService: LivrosService) {}
  ngOnInit() { this.livrosComCitacao = this.livrosService.getLivrosComCitacao(); }
  getEstrelas(n: number): string { return "★".repeat(n) + "☆".repeat(5 - n); }
}
