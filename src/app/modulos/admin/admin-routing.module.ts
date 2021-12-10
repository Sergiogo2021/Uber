import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './usuarios/create/create.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { GetComponent } from './usuarios/get/get.component';
import { SessionGuard } from 'src/app/guards/session.guard';


const routes: Routes = [{
  path: 'create',
  component: CreateComponent,
},{
  path: 'edit/:id',
  component: EditComponent,
  canActivate: [SessionGuard]

},{
  path: 'get',
  component: GetComponent,
  canActivate: [SessionGuard]

},{
  path: '',
  redirectTo: 'get'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
