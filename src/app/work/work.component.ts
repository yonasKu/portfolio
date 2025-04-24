import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

// Define the Project interface
export interface Project {
  id: number;
  title: string;
  imageSrc: string;
  tags: string[];
  description: string;
  features: string[];
  githubLink?: string;
  liveLink?: string;
  status?: string;
  detailedDescription: string; // Added for modal
  technicalStack?: string[]; // Added
  projectGoals?: string; // Added
  screenshots?: string[]; // Added
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('projectsGrid') projectsGrid!: ElementRef;

  // --- Project Data ---
  projects: Project[] = [
    {
      id: 1,
      title: "Scam Alert",
      imageSrc: "assets/img/Scam alert image.png",
      tags: ["Next.js", "TypeScript", "Supabase"],
      description: "A comprehensive consumer protection platform where users can report and track unfair business practices.",
      features: ["Multiple Report Types", "Business Listings", "Consumer Watchlist", "Receipt Transparency", "Responsive Design"],
      githubLink: "https://github.com/yonasKu/Scam-alert",
      liveLink: "https://scam-alert-phi.vercel.app/am",
      detailedDescription: "Scam Alert aims to empower consumers by providing a transparent platform to report fraudulent activities, rate businesses, and access information about fair trade practices. Built with a modern stack for scalability and performance.",
      technicalStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'], // Example Added
      projectGoals: 'To provide a user-friendly platform for consumers to report scams and track cases, promoting fair trade practices in Ethiopia.', // Example Added
      screenshots: ['/assets/images/projects/scam-alert-screenshot-1.png'] // Added screenshot path
    },
    {
      id: 2,
      title: "USSD Code Manager",
      imageSrc: "assets/img/logo ussd.png",
      tags: ["React Native", "Mobile App", "Utility"],
      description: "A mobile utility app that helps users manage and execute USSD codes with a user-friendly interface.",
      features: ["USSD Code Execution", "Category Organization", "Favorites System", "Emergency Services", "Dark Mode Support"],
      githubLink: "https://github.com/yonasKu/Code-Manager",
      detailedDescription: "Simplifies the often-complex process of using USSD codes for mobile services like balance checks, package subscriptions, and money transfers. Features an intuitive UI for easy code management.",
      technicalStack: ['React Native', 'JavaScript', 'Expo (potentially)', 'Mobile UI/UX'], 
      projectGoals: 'To provide a simple and organized way for mobile users to manage and execute frequently used USSD codes.', 
      screenshots: [
        '/assets/img/CodeManager/Codes.png', 
        '/assets/img/CodeManager/Emergency.png', 
        '/assets/img/CodeManager/Home.png'
      ] 
    },
    {
      id: 3,
      title: "Ethiopian Calendar Extension",
      imageSrc: "assets/img/calander-extension.png",
      tags: ["Chrome Extension", "JavaScript", "Calendar", "Amharic"],
      description: "A feature-rich Chrome extension providing Ethiopian calendar with date conversion and holiday tracking. Supports both Amharic and Latin scripts.",
      features: ["Interactive Calendar Display", "Dual Script Support (Geez/Latin)", "Holiday Tracking System", "Real-time Ethiopian Time", "Bi-directional Date Conversion"],
      githubLink: "https://github.com/yonasKu/calendar_chrome_extension",
      detailedDescription: "Brings the unique Ethiopian calendar system to your browser. Includes accurate date conversions between Gregorian and Ethiopian calendars, lists important holidays, and displays the time according to the Ethiopian clock.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 4,
      title: "UI Libertatem",
      imageSrc: "assets/img/ui-extension.png",
      tags: ["Chrome Extension", "JavaScript", "UI/UX"],
      description: "A Chrome extension designed to enhance web browsing freedom and user interface customization.",
      features: ["Custom UI Controls", "Theme Management", "User Preferences"],
      githubLink: "https://github.com/yonasKu/Ui-libertatem",
      detailedDescription: "Empowers users to take control of their web browsing experience by offering tools to customize website appearances, manage themes, and adjust interface elements for better usability and accessibility.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 5,
      title: "CNM Navigation App",
      imageSrc: "assets/placeholders/mobile-icon-with-bg.png",
      tags: ["Mobile App", "Navigation", "React Native"],
      description: "A comprehensive mobile navigation application providing intuitive route guidance and location services.",
      features: ["Real-time Navigation", "Location Tracking", "Route Optimization"],
      githubLink: "https://github.com/yonasKu/CNM/tree/master",
      detailedDescription: "A mobile app focused on providing clear and efficient navigation solutions. Features include real-time traffic updates, point-of-interest searching, and optimized routing based on user preferences.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 6,
      title: "About Ethiopia",
      imageSrc: "assets/placeholders/mobile-icon-with-bg.png",
      tags: ["React Native", "Mobile App", "Educational"],
      description: "An informative mobile application showcasing Ethiopia's rich history, culture, and attractions.",
      features: ["Historical Information", "Cultural Insights", "Tourist Attractions Guide", "Interactive Maps"],
      githubLink: "https://github.com/yourusername/about-ethiopia", // Placeholder link
      status: "In Progress",
      detailedDescription: "An educational app designed to be a comprehensive guide to Ethiopia. Users can explore historical timelines, learn about diverse cultures, discover landmarks, and plan visits.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 7,
      title: "Food Recipe Mobile App",
      imageSrc: "assets/placeholders/mobile-icon-with-bg.png",
      tags: ["Mobile App", "Food", "React Native"],
      description: "A mobile application for discovering, saving, and sharing food recipes.",
      features: ["Recipe Search", "Ingredient Management", "Cooking Instructions", "User Ratings"],
      githubLink: "https://github.com/yonasKu/Recipe-app",
      detailedDescription: "Your go-to mobile companion for culinary exploration. Search thousands of recipes, create shopping lists from ingredients, follow step-by-step instructions, and share your creations with a community of food lovers.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 8,
      title: "YegnaGebeya Online Market",
      imageSrc: "assets/img/market place image.png",
      tags: ["Web App", "E-commerce", "Next.js", "Node.js", "MongoDB"],
      description: "An online marketplace platform connecting local buyers and sellers.",
      features: ["Product Listings", "User Authentication", "Search & Filtering", "Shopping Cart", "Seller Dashboard"],
      githubLink: "https://github.com/yonasKu/MarketPlace-Project",
      liveLink: "https://market-place-project-opal.vercel.app/",
      detailedDescription: "YegnaGebeya provides a digital space for local commerce. Sellers can easily list products, manage inventory, and interact with buyers. Buyers benefit from a wide selection, secure transactions, and user reviews.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    },
    {
      id: 9,
      title: "Code Testing Telegram Bot",
      imageSrc: "assets/placeholders/bot-icon-with-bg.png",
      tags: ["Bot", "Telegram", "Node.js", "Testing"],
      description: "A Telegram bot designed to execute and test code snippets in various programming languages.",
      features: ["Multi-language Support", "Code Execution Sandbox", "Result Output", "Usage Statistics"],
      githubLink: "https://github.com/yonasKu/test-Code-bot",
      detailedDescription: "A convenient Telegram bot for developers and learners. Quickly test code snippets on the go without setting up a local environment. Supports popular languages and provides immediate feedback.",
      technicalStack: [], // TODO: Add data
      projectGoals: '', // TODO: Add data
      screenshots: [] // TODO: Add screenshot URLs if available
    }
  ];

  // --- Carousel Logic (Existing) ---
  currentSlide = 0;
  // Dots array will be dynamically generated based on projects array length
  dots: number[] = [];

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private gridElement: HTMLElement | null = null;

  // --- Modal Logic ---
  selectedProject: Project | null = null;
  isModalVisible = false;

  ngOnInit(): void {
    this.dots = Array(this.projects.length).fill(0).map((x, i) => i);
  }

  ngAfterViewInit(): void {
    this.updateSlideVisibility();
    this.setupDragListeners();
  }

  ngOnDestroy(): void {
    this.removeDragListeners();
  }

  private setupDragListeners(): void {
    this.gridElement = this.projectsGrid.nativeElement;
    if (this.gridElement) {
      this.gridElement.addEventListener('mousedown', this.startDragging.bind(this));
      this.gridElement.addEventListener('mousemove', this.drag.bind(this));
      this.gridElement.addEventListener('mouseup', this.stopDragging.bind(this));
      this.gridElement.addEventListener('mouseleave', this.stopDragging.bind(this));
    }
  }

  private removeDragListeners(): void {
    if (this.gridElement) {
      this.gridElement.removeEventListener('mousedown', this.startDragging.bind(this));
      this.gridElement.removeEventListener('mousemove', this.drag.bind(this));
      this.gridElement.removeEventListener('mouseup', this.stopDragging.bind(this));
      this.gridElement.removeEventListener('mouseleave', this.stopDragging.bind(this));
    }
  }

  private startDragging(e: MouseEvent): void {
    this.isDragging = true;
    this.startX = e.pageX - this.gridElement!.offsetLeft;
    this.scrollLeft = this.gridElement!.scrollLeft;
    this.gridElement!.style.cursor = 'grabbing';
    this.gridElement!.style.userSelect = 'none';
  }

  private drag(e: MouseEvent): void {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.gridElement!.offsetLeft;
    const walk = (x - this.startX) * 2; // Scroll speed multiplier
    this.gridElement!.scrollLeft = this.scrollLeft - walk;
    this.updateCurrentSlide();
  }

  private stopDragging(): void {
    this.isDragging = false;
    if (this.gridElement) {
      this.gridElement.style.cursor = 'grab';
      this.gridElement.style.removeProperty('user-select');
    }
  }

  private updateCurrentSlide(): void {
    if (!this.gridElement) return;
    const slideWidth = this.gridElement.offsetWidth;
    this.currentSlide = Math.round(this.gridElement.scrollLeft / slideWidth);
  }

  // Carousel Navigation Methods (Existing)
  nextSlide(): void {
    if (this.currentSlide < this.dots.length - 1) {
      this.currentSlide++;
      this.updateSlideVisibility();
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlideVisibility();
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlideVisibility();
  }

  private updateSlideVisibility(): void {
    const grid = this.projectsGrid.nativeElement;
    const slideWidth = grid.offsetWidth;
    grid.scrollTo({
      left: this.currentSlide * slideWidth,
      behavior: 'smooth'
    });
  }

  // Modal Control Methods
  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedProject = null;
  }
}
