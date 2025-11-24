import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Abraj Al Khaleej';
  
  services = [
    {
      icon: '🏗️',
      title: 'Construction Management',
      description: 'Professional project management and construction services'
    },
    {
      icon: '🏢',
      title: 'Commercial Buildings',
      description: 'Modern commercial and office building construction'
    },
    {
      icon: '🏠',
      title: 'Residential Projects',
      description: 'Luxury residential developments and communities'
    },
    {
      icon: '🌉',
      title: 'Infrastructure',
      description: 'Roads, bridges, and public infrastructure projects'
    }
  ];

  projects = [
    {
      name: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      name: 'Luxury Residential Tower',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    },
    {
      name: 'Shopping Mall',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
    },
    {
      name: 'Highway Infrastructure',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    }
  ];

  vision2030Goals = [
    'Economic Diversification',
    'Infrastructure Development',
    'Sustainable Growth',
    'Quality of Life Enhancement'
  ];

  isMenuOpen = false;

  ngOnInit(): void {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu) {
      navMenu.classList.toggle('active');
    }
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
    }
  }
}

