import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "NOOB",
        info: "Designed for absolute beginners without any prior training.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Intermediate",
        info: "For individuals with some experience in exercise and looking to advance their fitness level.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Advanced",
        info: " Geared towards individuals with a high fitness level and specific performance or physique goals.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Elite",
        info: "Reserved for elite athletes or individuals with extensive training experience and specific sport-related goals",
        path: "/programs/444"
    }
]








/*export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]*/









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "For general fitness, aim for at least 150 minutes of moderate-intensity aerobic exercise per week, along with strength training twice a week. Adjust based on your goals and consult a professional for personalized guidance."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out varies for each individual, choose a time that aligns with your schedule, energy levels, and allows for consistency. Listen to your body and find a time when you feel most motivated and able to give your best effort."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: " Aim for 30 minutes to an hour, but any amount of physical activity is beneficial."
    },
    {
        id: 4,
        question: "Can I exercise every day? ",
        answer: " It's generally recommended to have rest days to avoid overtraining, but light activities like walking or stretching can be done daily."
    },
    {
        id: 5,
        question: "Should I consult a professional before starting an exercise routine? ",
        answer: " It's advisable, especially if you have underlying health conditions or are new to exercise, to consult a healthcare professional or certified trainer for personalized guidance."
    },
    {
        id: 6,
        question: "Can I modify my workout routine?",
        answer: "Absolutely, adapt your routine based on your goals, preferences, and progress, and consider seeking guidance for safe and effective modifications."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Ritika Sharma",
        quote: "Great!! Helped me immensely to achieve my fitness goal.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
   
    {
        id: 5,
        name: "Prachi Saini",
        quote: "Thanks!!! Great Initiative for lazy people like me.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    }
    
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 2999,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 4999,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 8999,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Deepanshu Singh',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Vikram Malhotra',
        job: 'Karate Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Prateek Joshi',
        job: 'Kickboxing Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Arnav Mehta',
        job: 'Weightlifting Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Maya Singh',
        job: 'Boxing Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Sameer Choudhary',
        job: 'Cross Fit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]