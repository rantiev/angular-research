import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetection } from './pages/change-detection/change-detection.component'
import { Encapsulation } from './pages/encapsulation/encapsulation.component'
import { SameRequestSharingComponent } from './pages/same-request-sharing/same-request-sharing.component';

const routes: Routes = [
  { path: '', component: ChangeDetection,  },
  { path: 'change-detection', component: ChangeDetection, /*children: [
      {
        path: 'aa',
        component: AaComponent,
        children: [
          {
            path: 'aaa',
            component: AaaComponent,
          },
        ]
      },
    ]*/
  },
  { path: 'encapsulation', component: Encapsulation },
  { path: 'same-request-sharing', component: SameRequestSharingComponent },
  // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
