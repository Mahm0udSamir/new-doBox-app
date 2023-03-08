import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HubRoadMapComponent } from './hub-road-map/hub-road-map.component';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { DoboxComponent } from './dobox/dobox.component';
import { StcProfileComponent } from './stc-profile/stc-profile.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RoomComponent } from './chat/room/room.component';
@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
