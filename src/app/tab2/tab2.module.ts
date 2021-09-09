import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PeopleServiceService } from '../../app/people-service.service';
import { FriendListComponent } from './friend-list/friend-list.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    RouterModule
    
    
  ],
  declarations: [Tab2Page,
    PeopleServiceService,
    FriendListComponent,
    FriendComponent],
    
})
export class Tab2PageModule {}
