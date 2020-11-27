import { provideRoutes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SchoolComponent } from './school/school.component';
import { SeachComponent } from './seach/seach.component';
import { Server } from 'http';
import { UserService } from './service/user.service';

// const services = [
//   Intercep
// ]

@NgModule({
  declarations: [UserComponent, SchoolComponent, SeachComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'school',
          loadChildren: () => import('./school/school.module').then(n=>n.SchoolModule)
      },
      {
        path: 'seach',
        loadChildren: () => import('./seach/seach.module').then(n=>n.SeachModule)
      },
      {
        path: 'user',
        loadChildren:()=> import('./user/user.module').then(n=>n.UserModule)
      }
    ]),

  ],
  //providers: [...services],
})

export class AdminModule { }
