import { ProviderService } from './provider.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [],
  declarations: [ProviderComponent],
  providers: [ProviderService]
})
export class ProviderModule { }
