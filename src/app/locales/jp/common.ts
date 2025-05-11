const commonMessages = {
    hero: {
        name: "和田 桃奈",
        description: "私のポートフォリオへようこそ！",
    },
    projects: {
        heading: "プロジェクト一覧",
    
        tagColors: {
            TypeScript: "bg-rose-200 text-rose-700",
            "Tailwind CSS": "bg-rose-100 text-rose-700",
            React: "bg-rose-200 text-rose-700",
            "Next.js": "bg-rose-200 text-rose-700",
            Python: "bg-rose-300 text-rose-800",
            Bootstrap: "bg-rose-100 text-rose-700",
        },
        items: {
            my_body_buddy: {
                title: "My Body Buddy",
                description: "AI を活用したフィットネスアプリ",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js"],
                images: [
                    "/images/my_body_buddy_logo.png",
                    "/images/momo_punta.jpeg",
                ],
            },
    
            my_project2: {
                title: "お楽しみプロジェクト",
                description: "日本語での説明文",
                tags: ["React", "Tailwind CSS"],
                images: ["/images/momo_punta.jpeg"],
            },
    
            my_project3: {
                title: "データサイエンスデモ",
                description: "Python と Bootstrap で構築",
                tags: ["Python", "Bootstrap"],
                images: [
                    "/images/my_body_buddy_logo.png",
                    "/images/momo_punta.jpeg",
                ],
            },
    
            my_project4: {
                title: "クールなアプリ",
                description: "別のサンプルプロジェクト",
                tags: ["JavaScript", "Tailwind CSS"],
                images: [
                    "/images/my_body_buddy_logo.png",
                    "/images/momo_punta.jpeg",
                ],
            },
        },
    },

    funfacts: {
        heading: "私のプチ情報",
            items: {
            volunteer: {
                title: "ボランティア",
                description: "コットンウッドパークでの清掃ボランティア",
                image: "/images/momo_punta.jpeg"
            },
            hair_donation: {
                title: "ヘアドネーション",
                description: "とても長い髪を団体に寄付しました",
                image: "/images/momo_punta.jpeg"
            },
            dog: {
                title: "愛犬: ぷん太🩷",
                description: "かわいい愛犬ぷん太🐶です",
                image: "/images/momo_punta.jpeg"
            },
            cooking: {
                title: "料理",
                description: "料理をするのが好きです！",
                image: "/images/momo_punta.jpeg"
            }
        }
    }
};

export default commonMessages;
