import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./testimonials.html",
  styleUrl: "./testimonials.scss",
})
export class TestimonialsComponent {}
