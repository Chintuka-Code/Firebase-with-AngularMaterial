import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../../component/login/login.component';
import { ShareModule } from 'src/app/SharedModules/share/share.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ShareModule],
})
export class LoginModule {}
