import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

export interface ProfessionalApp {
  id: number;
  title: string;
  company: string;
  imageSrc: string;
  tags: string[];
  description: string;
  features: string[];
  status: string;
  type: 'banking' | 'client' | 'enterprise';
  detailedDescription: string;
  technicalStack: string[];
  userBase: string;
  achievements: string[];
}

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('rolesGrid') rolesGrid!: ElementRef;

  // --- Professional Apps Data ---
  professionalApps: ProfessionalApp[] = [
    {
      id: 1,
      title: 'Dashen Bank Mobile App',
      company: 'Eaglelion System Technology',
      imageSrc: 'assets/placeholders/banking-icon-with-bg.png',
      tags: ['React Native', 'Banking', 'FinTech', 'Enterprise'],
      description: 'Leading major updates and new feature implementations for one of Ethiopia\'s premier private banks using React Native framework.',
      features: ['Advanced Banking Features', 'Enhanced Security', 'Digital Wallet', 'Investment Services', 'Customer Support', 'Performance Optimization'],
      status: 'Production - Current',
      type: 'banking',
      detailedDescription: 'Working on major updates and new feature implementations for the Dashen Bank App at Eaglelion System Technology using React Native framework. Dashen Bank is one of Ethiopia\'s leading private banks, and I\'m responsible for enhancing the mobile banking experience through new features, improved security measures, and performance optimizations. The React Native app serves thousands of customers with comprehensive banking and financial services across iOS and Android platforms.',
      technicalStack: ['React Native', 'TypeScript', 'Advanced Banking APIs', 'Security Frameworks', 'Biometric Authentication', 'Performance Optimization', 'Cross-platform Development'],
      userBase: 'Thousands of customers',
      achievements: [
        'Implemented advanced security features using React Native for banking applications',
        'Optimized React Native app performance for large-scale user bases',
        'Enhanced mobile banking experience with new React Native features',
        'Delivered critical updates on schedule for cross-platform deployment'
      ]
    },
    {
      id: 2,
      title: 'SproutBook - AI Family Journaling',
      company: 'International Client',
      imageSrc: 'assets/placeholders/mobile-icon-with-bg.png',
      tags: ['Expo React Native', 'Firebase', 'OpenAI', 'Client Project'],
      description: 'A comprehensive AI-powered family journaling platform built with Expo React Native, Firebase backend, and OpenAI integration.',
      features: ['AI-Generated Recaps', 'Family Sharing', 'Media Journal Entries', 'Push Notifications', 'Subscription Management', 'Web Dashboard'],
      status: 'Production - Completed',
      type: 'client',
      detailedDescription: 'SproutBook is a comprehensive family journaling platform developed for an international client using Expo React Native framework. Parents create journal entries with media, manage children profiles, and receive AI-generated recaps powered by OpenAI. The app includes family sharing with invitations and permissions, subscription management via RevenueCat and Stripe, and a separate Next.js web app for admin dashboards. Built with Expo React Native for cross-platform mobile deployment (iOS/Android), Firebase backend (Firestore, Cloud Functions, Storage), and OpenAI API for intelligent recap generation.',
      technicalStack: ['Expo React Native', 'TypeScript', 'Firebase Firestore', 'Firebase Cloud Functions', 'Firebase Storage', 'OpenAI API', 'RevenueCat', 'Stripe', 'Next.js', 'Cross-platform Development'],
      userBase: 'Families worldwide',
      achievements: [
        'Built complete Expo React Native app from scratch to production',
        'Integrated OpenAI API for automated family memory recaps',
        'Implemented secure family sharing with Firebase permissions system',
        'Set up subscription management with RevenueCat and Stripe integration',
        'Created admin web dashboard with Next.js and Firebase integration',
        'Delivered cross-platform mobile app on time and exceeded client expectations'
      ]
    },
    {
      id: 3,
      title: 'Day - DeFi Mobile App',
      company: 'Crypto Client',
      imageSrc: 'assets/placeholders/defi-icon-with-bg.png',
      tags: ['Expo React Native', 'Web3', 'MongoDB', 'Node.js'],
      description: 'A user-friendly decentralized finance application built with Expo React Native, featuring Privy Wallet integration and custom Node.js/MongoDB backend.',
      features: ['Privy Wallet Integration', 'Gasless Transactions', 'DeFi Trading', 'Secure Crypto Operations', 'Real-time Market Data', 'Multi-chain Support'],
      status: 'In Development - Active',
      type: 'client',
      detailedDescription: 'Day is a user-friendly DeFi application that makes decentralized finance accessible to everyday users. Built with Expo React Native framework for cross-platform deployment, it integrates Privy Wallet for secure Web3 authentication and uses 0x API for cost-effective, gasless transactions. The backend is powered by Node.js with Express framework and MongoDB database for user data management and transaction history. The app provides intuitive interfaces for complex DeFi operations including swapping, staking, and yield farming while maintaining the highest security standards.',
      technicalStack: ['Expo React Native', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Web3.js', 'Privy Wallet SDK', '0x API', 'Ethereum', 'Smart Contracts', 'DeFi Protocols', 'Blockchain Security'],
      userBase: 'Crypto enthusiasts and DeFi users',
      achievements: [
        'Successfully integrated Privy Wallet SDK with Expo React Native for secure Web3 authentication',
        'Implemented gasless transactions using 0x API integration',
        'Built custom Node.js/Express backend with MongoDB for user management',
        'Created intuitive React Native UI for complex DeFi operations',
        'Developed multi-chain support for various blockchain networks',
        'Ensured bank-level security for crypto transactions with proper encryption'
      ]
    },
    {
      id: 4,
      title: 'Mellys E-commerce Chat App',
      company: 'Mellys Fashion and Trading',
      imageSrc: 'assets/placeholders/mobile-icon-with-bg.png',
      tags: ['React Native', 'E-commerce', 'Real-time Chat', 'Enterprise'],
      description: 'An innovative e-commerce platform built with React Native, combining real-time messaging with shopping functionality.',
      features: ['Real-time Messaging', 'E-commerce Integration', 'Shopping Cart', 'Product Catalog', 'Payment Gateway', 'Order Management'],
      status: 'Production - Completed',
      type: 'enterprise',
      detailedDescription: 'Spearheaded the development of an innovative e-commerce chat application for Mellys Fashion and Trading using React Native framework, combining real-time messaging with shopping features. This all-in-one React Native platform revolutionized the customer shopping experience by integrating chat functionality directly with e-commerce operations, allowing customers to browse, chat, and purchase seamlessly within a single cross-platform application deployed on both iOS and Android.',
      technicalStack: ['React Native', 'TypeScript', 'Real-time Messaging APIs', 'E-commerce APIs', 'Chat Integration', 'Payment Gateway Integration', 'Cross-platform Development', 'Push Notifications'],
      userBase: 'Fashion retail customers',
      achievements: [
        'Successfully launched innovative React Native e-commerce chat platform',
        'Integrated real-time messaging with shopping functionality using React Native',
        'Revolutionized customer shopping experience with cross-platform deployment',
        'Delivered complex React Native features on time and within budget'
      ]
    }
  ];

  // --- Carousel Logic (Same as Work Component) ---
  currentSlide = 0;
  dots: number[] = [];

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private gridElement: HTMLElement | null = null;

  // --- Modal Logic ---
  selectedApp: ProfessionalApp | null = null;
  isModalVisible = false;

  ngOnInit(): void {
    this.dots = Array(this.professionalApps.length).fill(0).map((x, i) => i);
  }

  ngAfterViewInit(): void {
    this.updateSlideVisibility();
    this.setupDragListeners();
  }

  ngOnDestroy(): void {
    this.removeDragListeners();
  }

  private setupDragListeners(): void {
    this.gridElement = this.rolesGrid.nativeElement;
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
    const walk = (x - this.startX) * 2;
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

  // Carousel Navigation Methods
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
    const grid = this.rolesGrid.nativeElement;
    const slideWidth = grid.offsetWidth;
    grid.scrollTo({
      left: this.currentSlide * slideWidth,
      behavior: 'smooth'
    });
  }

  // Modal Control Methods
  openModal(app: ProfessionalApp): void {
    this.selectedApp = app;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedApp = null;
  }
}