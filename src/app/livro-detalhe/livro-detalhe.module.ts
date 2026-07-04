import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { LivroDetalhePage } from "./livro-detalhe.page";

const routes: Routes = [{ path: "", component: LivroDetalhePage }];

@NgModule({ imports:[CommonModule, IonicModule, RouterModule.forChild(routes)], declarations:[LivroDetalhePage] })
export class LivroDetalhePageModule {}
