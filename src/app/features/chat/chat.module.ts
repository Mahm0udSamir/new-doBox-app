import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './pages/room/room.component';
import { ChatRoutingModule } from './chat.routing.module';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
