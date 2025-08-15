import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'fancy-ui-core';
import { AppBarBundle, AppHeaderBundle, ShellBundle, ViewBundle } from 'fancy-ui-shell';
import { CardBundle } from 'fancy-ui-content';
import { FormsBundle } from 'fancy-ui-forms'; 

@Component({
    selector: 'org-root',
    templateUrl: './app.component.html',
    imports: [RouterModule, ButtonComponent, ShellBundle, AppHeaderBundle, AppBarBundle, ViewBundle, CardBundle, FormsBundle]
})
export class AppComponent {
  title = 'playground';

  onButtonTap() {
    console.log('Button tapped!');
  }

  onEnter() {
    console.log('Enter pressed!');
  }
}
