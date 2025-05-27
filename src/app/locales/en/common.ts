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
            Bootstrap: "bg-rose-100 text-rose-700",
            MongoDB: "bg-emerald-200 text-emerald-800",
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
            my_project2: {
                title: "Random Fun Project",
                description: "Short english description",
                tags: ["React", "Tailwind CSS"],
                images: ["/images/momo_punta.jpeg"],
            },

            my_project3: {
                title: "Data Science Demo",
                description: "Built with Python & Bootstrap",
                tags: ["Python", "Bootstrap"],
                images: [
                    "/images/my_body_buddy_logo.png",
                    "/images/momo_punta.jpeg",
                ],
            },

            my_project4: {
                title: "Another Cool App",
                description: "Yet another project",
                tags: ["JavaScript", "Tailwind CSS"],
                images: [
                    "/images/my_body_buddy_logo.png",
                    "/images/momo_punta.jpeg",
                ],
            },
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
