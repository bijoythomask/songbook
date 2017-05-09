import { Component,ViewEncapsulation } from '@angular/core';
import { MdButtonModule , MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public isDarkTheme: boolean = false;
  
}
