import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { CitacoesPage } from "./citacoes.page";

const routes: Routes = [{ path: "", component: CitacoesPage }];

@NgModule({ imports:[CommonModule, IonicModule, RouterModule.forChild(routes)], declarations:[CitacoesPage] })
export class CitacoesPageModule {}
