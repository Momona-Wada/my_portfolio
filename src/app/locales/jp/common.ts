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
        projects_num: "10+",
        projects_label: "携わったプロジェクト数",
        star: "⭐️⭐️⭐️⭐️⭐️",
        team_collaboration: "チームコラボレーション",
        contact_title: "お気軽にご連絡ください",
        contact_description: "一緒に取り組めることがありましたら、ぜひご連絡ください。ご相談やご質問も歓迎です。",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "Youtubeチャンネルへ"
    },
    projects: {
        heading: "プロジェクト一覧",    
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
        items: {
            my_body_buddy: {
                title: "My Body Buddy",
                description: "AIを活用したフィットネスアプリで、BCITの5人チームで開発しました。ユーザーの体調や目標に応じて、個別の運動や食事プランを提案します。使いやすさや健康管理のしやすさに重点を置いて設計しました。チームで協力しながら、健康促進に役立つソリューションを形にしました。",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "MongoDB", "Team Project"],
                images: [
                    "/images/my-body-buddy/my_body_buddy_logo.png",
                    "/images/my-body-buddy/my-body-buddy-login.png",
                ],
                links: [
                    {
                        label: "▶︎ デモを見る",
                        url: "https://www.youtube.com/watch?v=48NVdBRSGUI",
                    },
                ],
            },
    
            Bliss: {
                title: "Bliss",
                description: "Apple Watchの生体データとSpotify APIを活用したウェルネスアプリです。ユーザーの心身の状態に合わせて「Bliss Rating」を算出し、適した楽曲を提案します。BCITの産学連携プロジェクトとして3.5週間で開発し、クライアントから高評価をいただきました。データ活用とユーザー体験を重視した設計です。",
                tags: ["Swift", "FastAPI", "Python", "Team Project"],
                images: ["/images/bliss/bliss-login.png","/images/bliss/apple-watch-mindfulness.jpg", "/images/bliss/bliss-app.PNG", "/images/bliss/bliss-backend-team.JPG"],
                links: [
                    {
                        label: "▶︎ デモを見る",
                        url: "https://youtu.be/f_xdtA08Ua4",
                    },
                ],
            },
    
            skyline_zipline: {
                title: "Skyline Zipline",
                description: "Skyline Zipline向けに、点検用紙をデジタル化するWebアプリを開発しました。BCITのProject Practicumとしてチームで取り組み、現場作業の効率化とデータ管理の利便性向上を実現しました。フォーム設計やデータベース構築に関わり、操作性と安定性を重視しました。実用性の高い業務改善アプリとなりました。",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "mySQL", "FireStore", "Team Project"],
                images: [
                    "/images/skyline-zipline/skyline-login.png",
                    "/images/skyline-zipline/skyline-dashboard.png",
                    "/images/skyline-zipline/skyline-table.png",
                ],
            },
    
            starbucks_drink_finder: {
                title: "Starbucks Drink Finder",
                description: "自然言語での入力からユーザーの好みを読み取り、スターバックスのおすすめドリンクを提案するWebアプリです。タグ予測モデルと健康スコアに基づいて飲み物をランキングします。BCITの授業で100%のスコアを獲得し、デモの完成度と分かりやすさを講師から高く評価されました。ReactとPythonで構築しました。",
                tags: ["React", "Tailwind CSS", "Python"],
                images: [
                    "/images/starbucks-drink-finder/starbucks-title.png",
                    "/images/starbucks-drink-finder/starbucks-sweet.png",
                    "/images/starbucks-drink-finder/starbucks-cafeine.png",
                ],
                links: [
                    {
                        label: "▶︎ デモを見る",
                        url: "https://youtu.be/EZq9Z4FP73k",
                    },
                ],
            },

            neighborhood_connect: {
                title: "Neighborhood Connect",
                description: "ご近所同士のつながりを深めるためのコミュニティアプリです。イベント企画、チャット機能、助け合い機能などを搭載しています。これは私が初めて取り組んだグループ開発かつWebアプリで、思い入れのある作品です。全員で企画から開発まで協力して取り組みました。",
                tags: ["HTML","JavaScript", "FireStore", "Bootstrap", "Team Project"],
                images: [
                    "/images/neighborhood-connect/neighborhood-connect-hero.png",
                    "/images/neighborhood-connect/neighborhood-connect-dashboard.png",
                ],
                links: [
                    {label: "▶︎ GitHub Repo", url: "https://github.com/TommyJu/neighbourhood_connect"},
                    {label: "▶︎ アプリを見る", url: "https://comp1800-dtc11.web.app/"},
                ]
            },
            my_bcit_guide: {
                title: "myBCIT ガイド",
                description: "新入生向けに、入学前に行うべき3つの手続きをガイド化したWebサイトです。Material for MkDocsを用い、検索しやすく初心者に優しい構成に仕上げました。クラスメイトと協力し、内容の構成と執筆を担当しました。BCITでの初日を安心して迎えられるようサポートすることを目的としています。",
                tags: ["Markdown", "Material for MkDocs", "Documentation", "Team Project"],
                images: [
                    "/images/my-bcit-guide/myBCIT-guide-8.png",
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
                    {label: "▶︎ ガイドを見る", url: "https://tatsunorimarumo.github.io/myBCIT-Guide/"},
                ]
            },
            animal_adoption_predictor: {
                title: "動物譲渡予測モデル",
                description: "実際のシェルターデータを用いて、動物の譲渡結果を予測するモデルを構築しました。Random Forestやロジスティック回帰などの手法を用い、92.2%の高い精度を達成しました。年齢・収容理由・避妊/去勢の有無などが重要な要因として特定されました。データに基づいた意思決定を支援するプロジェクトです。",
                tags: ["Documentation", "Python"],
                images: [
                    "/images/animal-adoption-predictor/animal-adoption-1.png",
                    "/images/animal-adoption-predictor/animal-adoption-2.png",
                    "/images/animal-adoption-predictor/animal-adoption-3.png",
                    "/images/animal-adoption-predictor/animal-adoption-4.png",
                ],
                links: [
                    {"label": "▶︎ GitHub Repo", url: "https://github.com/..." },
                    { "label": "▶︎ ドキュメントを見る", url: "https://docs.google.com/document/d/1Mk4sw6HC7mrhXcQ4xEQwzzvBm6uPE7C6sCBsNA2R-xw/edit?usp=sharing" }
                ]
            },
            morse_code_translator: {
                title: "モールス信号変換プログラム",
                description: "C言語を用いて、ユーザーからの入力をモールス信号に変換するプログラムを開発しました。出力方法は「音声」と「画面の背景色の切り替え」の2種類があります。プレゼンテーションでは、チームメイトが「携帯電話のない状況で船に一人取り残されている」という設定の寸劇を行い、モールス信号変換プログラムを使って助けを呼ぶ様子を再現しました。この創意工夫のある発は、クラスメイトやインストラクターから高く評価されました。",
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
        heading: "私のプチ情報",
            items: {
            volunteer: {
                title: "ボランティア 🧹🫧",
                description: "コットンウッドパークで清掃ボランティアに参加しています。ゴミ拾いや落書きのチェック、壊れた設備の報告などを行い、地域の環境を守る活動に貢献しています。公園で元気に遊ぶ子どもたちの姿を見ながら作業するのは、とても気持ちが良いです。こうした小さな活動が、地域の快適さにつながると信じています。",
                image: "/images/volunteer/cotton-wood-park.png"
            },
            hair_donation: {
                title: "ヘアドネーション ✂️💇‍♀️",
                description: "2024年8月に、3年以上伸ばした髪の毛を「Wigs for Kids BC」に寄付しました。この団体は、脱毛に悩む子どもたちにウィッグを届ける活動をしています。今回の寄付を通じて、誰かの自信や笑顔に少しでも役立てたら嬉しいです。現在は2回目の寄付に向けて、再び髪を伸ばしています。",
                image: "/images/hair-donation/hair.png"
            },
            dog: {
                title: "愛犬: ぷん太 🐶🩷",
                description: "柴犬の「ぷん太」は、私の大切なパートナーです。カナダに来るときも一緒に引っ越し、今では私の生活に欠かせない存在です。週末は一緒に公園を散歩したり、ドライブや旅行にもよく出かけます。車・飛行機・船・電車などあらゆる乗り物に乗ったことがある、旅慣れたワンコです。",
                image: "/images/my-dog/punta.png"
            },
            cooking: {
                title: "料理 🍳👩‍🍳",
                description: "毎日の食事は基本的にすべて自炊しています。日本の行事や季節感を感じられる料理を作るのが好きで、クリスマスやお正月も特別なメニューで過ごしました。最近は、オートミールやバナナなどを使ったヘルシーなお菓子作りにも挑戦中です。今年の目標は、愛犬の誕生日ケーキをうまく焼くことです！",
                image: "/images/cooking/food.png"
            },
            workout: {
                title: "筋トレ 🏋️‍♀️💪",
                description: "2025年2月から筋トレを始めました。朝のジム通いは、心も体もすっきりさせて1日を元気にスタートするための大切なルーティンです。目標は「懸垂が1回できること」! 毎週少しずつ成長を感じながら、自分のペースで続けています。",
                image: "/images/workout/workout.png"
            }
        }
    }
};

export default commonMessages;
