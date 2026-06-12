'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Developers',
    'nav.blog': 'Blog',
    'nav.customers': 'Customers',
    'nav.company': 'Company',
    'nav.contact_sales': 'Contact sales',
    'nav.start_building': 'Start building',
    'hero.title_part1': 'Frontier AI.',
    'hero.title_part2': 'In your hands.',
    'hero.description': 'ANTERA helps organizations build Mobile Apps, Web Apps, Automate, and Scale through AI-powered solutions, custom infrastructure tuning, and deep technical engineering.',
    'page.products.title': 'Products',
    'page.products.desc': 'Advanced AI products for the next generation.',
    'page.solutions.title': 'Solutions',
    'page.solutions.desc': 'Enterprise solutions tailored to your needs.',
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'Powerful APIs to integrate intelligence into your apps.',
    'page.developers.title': 'Developers',
    'page.developers.desc': 'Resources and documentation for engineers.',
    'page.blog.title': 'Blog',
    'page.blog.desc': 'Latest insights and updates from ANTERA.',
    'page.customers.title': 'Customers',
    'page.customers.desc': 'See how we help organizations succeed.',
    'page.company.title': 'Company',
    'page.company.desc': 'Our mission to advance neural technologies.',
    'page.models.title': 'Data Intelligence',
    'page.models.desc': 'Advanced data analysis and machine learning models.',
    'company.founded': 'Founded',
    'company.founded_value': '2026',
    'company.headquarters': 'Headquarters',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Offices',
    'company.offices_value': 'Dar es Salaam • Dodoma'
  },
  sw: {
    'nav.products': 'Bidhaa',
    'nav.solutions': 'Suluhisho',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Wanaendelezaji',
    'nav.blog': 'Blogu',
    'nav.customers': 'Wateja',
    'nav.company': 'Kampuni',
    'nav.contact_sales': 'Wasiliana na mauzo',
    'nav.start_building': 'Anza kujenga',
    'hero.title_part1': 'AI ya Mipaka.',
    'hero.title_part2': 'Mikononi mwako.',
    'hero.description': 'ANTERA husaidia mashirika kujenga, kujiendesha, na kupanuka kupitia suluhisho zinazoendeshwa na AI, urekebishaji wa miundombinu ya kawaida, na uhandisi wa kina wa kiufundi.',
    'page.products.title': 'Bidhaa',
    'page.products.desc': 'Bidhaa za juu za AI kwa kizazi kijacho.',
    'page.solutions.title': 'Suluhisho',
    'page.solutions.desc': 'Suluhisho za biashara zilizobinafsishwa kulingana na mahitaji yako.',
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'API zenye nguvu za kuunganisha akili katika programu zako.',
    'page.developers.title': 'Wanaendelezaji',
    'page.developers.desc': 'Rasilimali na nyaraka kwa wahandisi.',
    'page.blog.title': 'Blogu',
    'page.blog.desc': 'Maelezo ya hivi karibuni na sasisho kutoka ANTERA.',
    'page.customers.title': 'Wateja',
    'page.customers.desc': 'Ona jinsi tunavyosaidia mashirika kufanikiwa.',
    'page.company.title': 'Kampuni',
    'page.company.desc': 'Utume wetu wa kuendeleza teknolojia za neva.',
    'page.models.title': 'Akili ya Data',
    'page.models.desc': 'Uchambuzi wa juu wa data na mifano ya kujifunza kwa mashine.',
    'company.founded': 'Ilianzishwa',
    'company.founded_value': '2026',
    'company.headquarters': 'Makao Makuu',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Ofisi',
    'company.offices_value': 'Dar es Salaam • Dodoma'
  },
  pl: {
    'nav.products': 'Produkty',
    'nav.solutions': 'Rozwiązania',
    'nav.sekela': 'Sekela APIS',
    'nav.developers': 'Programiści',
    'nav.blog': 'Blog',
    'nav.customers': 'Klienci',
    'nav.company': 'Firma',
    'nav.contact_sales': 'Kontakt z handlowcem',
    'nav.start_building': 'Zacznij budować',
    'hero.title_part1': 'Graniczna AI.',
    'hero.title_part2': 'W Twoich rękach.',
    'hero.description': 'ANTERA pomaga organizacjom budować, automatyzować i skalować się dzięki rozwiązaniom opartym na AI, niestandardowemu dostrajaniu infrastruktury i zaawansowanej inżynierii technicznej.',
    'page.products.title': 'Produkty',
    'page.products.desc': 'Zaawansowane produkty AI dla następnej generacji.',
    'page.solutions.title': 'Rozwiązania',
    'page.solutions.desc': 'Rozwiązania korporacyjne dostosowane do Twoich potrzeb.',
    'page.sekela.title': 'Sekela APIs',
    'page.sekela.desc': 'Potężne interfejsy API do integracji inteligencji z Twoimi aplikacjami.',
    'page.developers.title': 'Programiści',
    'page.developers.desc': 'Zasoby i dokumentacja dla inżynierów.',
    'page.blog.title': 'Blog',
    'page.blog.desc': 'Najnowsze spostrzeżenia i aktualizacje od ANTERA.',
    'page.customers.title': 'Klienci',
    'page.customers.desc': 'Zobacz, jak pomagamy organizacjom odnieść sukces.',
    'page.company.title': 'Firma',
    'page.company.desc': 'Nasza misja rozwoju technologii neuronowych.',
    'page.models.title': 'Inteligencja Danych',
    'page.models.desc': 'Zaawansowana analiza danych i modele uczenia maszynowego.',
    'company.founded': 'Założona',
    'company.founded_value': '2026',
    'company.headquarters': 'Siedziba Główna',
    'company.headquarters_value': 'Dar es Salaam, Tanzania',
    'company.offices': 'Biura',
    'company.offices_value': 'Dar es Salaam • Dodoma'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};