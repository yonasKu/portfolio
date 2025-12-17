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

  // Text scramble properties
  private intersectionObserver: IntersectionObserver | null = null;
  private hasAnimated = false;
  displayRecentWorks = this.getRandomString(12);
  displayFeaturedProjects = this.getRandomString(17);
  private readonly finalRecentWorks = 'Recent Works';
  private readonly finalFeaturedProjects = 'Featured Projects';

  private getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

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
      title: "Felagi Bot",
      imageSrc: "assets/placeholders/bot-icon-with-bg.png",
      tags: ["Telegram Bot", "Python", "Location Services"],
      description: "An intelligent Telegram bot that helps users discover and navigate places in Addis Ababa.",
      features: ["Location Discovery", "Place Recommendations", "Interactive Navigation", "Real-time Updates"],
      githubLink: "https://github.com/yonasKu/Felagi_bot",
      liveLink: "https://t.me/Felagi101_bot",
      detailedDescription: "Felagi Bot is designed to help users discover places and navigate around Addis Ababa using Telegram. It provides recommendations and real-time updates for locations.",
      technicalStack: [],
      projectGoals: '',
      screenshots: []
    },
    {
      id: 8,
      title: "Menteko Bot",
      imageSrc: "assets/placeholders/bot-icon-with-bg.png",
      tags: ["Telegram Bot", "Python", "Moderation"],
      description: "A powerful moderation bot for Telegram groups that helps admins maintain order and create a safe environment.",
      features: ["Automated Moderation", "Spam Protection", "Group Management", "Custom Rule Enforcement"],
      githubLink: "https://github.com/yonasKu/MentekoBotModeration-Bot-",
      liveLink: "https://t.me/mentekobot",
      detailedDescription: "Menteko Bot assists Telegram group admins by providing robust moderation tools, spam protection, and group management features.",
      technicalStack: [],
      projectGoals: '',
      screenshots: []
    },
    {
      id: 9,
      title: "Portfolio Management AI",
      imageSrc: "assets/placeholders/ai-icon-with-bg.png",
      tags: ["Python", "Machine Learning", "Time Series", "Finance"],
      description: "A time series forecasting model for portfolio optimization, predicting asset prices using historical data to balance risk and return.",
      features: ["ARIMA & LSTM Models", "Data Preprocessing Pipeline", "Risk Analysis", "Performance Evaluation", "Portfolio Optimization"],
      githubLink: "https://github.com/yonasKu/Time-Series-Forecasting-for-Portfolio-Management-Optimization-",
      detailedDescription: "This project leverages machine learning (ARIMA & LSTM) for financial time series forecasting and portfolio optimization.",
      technicalStack: [],
      projectGoals: '',
      screenshots: []
    },
    // SproutBook and DeFi projects moved to Professional Experience section
    // {
    //   id: 10,
    //   title: "SproutBook",
    //   imageSrc: "assets/placeholders/mobile-icon-with-bg.png",
    //   tags: ["React Native", "Firebase", "AI", "Client Project"],
    //   description: "A family journaling mobile app with AI-powered recaps. Built for a client to help parents document memories and receive automated weekly, monthly, and yearly summaries.",
    //   features: ["AI-Generated Recaps", "Family Sharing", "Media Journal Entries", "Push Notifications", "Subscription Management", "Web Dashboard"],
    //   status: "Client Project",
    //   detailedDescription: "SproutBook is a comprehensive family journaling platform developed for a client. Parents create journal entries with media, manage children profiles, and receive AI-generated recaps. The app includes family sharing with invitations and permissions, subscription management via RevenueCat and Stripe, and a separate Next.js web app for admin dashboards. Built with Expo React Native for mobile (iOS/Android), Firebase backend (Firestore, Cloud Functions, Storage), and OpenAI for intelligent recap generation.",
    //   technicalStack: ['Expo React Native', 'TypeScript', 'Firebase', 'Cloud Functions', 'OpenAI API', 'RevenueCat', 'Stripe', 'Next.js'],
    //   projectGoals: 'To create a seamless family journaling experience with automated AI-powered memory recaps, enabling families to preserve and share precious moments effortlessly.',
    //   screenshots: []
    // },
    // {
    //   id: 11,
    //   title: "Day - DeFi App",
    //   imageSrc: "assets/placeholders/defi-icon-with-bg.png",
    //   tags: ["React Native", "Web3", "DeFi", "Blockchain"],
    //   description: "A decentralized finance application integrating Privy Wallet for secure transactions and 0x API for gasless trading operations.",
    //   features: ["Privy Wallet Integration", "Gasless Transactions", "DeFi Trading", "Secure Crypto Operations", "Real-time Market Data", "Multi-chain Support"],
    //   githubLink: "https://github.com/yonasKu/day-defi-app",
    //   status: "In Development",
    //   detailedDescription: "Day is a user-friendly DeFi application that makes decentralized finance accessible to everyday users. Built with React Native, it integrates Privy Wallet for secure wallet management and uses 0x API for cost-effective, gasless transactions. The app provides intuitive interfaces for complex DeFi operations including swapping, staking, and yield farming while maintaining the highest security standards.",
    //   technicalStack: ['React Native', 'Privy Wallet', '0x API', 'Web3.js', 'Ethereum', 'Smart Contracts', 'TypeScript'],
    //   projectGoals: 'To democratize access to decentralized finance by creating an intuitive mobile app that simplifies complex DeFi operations for mainstream users.',
    //   screenshots: []
    // },
    // {
    //   id: 12,
    //   title: "CBE Mobile Banking App",
    //   imageSrc: "assets/placeholders/banking-icon-with-bg.png",
    //   tags: ["React Native", "Banking", "FinTech", "Enterprise"],
    //   description: "Contributing to the development of Commercial Bank of Ethiopia's mobile banking application, serving millions of customers nationwide.",
    //   features: ["Secure Banking Transactions", "Account Management", "Money Transfer", "Bill Payments", "Loan Services", "Multi-language Support"],
    //   status: "Production - Eaglelion Systems",
    //   detailedDescription: "As part of the development team at Eaglelion System Technology, I contribute to the newly implemented CBE App - Ethiopia's largest commercial bank's mobile banking solution. The app serves millions of customers with secure banking features, real-time transactions, and comprehensive financial services. My role involves implementing new features, ensuring security compliance, and optimizing performance for the large-scale user base.",
    //   technicalStack: ['React Native', 'Banking APIs', 'Security Protocols', 'Biometric Auth', 'Encryption', 'Real-time Systems'],
    //   projectGoals: 'To provide secure, reliable, and user-friendly mobile banking services to millions of Ethiopian customers, promoting financial inclusion and digital transformation.',
    //   screenshots: []
    // },
    // Dashen Bank project moved to Professional Experience section
    // {
    //   id: 13,
    //   title: "Dashen Bank Mobile App",
    //   imageSrc: "assets/placeholders/banking-icon-with-bg.png",
    //   tags: ["React Native", "Banking", "FinTech", "Enterprise"],
    //   description: "Leading major updates and new feature implementations for Dashen Bank's mobile banking application, one of Ethiopia's premier private banks.",
    //   features: ["Advanced Banking Features", "Enhanced Security", "Digital Wallet", "Investment Services", "Customer Support", "Performance Optimization"],
    //   status: "Production - Eaglelion Systems",
    //   detailedDescription: "Working on major updates and new feature implementations for the Dashen Bank App at Eaglelion System Technology. Dashen Bank is one of Ethiopia's leading private banks, and I'm responsible for enhancing the mobile banking experience through new features, improved security measures, and performance optimizations. The app serves thousands of customers with comprehensive banking and financial services.",
    //   technicalStack: ['React Native', 'Advanced Banking APIs', 'Security Frameworks', 'Performance Optimization', 'UI/UX Enhancement'],
    //   projectGoals: 'To enhance the mobile banking experience for Dashen Bank customers by implementing cutting-edge features and maintaining the highest standards of security and performance.',
    //   screenshots: []
    // }
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
    this.setupScrollObserver();
  }

  ngOnDestroy(): void {
    this.removeDragListeners();
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => {
            this.scrambleText(this.finalRecentWorks, 'recentWorks', 30);
            setTimeout(() => {
              this.scrambleText(this.finalFeaturedProjects, 'featuredProjects', 25);
            }, 300);
          }, 100);
        }
      });
    }, options);

    const workSection = document.querySelector('app-work .container');
    if (workSection) {
      this.intersectionObserver.observe(workSection);
    }
  }

  scrambleText(finalText: string, type: 'recentWorks' | 'featuredProjects', speed: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const length = finalText.length;
    let iteration = 0;
    
    const interval = setInterval(() => {
      const scrambledText = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (type === 'recentWorks') {
        this.displayRecentWorks = scrambledText;
      } else {
        this.displayFeaturedProjects = scrambledText;
      }
      
      iteration += 1 / 3;
      
      if (iteration >= length) {
        clearInterval(interval);
        if (type === 'recentWorks') {
          this.displayRecentWorks = finalText;
        } else {
          this.displayFeaturedProjects = finalText;
        }
      }
    }, speed);
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
