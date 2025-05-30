const commonMessages = {
    hero: {
        name: "Momona Wada",
        title: "Developer/Data Analysist",
        about_me: "About Me",
        description:
        "Thank you for visiting my portfolio!\n" +
        "I'm a junior IT engineer currently living in Canada for the fourth year. I completed the Computer Systems Technology program at BCIT in May 2025 and am currently seeking job opportunities.\n" +
        "At BCIT, I chose the Predictive Analytics option, where I worked on data analysis, model building, and creating documentation based on the results. I believe that building a model is not the end goal; it is equally important to clearly organize and document the outcomes.\n" +
        "My strengths include smooth communication within teams, strong time management skills, and the ability to consider others' perspectives when working. I always strive to handle tasks and projects with care while being considerate of both clients and team members.\n" +
        "Outside of tech, I enjoy working out, cooking, and spending time with my dog Punta, who moved to Canada with me. I'm passionate about creating tools that are not only functional but also make users feel supported and understood. I hope you enjoy exploring my work!",
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
            description: "AI-powered fitness app developed by a team of five at BCIT. The app recommends personalized workouts and meal plans based on daily condition and user goals. We focused on usability and wellness tracking. This project highlighted my ability to collaborate and deliver on health-focused solutions.",
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
                description: "Wellness app built using Apple Watch biometric data and Spotify API. It calculates a Bliss Rating and recommends songs based on the user’s physical and emotional state. Developed for BioSync Technology Ltd. in 3.5 weeks during BCIT’s practicum. The client praised our clear documentation and smooth user experience.",
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
                description: "Digitized paper-based inspection forms for Skyline Zipline through a web app. Developed as a team project in BCIT’s practicum course. Improved on-site workflow and made data management more efficient. I focused on form design, database structure, and frontend responsiveness.",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "mySQL", "FireStore", "Team Project"],
                images: [
                    "/images/skyline-zipline/skyline-login.png",
                    "/images/skyline-zipline/skyline-dashboard.png",
                    "/images/skyline-zipline/skyline-table.png",
                ],
            },

            starbucks_drink_finder: {
                title: "Starbuck Drink Finder",
                description: "A web app that recommends Starbucks drinks based on natural language input. Uses a tag prediction model and health scoring to sort options. Received a perfect score in a BCIT course and high praise for its clarity and presentation. Built with React and Python for smooth UX.",
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
                description: "A community networking app that helps neighbors stay connected and organized. Supports event planning, communication, and shared support. This was my first group project and first ever web app, which makes it very special to me. Our team collaborated on all aspects of the project, from planning to development.",
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
                description: "A user guide website created with Material for MkDocs to help incoming BCIT students. Covered three key tasks to complete before school starts. Designed to be searchable and beginner-friendly. Collaborated with a classmate to write and organize the content clearly.",
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
                description: "Built machine learning models using Austin Animal Center data to predict adoption outcomes. Used ensemble methods and logistic regression; Random Forest achieved 92.2% accuracy. Key features included age, intake type, and spay/neuter status. The project focused on data-driven decision-making for shelters.",
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
                description: "Developed a C program that converts input to Morse code with sound and visual output. Included a fun skit for presentation where a stranded teammate used the tool to call for help. The creative delivery and solid code earned a perfect score. It showcased our teamwork and storytelling.",
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
                description: "I volunteer at Cottonwood Park to help maintain a clean and safe environment. I pick up litter, check for graffiti or damage, and report any issues. Seeing children playing happily in the park while I work gives me a sense of purpose. I believe even small efforts can make a meaningful impact on the community.",
                image: "/images/volunteer/cotton-wood-park.png"
            },
            hair_donation: {
                title: "Hair Donation ✂️💇‍♀️",
                description: "In August 2024, I donated over three years’ worth of grown hair to Wigs for Kids BC, which provides wigs for children facing hair loss. It felt meaningful to support someone’s confidence and self-expression through this small act. I'm now growing my hair again for another future donation. Giving back in this way has become one of my personal missions.",
                image: "/images/hair-donation/hair.png"
            },
            dog: {
                title: "My Dog 🐶🩷",
                description: "My Shiba Inu, Punta, has been with me through many life changes, including the move to Canada. He is a loyal companion and plays an important role in my everyday life. On weekends, we enjoy visiting parks, going on road trips, and spending time outdoors together. He has traveled by car, plane, boat, and train, making him a truly adventurous pup.",
                image: "/images/my-dog/punta.png"
            },
            cooking: {
                title: "Cooking 🍳👩‍🍳",
                description: "I cook all my meals at home and enjoy recreating traditional Japanese dishes, especially during holidays like Christmas and New Year’s. Lately, I’ve also been trying out healthy baking, using ingredients like oats and bananas. Cooking helps me relax and connect with my roots. This year, my goal is to successfully bake a birthday cake for my dog!",
                image: "/images/cooking/food.png"
            },
            workout: {
                title: "Workout 🏋️‍♀️💪",
                description: "I started working out in February 2025, and it’s become part of my morning routine. Hitting the gym helps me start the day feeling refreshed and focused. My current goal is to be able to do a full pull-up. I’m enjoying the challenge and proud of the small progress I make each week.",
                image: "/images/workout/workout.png"
            }
        }
    }
};

export default commonMessages;
