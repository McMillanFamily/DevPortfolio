// src/data/experience.ts
export interface Entry{
    title: string;
    org: string;
    period: string
    details?: string[];
}

export const experience: Entry[] = [
    {
        title:'Information Systems Developer (FA)',
        org: 'South Lanarkshire College',
        period: '2026 - Present',
        details: ['Made the Contractor sign in system']
    }


]