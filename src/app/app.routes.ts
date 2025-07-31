import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home").then((m) => m.HomeComponent),
    title: "Just JK Things - Turning Ideas into Reality",
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about/about").then((m) => m.AboutComponent),
    title: "About Us - Just JK Things",
  },
  {
    path: "catalog",
    loadComponent: () =>
      import("./pages/catalog/catalog").then((m) => m.CatalogComponent),
    title: "Product Catalog - Just JK Things",
  },
  {
    path: "how-to-order",
    loadComponent: () =>
      import("./pages/how-to-order/how-to-order").then(
        (m) => m.HowToOrderComponent,
      ),
    title: "How to Order - Just JK Things",
  },
  {
    path: "testimonials",
    loadComponent: () =>
      import("./pages/testimonials/testimonials").then(
        (m) => m.TestimonialsComponent,
      ),
    title: "Customer Reviews - Just JK Things",
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./pages/contact/contact").then((m) => m.ContactComponent),
    title: "Contact Us - Just JK Things",
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];
