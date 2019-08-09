import { Routes } from '@angular/router'; // import for router
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {
      path: 'index',
      component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
      path: 'products/:id',
      component: ProductDetailComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: '**',
      component: ErrorComponent
    }
  ];
