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
  currentLanguage: 'ar' | 'en' = 'ar'; // Default to Arabic
  
  // Translation object
  translations = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        projects: 'مشاريعنا',
        vision2030: 'رؤية 2030',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'بناء المستقبل معاً',
        subtitle: 'Building the Future Together',
        description: 'شركة مقاولات رائدة ملتزمة بالتميز والابتكار في المملكة العربية السعودية',
        btnProjects: 'مشاريعنا',
        btnContact: 'تواصل معنا'
      },
      about: {
        title: 'من نحن',
        subtitle: 'التميز في البناء منذ اليوم الأول',
        story: 'قصتنا',
        storyText1: 'أبراج الخليج هي شركة مقاولات رائدة مكرسة لبناء مستقبل المملكة العربية السعودية. مع الالتزام بالجودة والابتكار والتميز، كنا في طليعة صناعة البناء، ونقدم مشاريع عالمية المستوى تشكل منظر المملكة.',
        storyText2: 'يجمع فريقنا من المهنيين ذوي الخبرة عقودًا من الخبرة في إدارة البناء والهندسة وتسليم المشاريع. نحن نفخر بقدرتنا على تنفيذ المشاريع المعقدة مع الحفاظ على أعلى معايير السلامة والجودة.',
        stats: {
          projects: 'مشاريع مكتملة',
          years: 'سنوات خبرة',
          team: 'فريق خبير'
        }
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول بناء شاملة',
        items: [
          {
            icon: '🏗️',
            title: 'إدارة البناء',
            description: 'خدمات إدارة المشاريع والبناء المهنية'
          },
          {
            icon: '🏢',
            title: 'المباني التجارية',
            description: 'بناء المباني التجارية والمكتبية الحديثة'
          },
          {
            icon: '🏠',
            title: 'المشاريع السكنية',
            description: 'التطويرات السكنية الفاخرة والمجتمعات'
          },
          {
            icon: '🌉',
            title: 'البنية التحتية',
            description: 'الطرق والجسور ومشاريع البنية التحتية العامة'
          }
        ]
      },
      projects: {
        title: 'مشاريعنا',
        subtitle: 'عرض التميز في البناء',
        items: [
          {
            name: 'مجمع مكتبي حديث',
            category: 'تجاري'
          },
          {
            name: 'برج سكني فاخر',
            category: 'سكني'
          },
          {
            name: 'مركز تسوق',
            category: 'تجاري'
          },
          {
            name: 'بنية تحتية للطرق',
            category: 'بنية تحتية'
          }
        ]
      },
      vision2030: {
        title: 'رؤية السعودية 2030',
        subtitle: 'البناء نحو مستقبل المملكة العربية السعودية',
        text1: 'تفتخر أبراج الخليج بالمساهمة في رؤية السعودية 2030، وهي إطار استراتيجي لتقليل اعتماد المملكة على النفط، وتنويع اقتصادها، وتطوير القطاعات الخدمية العامة مثل الصحة والتعليم والبنية التحتية والترفيه والسياحة.',
        text2: 'تتماشى مشاريع البناء لدينا مع أهداف رؤية 2030 المتمثلة في التنويع الاقتصادي وتطوير البنية التحتية وتحسين جودة الحياة لجميع المواطنين. نحن ملتزمون بممارسات البناء المستدامة والحلول المبتكرة التي تدعم التحول الطموح للمملكة.',
        goals: [
          'التنويع الاقتصادي',
          'تطوير البنية التحتية',
          'النمو المستدام',
          'تحسين جودة الحياة'
        ],
        cardTitle: 'رؤية 2030',
        cardText: 'بناء مجتمع نابض بالحياة واقتصاد مزدهر وأمة طموحة'
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'دعنا نبني شيئًا رائعًا معًا',
        address: 'العنوان',
        addressValue: 'الرياض، المملكة العربية السعودية',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        form: {
          name: 'اسمك',
          email: 'بريدك الإلكتروني',
          phone: 'رقم الهاتف',
          message: 'رسالتك',
          send: 'إرسال الرسالة'
        }
      },
      footer: {
        tagline: 'بناء المستقبل معاً',
        quickLinks: 'روابط سريعة',
        contact: 'اتصل بنا',
        rights: 'جميع الحقوق محفوظة'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        vision2030: 'Vision 2030',
        contact: 'Contact'
      },
      hero: {
        title: 'Building the Future Together',
        subtitle: 'بناء المستقبل معاً',
        description: 'Leading construction company committed to excellence and innovation in Saudi Arabia',
        btnProjects: 'Our Projects',
        btnContact: 'Get in Touch'
      },
      about: {
        title: 'About Us',
        subtitle: 'Excellence in Construction Since Day One',
        story: 'Our Story',
        storyText1: 'Abraj Al Khaleej is a premier construction company dedicated to building the future of Saudi Arabia. With a commitment to quality, innovation, and excellence, we have been at the forefront of the construction industry, delivering world-class projects that shape the Kingdom\'s landscape.',
        storyText2: 'Our team of experienced professionals brings together decades of expertise in construction management, engineering, and project delivery. We pride ourselves on our ability to execute complex projects while maintaining the highest standards of safety and quality.',
        stats: {
          projects: 'Projects Completed',
          years: 'Years Experience',
          team: 'Expert Team'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive Construction Solutions',
        items: [
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
        ]
      },
      projects: {
        title: 'Our Projects',
        subtitle: 'Showcasing Excellence in Construction',
        items: [
          {
            name: 'Modern Office Complex',
            category: 'Commercial'
          },
          {
            name: 'Luxury Residential Tower',
            category: 'Residential'
          },
          {
            name: 'Shopping Mall',
            category: 'Commercial'
          },
          {
            name: 'Highway Infrastructure',
            category: 'Infrastructure'
          }
        ]
      },
      vision2030: {
        title: 'Saudi Vision 2030',
        subtitle: 'Building Towards Saudi Arabia\'s Future',
        text1: 'Abraj Al Khaleej is proud to contribute to Saudi Arabia\'s Vision 2030, a strategic framework to reduce Saudi Arabia\'s dependence on oil, diversify its economy, and develop public service sectors such as health, education, infrastructure, recreation, and tourism.',
        text2: 'Our construction projects align with Vision 2030\'s goals of economic diversification, infrastructure development, and enhancing the quality of life for all citizens. We are committed to sustainable building practices and innovative solutions that support the Kingdom\'s ambitious transformation.',
        goals: [
          'Economic Diversification',
          'Infrastructure Development',
          'Sustainable Growth',
          'Quality of Life Enhancement'
        ],
        cardTitle: 'Vision 2030',
        cardText: 'Building a vibrant society, thriving economy, and ambitious nation'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s Build Something Great Together',
        address: 'Address',
        addressValue: 'Riyadh, Saudi Arabia',
        phone: 'Phone',
        email: 'Email',
        form: {
          name: 'Your Name',
          email: 'Your Email',
          phone: 'Phone Number',
          message: 'Your Message',
          send: 'Send Message'
        }
      },
      footer: {
        tagline: 'Building the Future Together',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        rights: 'All rights reserved'
      }
    }
  };

  // Getter for current translations
  get t() {
    return this.translations[this.currentLanguage];
  }

  // Services with translations
  get services() {
    return this.t.services.items;
  }

  // Projects with translations
  projects = [
    {
      name: '',
      category: '',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      name: '',
      category: '',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    },
    {
      name: '',
      category: '',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
    },
    {
      name: '',
      category: '',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    }
  ];

  // Vision 2030 goals with translations
  get vision2030Goals() {
    return this.t.vision2030.goals;
  }

  isMenuOpen = false;

  // Toggle language
  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    // Update document direction
    document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLanguage;
    // Update projects
    this.updateProjects();
  }

  ngOnInit(): void {
    // Set initial language
    document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLanguage;
    
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
    
    // Update projects with translations
    this.updateProjects();
  }

  updateProjects(): void {
    const projectData = this.t.projects.items;
    this.projects.forEach((project, index) => {
      if (projectData[index]) {
        project.name = projectData[index].name;
        project.category = projectData[index].category;
      }
    });
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

  onImageError(event: Event) {
  const target = event.target as HTMLElement;

  if (target) {
    target.style.display = 'none';

    const nextEl = target.nextElementSibling as HTMLElement;
    if (nextEl) {
      nextEl.style.display = 'flex';
    }
  }
}

}

