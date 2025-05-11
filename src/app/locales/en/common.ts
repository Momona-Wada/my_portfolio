const commonMessages = {
    hero: {
        name: "Momona Wada",
        description: "Welcome to my portfolio!",
    },

    projects: {
      heading: "My Projects",          // セクション見出し

      // バッジごとの色を統一したい場合はここで定義
        tagColors: {
            "TypeScript": "bg-rose-200 text-rose-700",
            "Tailwind CSS": "bg-rose-100 text-rose-700",
            React: "bg-rose-200 text-rose-700",
            "Next.js": "bg-rose-200 text-rose-700",
            Python: "bg-rose-300 text-rose-800",
            Bootstrap: "bg-rose-100 text-rose-700",
        },

      /* ==== 1 プロジェクト = 1 キー ==== */
        items: {
            my_body_buddy: {
            title: "My Body Buddy",
            description: "AI‑powered fitness app",
            tags: ["TypeScript", "Tailwind CSS", "React", "Next.js"],
            images: [
                "/images/my_body_buddy_logo.png",
                "/images/momo_punta.jpeg",
            ],
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
