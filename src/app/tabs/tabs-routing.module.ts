import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [{
  path: "", component: TabsPage, children: [
    { path: "autor",      loadChildren: () => import("../autor/autor.module").then(m => m.AutorPageModule) },
    { path: "livros",     loadChildren: () => import("../livros/livros.module").then(m => m.LivrosPageModule) },
    { path: "categorias", loadChildren: () => import("../categorias/categorias.module").then(m => m.CategoriasPageModule) },
    { path: "citacoes",   loadChildren: () => import("../citacoes/citacoes.module").then(m => m.CitacoesPageModule) },
    { path: "", redirectTo: "autor", pathMatch: "full" }
  ]
}];

@NgModule({ imports:[RouterModule.forChild(routes)], exports:[RouterModule] })
export class TabsPageRoutingModule {}
