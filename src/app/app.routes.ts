import { HomepageComponent } from './components/homepage/homepage.component';
import { ProdutosPageComponent } from './components/produtos-page/produtos-page.component';
import { Routes } from '@angular/router';
import {GaleriaProdutosComponent} from "./components/galeria-produtos/galeria-produtos.component";
import {RastreioComponent} from "./components/rastreio/rastreio.component";

export const routes: Routes = [
  { path: '',  component: HomepageComponent},
  { path: 'produtos',  component: GaleriaProdutosComponent},
  { path: 'frete',  component: RastreioComponent},
];
