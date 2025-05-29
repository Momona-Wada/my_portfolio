const commonMessages = {
    hero: {
        name: "Momona Wada",
        title: "Developer/Data Analysist",
        about_me: "About Me",
        description:
        "Thank you for visiting my portfolio!\n" +
        "I'm a junior IT engineer currently living in Canada for the fourth year. I completed the Computer Systems Technology program at BCIT in May 2025 and am currently seeking job opportunities.\n" +
        "At BCIT, I chose the Predictive Analytics option, where I worked on data analysis, model building, and creating documentation based on the results. I believe that building a model is not the end goal — clearly organizing and documenting the outcomes is just as important. I enjoy and excel at this process of turning insights into structured, written materials.\n" +
        "My strengths include smooth communication within teams, strong time management skills, and the ability to consider others' perspectives when working. I always strive to handle tasks and projects with care while being considerate of both clients and team members.\n" +
        "In this portfolio, you'll find the projects I’ve worked on and a few of my personal interests. I hope you enjoy exploring it! 😊",
        technolories_num: "5+",
        technologies_learned: "Technologies Learned",
        projects_num: "10+",
        projects_label: "Project Completed",
        star: "⭐️⭐️⭐️⭐️⭐️",
        team_collaboration: "Team Collaboration",
        contact_title: "Let's Connect",
        contact_description: "Ready to collaborate? Let's connect and discuss opportunities.",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "Watch on Youtube"

    },

    projects: {
        heading: "My Projects",

      // バッジごとの色を統一したい場合はここで定義
        tagColors: {
            TypeScript: "bg-blue-200  text-blue-800",
            "Tailwind CSS": "bg-sky-200  text-sky-800",
            React: "bg-sky-100  text-sky-900",
            "Next.js": "bg-neutral-200 text-neutral-800",
            Python: "bg-blue-200  text-blue-900",
            MongoDB: "bg-emerald-200 text-emerald-800",
            FastAPI: "bg-teal-200 text-teal-800",
            Swift: "bg-orange-200 text-orange-800",
            mySQL: "bg-blue-100  text-blue-900",
            FireStore: "bg-amber-200 text-amber-800",
            Bootstrap: "bg-purple-200 text-purple-800",
            JavaScript: "bg-yellow-200 text-yellow-800",
            "Material for MkDocs": "bg-gray-200 text-gray-800",
            "Team Project": "bg-rose-200 text-rose-800",
            Markdown: "bg-green-100 text-green-800",
            Documentation: "bg-pink-100 text-pink-800",
            C: "bg-indigo-200 text-indigo-900",
            HTML: "bg-red-200 text-red-800",
        },

      /* ==== 1 プロジェクト = 1 キー ==== */
        items: {
            my_body_buddy: {
            title: "My Body Buddy",
            description: "This app was developed as part of a BCIT project course by a team of five members including myself. It is an AI-powered fitness app that supports healthier living by suggesting personalized workout and meal plans tailored to each user. The app focuses on daily condition tracking and goal-based recommendations.",
            tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "MongoDB", "Team Project"],
            images: [
                "/images/my-body-buddy/my_body_buddy_logo.png",
                "/images/my-body-buddy/my-body-buddy-login.png",
            ],
            links: [
                    {
                        label: "▶︎ View Demo",
                        url: "https://www.youtube.com/watch?v=48NVdBRSGUI",
                    },
                ],
            },
            Bliss: {
                title: "Bliss",
                description: "Bliss App is a wellness app that uses biometric data such as heart rate, heart rate variability, and breathing rate to calculate a Bliss Rating. The data is collected from Apple Watch and stored on the iPhone. Based on this data and the user’s music preferences, the app connects with Spotify to recommend songs that support well-being. The project was completed in 3.5 weeks for BioSync Technology Ltd. as part of BCIT’s Project Practicum and received positive feedback from the client.",
                tags: ["Swift", "FastAPI", "Python", "Team Project"],
                images: ["/images/bliss/bliss-login.png","/images/bliss/apple-watch-mindfulness.jpg", "/images/bliss/bliss-app.PNG", "/images/bliss/bliss-backend-team.JPG"],
                links: [
                    {
                        label: "▶︎ View Demo",
                        url: "https://youtu.be/f_xdtA08Ua4",
                    },
                ],
            },

            skyline_zipline: {
                title: "Skyline Zipline",
                description: "This project was conducted as an industry–academia collaboration in BCIT’s Project Practicum course, with Skyline Zipline as our client and a student team leading the development. We created a web application that digitizes the previously paper-based Zipline inspection forms, streamlining on-site data entry and improving overall data management convenience.",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "mySQL", "FireStore", "Team Project"],
                images: [
                    "/images/skyline-zipline/skyline-login.png",
                    "/images/skyline-zipline/skyline-dashboard.png",
                    "/images/skyline-zipline/skyline-table.png",
                ],
            },

            starbucks_drink_finder: {
                title: "Starbuck Drink Finder",
                description: "Starbucks Drink Finder is a web application that recommends the best Starbucks drinks based on user preferences. It analyzes natural language input to predict tags such as 'sweet' or 'low calorie,' and ranks drinks by a calculated health score. This project received a perfect score (100%) in a BCIT course and was praised by the instructor for its clarity and the high quality of the demo video.",
                tags: ["React", "Tailwind CSS", "Python"],
                images: [
                    "/images/starbucks-drink-finder/starbucks-title.png",
                    "/images/starbucks-drink-finder/starbucks-sweet.png",
                    "/images/starbucks-drink-finder/starbucks-cafeine.png",
                ],
                links: [
                    {
                        label: "▶︎ View Demo",
                        url: "https://youtu.be/EZq9Z4FP73k",
                    },
                ],
            },
            neighborhood_connect: {
                title: "Neighborhood Connect",
                description: "Neighborhood Connect is a community networking app that helps residents build stronger relationships within their local area. With features that support event organizing, neighborhood discussions, and everyday assistance, the platform promotes communication, support, and connection. By making neighborhood life more interactive and inclusive, the app fosters a safer, more united community for everyone. \nThis was not only my first group project at BCIT, but also the very first web application I ever built — which makes it especially meaningful to me.",
                tags: ["HTML","JavaScript", "FireStore", "Bootstrap", "Team Project"],
                images: [
                    "/images/neighborhood-connect/neighborhood-connect-hero.png",
                    "/images/neighborhood-connect/neighborhood-connect-dashboard.png",
                ],
                links: [
                    {label: "▶︎ GitHub Repo", url: "https://github.com/TommyJu/neighbourhood_connect"},
                    {label: "▶︎ Visit App", url: "https://comp1800-dtc11.web.app/"},
                ]
            },
            my_bcit_guide: {
                title: "myBCIT Guide",
                description: "This project is a user guide website created with Material for MkDocs to support new BCIT students. Together with a classmate, I documented three essential steps that students need to complete before starting school. The guide is designed to be simple, searchable, and beginner-friendly, helping students feel more prepared and confident before their first day at BCIT.",
                tags: ["Markdown", "Material for MkDocs", "Documentation", "Team Project"],
                images: [
                    "/images/my-bcit-guide/myBCIT-guide-1.png",
                    "/images/my-bcit-guide/myBCIT-guide-2.png",
                    "/images/my-bcit-guide/myBCIT-guide-3.png",
                    "/images/my-bcit-guide/myBCIT-guide-4.png",
                    "/images/my-bcit-guide/myBCIT-guide-5.png",
                    "/images/my-bcit-guide/myBCIT-guide-6.png",
                    "/images/my-bcit-guide/myBCIT-guide-7.png",
                ],
                links: [
                    {label: "▶︎ GitHub Repo", url: "https://github.com/TatsunoriMarumo/myBCIT-Guide"},
                    {label: "▶︎ Visit Guide", url: "https://tatsunorimarumo.github.io/myBCIT-Guide/"},
                ]
            },
            animal_adoption_predictor: {
                title: "Animal Adoption Predictor",
                description: "This project explores predictive modeling to support animal adoption outcomes using real-world data from the Austin Animal Center. After performing exploratory data analysis, several ensemble learning methods (Random Forest, Bagging, Voting, Stacked models) and Logistic Regression were applied to predict whether an animal would be adopted, returned to its owner, or experience other outcomes (e.g., transfer or euthanasia). The Random Forest model achieved the highest accuracy (92.2%) and was selected as the preferred model. Key features such as age, intake type, fixed (spay/neuter) status, and length of stay were found to significantly influence outcomes. This project emphasizes data-driven solutions to improve shelter decision-making.",
                tags: ["Documentation", "Python"],
                images: [
                    "/images/animal-adoption-predictor/animal-adoption-1.png",
                    "/images/animal-adoption-predictor/animal-adoption-2.png",
                    "/images/animal-adoption-predictor/animal-adoption-3.png",
                    "/images/animal-adoption-predictor/animal-adoption-4.png",
                ],
                links: [
                    {"label": "▶︎ GitHub Repo", url: "https://github.com/..." },
                    { "label": "▶︎ View Document", url: "https://docs.google.com/document/d/1Mk4sw6HC7mrhXcQ4xEQwzzvBm6uPE7C6sCBsNA2R-xw/edit?usp=sharing" }
                ]
            },
            morse_code_translator: {
                title: "Morse Code Translator",
                description: "We developed a program in C language that converts user input into Morse code. It includes two output methods: sound and changing the background color of the screen. During our presentation, we performed a short skit in which one teammate pretended to be stranded alone on a boat with no phone but with a laptop, using our Morse code converter to call for help. The creative presentation, along with our detailed code explanation, received high praise from classmates and the instructor, and our team achieved a perfect score.",
                tags: ["C", "Team Project"],
                images: [
                    "/images/morse-code-translator/morse-code-translator-1.png",
                    "/images/morse-code-translator/morse-code-translator-2.png",
                    "/images/morse-code-translator/morse-code-translator-3.png",
                    "/images/morse-code-translator/morse-code-translator-4.png",
                ],
                links: [
                    {"label": "▶︎ GitHub Repo", "url": "https://github.com/Momona-Wada/MorseCodeTranslator"},

                ]
            }
            


        },
    },

    funfacts: {
        heading: "Fun Facts",
        items: {
            volunteer: {
                title: "Volunteer 🧹🫧",
                description: "I volunteer at Cottonwood Park to help keep the area clean. I pick up litter and check for graffiti or any damaged facilities, contributing to a better environment for the community.",
                image: "/images/volunteer/cotton-wood-park.png"
            },
            hair_donation: {
                title: "Hair Donation ✂️💇‍♀️",
                description: "In August 2024, I donated over three years’ worth of grown hair to Wigs for Kids BC, an organization that creates wigs for children experiencing hair loss. I'm currently growing my hair again with the goal of making another donation in the future.",
                image: "/images/hair-donation/hair.png"
            },
            dog: {
                title: "My Dog 🐶🩷",
                description: "I have a Shiba Inu named Punta. He moved to Canada with me and has been by my side ever since. Whether I'm happy or going through a hard time, he's always there for me. On weekends, we go to parks together, and I take him anywhere I can. He has ridden in cars, planes, boats, and trains. He's quite an experienced traveler!🐶",
                image: "/images/my-dog/punta.png"
            },
            cooking: {
                title: "Cooking 🍳👩‍🍳",
                description: "I enjoy cooking and prepare all my meals at home. For Christmas and New Year’s in 2024, I put extra effort into making special dishes to recreate the feeling of being back in Japan. Lately, I’ve also been into baking healthy treats when I have time. My goal this year is to successfully make a birthday cake for my dog. (I actually failed last year...🥲)",
                image: "/images/cooking/food.png"
            },
            workout: {
                title: "Workout 🏋️‍♀️💪",
                description: "I started working out in February 2025. My goal is to build enough strength to do a single pull-up! Going to the gym early in the morning helps me start the day feeling fresh and energized. It feels great💪",
                image: "/images/workout/workout.png"
            }
        }
    }
};

export default commonMessages;
