import { AppData, Category } from "../types";

export const INITIAL_DATA: AppData = {
    news: [
        {
            id: '1',
            title: 'New Visa Regulations Announced for Expats',
            summary: 'The Ministry of Interior has released new guidelines regarding family visit visas starting next month.',
            content: 'The Ministry of Interior (MoI) in Kuwait has announced significant updates to the regulations governing family visit visas. These changes are aimed at streamlining the process and ensuring compliance with residency laws. Effective from next month, applicants will need to provide proof of...',
            date: '2023-10-25',
            imageUrl: 'https://picsum.photos/800/400?random=1',
            category: 'Local',
            views: 1250
        },
        {
            id: '2',
            title: 'Kerala Food Festival Kicks Off in Salmiya',
            summary: 'A weekend of culinary delights awaits at the Marina Crescent as the annual Kerala Food Fest begins.',
            content: 'The aroma of spices fills the air in Salmiya as the much-awaited Kerala Food Festival begins at Marina Crescent. Organized by the Kuwait Malayali Association, the event features over 50 stalls showcasing authentic dishes from Malabar to Travancore...',
            date: '2023-10-24',
            imageUrl: 'https://picsum.photos/800/400?random=2',
            category: 'Local',
            views: 890
        },
        {
            id: '3',
            title: 'Direct Flights from Kuwait to Kannur Increased',
            summary: 'Airlines respond to high demand by adding three more weekly services to Kannur International Airport.',
            content: 'Good news for travelers from the Malabar region. Due to overwhelming demand during the upcoming holiday season, major carriers have announced an increase in frequency...',
            date: '2023-10-23',
            imageUrl: 'https://picsum.photos/800/400?random=3',
            category: 'Kerala',
            views: 3400
        }
    ],
    businesses: [
        {
            id: '1',
            name: 'Malabar Gold & Diamonds',
            category: 'Jewelry',
            location: 'Lulu Hypermarket, Al Rai',
            phone: '2475-1234',
            description: 'Premier jewelry retailer offering a wide range of gold, diamond, and platinum jewelry.',
            rating: 4.8
        },
        {
            id: '2',
            name: 'Thakkara Restaurant',
            category: 'Restaurant',
            location: 'Fahaheel',
            phone: '2392-5678',
            description: 'Authentic Kerala cuisine specializing in Malabar Biriyani and seafood delicacies.',
            rating: 4.5
        },
        {
            id: '3',
            name: 'Al Mulla Exchange',
            category: 'Financial Services',
            location: 'Kuwait City',
            phone: '1840-123',
            description: 'Leading money exchange company in Kuwait with excellent rates to India.',
            rating: 4.7
        }
    ],
    associations: [
        {
            id: '1',
            name: 'Kuwait Kerala Muslim Association (KKMA)',
            focus: 'Charity & Social Service',
            president: 'Abdul Fatah',
            contact: '99123456',
            logoUrl: 'https://picsum.photos/100/100?random=10'
        },
        {
            id: '2',
            name: 'Nair Service Society (NSS) Kuwait',
            focus: 'Community Welfare',
            president: 'Suresh Kumar',
            contact: '99876543',
            logoUrl: 'https://picsum.photos/100/100?random=11'
        }
    ],
    obituaries: [
        {
            id: '1',
            name: 'Varghese Mathew',
            age: 62,
            placeInKerala: 'Chengannur',
            placeInKuwait: 'Abbasiya',
            dateOfDeath: '2023-10-26',
            imageUrl: 'https://picsum.photos/200/200?grayscale'
        }
    ],
    users: [
        {
            id: '1',
            name: 'Admin User',
            email: 'admin@kmp.com',
            role: 'Admin',
            status: 'Active',
            joinDate: '2023-01-01'
        },
        {
            id: '2',
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            role: 'User',
            status: 'Active',
            joinDate: '2023-05-15'
        },
        {
            id: '3',
            name: 'Sarah Smith',
            email: 'sarah.s@yahoo.com',
            role: 'Editor',
            status: 'Active',
            joinDate: '2023-08-20'
        },
        {
            id: '4',
            name: 'Mathew George',
            email: 'mathew.g@outlook.com',
            role: 'User',
            status: 'Suspended',
            joinDate: '2023-02-10'
        },
        {
            id: '5',
            name: 'Priya Nair',
            email: 'priya.nair@gmail.com',
            role: 'User',
            status: 'Pending',
            joinDate: '2023-10-20'
        }
    ]
};