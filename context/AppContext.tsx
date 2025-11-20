import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppData, NewsItem, BusinessListing, Association, Obituary, User } from '../types';
import { INITIAL_DATA } from '../services/mockData';

interface AppContextType {
    data: AppData;
    addNews: (item: NewsItem) => void;
    deleteNews: (id: string) => void;
    addBusiness: (item: BusinessListing) => void;
    deleteBusiness: (id: string) => void;
    addAssociation: (item: Association) => void;
    deleteAssociation: (id: string) => void;
    addObituary: (item: Obituary) => void;
    deleteObituary: (id: string) => void;
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<AppData>(INITIAL_DATA);

    useEffect(() => {
        console.log("App mounted, data loaded");
    }, []);

    const addNews = (item: NewsItem) => {
        setData(prev => ({ ...prev, news: [item, ...prev.news] }));
    };

    const deleteNews = (id: string) => {
        setData(prev => ({ ...prev, news: prev.news.filter(n => n.id !== id) }));
    };

    const addBusiness = (item: BusinessListing) => {
        setData(prev => ({ ...prev, businesses: [item, ...prev.businesses] }));
    };

    const deleteBusiness = (id: string) => {
        setData(prev => ({ ...prev, businesses: prev.businesses.filter(b => b.id !== id) }));
    };

    const addAssociation = (item: Association) => {
        setData(prev => ({ ...prev, associations: [item, ...prev.associations] }));
    };

    const deleteAssociation = (id: string) => {
        setData(prev => ({ ...prev, associations: prev.associations.filter(a => a.id !== id) }));
    };

    const addObituary = (item: Obituary) => {
        setData(prev => ({ ...prev, obituaries: [item, ...prev.obituaries] }));
    };

    const deleteObituary = (id: string) => {
        setData(prev => ({ ...prev, obituaries: prev.obituaries.filter(o => o.id !== id) }));
    };

    const deleteUser = (id: string) => {
        setData(prev => ({ ...prev, users: prev.users.filter(u => u.id !== id) }));
    };

    const updateUser = (updatedUser: User) => {
        setData(prev => ({
            ...prev,
            users: prev.users.map(u => u.id === updatedUser.id ? updatedUser : u)
        }));
    };

    return (
        <AppContext.Provider value={{ 
            data, 
            addNews, deleteNews, 
            addBusiness, deleteBusiness,
            addAssociation, deleteAssociation,
            addObituary, deleteObituary,
            deleteUser, updateUser
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};