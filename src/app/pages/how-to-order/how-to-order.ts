import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-how-to-order",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./how-to-order.html",
  styleUrl: "./how-to-order.scss",
})
export class HowToOrderComponent {}
