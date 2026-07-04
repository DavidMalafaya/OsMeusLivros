import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { LivrosPage } from "./livros.page";

const routes: Routes = [{ path: "", component: LivrosPage }];

@NgModule({ imports:[CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)], declarations:[LivrosPage] })
export class LivrosPageModule {}
