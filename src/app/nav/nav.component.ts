import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  public navElements: string[] = ["Home", "TodoList"];
  public routingPaths: string[] = ["/", "/todolist"]

}
