import Book from '../assets/Book.svg';
import webdevelopment from '../assets/Basic converted/Basic converted/Web dev2.avif';
import python from '../assets/Basic converted/Basic converted/python.avif';
import effective from '../assets/Basic converted/Basic converted/effectives study2.avif';
import English from '../assets/Basic converted/Basic converted/English.avif';
import stressmanagement from '../assets/Basic converted/Basic converted/Stress management.avif';
import DBMS from '../assets/Basic converted/Basic converted/DBMS.avif';
import Branding from '../assets/Basic converted/Basic converted/Web development.avif';


import Graphics from '../assets/Standard converted/Standard converted/Graphics design.avif';
import DataScience from '../assets/Standard converted/Standard converted/Data science.avif';
import PublicSpeaking from '../assets/Standard converted/Standard converted/Public speaking.avif';
import CreativeWriting from '../assets/Standard converted/Standard converted/Creative writting.avif';
import ResumeBuilding from '../assets/Standard converted/Standard converted/Resume building.avif';
import AppDev from '../assets/Standard converted/Standard converted/App dev.avif';


import CyberSecurity from'../assets/Advanced converted/Advanced converted/Cybersec 2.avif'
import UIUX from '../assets/Advanced converted/Advanced converted/UI UX.avif';
import DigitalMarketing from '../assets/Advanced converted/Advanced converted/Digital marketing.avif';
import Animation from '../assets/Advanced converted/Advanced converted/3d animation.avif';
import VideoEditing from '../assets/Advanced converted/Advanced converted/video editing.avif';

import AIGPT from '../assets/Premium converted/Premium converted/AI and GPT.avif';
import Entrepreneurship from '../assets/Premium converted/Premium converted/Entrepreneurship.avif';
import ARVR from '../assets/Premium converted/Premium converted/AR and VR.avif';
import CreativeCoding from '../assets/Premium converted/Premium converted/Creative coding.avif';
import GameDesign from '../assets/Premium converted/Premium converted/Game design.avif';
import PersonalBranding from '../assets/Premium converted/Premium converted/personal branding.avif';
const packagesData = {
  advanced: {
    id: "DIGI0003",
    packageName: "Advanced Package...",
    price: "11,999",
    promoPrice: "3999",
    description:
      "Gain lifetime access to in-demand skills like digital marketing, copywriting, Facebook ads, and content creation—plus certification and community support to help you grow, earn, and succeed with confidence.",
    buttonText: "Buy Now",
    image: Book,
    courses: [
    {
      title: "Cybersecurity Essentials",
      hours: "24 hours",
      modules: "7 lessons",
      tutor: "Dr. Raghav Menon",
      imageUrl: CyberSecurity
    },
    {
      title: "UI/UX Design Foundations",
      hours: "20 hours",
      modules: "6 lessons",
      tutor: "Prof. Kavya Rao",
      imageUrl: UIUX
    },
    {
      title: "Digital Marketing Essentials",
      hours: "18 hours",
      modules: "6 lessons",
      tutor: "Mr. Arjun Malhotra",
      imageUrl: DigitalMarketing
    },
    {
      title: "3D Animation & Motion Graphics",
      hours: "22 hours",
      modules: "7 lessons",
      tutor: "Mr. Varun Iyer",
      imageUrl: Animation
    },
    {
      title: "Video Editing & Content Creation",
      hours: "20 hours",
      modules: "6 lessons",
      tutor: "Ms. Nisha Kapoor",
      imageUrl:VideoEditing
    },
  ],
  },
  basic: {
    id: "DIGI0001",
    packageName: "Basic Package...",
    price: "9,999",
    promoPrice: "3999",
    description:
      "Gain lifetime access to essential digital skills, certifications, and a supportive community that helps you grow with confidence.",
    buttonText: "Buy Now",
    image: Book,
    courses: [
      {
        title: "Web Development Mastery (Foundations)",
        hours: "20 hours",
        modules: "8 lessons",
        tutor: "Prof. A. Sharma",
        imageUrl: webdevelopment,
      },
      {
        title: "Python for Everyone",
        hours: "18 hours",
        modules: "7 lessons",
        tutor: "Dr. Meera Krishnan",
        imageUrl: python,
      },
      {
        title: "Effective Study Skills & Memory Hacks",
        hours: "10 hours",
        modules: "5 lessons",
        tutor: "Dr. Kiran Deshpande",
        imageUrl: effective,
      },
      {
        title: "English for Career Growth",
        hours: "15 hours",
        modules: "6 lessons",
        tutor: "Ms. Ritu Sinha",
        imageUrl: English,
      },
      {
        title: "Mindfulness & Stress Management",
        hours: "8 hours",
        modules: "4 lessons",
        tutor: "Dr. Priya Nandakumar",
        imageUrl: stressmanagement,
      },
      {
        title: "Introduction to Databases (DBMS Basics)",
        hours: "12 hours",
        modules: "5 lessons",
        tutor: "Mr. Sanjay Kulkarni",
        imageUrl: DBMS,
      },
      {
        title: "Personal Branding on Social Media",
        hours: "10 hours",
        modules: "4 lessons",
        tutor: "Ms. Ananya Mehta",
        imageUrl: Branding,
      },
    ],
  },
  standard: {
    id: "DIGI0002",
    packageName: "Standard Package...",
    price: "6,999",
    promoPrice: "3999",
    description:
      "Master content creation, strategy, and freelancing basics with lifetime access and community support.",
    buttonText: "Buy Now",
    image: Book,
     courses: [
    {
      title: "Data Science & Analytics (Foundations of Machine Learning)",
      hours: "22 hours",
      modules: "7 lessons",
      tutor: "Dr. Neha Raghavan",
      imageUrl: DataScience
    },
    {
      title: "Graphic Design Basics",
      hours: "18 hours",
      modules: "6 lessons",
      tutor: "Mr. Rohit Bhandari",
      imageUrl: Graphics
    },
    {
      title: "Public Speaking & Communication Skills",
      hours: "12 hours",
      modules: "5 lessons",
      tutor: "Ms. Anjali Verma",
      imageUrl: PublicSpeaking
    },
    {
      title: "Creative Writing & Blogging",
      hours: "15 hours",
      modules: "5 lessons",
      tutor: "Prof. Suresh Iyer",
      imageUrl: CreativeWriting
    },
    {
      title: "Resume Building & Job Interview Prep",
      hours: "10 hours",
      modules: "4 lessons",
      tutor: "Mr. Aditya Jain",
      imageUrl: ResumeBuilding 
    },
    {
      title: "App Development Basics (Android & iOS)",
      hours: "22 hours",
      modules: "7 lessons",
      tutor: "Ms. Sneha Kapoor",
      imageUrl: AppDev
    },
  ],
  },
  premium: {
    id: "DIGI0004",
    packageName: "Premium Package...",
    price: "16,999",
    promoPrice: "3999",
    description:
      "All-in-one learning bundle to fast-track your freelancing, marketing, and content skills in one place.",
    buttonText: "Buy Now",
    image: Book,
    courses: [
    {
      title: "AI & ChatGPT for Students",
      hours: "24 hours",
      modules: "9 lessons",
      tutor: "Dr. Vikram Desai",
      imageUrl: AIGPT
    },
    {
      title: "Entrepreneurship & Startup Basics",
      hours: "20 hours",
      modules: "7 lessons",
      tutor: "Mr. Manish Agarwal",
      imageUrl: Entrepreneurship
    },
    {
      title: "AR/VR Basics & Immersive Experiences",
      hours: "25 hours",
      modules: "8 lessons",
      tutor: "Mr. Rohan Pillai",
      imageUrl: ARVR
    },
    {
      title: "Creative Coding & Generative Art",
      hours: "22 hours",
      modules: "8 lessons",
      tutor: "Prof. Tanvi Kulkarni",
      imageUrl: CreativeCoding
    },
    {
      title: "Game Design & Development Basics",
      hours: "28 hours",
      modules: "10 lessons",
      tutor: "Mr. Abhishek Shetty",
      imageUrl: GameDesign
    },
    {
      title: "Personal Branding & LinkedIn Mastery",
      hours: "12 hours",
      modules: "5 lessons",
      tutor: "Ms. Shalini Menon",
      imageUrl: PersonalBranding
    },
  ],
  },
  ultimate: {
    id: "DIGI0005",
    packageName: "Ultimate Package...",
    price: "16,999",
    promoPrice: "3999",
    description:
      "All-in-one learning bundle to fast-track your freelancing, marketing, and content skills in one place.",
    buttonText: "Buy Now",
    image: Book,
      courses: [
    // Basic Plan
    { title: "Web Development Mastery (Foundations)", hours: "20 hours", modules: "8 lessons", tutor: "Prof. A. Sharma", imageUrl: webdevelopment },
    { title: "Python for Everyone", hours: "18 hours", modules: "7 lessons", tutor: "Dr. Meera Krishnan", imageUrl: python },
    { title: "Effective Study Skills & Memory Hacks", hours: "10 hours", modules: "5 lessons", tutor: "Dr. Kiran Deshpande", imageUrl: effective },
    { title: "English for Career Growth", hours: "15 hours", modules: "6 lessons", tutor: "Ms. Ritu Sinha", imageUrl: English },
    { title: "Mindfulness & Stress Management", hours: "8 hours", modules: "4 lessons", tutor: "Dr. Priya Nandakumar", imageUrl: stressmanagement },
    { title: "Database Management Systems (DBMS Basics)", hours: "12 hours", modules: "5 lessons", tutor: "Mr. Sanjay Kulkarni", imageUrl: DBMS },
    { title: "Personal Branding on Social Media", hours: "10 hours", modules: "4 lessons", tutor: "Ms. Ananya Mehta", imageUrl: Branding },

    // Standard Plan
    { title: "Data Science & Analytics (Foundations of Machine Learning)", hours: "22 hours", modules: "7 lessons", tutor: "Dr. Neha Raghavan", imageUrl: DataScience },
    { title: "Graphic Design Basics", hours: "18 hours", modules: "6 lessons", tutor: "Mr. Rohit Bhandari", imageUrl: Graphics },
    { title: "Public Speaking & Communication Skills", hours: "12 hours", modules: "5 lessons", tutor: "Ms. Anjali Verma", imageUrl: PublicSpeaking },
    { title: "Creative Writing & Blogging", hours: "15 hours", modules: "5 lessons", tutor: "Prof. Suresh Iyer", imageUrl: CreativeWriting },
    { title: "Resume Building & Job Interview Prep", hours: "10 hours", modules: "4 lessons", tutor: "Mr. Aditya Jain", imageUrl: ResumeBuilding },
    { title: "App Development Basics (Android & iOS)", hours: "22 hours", modules: "7 lessons", tutor: "Ms. Sneha Kapoor", imageUrl: AppDev },

    // Advanced Plan
    { title: "Cybersecurity Essentials", hours: "24 hours", modules: "7 lessons", tutor: "Dr. Raghav Menon", imageUrl: CyberSecurity },
    { title: "UI/UX Design Foundations", hours: "20 hours", modules: "6 lessons", tutor: "Prof. Kavya Rao", imageUrl: UIUX },
    { title: "Digital Marketing Essentials", hours: "18 hours", modules: "6 lessons", tutor: "Mr. Arjun Malhotra", imageUrl: DigitalMarketing },
    { title: "Video Editing & Content Creation", hours: "20 hours", modules: "6 lessons", tutor: "Ms. Nisha Kapoor", imageUrl: VideoEditing },
    { title: "3D Animation & Motion Graphics", hours: "22 hours", modules: "7 lessons", tutor: "Mr. Varun Iyer", imageUrl: Animation },

    // Premium Plan
    { title: "AI & ChatGPT for Students", hours: "24 hours", modules: "9 lessons", tutor: "Dr. Vikram Desai", imageUrl: AIGPT },
    { title: "Entrepreneurship & Startup Basics", hours: "20 hours", modules: "7 lessons", tutor: "Mr. Manish Agarwal", imageUrl: Entrepreneurship },
    { title: "AR/VR Basics & Immersive Experiences", hours: "25 hours", modules: "8 lessons", tutor: "Mr. Rohan Pillai", imageUrl: ARVR },
    { title: "Creative Coding & Generative Art", hours: "22 hours", modules: "8 lessons", tutor: "Prof. Tanvi Kulkarni", imageUrl: CreativeCoding },
    { title: "Game Design & Development Basics", hours: "28 hours", modules: "10 lessons", tutor: "Mr. Abhishek Shetty", imageUrl: GameDesign },
    { title: "Personal Branding & LinkedIn Mastery", hours: "12 hours", modules: "5 lessons", tutor: "Ms. Shalini Menon", imageUrl: PersonalBranding },
  ],
  },
};

export default packagesData;
