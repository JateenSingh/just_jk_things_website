import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-catalog",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./catalog.html",
  styleUrl: "./catalog.scss",
})
export class CatalogComponent implements OnInit {
  searchTerm = "";
  selectedCategory = "all";
  selectedMaterial = "all";
  priceRange = { min: 0, max: 1000 };

  // Product categories
  categories = [
    { id: "all", name: "All Products", icon: "🔧" },
    { id: "home-office", name: "Home & Office", icon: "🏠" },
    { id: "automotive", name: "Automotive", icon: "🚗" },
    { id: "gaming", name: "Gaming Accessories", icon: "🎮" },
    { id: "diy-tools", name: "DIY & Tools", icon: "🔨" },
    { id: "gifts-decor", name: "Gifts & Decor", icon: "🎁" },
  ];

  // Available materials
  materials = [
    { id: "all", name: "All Materials" },
    { id: "pla", name: "PLA" },
    { id: "abs", name: "ABS" },
    { id: "petg", name: "PETG" },
    { id: "tpu", name: "TPU (Flexible)" },
  ];

  // Sample products
  allProducts = [
    {
      id: "1",
      name: "Custom Phone Case",
      description: "Personalized 3D printed phone cases with custom designs",
      shortDescription: "Protect your phone in style",
      price: 149,
      currency: "R",
      images: [
        {
          id: "1",
          url: "/assets/images/products/phone-case-1.jpg",
          alt: "Custom Phone Case",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "home-office",
      materials: ["pla", "tpu"],
      colors: ["black", "white", "blue", "red"],
      tags: ["customizable", "protective", "personalized"],
      isCustomizable: true,
      printTime: 4,
      weight: 25,
      inStock: true,
      stockQuantity: 50,
      takealotUrl: "https://takealot.com/phone-case",
      rating: 4.8,
      reviewCount: 124,
    },
    {
      id: "2",
      name: "Desk Organizer Set",
      description:
        "Multi-compartment desk organizer for pens, cables, and office supplies",
      shortDescription: "Keep your desk tidy",
      price: 299,
      currency: "R",
      images: [
        {
          id: "2",
          url: "/assets/images/products/desk-organizer.jpg",
          alt: "Desk Organizer Set",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "home-office",
      materials: ["pla", "abs"],
      colors: ["white", "gray", "black"],
      tags: ["office", "organization", "productivity"],
      isCustomizable: false,
      printTime: 8,
      weight: 180,
      inStock: true,
      stockQuantity: 25,
      amazonUrl: "https://amazon.com/desk-organizer",
      rating: 4.6,
      reviewCount: 89,
    },
    {
      id: "3",
      name: "Car Phone Mount",
      description:
        "Universal car phone mount with adjustable grip and 360° rotation",
      shortDescription: "Secure phone mounting for your car",
      price: 199,
      currency: "R",
      images: [
        {
          id: "3",
          url: "/assets/images/products/car-mount.jpg",
          alt: "Car Phone Mount",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "automotive",
      materials: ["abs", "petg"],
      colors: ["black", "gray"],
      tags: ["automotive", "universal", "adjustable"],
      isCustomizable: false,
      printTime: 3,
      weight: 95,
      inStock: true,
      stockQuantity: 35,
      bidorbuyUrl: "https://bidorbuy.com/car-mount",
      rating: 4.7,
      reviewCount: 156,
    },
    {
      id: "4",
      name: "Gaming Controller Stand",
      description: "Stylish stand for gaming controllers with cable management",
      shortDescription: "Display and organize your controllers",
      price: 179,
      currency: "R",
      images: [
        {
          id: "4",
          url: "/assets/images/products/controller-stand.jpg",
          alt: "Gaming Controller Stand",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "gaming",
      materials: ["pla", "abs"],
      colors: ["black", "white", "blue", "red"],
      tags: ["gaming", "organization", "cable-management"],
      isCustomizable: true,
      printTime: 5,
      weight: 120,
      inStock: true,
      stockQuantity: 40,
      takealotUrl: "https://takealot.com/controller-stand",
      rating: 4.9,
      reviewCount: 203,
    },
    {
      id: "5",
      name: "Tool Wall Organizer",
      description: "Modular wall-mounted tool organizer system for workshops",
      shortDescription: "Organize your workshop efficiently",
      price: 449,
      currency: "R",
      images: [
        {
          id: "5",
          url: "/assets/images/products/tool-organizer.jpg",
          alt: "Tool Wall Organizer",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "diy-tools",
      materials: ["abs", "petg"],
      colors: ["black", "gray", "orange"],
      tags: ["workshop", "modular", "wall-mount"],
      isCustomizable: true,
      printTime: 12,
      weight: 350,
      inStock: true,
      stockQuantity: 15,
      amazonUrl: "https://amazon.com/tool-organizer",
      rating: 4.5,
      reviewCount: 67,
    },
    {
      id: "6",
      name: "Decorative Plant Pot",
      description: "Modern geometric plant pot with drainage system",
      shortDescription: "Stylish home for your plants",
      price: 129,
      currency: "R",
      images: [
        {
          id: "6",
          url: "/assets/images/products/plant-pot.jpg",
          alt: "Decorative Plant Pot",
          isPrimary: true,
          order: 1,
        },
      ],
      category: "gifts-decor",
      materials: ["pla", "petg"],
      colors: ["white", "terracotta", "sage", "charcoal"],
      tags: ["home-decor", "plants", "geometric"],
      isCustomizable: false,
      printTime: 6,
      weight: 200,
      inStock: true,
      stockQuantity: 30,
      takealotUrl: "https://takealot.com/plant-pot",
      rating: 4.4,
      reviewCount: 98,
    },
  ];

  filteredProducts = [...this.allProducts];

  ngOnInit() {
    this.applyFilters();
  }

  onSearch() {
    this.applyFilters();
  }

  onCategoryChange(categoryId: string) {
    this.selectedCategory = categoryId;
    this.applyFilters();
  }

  onMaterialChange(materialId: string) {
    this.selectedMaterial = materialId;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.allProducts];

    // Filter by search term
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.tags.some((tag) => tag.toLowerCase().includes(term)),
      );
    }

    // Filter by category
    if (this.selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === this.selectedCategory,
      );
    }

    // Filter by material
    if (this.selectedMaterial !== "all") {
      filtered = filtered.filter((product) =>
        product.materials.includes(this.selectedMaterial),
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= this.priceRange.min &&
        product.price <= this.priceRange.max,
    );

    this.filteredProducts = filtered;
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }

    return stars;
  }

  getMarketplaceUrl(product: any): string | null {
    return (
      product.takealotUrl || product.amazonUrl || product.bidorbuyUrl || null
    );
  }

  getMarketplaceName(product: any): string {
    if (product.takealotUrl) return "Takealot";
    if (product.amazonUrl) return "Amazon";
    if (product.bidorbuyUrl) return "Bidorbuy";
    return "Contact Us";
  }
}
