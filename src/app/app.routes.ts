import { Routes } from '@angular/router';
import { PaginaAdmin } from './shared/pagina-admin/pagina-admin';
import { PaginaCamisetas } from './shared/pagina-camisetas/pagina-camisetas';
import { PaginaCamisetasAdmin } from './shared/pagina-camisetas-admin/pagina-camisetas-admin';
import { PaginaCompras } from './shared/pagina-compras/pagina-compras';
import { PaginaEditar } from './shared/pagina-editar/pagina-editar';
import { PaginaHome } from './shared/pagina-home/pagina-home';
import { PaginaLogin } from './shared/pagina-login/pagina-login';
import { PaginaSocial } from './shared/pagina-social/pagina-social';
import { PaginaSocialCliente } from './shared/pagina-social-cliente/pagina-social-cliente';

export const routes: Routes = [
{
    path:'',
    pagina:PaginaLogin,
    title:'pagina de login'
},
{
    path:'shared/pagina-admin',
    pagina:PaginaAdmin,
    title:'pagina do admin'
},
{
    path:'shared/pagina-camisetas',
    pagina:PaginaCamisetas,
    title:'pagina das camisetas'
},
{
    path:'shared/pagina-camisetas-admin',
    pagina:PaginaCamisetasAdmin,
    title:'pagina das camiseetas do admin'
},
{
    path:'shared/pagina-compras',
    pagina:PaginaCompras,
    title:'pagina de compras'
},
{
    path:'shared/pagina-editar',
    pagina:PaginaEditar,
    title:'pagina de editar produtos'
},
{
    path:'shared/pagina-home',
    pagina:PaginaHome,
    title:'pagina home'
},
{
    path:'shared/pagina-social',
    pagina:PaginaSocial,
    title:'pagina social'
},
{
    path:'shared/pagina-social-cliente',
    pagina:PaginaSocialCliente,
    title:'pagina social do cliennte'
}
];
