import { HomepageComponent } from './components/homepage/homepage.component';
import { ProdutosPageComponent } from './components/produtos-page/produtos-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',  component: HomepageComponent},
  { path: 'produtos',  component: ProdutosPageComponent},
];
