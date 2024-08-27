import {ProjectModel, ProjectCategoryModel, ProjectTechStackModel} from '@/models/models';
import {URL} from 'node:url';
import {ArticleModel, FullArticleModel, ArticleTagModel, ArticleSeriesModel} from '@/models/models';

// Pre-generated UUIDs (from above)
const projectUUIDs = [
    "1e6c82d6-4e89-4a32-bd9e-4e558e679d47", // Rustic Chess
    "2a5e407d-21a2-4e4d-a4f5-8c6f7265b6ed", // Personal Portfolio
    "39c38fb5-ecb4-4af4-875f-9f2bcf6804b2", // Weather App
    "40bd2d70-5142-4b7a-9d84-4ef25f65d2d3", // E-commerce Platform
    "589f75f3-b8cc-4034-a78a-d2c4f8e8dc84", // DevOps Dashboard
];

const categoryUUIDs = [
    "63d0eb4b-945d-41e5-b7fa-1189f9387c1b", // Web Development
    "769b2a65-8fa5-4387-8b26-d509c9d2ff77", // Game Development
    "7c671b57-36cf-4744-a829-5f032e731dbc", // Frontend Development
    "89f888a2-d2f7-4d71-b10f-c59124d45b91", // API Development
    "936f7e43-30f0-4698-babe-b10e5fa24bdb", // E-commerce
    "a05f5f56-7c67-4bb1-9877-d0fcf42c7f6f", // DevOps
];

const techStackUUIDs = [
    "b7b9c71c-4b3c-46c5-81c0-53bcf63fce8d", // Rust
    "c9d2a4df-f9d4-4ef3-a3f8-d96cbbc8368f", // React
    "d5e9fbc3-1a7b-498b-9d82-7c4c284f4865", // Next.js
    "ea5c396b-cf12-4d7e-aeef-fb5b1c8723b7", // Tailwind CSS
    "f1b5b6b5-6d8b-4e43-99f8-2f7eebbb6554", // Vue.js
    "f92d2f18-9e30-4b3a-844e-f4d7b63dc558", // Node.js
    "fc8b4d57-fbc3-411c-9b8c-9f295a77fcf1", // Django
    "2fb6c742-5d70-4fa9-9499-f97a9e11b175", // Grafana
    "38ed7eb8-929f-4377-9d84-9d7a705b6b98", // Prometheus
];

export const mockProjects: ProjectModel[] = [
    {
        id: projectUUIDs[0],
        title: 'Rustic Chess',
        description: 'Web-based online chess game backend written in Rust, Actix, and Frontend written in Typescript React.',
        thumbnail: '/images/rustic-chess.png',
        isPrimary: true,
        hasSeries: false,
        links: [
            {type: 'Github', url: new URL('https://github.com/hagi0929/RusticChess-Client')},
            {type: 'Website', url: new URL('https://rusticchess.com')},
        ],
        techStacks: [
            {id: techStackUUIDs[0], label: 'Rust'},
            {id: techStackUUIDs[1], label: 'React'},
        ],
        categories: [
            {id: categoryUUIDs[0], label: 'Web Development'},
            {id: categoryUUIDs[1], label: 'Game Development'},
        ],
    },
    {
        id: projectUUIDs[1],
        title: 'Personal Portfolio',
        description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
        thumbnail: '/images/portfolio.png',
        isPrimary: false,
        hasSeries: true,
        links: [
            {type: 'Github', url: new URL('https://github.com/hagi0929/portfolio')},
            {type: 'LiveDemo', url: new URL('https://portfolio.com')},
        ],
        techStacks: [
            {id: techStackUUIDs[2], label: 'Next.js'},
            {id: techStackUUIDs[3], label: 'Tailwind CSS'},
        ],
        categories: [
            {id: categoryUUIDs[2], label: 'Frontend Development'},
        ],
    },
    {
        id: projectUUIDs[2],
        title: 'Weather App',
        description: 'A weather forecasting app built with Vue.js and Node.js.',
        thumbnail: '/images/weather-app.png',
        isPrimary: false,
        hasSeries: false,
        links: [
            {type: 'Github', url: new URL('https://github.com/hagi0929/weather-app')},
            {type: 'Website', url: new URL('https://weatherapp.com')},
        ],
        techStacks: [
            {id: techStackUUIDs[4], label: 'Vue.js'},
            {id: techStackUUIDs[5], label: 'Node.js'},
        ],
        categories: [
            {id: categoryUUIDs[0], label: 'Web Development'},
            {id: categoryUUIDs[3], label: 'API Development'},
        ],
    },
    {
        id: projectUUIDs[3],
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform built with Django and React.',
        thumbnail: '/images/ecommerce.png',
        isPrimary: true,
        hasSeries: true,
        links: [
            {type: 'Github', url: new URL('https://github.com/hagi0929/ecommerce-platform')},
            {type: 'Website', url: new URL('https://ecommerce.com')},
        ],
        techStacks: [
            {id: techStackUUIDs[6], label: 'Django'},
            {id: techStackUUIDs[1], label: 'React'},
        ],
        categories: [
            {id: categoryUUIDs[4], label: 'E-commerce'},
            {id: categoryUUIDs[2], label: 'Frontend Development'},
        ],
    },
    {
        id: projectUUIDs[4],
        title: 'DevOps Dashboard',
        description: 'A DevOps monitoring dashboard built with Grafana and Prometheus.',
        thumbnail: '/images/devops-dashboard.png',
        isPrimary: false,
        hasSeries: false,
        links: [
            {type: 'Github', url: new URL('https://github.com/hagi0929/devops-dashboard')},
            {type: 'Website', url: new URL('https://devopsdashboard.com')},
        ],
        techStacks: [
            {id: techStackUUIDs[7], label: 'Grafana'},
            {id: techStackUUIDs[8], label: 'Prometheus'},
        ],
        categories: [
            {id: categoryUUIDs[5], label: 'DevOps'},
        ],
    },
];

export const mockProjectCategories: ProjectCategoryModel[] = [
    {id: categoryUUIDs[0], label: 'Web Development'},
    {id: categoryUUIDs[1], label: 'Game Development'},
    {id: categoryUUIDs[2], label: 'Frontend Development'},
    {id: categoryUUIDs[3], label: 'API Development'},
    {id: categoryUUIDs[4], label: 'E-commerce'},
    {id: categoryUUIDs[5], label: 'DevOps'},
];

export const mockProjectTechStacks: ProjectTechStackModel[] = [
    {id: techStackUUIDs[0], label: 'Rust'},
    {id: techStackUUIDs[1], label: 'React'},
    {id: techStackUUIDs[2], label: 'Next.js'},
    {id: techStackUUIDs[3], label: 'Tailwind CSS'},
    {id: techStackUUIDs[4], label: 'Vue.js'},
    {id: techStackUUIDs[5], label: 'Node.js'},
    {id: techStackUUIDs[6], label: 'Django'},
    {id: techStackUUIDs[7], label: 'Grafana'},
    {id: techStackUUIDs[8], label: 'Prometheus'},
];


// Pre-generated UUIDs (from above)
const articleUUIDs = [
    "afd05eb5-6053-4d6e-b1f8-93252c136d8e", // Understanding Rust
    "b176d463-982b-4763-a9f4-28d1c04b4a2f", // Getting Started with Next.js
    "b6b8ebed-d3a4-4826-9f0c-f5bb6ff00d1f", // Mastering Vue.js
];

const tagUUIDs = [
    "f32c2c9e-6f96-4c9b-80e1-ec3ff9c73e57", // Rust
    "f7b3edc7-2c55-46d6-8bfa-b7b7d19cc1f7", // Programming
    "fc013b9f-1c7f-457f-bd22-6a6f9146f7b7", // Next.js
    "2e8269a9-bc9e-4980-8b75-63b65bc9c97e", // JavaScript
    "3f896b2a-c7f9-46cb-ae94-f3f5b0b1f217", // Vue.js
    "480d6824-c5ff-441d-a789-ef735f1b7ad7", // Frontend Development
];

const seriesUUIDs = [
    "4ff3f8b8-7b24-4e57-8a1e-65ebc5f0aafd", // Web Development Series
    "52b4fb0f-7d1c-4c77-bf0f-76f895b2b3c3", // Advanced JavaScript Series
];

export const mockArticles: ArticleModel[] = [
    {
        id: articleUUIDs[0],
        title: 'Understanding Rust',
        previewText: 'An in-depth look at Rust programming language...',
        tags: [
            {id: tagUUIDs[0], label: 'Rust'},
            {id: tagUUIDs[1], label: 'Programming'},
        ],
        createdAt: new Date('2024-01-01T10:00:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[1],
        title: 'Getting Started with Next.js',
        previewText: 'A comprehensive guide to building your first Next.js app...',
        tags: [
            {id: tagUUIDs[2], label: 'Next.js'},
            {id: tagUUIDs[3], label: 'JavaScript'},
        ],
        createdAt: new Date('2024-02-15T08:00:00Z'),
        series: {
            id: seriesUUIDs[0],
            label: 'Web Development Series',
        },
    },
    {
        id: articleUUIDs[2],
        title: 'Mastering Vue.js',
        previewText: 'Learn how to build dynamic web applications with Vue.js...',
        tags: [
            {id: tagUUIDs[4], label: 'Vue.js'},
            {id: tagUUIDs[5], label: 'Frontend Development'},
        ],
        createdAt: new Date('2024-03-10T09:30:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[0],
        title: 'Understanding Rust',
        previewText: 'An in-depth look at Rust programming language...',
        tags: [
            {id: tagUUIDs[0], label: 'Rust'},
            {id: tagUUIDs[1], label: 'Programming'},
        ],
        createdAt: new Date('2024-01-01T10:00:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[1],
        title: 'Getting Started with Next.js',
        previewText: 'A comprehensive guide to building your first Next.js app...',
        tags: [
            {id: tagUUIDs[2], label: 'Next.js'},
            {id: tagUUIDs[3], label: 'JavaScript'},
        ],
        createdAt: new Date('2024-02-15T08:00:00Z'),
        series: {
            id: seriesUUIDs[0],
            label: 'Web Development Series',
        },
    },
    {
        id: articleUUIDs[2],
        title: 'Mastering Vue.js',
        previewText: 'Learn how to build dynamic web applications with Vue.js...',
        tags: [
            {id: tagUUIDs[4], label: 'Vue.js'},
            {id: tagUUIDs[5], label: 'Frontend Development'},
        ],
        createdAt: new Date('2024-03-10T09:30:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[0],
        title: 'Understanding Rust',
        previewText: 'An in-depth look at Rust programming language...',
        tags: [
            {id: tagUUIDs[0], label: 'Rust'},
            {id: tagUUIDs[1], label: 'Programming'},
        ],
        createdAt: new Date('2024-01-01T10:00:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[1],
        title: 'Getting Started with Next.js',
        previewText: 'A comprehensive guide to building your first Next.js app...',
        tags: [
            {id: tagUUIDs[2], label: 'Next.js'},
            {id: tagUUIDs[3], label: 'JavaScript'},
        ],
        createdAt: new Date('2024-02-15T08:00:00Z'),
        series: {
            id: seriesUUIDs[0],
            label: 'Web Development Series',
        },
    },
    {
        id: articleUUIDs[2],
        title: 'Mastering Vue.js',
        previewText: 'Learn how to build dynamic web applications with Vue.js...',
        tags: [
            {id: tagUUIDs[4], label: 'Vue.js'},
            {id: tagUUIDs[5], label: 'Frontend Development'},
        ],
        createdAt: new Date('2024-03-10T09:30:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[1],
        title: 'Getting Started with Next.js',
        previewText: 'A comprehensive guide to building your first Next.js app...',
        tags: [
            {id: tagUUIDs[2], label: 'Next.js'},
            {id: tagUUIDs[3], label: 'JavaScript'},
        ],
        createdAt: new Date('2024-02-15T08:00:00Z'),
        series: {
            id: seriesUUIDs[0],
            label: 'Web Development Series',
        },
    },
    {
        id: articleUUIDs[2],
        title: 'Mastering Vue.js',
        previewText: 'Learn how to build dynamic web applications with Vue.js...',
        tags: [
            {id: tagUUIDs[4], label: 'Vue.js'},
            {id: tagUUIDs[5], label: 'Frontend Development'},
        ],
        createdAt: new Date('2024-03-10T09:30:00Z'),
        series: null,
    },
];

export const mockFullArticles: FullArticleModel[] = [
    {
        id: articleUUIDs[0],
        title: 'Understanding Rust',
        blocks: [/* Mock content blocks */],
        tags: [
            {id: tagUUIDs[0], label: 'Rust'},
            {id: tagUUIDs[1], label: 'Programming'},
        ],
        createdAt: new Date('2024-01-01T10:00:00Z'),
        series: null,
    },
    {
        id: articleUUIDs[1],
        title: 'Getting Started with Next.js',
        blocks: [/* Mock content blocks */],
        tags: [
            {id: tagUUIDs[2], label: 'Next.js'},
            {id: tagUUIDs[3], label: 'JavaScript'},
        ],
        createdAt: new Date('2024-02-15T08:00:00Z'),
        series: {
            id: seriesUUIDs[0],
            label: 'Web Development Series',
        },
    },
    {
        id: articleUUIDs[2],
        title: 'Mastering Vue.js',
        blocks: [/* Mock content blocks */],
        tags: [
            {id: tagUUIDs[4], label: 'Vue.js'},
            {id: tagUUIDs[5], label: 'Frontend Development'},
        ],
        createdAt: new Date('2024-03-10T09:30:00Z'),
        series: null,
    },
];

export const mockArticleTags: ArticleTagModel[] = [
    {id: tagUUIDs[0], label: 'Rust'},
    {id: tagUUIDs[1], label: 'Programming'},
    {id: tagUUIDs[2], label: 'Next.js'},
    {id: tagUUIDs[3], label: 'JavaScript'},
    {id: tagUUIDs[4], label: 'Vue.js'},
    {id: tagUUIDs[5], label: 'Frontend Development'},
];

export const mockTags: ArticleTagModel[] = [
    {id: tagUUIDs[0], label: 'Rust', count: 5},
    {id: tagUUIDs[1], label: 'Programming', count: 3},
    {id: tagUUIDs[2], label: 'Next.js', count: 9},
    {id: tagUUIDs[3], label: 'JavaScript', count: 7},
    {id: tagUUIDs[4], label: 'Vue.js', count: 1},
    {id: tagUUIDs[5], label: 'Frontend Development', count: 4},
];

export const mockArticleSeries: ArticleSeriesModel[] = [
    {id: seriesUUIDs[0], label: 'Web Development Series'},
    {id: seriesUUIDs[1], label: 'Advanced JavaScript Series'},
];
