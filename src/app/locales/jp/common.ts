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
                description: "このアプリは、BCITのプロジェクトコースで5人チーム(私を含む)と共に開発しました。AIを活用して、ユーザー一人ひとりに最適な運動メニューや食事プランを提案する、健康促進のためのフィットネスアプリです。日々のコンディションや目標に応じたパーソナライズ機能が特徴です。",
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
                description: "Bliss Appは、心拍数(HR)、心拍変動(HRV)、呼吸数(BR)などの生体情報を解析して「Bliss Rating」を算出し、ユーザーの心身の状態を可視化するアプリです。Spotify APIとも連携しており、ユーザーの音楽の好みとApple Watchから取得したバイオメトリクスデータをもとに、Bliss Ratingを高めるのに適した楽曲を推薦します。このプロジェクトは、BCITのProject Practicumコースにおいて、BioSync Technology Ltd. をクライアントとして実施された産学連携プロジェクトです。わずか3.5週間という短期間の開発でしたが、クライアントから「よくやった」と高い評価をいただきました。",
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
                description: "このプロジェクトは、BCITのProject Practicumコースにおける産学連携プロジェクトで、Skyline Ziplineをクライアントに迎えて学生チームが開発を行いました。紙ベースで運用されていたZiplineの点検フォームをWebアプリにデジタル化し、現場での入力作業の効率化とデータ管理の利便性向上を実現しました。",
                tags: ["TypeScript", "Tailwind CSS", "React", "Next.js", "mySQL", "FireStore", "Team Project"],
                images: [
                    "/images/skyline-zipline/skyline-login.png",
                    "/images/skyline-zipline/skyline-dashboard.png",
                    "/images/skyline-zipline/skyline-table.png",
                ],
            },
    
            starbucks_drink_finder: {
                title: "Starbucks Drink Finder",
                description: "Starbucks Drink Finderは、ユーザーの好みに応じて最適なスターバックスドリンクを提案するWebアプリです。自然言語で入力されたテキストからタグ(例:'甘い'、'低カロリー' など)を予測し、健康スコアに基づいておすすめの飲み物を表示します。このプロジェクトはBCITの授業で100%の評価を受け、特にデモビデオの分かりやすさと完成度の高さを講師から高く評価されました。",
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
                description: "Neighborhood Connectは、地域のつながりを深めるためのコミュニティネットワークアプリです。イベントの企画や地域の掲示板、日常の助け合いなどを通じて、住民同士の交流を促進します。このアプリは、誰もが安心して参加できる、助け合いとつながりのある地域社会づくりをサポートします。\nこれはBCITでの初めてのグループプロジェクトであり、私が初めて作成したWebアプリケーションでもあるため、とても思い入れのある作品です。",
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
                description: "このプロジェクトは、BCITに入学が決まった新入生のために作成したガイドサイトです。クラスメイトと協力して、学校が始まるまでに済ませておくべき重要な手続きの中から3つを選び、Material for MkDocsで丁寧にドキュメント化しました。初めてのBCIT生活に不安を感じる学生でも、必要な情報にすぐにアクセスできるよう、わかりやすく検索しやすい構成になっています。",
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
                description: "このプロジェクトでは、オースティン動物保護センターの実データを用いて、動物の譲渡結果を予測するモデルを構築しました。探索的データ分析の後、Random Forest・バギング・スタッキング・Votingなどのアンサンブル学習手法やロジスティック回帰を使用し、「譲渡された」「飼い主に返還された」「その他(移送・安楽死など)」の結果を分類しました。最終的に、92.2%の精度を出したRandom Forestモデルが最も有効であると判断されました。年齢・収容理由・避妊/去勢の有無・滞在日数といった特徴量が結果に大きく影響することがわかり、シェルターの意思決定に役立つデータ駆動型のアプローチを示しています。",
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
                description: "C言語を用いて、ユーザーからの入力をモールス信号に変換するプログラムを開発しました。出力方法は「音声」と「画面の背景色の切り替え」の2種類があります。プレゼンテーションでは、チームメイトが「携帯電話のない状況で船に一人取り残されている」という設定の寸劇を行い、モールス信号変換プログラムを使って助けを呼ぶ様子を再現しました。この創意工夫のある発表と詳細なコード解説は、クラスメイトやインストラクターから高く評価され、チームとして100％のスコアを獲得しました。",
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
                description: "コットンウッドパークで清掃ボランティアとして活動しています。落ちているゴミを拾ったり、落書きや設備の破損がないかを点検するなど、地域の環境美化に取り組んでいます。",
                image: "/images/volunteer/cotton-wood-park.png"
            },
            hair_donation: {
                title: "ヘアドネーション ✂️💇‍♀️",
                description: "2024年8月、3年以上大切に伸ばしてきた髪の毛をバッサリと切り、髪に悩む子どもたちのためにウィッグを製作している団体「Wigs for Kids BC」に寄付しました。現在は、再び寄付できるように髪を伸ばしています。",
                image: "/images/hair-donation/hair.png"
            },
            dog: {
                title: "愛犬: ぷん太 🐶🩷",
                description: "柴犬の「ぷん太」と一緒に暮らしています。私はカナダへの移住の際も、ぷん太と一緒に渡航しました。嬉しいときも悲しいときも、どんなときでもそばにいてくれる、大切な存在です。休日には公園へ出かけたり、可能な限り一緒にお出かけして思い出を作っています。車・飛行機・船・電車など、さまざまな乗り物も経験している、旅慣れたワンコです🐶",
                image: "/images/my-dog/punta.png"
            },
            cooking: {
                title: "料理 🍳👩‍🍳",
                description: "料理が好きで、毎日自炊しています。2024年のクリスマスやお正月には、少しでも日本にいたときの気分を味わえるように、手の込んだ料理を作って頑張りました。最近はお菓子作りにもハマっていて、時間があるときにはヘルシーなおやつをせっせと作っています。今年の目標は、愛犬の誕生日ケーキを手作りして成功させることです!(ちなみに去年は失敗しました🥲)",
                image: "/images/cooking/food.png"
            },
            workout: {
                title: "筋トレ 🏋️‍♀️💪",
                description: "2025年2月から筋トレを始めました。目標は、懸垂が1回できるくらいの筋力をつけることです! 朝早く起きてジムで体を動かすと、1日をすごく爽やかな気持ちでスタートできて、とても気持ちがいいです💪",
                image: "/images/workout/workout.png"
            }
        }
    }
};

export default commonMessages;
