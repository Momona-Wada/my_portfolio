const commonMessages = {
    hero: {
        name: "和田 桃奈",
        title: "デベロッパー/データアナリスト",
        about_me: "自己紹介",
        description: "ポートフォリオをご覧いただき、ありがとうございます！\n" +
        "私はカナダ在住4年目の新米ITエンジニアです。2025年5月にBCITのComputer Systems Technologyコースを修了し、現在は就職活動中です。\n" +
        "BCITでは Predictive Analytics オプションを選択し、データの分析やモデルの作成、さらにその結果をもとにしたドキュメントの作成を行ってきました。モデルを作成して終わりにするのではなく、結果を分かりやすく整理し、形として残すことが重要だと考えており、その作業を得意としています。\n" +
        "私の強みは、チーム内での円滑なコミュニケーション、時間を守る責任感、そして常に相手の立場を考えて行動できることです。クライアントやチームメンバーの気持ちに寄り添いながら、プロジェクトやタスクを丁寧に進めることができます。\n" +
        "このポートフォリオでは、これまでに携わってきたプロジェクトや、ちょっとした趣味などもご紹介しています。ぜひご覧ください😊",
        technolories_num: "5+",
        technologies_learned: "習得済みの言語数",
        projects_num: "5+",
        projects_label: "携わったプロジェクト数",
        star: "⭐️⭐️⭐️⭐️⭐️",
        team_collaboration: "チームコラボレーション",
        contact_title: "お問い合わせ",
        email: "momona.9410@gmail.com",
        github: "https://github.com/Momona-Wada",
        linkedin: "https://www.linkedin.com/in/momona-wada/"

    },
    projects: {
        heading: "プロジェクト一覧",
        view_demo: "▶︎ デモを見る",
    
        tagColors: {
            TypeScript: "bg-blue-200  text-blue-800",
            "Tailwind CSS": "bg-sky-200  text-sky-800",
            React: "bg-sky-100  text-sky-900",
            "Next.js": "bg-neutral-200 text-neutral-800",
            Python: "bg-blue-200  text-blue-900",
            Bootstrap: "bg-rose-100 text-rose-700",
            MongoDB: "bg-emerald-200 text-emerald-800",
            FastAPI: "bg-teal-200 text-teal-800",
            Swift: "bg-orange-200 text-orange-800",
        },
        items: {
            my_body_buddy: {
                title: "My Body Buddy",
                description: "このアプリは、BCITのプロジェクトコースで5人チーム（私を含む）と共に開発しました。AIを活用して、ユーザー一人ひとりに最適な運動メニューや食事プランを提案する、健康促進のためのフィットネスアプリです。日々のコンディションや目標に応じたパーソナライズ機能が特徴です。",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "MongoDB"],
                images: [
                    "/images/my-body-buddy/my_body_buddy_logo.png",
                    "/images/my-body-buddy/my-body-buddy-login.png",
                ],
                link: "https://www.youtube.com/watch?v=48NVdBRSGUI",
            },
    
            Bliss: {
                title: "Bliss",
                description: "Bliss Appは、心拍数(HR)、心拍変動(HRV)、呼吸数(BR)などの生体情報を解析して「Bliss Rating」を算出し、ユーザーの心身の状態を可視化するアプリです。Spotify APIとも連携しており、ユーザーの音楽の好みとApple Watchから取得したバイオメトリクスデータをもとに、Bliss Ratingを高めるのに適した楽曲を推薦します。このプロジェクトは、BCITのProject Practicumコースにおいて、BioSync Technology Ltd. をクライアントとして実施された産学連携プロジェクトです。わずか3.5週間という短期間の開発でしたが、クライアントから「よくやった」と高い評価をいただきました。",
                tags: ["Swift", "FastAPI", "Python"],
                images: ["/images/bliss/apple-watch-mindfulness.jpg", "/images/bliss/bliss-app.PNG", "/images/bliss/bliss-backend-team.JPG"],
                link: "https://youtu.be/f_xdtA08Ua4",
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
