import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-autor",
  templateUrl: "./autor.page.html",
  styleUrls: ["./autor.page.scss"],
  standalone: false,
})
export class AutorPage implements OnInit {
  autor = {
    nome: "David Malafaya",
    naturalidade: "Lisboa, Portugal",
    dataNascimento: "21 de Março de 2004",
    nacionalidade: "Portuguesa",
    curso: "Engenharia da Computação Gráfica e Multimédia",
    instituicao: "IPVC – Escola Superior de Tecnologia e Gestão",
    biografia: "Estudante de Engenharia da Computação Gráfica e Multimédia no Instituto Politécnico de Viana do Castelo.\nApaixonado por tecnologia e literatura, encontrou nos livros uma forma de explorar outros mundos.\n\n Esta app encontram-se reunidos os livros que mais marcaram o autor, com notas pessoais e citações memoráveis.",
    generosFavoritos: ["Romance", "Ficção Científica", "Policial", "Fantasia"]
  };

  get iniciais(): string {
    return this.autor.nome.split(" ").filter(p => p.length > 2).slice(0,2).map(p => p[0]).join("");
  }
  constructor() {}
  ngOnInit() {}
}
