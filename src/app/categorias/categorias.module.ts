import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasPage } from "./categorias.page";

const routes: Routes = [{ path: "", component: CategoriasPage }];

@NgModule({ imports:[CommonModule, IonicModule, RouterModule.forChild(routes)], declarations:[CategoriasPage] })
export class CategoriasPageModule {}
