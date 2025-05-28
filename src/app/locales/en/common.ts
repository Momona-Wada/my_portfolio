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
        email: "momona.9410@gmail.com",
        github: "https://github.com/Momona-Wada",
        linkedin: "https://www.linkedin.com/in/momona-wada/"

    },

    projects: {
        heading: "My Projects",
        view_demo: "▶︎ View Demo",

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
            Markdown: "bg-green-100 text-green-800",
            Documentation: "bg-slate-100 text-slate-800",
        },

      /* ==== 1 プロジェクト = 1 キー ==== */
        items: {
            my_body_buddy: {
            title: "My Body Buddy",
            description: "This app was developed as part of a BCIT project course by a team of five members including myself. It is an AI-powered fitness app that supports healthier living by suggesting personalized workout and meal plans tailored to each user. The app focuses on daily condition tracking and goal-based recommendations.",
            tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "MongoDB"],
            images: [
                "/images/my-body-buddy/my_body_buddy_logo.png",
                "/images/my-body-buddy/my-body-buddy-login.png",
            ],
            link: "https://www.youtube.com/watch?v=48NVdBRSGUI",
            },
            Bliss: {
                title: "Bliss",
                description: "Bliss App is a wellness app that uses biometric data such as heart rate, heart rate variability, and breathing rate to calculate a Bliss Rating. The data is collected from Apple Watch and stored on the iPhone. Based on this data and the user’s music preferences, the app connects with Spotify to recommend songs that support well-being. The project was completed in 3.5 weeks for BioSync Technology Ltd. as part of BCIT’s Project Practicum and received positive feedback from the client.",
                tags: ["Swift", "FastAPI", "Python"],
                images: ["/images/bliss/bliss-login.png","/images/bliss/apple-watch-mindfulness.jpg", "/images/bliss/bliss-app.PNG", "/images/bliss/bliss-backend-team.JPG"],
                link: "https://youtu.be/f_xdtA08Ua4",
            },

            skyline_zipline: {
                title: "Skyline Zipline",
                description: "This project was conducted as an industry–academia collaboration in BCIT’s Project Practicum course, with Skyline Zipline as our client and a student team leading the development. We created a web application that digitizes the previously paper-based Zipline inspection forms, streamlining on-site data entry and improving overall data management convenience.",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "mySQL", "FireStore"],
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
                link: "https://youtu.be/EZq9Z4FP73k",
            },
            neighborhood_connect: {
                title: "Neighborhood Connect",
                description: "Neighborhood Connect is a community networking app that helps residents build stronger relationships within their local area. With features that support event organizing, neighborhood discussions, and everyday assistance, the platform promotes communication, support, and connection. By making neighborhood life more interactive and inclusive, the app fosters a safer, more united community for everyone. \nThis was not only my first group project at BCIT, but also the very first web application I ever built — which makes it especially meaningful to me.",
                tags: ["JavaScript", "FireStore", "Bootstrap"],
                images: [
                    "/images/neighborhood-connect/neighborhood-connect-hero.png",
                    "/images/neighborhood-connect/neighborhood-connect-dashboard.png",
                ]
            },
            my_bcit_guide: {
                title: "myBCIT Guide",
                description: "This project is a user guide website created with Material for MkDocs to support new BCIT students. Together with a classmate, I documented three essential steps that students need to complete before starting school. The guide is designed to be simple, searchable, and beginner-friendly, helping students feel more prepared and confident before their first day at BCIT.",
                tags: ["Markdown", "Material for MkDocs", "Documentation"],
                images: [
                    "/images/my-bcit-guide/myBCIT-guide-1.png",
                    "/images/my-bcit-guide/myBCIT-guide-2.png",
                    "/images/my-bcit-guide/myBCIT-guide-3.png",
                    "/images/my-bcit-guide/myBCIT-guide-4.png",
                    "/images/my-bcit-guide/myBCIT-guide-5.png",
                    "/images/my-bcit-guide/myBCIT-guide-6.png",
                    "/images/my-bcit-guide/myBCIT-guide-7.png",
                ],
                link: "https://tatsunorimarumo.github.io/myBCIT-Guide/",
                customLinkLabel: "▶︎ Visit Guide"
            }
            


        },
    },

    funfacts: {
        heading: "Fun Facts",
        items: {
            volunteer: {
                title: "Volunteer",
                description: "Cleaning Park Volunteer at Cottonwood Park",
                image: "/images/momo_punta.jpeg"
            },
            hair_donation: {
                title: "Hair Donation",
                description: "Donated my loooong hair to an association",
                image: "/images/momo_punta.jpeg"
            },
            dog: {
                title: "My Dog🩷",
                description: "My lovely dog named Punta🐶",
                image: "/images/momo_punta.jpeg"
            },
            cooking: {
                title: "Cooking",
                description: "I like cooking!",
                image: "/images/momo_punta.jpeg"
            }
        }
    }
};

export default commonMessages;
