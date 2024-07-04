import { HomepageComponent } from './components/homepage/homepage.component';
import { ProdutosPageComponent } from './components/produtos-page/produtos-page.component';
import {RouterModule, Routes} from '@angular/router';
import {GaleriaProdutosComponent} from "./components/galeria-produtos/galeria-produtos.component";
import {RastreioComponent} from "./components/rastreio/rastreio.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'produtos',  component: GaleriaProdutosComponent},
  { path: 'camisas/:id', component: ProdutosPageComponent },
  { path: 'frete',  component: RastreioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
