# FRIENDS サンプルドキュメント

> ダミーコンテンツ。Markdown/Mermaidの表現力検証用。

---

## Markdown記法サンプル

### キャラクター紹介

| 名前 | 演者 | 職業 | 口癖・特徴 |
|---|---|---|---|
| Ross Geller | David Schwimmer | 古生物学者 | "We were on a break!" |
| Rachel Green | Jennifer Aniston | ファッション業界 | 花嫁衣装のまま登場 |
| Monica Geller | Courteney Cox | シェフ | 潔癖症・競争心が強い |
| Chandler Bing | Matthew Perry | データ処理関連(職種不明ネタ) | 皮肉なジョーク |
| Joey Tribbiani | Matt LeBlanc | 俳優志望 | "How you doin?" |
| Phoebe Buffay | Lisa Kudrow | ミュージシャン | "Smelly Cat" |

### シーズン概要表

| シーズン | 話数 | 主な出来事 | IMDb評価(ダミー) |
|---|---|---|---|
| S1 | 24 | Rachelが仲間入り | 8.3 |
| S2 | 24 | Ross & Rachel交際開始 | 8.2 |
| S3 | 25 | "We were on a break!" | 8.2 |
| S5 | 24 | ラスベガス結婚 | 8.5 |
| S7 | 24 | Monica & Chandler結婚式 | 8.5 |
| S10 | 18 | 最終回 | 9.1 |

### 神回ベスト5

1. **S2E14** "The One with the Prom Video"
2. **S3E15/16** "The One with the Ultimate Fighting Champion"
3. **S4E24** "The One with Ross's Wedding"
4. **S5E24** "The One in Vegas"
5. **S10E17/18** "The Last One"

### セントラルパークの常連(入れ子リスト)

- Main 6
  - Ross
  - Rachel
  - Monica
  - Chandler
  - Joey
  - Phoebe
- 準レギュラー
  - Gunther(店長)
  - Janice(Chandlerの元カノ)

### 初心者向け履修チェックリスト

- [x] S1E1 パイロット回を見る
- [x] "We were on a break!" 事件を確認する
- [ ] Monica & Chandlerの結婚式回を見る
- [ ] 最終回まで完走する
- [ ] "Smelly Cat" のフルバージョンを聴く

### 引用・強調表現

> "We were on a break!"
> — Ross Geller
>
> > "You were on a break?? That's not the same thing!"
> > — Rachel Green

**太字**の例: **Ross & Rachel**は本編通しての軸となるカップル。
*斜体*の例: シーズン5のサブタイトルは大抵 *"The One..."* で始まる。
***太字+斜体***の例: ***"We were on a break!"*** は史上最も引用される台詞の一つ。

~~Ross & Rachelは最終的に別れたまま~~ → 実際は最終回で復縁する[^1]。
~~Chandlerの職業は明かされる~~ → 最後まで謎のまま[^2]。

`==ハイライト==`記法の例: ==サンクスギビング回==は歴代シリーズでも屈指の人気エピソード群。

上付き・下付き文字の例: H~2~O のように H2O を表現、あるいは 2^10^ のような指数表現。

### リンク集

- [キャラクター紹介](#キャラクター紹介) へ戻る
- [神回ベスト5](#神回ベスト5) を見る
- [Mermaid図表サンプル](#mermaid図表サンプル) へジャンプ
- 参照リンクの例: [FRIENDS 全体マインドマップ][mindmap-ref]

[mindmap-ref]: #friends-全体マインドマップ

### コードブロック例

```javascript
const catchphrases = [
  "We were on a break!",
  "How you doin?",
  "PIVOT!",
  "Oh. My. God.",
];

function pickCatchphrase() {
  return catchphrases[Math.floor(Math.random() * catchphrases.length)];
}
```

```json
{
  "title": "The Last One",
  "season": 10,
  "episode": [17, 18],
  "isFinale": true
}
```

インラインコード例: `sofa.orange`(セントラルパークの座席指定、もちろん冗談)。差分風の表現例: `- single` → `+ married`。

### 脚注

Chandlerの職業は劇中でほぼ明かされない[^2]。

[^1]: 最終回 "The Last One" にて。
[^2]: 一応 "transponster" というジョークセリフが有名。

---

## Mermaid図表サンプル

### 発散・分析系

#### FRIENDS 全体マインドマップ

```mermaid
mindmap
  root((FRIENDS))
    キャラクター
      Ross Geller
        古生物学者
        3回離婚
        口癖「We were on a break!」
      Rachel Green
        元お嬢様
        ファッション業界で成長
        Rossの運命の人
      Monica Geller
        潔癖症シェフ
        競争心が強い
        Chandlerと結婚
      Chandler Bing
        皮肉屋
        職業がずっと謎
        ジョークで空気を和ませる
      Joey Tribbiani
        俳優志望
        サンドイッチ愛好家
        口癖「How you doin?」
      Phoebe Buffay
        フリーな音楽家
        「Smelly Cat」
        双子の姉と複雑な関係
    お決まりのネタ
      セントラルパーク
        オレンジのソファ
        いつも同じ席
        Gunther（店長）の片想い
      決め台詞
        PIVOT!!!
        We were on a break!
        How you doin?
        Oh. My. God.
      恋愛模様
        Ross & Rachel
        Monica & Chandler
        Joeyと誰か
        Phoebeの奇妙な出会い
    伝説の回
      サンクスギビング回
        七面鳥を焦がす
        靴の中に頭を入れる伝統ネタ
        元カノ・元カレの乱入
        謎の持ち寄り料理
      結婚式回
        Monica & Chandlerの結婚式
        Emily & Rossの誓いの言葉事件
      ロンドン回
        飛行機で告白ラッシュ
      引っ越し回（PIVOT）
        ソファが階段を曲がらない
    恋愛関係
      Ross & Rachel
      Monica & Chandler
      Joey & Rachel（一時）
      Ross & Emily
    名エピソード
      The Pilot
      The Prom Video
      The One in Vegas
      The Last One
    舞台となる場所
      Central Perk
      Monicaの部屋
      Joey&Chandlerの部屋
      ラスベガス
    名言集
      We were on a break!
      How you doin?
      PIVOT!
      Oh. My. God.
    ゲスト出演者
      Bruce Willis
      Brad Pitt
      Reese Witherspoon
      Susan Sarandon
    音楽・テーマ
      I'll Be There for You
      Smelly Cat
      オープニングの噴水
    ファッション
      Rachelカット
      90年代スタイル
      Monicaのエプロン
    職業ネタ
      Rossの古生物学
      Chandlerの謎職業
      Joeyの俳優業
      Monicaのシェフ業
    スピンオフ・後日談
      Joeyスピンオフドラマ
      The Reunion特番
      Friendsgiving文化への影響
```

#### シリーズの歩み(timeline)

```mermaid
timeline
    title FRIENDS 全10シーズンの主な出来事(ダミー)
    Season 1 : Rachelが花嫁衣装のままセントラルパークに登場
    Season 2 : Ross & Rachel 初交際
    Season 3 : "We were on a break!" 事件
    Season 4 : Rossが誓いの言葉でRachelの名前を呼び破局
    Season 5 : ラスベガスの勢いでRoss & Rachelが結婚
    Season 6 : Monica & Chandler 同棲・婚約
    Season 7 : Monica & Chandler の結婚式
    Season 8 : Rachel妊娠、Emma誕生
    Season 9 : Ross & Rachel 復縁の兆し
    Season 10 : 最終回、全員が新章へ
```

#### Ross & Rachel関係史(gitGraph)

```mermaid
gitGraph
   commit id: "出会う(高校時代)"
   commit id: "友達関係"
   branch dating
   checkout dating
   commit id: "交際開始(S2)"
   commit id: "on a break事件(S3)"
   checkout main
   commit id: "疎遠"
   merge dating id: "ラスベガスで結婚(S5)"
   commit id: "離婚(S5)"
   branch reunion
   checkout reunion
   commit id: "Emma誕生(S8)"
   commit id: "復縁の兆し(S9)"
   checkout main
   merge reunion id: "最終回: 空港で復縁"
```

#### キャラクター傾向マップ(quadrantChart)

```mermaid
quadrantChart
    title キャラクター傾向マップ(ダミー)
    x-axis 現実的 --> 空想的
    y-axis 慎重 --> 衝動的
    quadrant-1 情熱型
    quadrant-2 天然型
    quadrant-3 堅実型
    quadrant-4 皮肉屋型
    Ross: [0.3, 0.4]
    Rachel: [0.55, 0.6]
    Monica: [0.25, 0.35]
    Chandler: [0.4, 0.3]
    Joey: [0.7, 0.75]
    Phoebe: [0.85, 0.8]
```

#### 好きなキャラクター投票(pie)

```mermaid
pie title 好きなキャラクターは誰?(ダミー投票)
    "Chandler" : 28
    "Phoebe" : 24
    "Ross" : 18
    "Monica" : 16
    "Joey" : 9
    "Rachel" : 5
```

#### サンクスギビング当日のモニカ(journey)

```mermaid
journey
    title サンクスギビング当日のモニカ(ダミー、満足度1-5)
    section 準備
      七面鳥を焼く: 3: Monica
      弟の悪ふざけに対応: 2: Monica, Ross
    section 来客
      Chandlerの元カノ登場: 1: Monica, Chandler
      Phoebeが謎の料理を持参: 3: Phoebe
    section 夕食
      全員で乾杯: 5: Monica, Ross, Rachel, Chandler, Joey, Phoebe
```

#### キャラクター能力レーダー(radar)

```mermaid
radar-beta
  title キャラクター傾向レーダー(ダミー)
  axis naive["天然さ"], sarcasm["皮肉度"], drama["ドラマ度"], funny["面白さ"], loyalty["忠誠心"]
  curve ross["Ross"]{3,2,5,3,4}
  curve chandler["Chandler"]{2,5,2,5,4}
  curve phoebe["Phoebe"]{5,3,3,4,3}
```

#### 新エピソード制作ボード(kanban)

```mermaid
kanban
  todo[企画中]
    idea1[新婚旅行エピソード]
    idea2[Gunther視点回]
  inprogress[脚本執筆中]
    script1[サンクスギビング特番]
    script2[ロンドン遠征回]
  review[レビュー中]
    rev1[結婚式回の脚本チェック]
  blocked[保留]
    hold1[権利関係で保留中のネタ]
  backlog[バックログ]
    back1[スピンオフ企画案]
  done[撮影完了]
    ep1[パイロット版]
    ep2[結婚式回]
```

#### シーズン構成比(treemap)

```mermaid
treemap-beta
"シーズン前半(1-5)"
    "S1": 24
    "S2": 24
    "S3": 25
    "S4": 24
    "S5": 24
"シーズン後半(6-10)"
    "S6": 25
    "S7": 24
    "S8": 24
    "S9": 24
    "S10": 18
```

#### ジャンル要素の重なり(venn)

```mermaid
venn-beta
  title FRIENDSを構成する要素
  set Comedy
  set Romance
  set Drama
  union Comedy,Romance["ラブコメ回"]
  union Romance,Drama["切ない回"]
  union Comedy,Drama["ドタバタ悲喜劇"]
  union Comedy,Romance,Drama["神回"]
```

#### Ross&Rachelが すれ違う原因分析(ishikawa)

```mermaid
ishikawa-beta
Ross&Rachelが すれ違う
    コミュニケーション
        電話で伝言が届かない
        誤解を解かずに拗ねる
    タイミング
        告白のタイミングを逃す
        on a break の解釈違い
    周囲の人間関係
        元恋人の登場
        友人からの余計な一言
    環境
        国際便の遅延（ロンドン回）
```

#### セントラルパークの話題の広がり(sankey)

> 日本語非対応(レクサー制限)。対訳: Central Perk Talk=セントラルパークでの会話 / Romance Talk=恋愛トーク / Work Complaints=仕事の愚痴 / Small Talk=雑談 / Ross & Rachel=Ross&Rachelネタ / Monica & Chandler=Monica&Chandlerネタ / Joey's Flings=Joeyの浮気性ネタ

```mermaid
sankey

Central Perk Talk,Romance Talk,40
Central Perk Talk,Work Complaints,25
Central Perk Talk,Small Talk,35
Romance Talk,Ross & Rachel,22
Romance Talk,Monica & Chandler,10
Romance Talk,Joey's Flings,8
```

#### シーズン別 IMDb評価の推移(xychart)

```mermaid
xychart-beta
    title "シーズン別 IMDb評価の推移(ダミー)"
    x-axis [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10]
    y-axis "評価" 7.5 --> 9.5
    line [8.3, 8.2, 8.2, 8.3, 8.5, 8.3, 8.5, 8.2, 8.2, 9.1]
```

#### 脚本ファイル構成(treeView)

```mermaid
treeView-beta
    FRIENDS/
        Season1/
            Pilot.md ## シリーズ最初の回
            TheOneWithTheSonogram.md
        Season5/
            TheOneInVegas.md
        Season10/
            %% 最終回はネタバレ注意
            TheLastOne.md
```

#### トラブル対応の分類(cynefin)

```mermaid
cynefin-beta
  title シットコム的トラブルの分類(ダミー)

  complex
    "Ross&Rachelの関係修復"

  complicated
    "サンクスギビング料理の采配"

  clear
    "家賃の割り勘ルール"

  chaotic
    "結婚式当日のアクシデント"

  confusion
    "Chandlerの職業を説明する"
```

#### Central Perk 戦略マップ(wardley)

```mermaid
wardley-beta
title Central Perk 提供価値マップ(ダミー)
component "コーヒー" [0.9, 0.9]
component "常連との会話" [0.7, 0.4]
component "オレンジのソファ" [0.5, 0.2]
"コーヒー" -> "常連との会話"
```

#### Rachel仲間入りイベント(eventmodeling)

> 日本語非対応(識別子はASCII必須)。対訳: CentralPerkVisit=セントラルパーク来店 / SitInWeddingDress=花嫁衣装のまま座る / RachelJoinedTheGroup=Rachelが仲間入りした

```mermaid
eventmodeling

tf 01 ui CentralPerkVisit
tf 02 cmd SitInWeddingDress
tf 03 evt RachelJoinedTheGroup
```

### モデル図(必要最小限)

#### 典型的な1エピソードの流れ(flowchart)

```mermaid
flowchart TD
    A[トラブル発生] --> B{Chandlerの軽口}
    B --> C[誤解が拡大]
    C --> D[セントラルパークで相談]
    D --> E[仲直り]
```

#### 留守電ネタ(sequenceDiagram)

```mermaid
sequenceDiagram
    participant R as Ross
    participant C as Chandler
    R->>C: もしもし、留守電だけど…
    C--)R: (画面を見て無視)
    R->>C: 留守電その2「PIVOT!」
    C->>R: 了解、今から手伝う
```

#### キャラクタークラス(classDiagram)

```mermaid
classDiagram
    class Character {
      +String name
      +String job
    }
    class Ross
    class Rachel
    Character <|-- Ross
    Character <|-- Rachel
    Ross --> Rachel : 気になっている
```

#### 交際ステータス(stateDiagram)

```mermaid
stateDiagram-v2
    [*] --> 友達
    友達 --> 交際中
    交際中 --> 破局
    破局 --> 交際中 : 復縁
    交際中 --> [*]
```

#### 登場人物とエピソード(ER図)

```mermaid
erDiagram
    CHARACTER ||--o{ EPISODE : appears_in
    CHARACTER {
      string name
      string job
    }
    EPISODE {
      string title
      int season
    }
```

#### 視聴要件(requirementDiagram)

```mermaid
requirementDiagram

requirement view_requirement {
id: 1
text: "各話にCentral Perkのシーンを含む"
risk: Low
verifymethod: Inspection
}

element script {
type: document
}

script - satisfies -> view_requirement
```

#### システムコンテキスト(C4)

```mermaid
C4Context
  title Central Perk 常連ネットワーク(ダミー)
  Person(customer, "常連客", "コーヒーを飲みに来る")
  Person(regular, "常連客B", "顔なじみの別の常連")
  Person(barista, "Gunther", "コーヒーを提供する店員")
  System(centralPerk, "Central Perk", "コーヒーを提供するカフェ")
  System_Ext(supplier, "豆の卸業者", "コーヒー豆を卸す取引先")
  Rel(customer, centralPerk, "利用する")
  Rel(regular, centralPerk, "利用する")
  Rel(barista, centralPerk, "働く")
  Rel(centralPerk, supplier, "仕入れる")
```

#### 住居アーキテクチャ(architecture)

```mermaid
architecture-beta
    group building(cloud)[アパート]
    service monica(server)[Monicaの部屋] in building
    service joey(server)[Joeyの部屋] in building
    monica:R --> L:joey
```

#### 部屋割りブロック図(block)

```mermaid
block
  columns 3
  block:monicaApt
    columns 2
    livingroom["リビング"]
    kitchen["キッチン"]
    sofa(("オレンジのソファ"))
    purpleDoor{{"紫のドア"}}
  end
  hallway["廊下"]
  block:joeyApt
    columns 2
    tv["大きすぎるTV"]
    barcalounger(("バカラウンジャーx2"))
    foosball["フットボール台"]
    entertainmentCenter["エンタメセンター争奪戦"]
  end
  monicaApt --> hallway
  hallway --> joeyApt
```

#### 留守電パケット構造(packet)

```mermaid
packet
0-7: "Season"
8-15: "Episode"
16-31: "RunningGag"
```

#### 仲直りスイムレーン(swimlanes)

```mermaid
swimlane-beta LR
  subgraph Ross["Ross"]
    ross_call[電話をかける]
  end
  subgraph Chandler["Chandler"]
    ignore[留守電を無視する]
    help[結局手伝う]
  end
  ross_call --> ignore
  ignore --> help
```

#### 留守電ZenUML(zenuml)

```mermaid
zenuml
Ross->Chandler: 留守電を残す
Chandler-->Ross: 既読無視
```

#### Season1 撮影スケジュール(gantt)

```mermaid
gantt
    title Season 1 撮影スケジュール(ダミー)
    dateFormat YYYY-MM-DD
    section 準備
    脚本準備          :a1, 2024-01-01, 10d
    キャスティング     :a2, after a1, 5d
    section 撮影
    パイロット撮影     :a3, after a2, 7d
    通常話 撮影        :a4, after a3, 60d
    section 仕上げ
    編集・音入れ       :a5, after a4, 20d
```
