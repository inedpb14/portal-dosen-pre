export const classMaterial = [
  {
    id: "cs",
    name: "Computer Science",
    years: [
      {
        id: "year-1",
        name: "First Year",
        courses: [
          {
            id: "cs101",
            code: "CS101",
            name: "Introduction to Programming",
            description: "Fundamentals of programming using Python",
            materials: [
              {
                id: "cs101-intro",
                title: "Introduction to Python",
                type: "lecture",
                content: "Basic syntax and programming concepts",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "Python Installation Guide", url: "#" },
                  { name: "IDE Setup Instructions", url: "#" },
                ],
              },
              {
                id: "cs101-data-types",
                title: "Data Types and Variables",
                type: "lecture",
                content: "Understanding Python data types",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "Practice Problems", url: "#" },
                  { name: "Reference Guide", url: "#" },
                ],
              },
            ],
            assignments: [
              {
                id: "a1",
                title: "Basic Programming Exercises",
                description: "Practice basic Python syntax and operations",
                dueDate: "2024-04-15",
                points: 100,
                instructions: "Complete the following exercises...",
              },
            ],
          },
          {
            id: "cs102",
            code: "CS102",
            name: "Data Structures",
            description: "Fundamental data structures and algorithms",
            materials: [
              {
                id: "cs102-arrays",
                title: "Arrays and Linked Lists",
                type: "lecture",
                content: "Basic data structures",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "Practice Problems", url: "#" },
                  { name: "Implementation Guide", url: "#" },
                ],
              },
            ],
            assignments: [
              {
                id: "a1",
                title: "Data Structures Implementation",
                description: "Implement basic data structures",
                dueDate: "2024-04-20",
                points: 100,
                instructions: "Implement the following data structures...",
              },
            ],
          },
        ],
      },
      {
        id: "year-2",
        name: "Second Year",
        courses: [
          {
            id: "cs201",
            code: "CS201",
            name: "Advanced Programming",
            description: "Advanced programming concepts and patterns",
            materials: [
              {
                id: "cs201-oop",
                title: "Object-Oriented Programming",
                type: "lecture",
                content: "OOP principles and implementation",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "Design Patterns Guide", url: "#" },
                  { name: "OOP Best Practices", url: "#" },
                ],
              },
            ],
            assignments: [
              {
                id: "a1",
                title: "Design Patterns Implementation",
                description: "Implement various design patterns in a real-world application",
                dueDate: "2024-05-01",
                points: 100,
                instructions: "Create implementations of the following design patterns...",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    years: [
      {
        id: "year-1",
        name: "First Year",
        courses: [
          {
            id: "ai101",
            code: "AI101",
            name: "Introduction to AI",
            description: "Basic concepts of artificial intelligence",
            materials: [
              {
                id: "ai101-intro",
                title: "What is AI?",
                type: "lecture",
                content: "Introduction to artificial intelligence and its applications",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "AI History Timeline", url: "#" },
                  { name: "Basic AI Concepts", url: "#" },
                ],
              },
              {
                id: "ai101-ml",
                title: "Machine Learning Basics",
                type: "lecture",
                content: "Introduction to machine learning concepts",
                videoUrl: "#",
                slides: "#",
                additionalResources: [
                  { name: "ML Algorithms Overview", url: "#" },
                  { name: "Python for ML", url: "#" },
                ],
              },
            ],
            assignments: [
              {
                id: "a1",
                title: "AI Fundamentals",
                description: "Explore basic AI concepts and applications",
                dueDate: "2024-04-25",
                points: 100,
                instructions: "Complete the following AI exercises...",
              },
            ],
          },
        ],
      },
    ],
  },
];