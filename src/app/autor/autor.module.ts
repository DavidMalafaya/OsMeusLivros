import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { AutorPage } from "./autor.page";

const routes: Routes = [{ path: "", component: AutorPage }];

@NgModule({ imports:[CommonModule, IonicModule, RouterModule.forChild(routes)], declarations:[AutorPage] })
export class AutorPageModule {}
