import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class HomeComponent {
  // Featured products for the carousel
  featuredProducts = [
    {
      id: "1",
      name: "Custom Phone Case",
      image: "/assets/images/products/phone-case.jpg",
      description: "Personalized 3D printed phone cases",
    },
    {
      id: "2",
      name: "Desk Organizer",
      image: "/assets/images/products/desk-organizer.jpg",
      description: "Multi-compartment desk organizer",
    },
    {
      id: "3",
      name: "Miniature Figurine",
      image: "/assets/images/products/figurine.jpg",
      description: "High-detail miniature figures",
    },
  ];

  // Feature highlights
  features = [
    {
      icon: "quality",
      title: "High-Quality Prints",
      description:
        "Premium materials and precision printing for professional results",
    },
    {
      icon: "custom",
      title: "Custom Orders",
      description:
        "Bring your unique ideas to life with our custom printing services",
    },
    {
      icon: "fast",
      title: "Fast Turnaround",
      description: "3-5 business days from order to delivery",
    },
    {
      icon: "delivery",
      title: "Delivery Across SA",
      description: "We deliver nationwide with reliable courier services",
    },
  ];
}
