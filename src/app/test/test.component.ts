import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaLimiterDirective } from './textarea-limiter.directive';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule,TextareaLimiterDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  textAreaControl: FormControl = new FormControl('');
  public name() {
    if(this.textAreaControl.value.length > 10){
      
    }
  }
}
