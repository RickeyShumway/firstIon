import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendComponent } from './friend/friend.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: Tab2Page,
  // },
  {
    path: '',
    component: FriendListComponent
  },
  {
    path: 'friend',
    component: FriendComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
