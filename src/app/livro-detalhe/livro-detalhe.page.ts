import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Livro, LivrosService } from "../livros.service";

@Component({
  selector: "app-livro-detalhe",
  templateUrl: "./livro-detalhe.page.html",
  styleUrls: ["./livro-detalhe.page.scss"],
  standalone: false,
})
export class LivroDetalhePage implements OnInit {
  livro: Livro | undefined;

  constructor(private route: ActivatedRoute, private livrosService: LivrosService, private toastCtrl: ToastController) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.livro = this.livrosService.getPorId(id);
  }

  async toggleLido() {
    if (!this.livro) return;
    this.livrosService.toggleLido(this.livro.id);
    this.livro = this.livrosService.getPorId(this.livro.id);
    const toast = await this.toastCtrl.create({
      message: this.livro?.lido ? this.livro?.titulo + " marcado como lido ✓" : this.livro?.titulo + " marcado como por ler",
      duration: 2000, position: "bottom", color: this.livro?.lido ? "success" : "warning"
    });
    toast.present();
  }

  getEstrelas(n: number): string { return "★".repeat(n) + "☆".repeat(5 - n); }
}
