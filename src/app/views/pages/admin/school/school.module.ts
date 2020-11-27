import { SchoolComponent } from './school.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LockComponent } from './lock/lock.component';

@NgModule({

  declarations: [
    AddComponent,
    EditComponent, 
    DeleteComponent, 
    LockComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SchoolComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
    ]),
  ],
})
export class SchoolModule{ }