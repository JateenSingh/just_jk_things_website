import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class HeaderComponent implements OnInit {
  isDarkMode = signal(false);
  isMenuOpen = signal(false);

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.isDarkMode.set(true);
      document.documentElement.classList.add("dark");
    }
  }

  toggleTheme() {
    const currentTheme = this.isDarkMode();
    this.isDarkMode.set(!currentTheme);

    if (!currentTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
