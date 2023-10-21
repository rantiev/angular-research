import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetection } from './pages/change-detection/change-detection.component';
import { VisComponent } from './widgets/vis/vis.component';
import { NodeComponent } from './widgets/node/node.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'
import { NodeOnPushComponent } from './widgets/node-on-push/node.component'
import { FormsModule } from '@angular/forms';
import { NodeRendererComponent } from './widgets/node-renderer/node-renderer.component'

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetection,
    VisComponent,
    NodeComponent,
    NodeOnPushComponent,
    NodeRendererComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
