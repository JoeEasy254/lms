const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const categoriesData = [
    {
        category: "Technology",
        subcategories: [
            "Programming",
            "Data Science",
            "Cybersecurity",
            "AI and Machine Learning",
            "Networking",
            "Cloud Computing",
            "Software Development",
            "Web Development",
            "Mobile Development",
            "DevOps"
        ]
    },
    {
        category: "Business",
        subcategories: [
            "Finance",
            "Marketing",
            "Entrepreneurship",
            "Management",
            "Sales",
            "Business Strategy",
            "Project Management",
            "Human Resources",
            "Leadership",
            "Economics"
        ]
    },
    {
        category: "Arts and Humanities",
        subcategories: [
            "History",
            "Philosophy",
            "Literature",
            "Languages",
            "Art",
            "Music",
            "Theater",
            "Creative Writing",
            "Cultural Studies",
            "Religion"
        ]
    },
    {
        category: "Science",
        subcategories: [
            "Biology",
            "Chemistry",
            "Physics",
            "Environmental Science",
            "Astronomy",
            "Geology",
            "Mathematics",
            "Statistics",
            "Research Methods",
            "Genetics"
        ]
    },
    {
        category: "Health and Medicine",
        subcategories: [
            "Medicine",
            "Nursing",
            "Public Health",
            "Nutrition",
            "Psychology",
            "Pharmacology",
            "Healthcare Administration",
            "Physical Therapy",
            "Medical Research",
            "Health Education"
        ]
    },
    {
        category: "Social Sciences",
        subcategories: [
            "Sociology",
            "Anthropology",
            "Political Science",
            "International Relations",
            "Law",
            "Psychology",
            "Economics",
            "Education",
            "Geography",
            "Gender Studies"
        ]
    },
    {
        category: "Personal Development",
        subcategories: [
            "Self-Improvement",
            "Career Development",
            "Communication Skills",
            "Productivity",
            "Time Management",
            "Public Speaking",
            "Mindfulness",
            "Stress Management",
            "Goal Setting",
            "Personal Finance"
        ]
    },
    {
        category: "Lifestyle",
        subcategories: [
            "Cooking",
            "Travel",
            "Home Improvement",
            "Gardening",
            "Pet Care",
            "Fashion",
            "Beauty",
            "Health and Fitness",
            "Photography",
            "DIY"
        ]
    },
    {
        category: "Languages",
        subcategories: [
            "English",
            "Spanish",
            "French",
            "German",
            "Chinese",
            "Japanese",
            "Korean",
            "Italian",
            "Portuguese",
            "Russian"
        ]
    },
    {
        category: "Teaching and Academics",
        subcategories: [
            "Education",
            "Curriculum Development",
            "Instructional Design",
            "Educational Technology",
            "Special Education",
            "Classroom Management",
            "Teacher Training",
            "Tutoring",
            "Academic Writing",
            "Research"
        ]
    }
];

async function main() {
    // Clear existing data
    await prisma.subcategory.deleteMany();
    await prisma.category.deleteMany();

    console.log('Deleted existing categories and subcategories');

    // Seed new data
    for (const categoryData of categoriesData) {
        const { category, subcategories } = categoryData;
        const createdCategory = await prisma.category.create({
            data: {
                name: category,
                subcategories: {
                    create: subcategories.map(name => ({ name })),
                },
            },
        });
        console.log(`Created category: ${createdCategory.id}`);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
