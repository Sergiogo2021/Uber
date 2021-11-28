import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';


const routes: Routes = [{
  path: 'index',
  component: IndexComponent,
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/index'
},{
  path: 'seguridad',
  loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
},{
  path: 'admin',
  loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
},{
  path: 'estaciones',
  loadChildren: () => import('./modulos/estaciones/estaciones.module').then(m => m.EstacionesModule)
  
},{
  path: 'rutas',
  loadChildren: () => import('./modulos/rutas/rutas.module').then(m => m.RutasModule)
  
},{
  path: 'servicios',
  loadChildren: () => import('./modulos/servicios/servicios.module').then(m => m.ServiciosModule)
  
},

{
  path: 'error',
  component: ErrorComponent,
},{
  path: '**',
  redirectTo: '/error'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
