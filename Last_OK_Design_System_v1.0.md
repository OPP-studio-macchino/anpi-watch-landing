**PUBLIC DESIGN SYSTEM SPECIFICATION**

**Last OK Design System**

iOS MVP / SMS・Push 通知 / 公開仕様 v1.0

| **Calm. Explicit. Auditable.** |
|--------------------------------|

このデザインシステムは、毎日の『OK』を最短で終わらせつつ、反応が途切れたときの段階通知・連絡先同意・通知履歴・通知エピソード監査ログを一貫して扱うための基盤仕様である。見た目の派手さより、信頼・可読性・説明責任を優先する。

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>プロダクトの核</strong></p>
<p><strong>1日1回のOKを最短1タップで</strong></p></th>
<th><p><strong>見せるべき真実</strong></p>
<p><strong>24/30/36/42/48h の結果を隠さない</strong></p></th>
<th><p><strong>このDSの姿勢</strong></p>
<p><strong>安心演出より監査可能性</strong></p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>最初に言うべきこと</strong></p>
<p>このプロダクトの一番危険なデザインミスは、UIを“安心の演出装置”にしてしまうこと。これは救命保証のUIではない。『反応が途切れた』『次に何が起きるか』を、落ち着いて、しかし曖昧さなく示す必要がある。</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| **項目**       | **定義**                                                           |
|----------------|--------------------------------------------------------------------|
| **対象面**     | iOSアプリ、補助Web/管理UI、SMS・Pushテンプレ、通知履歴/監査ログ表示 |
| **主要画面**   | Home / Contacts / Settings                                         |
| **公開単位**   | Foundation, Component, Pattern, Token, Governance                  |
| **主な成果物** | 公開仕様書（本書） + machine-readable token JSON                   |

# **0. Scope / この仕様が扱うもの**

本書は公開可能なデザインシステム仕様として、基礎要素、30以上のコンポーネント、主要パターン、デザイントークン、開発ガイド、運用ルールまでを定義する。プロダクト固有の要件に引きずられてUIが散らばらないよう、ひとり開発でも使い回せる粒度で固定した。

- 1\. Product fit / プロダクト整合

- 2\. Principles / 設計原則

- 3\. Foundations / 基礎要素

- 4\. Content style / 文言設計

- 5\. Component catalog / コンポーネント

- 6\. Patterns / パターン

- 7\. Do / Don't

- 8\. Development guide / 開発ガイド

- 9\. Governance / 運用

- 10\. Appendix / Token JSON 抜粋

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>対象外（このDSがやらないこと）</strong></p>
<p>救命保証、死亡検知、常時位置追跡、チャット、架電ワークフローのUI定義はMVPの対象外。ここを広げるとDSが太り、MVPで必要な『OK・同意・通知・履歴』の明快さが死ぬ。</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# **1. Product fit / プロダクト整合**

このDSは、反応が途切れた状態を扱う安否未確認リスクのプロダクトに合わせて最適化している。したがって、一般的な健康管理アプリの“やさしいウェルネスUI”とも、緊急通報アプリの“高警戒UI”とも違う。正解はその中間ではなく、落ち着いた説明責任のUIだ。

| **設計上の前提**         | **このDSでの扱い**                                                                         |
|--------------------------|--------------------------------------------------------------------------------------------|
| **プロダクトの本質**     | 『危険』や『死亡』の検知ではなく、本人の反応が途切れた状態を扱う。UIもその約束を破らない。 |
| **エスカレーション設計** | 最大48時間で本人→連絡先A→連絡先B→最終警報へ進む。段階ごとの期待値を隠さない。              |
| **透明性要件**           | 誰に・いつ・何を送ったか、通知が遅れたり届かなかったりする可能性、同意・停止、通知の記録をユーザーが閲覧できる。 |
| **MVP画面**              | Home / Contacts / Settings の3画面で成立するよう、コンポーネントは小さく、再利用は強く。   |

**Design thesis:**

• Calm enough for daily use.  
• Explicit enough for escalation.  
• Auditable enough for notification history and trust.

# **2. Principles / 設計原則**

**1. Calm before alarm** 通常状態は安心感のある青と中立面で構成し、赤はL5相当の本当に重大な瞬間に限定する。

**2. Facts before interpretation** 『危険を検知』のような推測表現を避け、最終OK時刻・経過時間・次の通知先・通知履歴を事実として示す。

**3. One dominant action per screen** HomeはOK、Contactsは同意完了、Settingsは設定確認。主要CTAを1つに絞る。

**4. Transparency beats reassurance** 通知履歴、通知の記録、同意・停止状態を見せる。曖昧な安心演出より監査可能性を優先する。

**5. Consent before automation** 連絡先2名の同意が揃わない限り稼働しない。状態を常に見える化する。

**6. Escalation is a ladder** 24/30/36/42/48hの段階を色・文言・構造で一貫表示し、飛び級感を作らない。

**7. Native first** iOSの標準パターンを尊重し、Dynamic Type・Dark Mode・VoiceOverを前提に設計する。

**8. Stress-ready accessibility** 低照度・片手操作・大きな文字・見落としやすい状況でも読めて押せることを最低ラインとする。

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Blind spot</strong></p>
<p>このプロダクトでは『危険そうに見えるUI』が信頼を生むわけではない。むしろ誤アラート耐性を落とし、連絡先の協力を削る。日常時は静かで、段階が上がるほど説明が増える、という逆張りが必要だ。</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# **3. Foundations / 基礎要素**

Foundationは色・文字・余白・グリッド・角丸・影・モーション・文言のルールを定義する。ここが曖昧だと、Homeは青いのにログは灰色、通知履歴は別語彙、という破綻が起きる。

## **3.1 Color system**

色の役割はブランド表現より状態の一貫性。通常は信頼感のあるブルー、正常は深いグリーン、注意はアンバー、重大はレッドを使う。ただし赤は“何かが起きそう”ではなく“すでに重大な段階に入った”ときだけ使う。

**Brand**

| **50**   | **100**   | **200**   | **300**   | **400**   | **500**   | **600**   | **700**   | **800**   | **900**   |
|----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| brand.50 | brand.100 | brand.200 | brand.300 | brand.400 | brand.500 | brand.600 | brand.700 | brand.800 | brand.900 |

**Success / Warning / Critical**

| **success50** | **success300** | **success600** | **warning50** | **warning300** | **warning600** | **critical50** | **critical300** | **critical600** |
|---------------|----------------|----------------|---------------|----------------|----------------|----------------|-----------------|-----------------|
| .success50    | .success300    | .success600    | .warning50    | .warning300    | .warning600    | .critical50    | .critical300    | .critical600    |

**Neutral**

| **0**     | **25**     | **50**     | **100**     | **200**     | **300**     | **400**     | **500**     | **700**     | **900**     |
|-----------|------------|------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| neutral.0 | neutral.25 | neutral.50 | neutral.100 | neutral.200 | neutral.300 | neutral.400 | neutral.500 | neutral.700 | neutral.900 |

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Role</strong></th>
<th><strong>Light / Dark token</strong></th>
<th><strong>Usage</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Action primary</td>
<td>light: action.primary (#2563EB)<br />
dark: action.primary (#2563EB)</td>
<td>主要CTA、選択状態、focusの基準色</td>
</tr>
<tr class="even">
<td>Success</td>
<td>light: status.success (#047857)<br />
dark: status.success (#10B981)</td>
<td>OK完了、正常、同意完了、送信できた可能性</td>
</tr>
<tr class="odd">
<td>Info</td>
<td>light: status.info (#1D4ED8)<br />
dark: status.info (#60A5FA)</td>
<td>説明、ヘルプ、L1の穏やかな注意</td>
</tr>
<tr class="even">
<td>Warning</td>
<td>light: status.warning (#B45309)<br />
dark: status.warning (#FBBF24)</td>
<td>L2の明示、入力注意、要確認</td>
</tr>
<tr class="odd">
<td>Critical</td>
<td>light: status.critical (#DC2626)<br />
dark: status.critical (#F87171)</td>
<td>L3–L5、停止、不可逆操作</td>
</tr>
<tr class="even">
<td>Surface</td>
<td>light: background.surface1<br />
dark: background.surface1</td>
<td>カードとフォームの基本面</td>
</tr>
<tr class="odd">
<td>Text primary</td>
<td>light: text.primary<br />
dark: text.primary</td>
<td>主要見出し、本文</td>
</tr>
<tr class="even">
<td>Border focus</td>
<td>light: border.focus<br />
dark: border.focus</td>
<td>focus ring、キーボードフォーカス</td>
</tr>
</tbody>
</table>

| **Contrast pairing**                | **Ratio** | **Status** |
|-------------------------------------|-----------|------------|
| Text / app background (light)       | 17.41:1   | Pass       |
| Text / app background (dark)        | 19.28:1   | Pass       |
| Primary button text / fill          | 5.17:1    | Pass       |
| Success text / fill                 | 5.48:1    | Pass       |
| Warning text / fill                 | 5.02:1    | Pass       |
| Critical text / fill                | 4.83:1    | Pass       |
| Focus ring / app background (light) | 5.17:1    | Pass       |
| Focus ring / app background (dark)  | 7.93:1    | Pass       |

Minimum rules: 通常テキスト 4.5:1 以上、ラージテキスト/主要境界 3:1 以上、フォーカスインジケータは周辺背景に対して視認できること。赤と緑だけで状態差を伝えない。

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Dark mode rule</strong></p>
<p>Dark modeでは“同じhexを暗い背景に載せる”のではなく、意味を保ったままコントラストを再配分する。たとえば focus は light では brand.600、dark では brand.400 を使い、見えることを優先する。</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **3.2 Typography**

ベース書体は Apple platform では SF Pro、フォールバックとして Noto Sans JP を使う。文字の読みやすさが価値なので、装飾書体は使わない。強さはサイズでなく階層で出す。

| **Style** | **Compact** | **Regular** | **Expanded** | **Weight** | **Primary use**                  |
|-----------|-------------|-------------|--------------|------------|----------------------------------|
| Display   | 36/44       | 40/48       | 44/52        | 700        | マーキー、空状態の主メッセージ   |
| Hero      | 30/38       | 34/42       | 38/46        | 700        | OKボタン、主要数値、重要な一言   |
| H1        | 24/32       | 28/36       | 32/40        | 700        | 画面の主要見出し                 |
| H2        | 20/28       | 24/32       | 28/36        | 700        | セクション見出し、カード主見出し |
| H3        | 18/26       | 20/28       | 24/32        | 600        | サブ見出し、Top App Bar          |
| Title     | 17/24       | 18/26       | 20/28        | 600        | リスト主文、カードタイトル       |
| Body      | 16/24       | 17/26       | 18/28        | 400        | 本文、説明、設定                 |
| Label     | 15/20       | 16/22       | 17/24        | 600        | ボタン、フィールドラベル、チップ |
| Caption   | 13/18       | 14/20       | 15/22        | 500        | 補足、時刻、メタ情報             |

**Typography accessibility rules**

- 本文は通常16pt未満にしない。captionも13ptを下回らない。

- Dynamic Type を前提にし、主要ラベルは lineLimit 0 を基本とする。

- 固定高さコンテナの中に可変テキストを押し込まない。

- 数字・時刻・料金のような監査値は字間を詰めすぎない。

## **3.3 Layout grid & spacing**

グリッドは全サーフェスで12列。iPhoneでは12列をそのまま使い、実運用は 12 / 6 / 4 / 3 span に収束させる。余白は8pt系で統一し、4ptは微調整の例外だけに使う。

| **Mode** | **Width** | **Cols** | **Margin** | **Gutter** | **Guidance**                       |
|----------|-----------|----------|------------|------------|------------------------------------|
| Compact  | 320–390   | 12       | 16         | 8          | 1カラム主体。主要カードは span12。 |
| Regular  | 391–768   | 12       | 24         | 8          | 2カラム併用可。Homeは1カラム維持。 |
| Expanded | 769–1440  | 12       | 32         | 8          | 設定やログで 8+4 / 6+6 を許容。    |

| 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 8   | 8   | 8   | 8   | 8   | 8   | 8   | 8   | 8   | 8   | 8   | 8   |

上段は12列、下段の『8』はすべてのガターが 8pt であることを示す。

| **Token** | **pt/px** | **Use**                          |
|-----------|-----------|----------------------------------|
| space.0   | 0         | なし                             |
| space.0.5 | 4         | 微調整、アイコンとテキストの微差 |
| space.1   | 8         | 最小ギャップ、caption間          |
| space.1.5 | 12        | 密なフォーム・チップ群           |
| space.2   | 16        | 標準カード内余白                 |
| space.3   | 24        | セクション間                     |
| space.4   | 32        | 大きなカード間                   |
| space.6   | 48        | 画面内の大ブロック分離           |

| **Radius** | **Use**                    |
|------------|----------------------------|
| 8          | 小さな補助要素、スケルトン |
| 12         | アイコンボタン、セグメント |
| 16         | 標準ボタン、フィールド     |
| 20         | カード、バナー             |
| 24         | ダイアログ、Bottom Sheet   |
| pill       | チップ、丸ボタン、OKボタン |

## **3.4 Motion, icons, elevation**

モーションは理解補助のために使い、感情操作のためには使わない。L2以降でも画面全体を揺らさない。アイコンは SF Symbols を基準にし、意味のない飾りアイコンは排除する。

| **Duration** | **Use**                      | **Rule**                           |
|--------------|------------------------------|------------------------------------|
| Fast 120ms   | pressed / hover / focus      | 色・影・opacityの短い変化          |
| Base 180ms   | sheet / chip / selection     | 標準の状態遷移                     |
| Slow 240ms   | modal enter / complex reveal | Reduce Motion時はopacity中心に置換 |

# **4. Content style / 文言設計**

このプロダクトでは文言がUIの半分だ。特にL2以降は『見た目の雰囲気』より『何がいつ起きるか』が重要になる。したがって tone of voice は “やさしい”より“明確”を優先する。

| **Rule**                     | **Guideline**                                                                    |
|------------------------------|----------------------------------------------------------------------------------|
| 事実を主語にする             | 『最終OKから30時間経過しました』のように時間と状態を前に出す。                   |
| 次の結果を先回りして書く     | 『36時間で連絡先AへSMSを送ります』のように、次に誰へ何が起きるかを隠さない。   |
| 受信者とチャネルを名指しする | 『連絡先AへSMSを送信します』。『関係者へ通知』のようなぼかしは禁止。             |
| 感情語より行動語             | 『心配です』『緊急です』より『OKしてください』『設定を確認してください』を優先。 |
| 恐怖マーケは禁止             | 死亡・孤独死・救助保証などの強い語で変換率を取りに行かない。                     |

| **例** | **文言**                                                                                        |
|--------|-------------------------------------------------------------------------------------------------|
| 良い例 | 最終OKから30時間経過しました。36時間で連絡先AへSMSを送ります。追加料金はありません。             |
| 悪い例 | このままだと大変です。今すぐ対応してください。                                                  |
| 良い例 | 連絡先Aは同意待ちです。2名の同意完了まで通知は開始されません。                                  |
| 悪い例 | 見守りは有効ですが、一部設定を確認してください。                                                |

## **4.1 Escalation tone ladder**

| **Level** | **Time** | **Label**       | **Tone** | **Color**                  | **Example**                                          |
|-----------|----------|-----------------|----------|----------------------------|------------------------------------------------------|
| L0        | T\<24h   | Normal          | Safe     | success / subdued          | 通常。OK完了、次の目安時刻を表示。                   |
| L1        | 24–30h   | Reminder        | Info     | info / calm                | 本人Push。やさしく促す。                             |
| L2        | 30–36h   | Action required | Warning  | warning / explicit         | 本人SMS。36hで連絡先AへSMSを送る予定を明記。運用通知では追加料金がないことを添えてよい。 |
| L3        | 36–42h   | Escalated       | Critical | critical / measured        | 連絡先Aへ通知。通知エピソード監査ログを記録。        |
| L4        | 42–48h   | Escalated+      | Critical | critical / higher emphasis | 連絡先Bへ通知。                                      |
| L5        | 48h+     | Final alert     | Critical | critical / maximum         | A+B最終SMS。保証表現は禁止。現行MVPでは追加チャネルを増やさない。 |

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Copy anti-pattern</strong></p>
<p>『安心してください』『すぐ助けが来ます』『危険を検知しました』のような保証・推測・不安扇動は全部禁止。信頼は強い言葉ではなく、説明の一貫性で作る。</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# **5. Component catalog / コンポーネント**

以下のコンポーネントは foundation token を前提に設計する。すべての interactive component は共通で enabled / pressed / focused / disabled を持ち、非同期処理を伴う場合は loading を追加する。フォーム系は error、状態表示系は semantic tone を追加する。

## **5.1 Core task components**

| **Component**             | **States**                                         | **Anatomy**                                           | **Usage**                                                                     | **Accessibility**                                                    | **Code spec**                                                                        |
|---------------------------|----------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Check-in Hero / OK Button | default / pressed / loading / confirmed / disabled | halo, circular container, primary label, helper text  | Home上部の唯一の主CTA。1画面1個のみ。完了後は最長3秒でconfirmedを見せて戻す。 | 最小88×88pt。VoiceOver名『OK、最終反応を記録』。状態変化を読み上げ。 | 160×160pt / radius pill / fill action.primary / label type.hero / shadow elevation.2 |
| Status Hero Banner        | normal / reminder / warning / critical             | tone bar, icon, title, elapsed time, helper           | Home最上部。現在のL0–L5と次の遷移を1ブロックで示す。                          | 色だけに頼らず、状態ラベルと経過時間を必須表示。                     | padding 16 / gap 8 / radius 20 / surface tone.\* / icon 20pt                         |
| Escalation Timeline       | upcoming / current / completed / blocked           | rail, step marker, label, timestamp, meta text        | 24/30/36/42/48hの段階を一貫表示。HomeとSettingsで再利用。                     | 順序付きリストとして読み上げ。current stepを明示。                   | step gap 12 / marker 20 / rail 2 / label type.label / helper type.caption            |
| Snooze Selector           | idle / selected / disabled                         | label, option chips, helper copy                      | 1h/3h/6hのみ。通知の黙らせであり、T判定は止まらない説明を併記。               | 選択状態を読み上げ。Tap target 44×44pt以上。                         | chip height 40 / gap 8 / radius 999 / selected bg neutral900                         |
| Contact Card              | pending / consented / stopped / missing            | slot label, avatar, name, phone, status chip, actions | ContactsでA/Bスロット固定。再送、編集、停止理由表示に対応。                   | A/B順序を固定読み上げ。電話番号は視認しやすくグルーピング。          | card padding 16 / gap 12 / radius 20 / min height 116                                |
| Consent Status Chip       | pending / consented / stopped                      | dot/icon, label                                       | Contact Card・一覧・ログで同じ語彙を使う。                                    | 色+ラベル両方必須。3状態の語を統一。                                 | height 28 / padX 10 / radius 999 / type caption semibold                             |
| Notification Log Row      | sent / possibly-arrived / failed / blocked          | channel icon, recipient, template label, time, result | 監査ログの最小単位。誰に・いつ・何を送ったかを削らず表示。                    | テーブル相当情報を1セル内で順序固定読み上げ。                        | row min 64 / gap 8 / divider bottom / mono meta optional                             |
| Notification Episode Row  | scheduled / sent / failed / blocked                | state pill, date, trigger, helper                     | 通知エピソード監査ログ。正式な請求ではなく、通知がいつ・なぜ発生したかを残す。 | 理由・発生条件・状態を一続きで読めること。                           | row min 72 / type body+caption                                                       |

## **5.2 Actions**

| **Component**      | **States**                                       | **Anatomy**                                         | **Usage**                                                   | **Accessibility**                                          | **Code spec**                                            |
|--------------------|--------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------|------------------------------------------------------------|----------------------------------------------------------|
| Primary Button     | default / pressed / focused / disabled / loading | container, label, optional leading icon, focus ring | 1画面1つの主行動に限定。連打防止でloading中は同一幅を維持。 | 高さ52pt以上、hit area 44×44pt以上。                       | h 52 / padX 16 / gap 8 / radius 16 / fill action.primary |
| Secondary Button   | default / pressed / focused / disabled           | stroke container, label, optional icon              | 主CTAの補助。キャンセルではなく代替行動に使う。             | 境界3:1以上。pressedで視覚差を付ける。                     | h 52 / border 1 / bg transparent / text action.primary   |
| Tertiary Button    | default / pressed / focused / disabled           | text label, optional trailing chevron               | ログ詳細、料金詳細など低優先操作に使用。                    | 下線かアイコンでリンク性を補強。                           | h 44 / no fill / type label / focus underline+ring       |
| Destructive Button | default / pressed / focused / disabled           | container, label                                    | 退会、連絡先削除、停止解除リセットなど不可逆操作のみ。      | 確認ダイアログと対で使う。赤単独で意味を持たせない。       | h 52 / fill critical600 / text white / radius 16         |
| Icon Button        | default / pressed / focused / disabled           | hit target, icon, optional tooltip                  | 編集、再送、閉じるなど補助操作。単独用途が明確な時だけ。    | 44×44pt。必ずaccessibilityLabelを付与。                    | 44×44 / radius 12 / icon 18–20pt                         |
| Sticky CTA Bar     | rest / elevated / hidden                         | surface, primary button, helper text                | 長いフォーム終端で主CTAを見失わせない。                     | キーボード表示時もCTAが隠れない。                          | height 76 / top border / blur optional / safe-area aware |
| Segmented Control  | idle / selected / disabled                       | track, segment, label                               | Logsのフィルタや通知履歴の切替。2–4項目まで。               | 選択状態を明示。幅不足時は折返し禁止、代わりにメニューへ。 | h 36 / radius 12 / selected fill neutral900              |

## **5.3 Inputs**

| **Component**      | **States**                                     | **Anatomy**                                 | **Usage**                                                               | **Accessibility**                                        | **Code spec**                                                   |
|--------------------|------------------------------------------------|---------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------------------------------------|
| Text Field         | rest / focused / filled / error / disabled     | label, field, helper/error, trailing icon   | 名前、目安時刻ラベルなど短文入力。                                      | ラベル常時表示。placeholderを主ラベルにしない。          | h 52 / radius 16 / border 1 / padX 14 / type body               |
| Phone Number Field | rest / focused / valid / error / disabled      | country code, value, validation message     | 連絡先登録と本人認証で利用。日本番号表記を崩さない。                    | 数字グルーピングを読み上げ考慮。ペースト許可。           | uses Text Field base / keyboard phonePad / mono helper optional |
| SMS Link Confirmation | pending / sent / opened / expired / error   | phone number, link sent message, resend action | 本人電話番号確認。SMSリンクを開いて完了する現行MVPの確認。               | コード入力欄として見せず、リンク確認であることを読み上げ。 | uses Text Field base / helper + resend action                    |
| Search Field       | rest / focused / filled / disabled             | search icon, input, clear button            | ログ、テンプレ一覧、連絡先検索で利用。                                  | clear buttonにラベル付与。                               | h 44 / radius 14 / leading icon 16                              |
| Text Area          | rest / focused / filled / error / disabled     | label, multiline field, count/helper        | 補足メモ、サポート問い合わせなど任意長文。MVPの主導線では使いすぎない。 | 固定高で切らず可変。                                     | minH 112 / radius 16 / pad 14 / helper caption                  |
| Toggle             | off / on / focused / disabled                  | label block, switch, helper                 | 通知設定など即時反映設定。                                              | 行全体で押せる。状態読み上げ必須。                       | row minH 52 / switch native / gap 12                            |
| Checkbox           | unchecked / checked / indeterminate / disabled | box, label, helper                          | 複数選択の管理UIやWeb管理画面向け。iOS主UIでは多用しない。              | 44×44pt hit area。状態変化読み上げ。                     | box 20 / row minH 44 / border 2                                 |
| Radio Group        | unselected / selected / disabled               | radio, label, helper                        | 同意方式や通知方式など排他的選択。                                      | グループ名を持たせる。                                   | row minH 44 / gap 8 / radio 20                                  |
| Select / Menu      | rest / expanded / selected / disabled          | field button, label, current value, chevron | 時間帯やテンプレ種別の限定選択。                                        | 現在値を閉じた状態でも読める。                           | h 52 / radius 16 / trailing chevron 16                          |
| Date / Time Picker | rest / active / disabled                       | label, current value, picker surface        | 目安時刻の設定。プラットフォーム標準を尊重。                            | ネイティブピッカー優先。カスタムホイールを再実装しない。 | use native / wrapper row minH 52                                |

## **5.4 Navigation & structure**

| **Component**  | **States**                                 | **Anatomy**                                        | **Usage**                                                | **Accessibility**                            | **Code spec**                                     |
|----------------|--------------------------------------------|----------------------------------------------------|----------------------------------------------------------|----------------------------------------------|---------------------------------------------------|
| Top App Bar    | default / elevated / compact               | back/action, title, optional trailing action       | 画面タイトルを短く保つ。Homeは大見出し、下層は標準バー。 | 戻るの読み上げ先を明示。                     | h 56–96 / blur optional / title type h3           |
| Tab Bar        | default / selected / badge / hidden        | items, icon, label, safe-area container            | MVPはHome / Contacts / Settings。4タブ以内。             | アイコンだけにしない。                       | h 72 incl. safe area / icon 20 / label caption    |
| Section Header | default / actionable                       | eyebrow, title, optional action                    | 長い画面を文脈単位で切る。                               | Heading traitを付与。                        | title type h3 / action tertiary / spacing 8       |
| List Row       | default / pressed / selected / destructive | leading area, content block, trailing meta/chevron | 設定項目、履歴一覧の基本単位。                           | 行全体を44pt以上。副情報も読み上げ順を固定。 | minH 56 / padX 16 / gap 12 / divider inset        |
| Card           | default / emphasized / selected / disabled | surface, content stack, optional footer/actions    | 関連情報を束ねる基本容器。Homeの情報塊に使用。           | 影より境界・余白で階層化。                   | radius 20 / pad 16 / bg surface.1 / border subtle |
| Divider        | default                                    | line only                                          | リスト内の論理区切り。意味のない罫線増殖を防ぐ。         | 装飾要素扱い。                               | 1px / color border.subtle / inset 16              |

## **5.5 Feedback & status**

| **Component**             | **States**                                    | **Anatomy**                              | **Usage**                                                      | **Accessibility**                                       | **Code spec**                                 |
|---------------------------|-----------------------------------------------|------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------|
| Status Badge              | neutral / success / info / warning / critical | fill, text, optional dot/icon            | 短い状態表示。文脈を補助するもので、単独判断の主役にはしない。 | 色+ラベル必須。                                         | h 24–28 / padX 8–10 / radius pill             |
| Inline Validation Message | info / error / success                        | icon, text                               | フィールド直下の短い説明。2行まで。                            | error時はaria/live region相当の通知。                   | gap 6 / icon 14 / type caption                |
| System Banner             | info / warning / critical / success           | icon, text block, optional action, close | 画面上部の一時的な注意喚起。Homeの状態ヒーローとは別物。       | closeは任意。消してはいけない重要情報はバナーにしない。 | pad 12 / radius 16 / minH 56                  |
| Critical Alert Dialog     | presented / confirm / cancel                  | title, body, primary/destructive actions | 退会や連絡先削除など高リスク確認。                             | 初期フォーカスは安全側のボタン。                        | maxW 360 / radius 24 / action gap 8           |
| Toast                     | success / info / warning                      | surface, text, optional icon             | 保存完了など軽いフィードバック。重要な履歴には使わない。       | 自動消滅前に音声通知。                                  | minH 44 / radius 14 / elevate 3               |
| Loading Spinner           | indeterminate / paused                        | spinner glyph, optional label            | 3秒未満の待機。長時間はSkeletonか進行文言に置換。              | 単独表示を避け、文言を添える。                          | size 20–24 / stroke 2                         |
| Skeleton Loader           | base / shimmer / reduced-motion               | shape blocks                             | リストやカードの先読み。構造だけ先に見せる。                   | Reduce Motion時は静止面へ。                             | radius follows target / animation 1.2s linear |
| Empty State               | neutral / blocked / error                     | icon/illustration, title, body, CTA      | ログなし、連絡先未設定、同意不足など。次アクションを必ず置く。 | イラスト依存にしない。                                  | maxW 320 / gap 8 / title type h2              |
| Stat Tile                 | default / emphasized                          | label, value, helper                     | 今月のエピソード数やSMS送信結果など数値要約。                 | 数値と単位を分けて読みやすく。                          | card base / value type h2 / minH 88           |

## **5.6 Data display**

| **Component**          | **States**                          | **Anatomy**                             | **Usage**                                                  | **Accessibility**                   | **Code spec**                           |
|------------------------|-------------------------------------|-----------------------------------------|------------------------------------------------------------|-------------------------------------|-----------------------------------------|
| Avatar / Initials      | image / initials / placeholder      | circle, content                         | Contact Cardで人を識別。顔写真必須にはしない。             | 名前と一緒に読ませる。              | size 32 / 40 / 48 / radius pill         |
| Timeline Step          | upcoming / current / done / blocked | marker, connector, text block           | Escalation Timelineの構成要素。単独利用も可。              | 順序・現在地を読み上げ。            | marker 20 / connector 2 / gap 8         |
| Audit Log Group Header | default / sticky                    | date label, count, divider              | ログを日付単位で区切る。                                   | 見出しレベルを一貫。                | type label / top+bottom spacing 12      |
| Notification Summary Card | current / monthly                | title, count, explanation, link         | 通知履歴の要約。Historyへの入口を持つ。                    | 件数だけでなく条件と限界も記載。    | card + stat tile pattern / gap 12       |
| Recipient Tag          | self / contactA / contactB / all    | pill, label                             | 通知先を即読できるよう統一表記。                           | A/B表記だけでなく名前解決も併記可。 | h 24 / radius pill / tone semantic      |
| Channel Badge          | push / sms                          | icon, label                             | ログで送信チャネルを即読する。                             | 頭文字だけにしない。                | h 24 / icon 14 / padX 8                 |
| Progress Ring          | normal / warning / critical         | track, progress arc, center value       | 日次達成や経過時間の補助表現。主判断は必ずテキストで併記。 | 円だけに頼らず数値を中央表示。      | size 64–96 / stroke 8                   |
| Metadata Row           | default                             | label, value                            | 詳細画面の監査情報表示。単位と時刻フォーマットを一定化。   | ラベルと値の対応関係を保持。        | 2-col row / label width 96 / value flex |

## **5.7 Overlays & utility**

| **Component**        | **States**                   | **Anatomy**                            | **Usage**                                              | **Accessibility**                 | **Code spec**                                                  |
|----------------------|------------------------------|----------------------------------------|--------------------------------------------------------|-----------------------------------|----------------------------------------------------------------|
| Bottom Sheet         | collapsed / expanded / full  | grabber, header, content, actions      | 短い補足設定や選択に使う。長文の規約表示には使わない。 | スワイプ以外に閉じる手段を置く。  | radius top24 / pad 16 / detents 3 optional                     |
| Confirmation Dialog  | presented / confirm / cancel | title, body, safe action, risky action | STOPや連絡先削除など、判断が必要な瞬間。              | ボタン文言は動詞で具体化。        | alert base / 2 actions max / destructive secondary if possible |
| Full-screen Modal    | presented / nested nav       | top bar, content, dismissal            | SMSリンク確認や長い履歴など独立タスクに使う。          | 閉じる導線を常に固定。            | safe-area aware / top bar 56                                   |
| Tooltip / Coach Mark | visible / dismissed          | anchor, bubble, arrow, short text      | 初回オンボーディングのみに限定。永続説明には使わない。 | VoiceOver時は通常テキストで代替。 | maxW 240 / radius 12 / shadow 2                                |

## **5.8 Critical component notes**

| **Component**            | **Why this matters**                                                                               |
|--------------------------|----------------------------------------------------------------------------------------------------|
| **Check-in Hero**        | 大きく、単独で、迷いなく押せることが最優先。円形は許容するが、周囲に説明を置きすぎない。           |
| **Escalation Timeline**  | “今どこか”と“次に何が起きるか”が一瞬で分からないと価値がない。タイムラインは装飾ではなく契約表示。 |
| **Contact Card**         | A/Bスロット固定は雑に見えるが正しい。可変順序にすると通知先の認知がぶれる。                        |
| **Notification Log Row** | この行はサポート・通知履歴・信頼の交差点。省略しない。テンプレIDやチャネルは必ず残す。             |
| **Notification Episode Row** | 正式な請求ではなく、通知が発生した条件を説明する行として設計する。`BillingEvent` という実装名が残る場合も、正式な請求ではなく通知エピソード監査ログを指す。 |

# **6. Patterns / 主要パターン**

コンポーネント単体の正しさだけではプロダクトは成立しない。ここでは、実際の画面や通知体験でどう組み合わせるかを固定する。

## **Pattern 1 — Daily Check-in (Home)**

| **Field**        | **Definition**                                                                                                                                         |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 毎日のOKを最短1タップで終わらせ、完了感と次の期待値を残す。                                                                                            |
| **Structure**    | Status Hero → Check-in Hero → Next step helper → Escalation Timeline (collapsed) → Recent activity                                                     |
| **Rules**        | Homeでは主CTAはOKのみ。『前回のOK時刻』『経過時間』『次の通知閾値』を近接配置。成功後は3秒以内の完了フィードバックだけ残し、過剰アニメーションは禁止。 |
| **Anti-pattern** | OKボタンの周囲に学習・料金・設定のCTAを同格で並べる。                                                                                                  |

## **Pattern 2 — Missed Check-in Escalation**

| **Field**        | **Definition**                                                                                                          |
|------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 不意に驚かせず、段階と次の結果を明確にする。                                                                            |
| **Structure**    | L1 Push → L2 SMS → L3 Contact A → L4 Contact B → L5 Final alert                                                         |
| **Rules**        | 各段階で『誰に何が起きるか』を1行で明記。L2の運用通知では36hで連絡先AへSMSを送る予定と、追加料金がないことを添えてよい。公開LP/FAQでは料金不安を主役にしない。色の強度はL2から上げ、L5までは赤を飽和させすぎない。 |
| **Anti-pattern** | L1の時点から赤一色で危機感を煽る。                                                                                      |

## **Pattern 3 — Contact Onboarding & Consent**

| **Field**        | **Definition**                                                                                                |
|------------------|---------------------------------------------------------------------------------------------------------------|
| **Goal**         | 2名同意が揃わない限り稼働しない事実を隠さず、完了率を上げる。                                                 |
| **Structure**    | 2-slot Contact Cards → Consent chips → Resend / Edit actions → System banner if blocked                       |
| **Rules**        | A/Bスロット固定。状態は PENDING / CONSENTED / STOPPED の3語で統一。未同意時はHomeにもブロック状態を反映する。 |
| **Anti-pattern** | 未同意でも『保護中』に見える装飾を出す。                                                                      |

## **Pattern 4 — Snooze Without Stopping Time**

| **Field**        | **Definition**                                                                                    |
|------------------|---------------------------------------------------------------------------------------------------|
| **Goal**         | 通知を静かにしつつ、エスカレーション時計は止めないことを理解させる。                              |
| **Structure**    | Snooze Selector chips → Helper note → Expiry timestamp                                            |
| **Rules**        | 1h / 3h / 6h以外の自由入力はMVPで持たない。ヘルプ文は常時表示。期限が来たら自動で通常状態へ戻す。 |
| **Anti-pattern** | Snoozeを『監視停止』のように誤解させる文言。                                                      |

## **Pattern 5 — Audit Log Transparency**

| **Field**        | **Definition**                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 後から見返したときに、通知・停止・同意・通知エピソードが時系列で追える。                                            |
| **Structure**    | Filter segments → Date group headers → Notification Log Rows / Notification Episode Rows / Meta rows                 |
| **Rules**        | 『誰に・何を・いつ・結果』の4点を削らない。テンプレ名またはIDを保持。ユーザー向けには『遅れたり届かなかったりすることがあります』『届いたように見えても読んだか、対応したかまでは分かりません』の語彙で説明する。 |
| **Anti-pattern** | ログを抽象化しすぎて『通知済み』だけにする。                                                                        |

## **Pattern 6 — Notification Episode Transparency**

| **Field**        | **Definition**                                                                                                              |
|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 通知がルール通り発生したことを、後から確認できる可視イベントとして理解させる。                                              |
| **Structure**    | L2 operational notice → Notification Summary card → Notification Episode rows → FAQ link                                      |
| **Rules**        | 予告と実績を別コンポーネントで扱う。月額料金は公開ページでは『月額300円』を基本にし、通知単位の料金不安を前面化しない。 |
| **Anti-pattern** | 通知履歴を設定の奥に隠す。                                                                                                  |

## **Pattern 7 — STOP / Consent Loss Recovery**

| **Field**        | **Definition**                                                                                                         |
|------------------|------------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 連絡先の停止や同意喪失を即時に稼働停止へ反映し、誤信頼を防ぐ。                                                         |
| **Structure**    | Critical banner → Contact Card state change → Blocked home status → Repair CTA                                         |
| **Rules**        | STOP発生時は当該連絡先を即STOPPED表示。稼働条件不足をHome・Contacts双方で見せる。再送CTAは理由が理解できる場所に置く。 |
| **Anti-pattern** | 内部的には止まっているのに表面上は正常表示を続ける。                                                                   |

## **Pattern 8 — Notification Delay / Missing Notice**

| **Field**        | **Definition**                                                                                                     |
|------------------|--------------------------------------------------------------------------------------------------------------------|
| **Goal**         | 通知が遅れたり届かなかったりする可能性を隠さず、何が起きたかを説明する。                                           |
| **Structure**    | Notice row → Inline explanation → Next action / retry / contact support                                           |
| **Rules**        | ユーザー向けには『届いたように見えても、相手が読んだか、対応したかまでは分かりません』を基本文にする。状態と通知結果を混同しない。再試行可能かどうかを明記する。 |
| **Anti-pattern** | 通知の遅れや未到達を赤く塗ってエスカレーション状態と同じ見た目にする。                                             |

## **Pattern 9 — Settings Information Architecture**

| **Field**        | **Definition**                                                                            |
|------------------|-------------------------------------------------------------------------------------------|
| **Goal**         | 設定を増やしすぎず、MVPの判断に必要な項目だけを整理する。                                 |
| **Structure**    | Schedule → Reminders → Tests → Pricing → Notification history → Legal                     |
| **Rules**        | 高度な運用設定は隠す。料金は月額300円を基本にし、通知履歴はSettingsから常に辿れる。テスト送信は安全ガード付き。 |
| **Anti-pattern** | Homeで使う頻度の低い設定を大量に露出する。                                                |

# **7. Do / Don't**

| **Do** | **Why**                                                 | **Don't** | **Risk**                                            |
|--------|---------------------------------------------------------|-----------|-----------------------------------------------------|
| Do     | 大きなOKボタンを画面内の唯一の主CTAにする。             | Don't     | Homeに同格の二次CTAを複数並べない。                 |
| Do     | 色と文言の両方で状態を示す。                            | Don't     | 色だけで状態差を伝えない。                          |
| Do     | L2の運用通知で36hの連絡先通知予定を明記する。            | Don't     | 公開LP/FAQで通知単位の料金不安を前面化しない。       |
| Do     | 連絡先の同意不足を明確なブロック状態として見せる。      | Don't     | 未同意でも見かけ上『保護中』に見せない。            |
| Do     | ログは時系列・通知結果・テンプレIDで読めるようにする。  | Don't     | 通知履歴を『送信済み』の一言で潰さない。            |
| Do     | ダークモードでもコントラストを維持する。                | Don't     | 彩度だけ上げて見やすさを錯覚で済ませない。          |
| Do     | SMSは短く、ひとつのメッセージにひとつの目的を持たせる。 | Don't     | 説明責任を1通に詰め込みすぎて分割送信を誘発しない。 |
| Do     | 大きな文字時に縦積みへ切り替える。                      | Don't     | 固定高さのカードでテキストを切らない。              |

# **8. Development guide / 開発ガイド**

実装で崩れやすいのは、デザインではなく token の破り方だ。feature code が raw 値を持ち始めると、Homeだけ例外、ログだけ別UI になって終わる。先にルールを決める。

| **Rule**                  | **Guideline**                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------------|
| **Token source of truth** | JSONを唯一の正本にし、iOS Color Asset / Swift enum / Web CSS variables をここから生成する。       |
| **Semantic first**        | 機能コードで raw hex や raw spacing を直接参照しない。必ず semantic token を使う。                |
| **Dynamic Type**          | UILabel / Text はシステム text style または token wrapper を使い、固定高さコンテナを避ける。      |
| **Dark mode**             | 色は theme alias で切り替え、brand/semanticの意図は変えない。                                     |
| **Snapshot matrix**       | Home / Contacts / Settings を light/dark × default/AX5 × success/warning/critical で撮る。        |
| **Localization**          | 日本語を基準長にし、英語は余白が余る方向で設計。SMSは短文化ルールを別管理。                       |
| **Accessibility QA**      | VoiceOver, Larger Text, Bold Text, Increase Contrast, Reduce Motion, RTL-safe layout をチェック。 |
| **Analytics**             | 誤アラートや押し忘れ率を改善するため、コンポーネント単位でタップ/完了/離脱を計測する。            |

**SwiftUI reference**

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>enum DSColor {<br />
static let bgApp = Color("bg/app")<br />
static let actionPrimary = Color("action/primary")<br />
static let textPrimary = Color("text/primary")<br />
}<br />
<br />
struct PrimaryButtonStyle: ButtonStyle {<br />
func makeBody(configuration: Configuration) -&gt; some View {<br />
configuration.label<br />
.font(.system(size: 16, weight: .semibold))<br />
.frame(maxWidth: .infinity, minHeight: 52)<br />
.padding(.horizontal, 16)<br />
.background(DSColor.actionPrimary)<br />
.foregroundStyle(.white)<br />
.clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))<br />
.opacity(configuration.isPressed ? 0.92 : 1.0)<br />
}<br />
}</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**Implementation notes**

- Home / Contacts / Settings の snapshot baseline を先に固定し、その上で states を増やす。

- Asset Catalog は light/dark の named color で管理し、semantic naming を raw palette より上位に置く。

- 通知履歴と通知エピソード監査ログは backend の template ID / result code を受け取れる型にしておく。

- 通知テンプレは copy version を持たせ、UIの表示文と運用文を一致させる。

# **9. Governance / 運用と公開ルール**

公開可能なデザインシステムにするなら、見た目だけでなく変更管理が必要だ。誰でも都合よく token を足せる状態は、公開した瞬間に壊れる。

| **Topic**              | **Rule**                                                                                             |
|------------------------|------------------------------------------------------------------------------------------------------|
| **Versioning**         | SemVer。Tokenの破壊的変更は major。見た目のみの互換変更は minor。                                    |
| **Deprecation**        | deprecated トークン/コンポーネントは2リリース残す。代替先を必ず明示。                                |
| **Contribution**       | 提案 → usage audit → accessibility review → implementation review → publish の順に通す。             |
| **Definition of done** | light/dark, AX5, VoiceOver, logs / notification transparency, copy review, snapshot diff を通過したら公開。 |

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Release checklist</strong></p>
<p>1) light/dark pass 2) Dynamic Type AX5 pass 3) contrast pass 4) logs / notification transparency pass 5) copy review pass 6) snapshot diff reviewed 7) token JSON published 8) deprecated items documented</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# **10. Appendix / Token JSON 抜粋**

本書では読みやすさのために抜粋のみ掲載する。完全版は同梱の JSON ファイルを source of truth とする。

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>{<br />
"color": {<br />
"light": {<br />
"background": {<br />
"app": {<br />
"value": "#FCFCFD"<br />
}<br />
},<br />
"text": {<br />
"primary": {<br />
"value": "#0F172A"<br />
}<br />
},<br />
"action": {<br />
"primary": {<br />
"value": "#2563EB"<br />
}<br />
},<br />
"status": {<br />
"warning": {<br />
"value": "#B45309"<br />
},<br />
"critical": {<br />
"value": "#DC2626"<br />
}<br />
}<br />
},<br />
"dark": {<br />
"background": {<br />
"app": {<br />
"value": "#020617"<br />
}<br />
},<br />
"text": {<br />
"primary": {<br />
"value": "#F8FAFC"<br />
}<br />
},<br />
"action": {<br />
"primary": {<br />
"value": "#2563EB"<br />
}<br />
}<br />
}<br />
},<br />
"space": {<br />
"1": {<br />
"value": 8<br />
},<br />
"2": {<br />
"value": 16<br />
},<br />
"3": {<br />
"value": 24<br />
},<br />
"4": {<br />
"value": 32<br />
}<br />
},<br />
"radius": {<br />
"md": {<br />
"value": 12<br />
},<br />
"lg": {<br />
"value": 16<br />
},<br />
"xl": {<br />
"value": 20<br />
},<br />
"pill": {<br />
"value": 999<br />
}<br />
},<br />
"grid": {<br />
"columns": {<br />
"value": 12<br />
},<br />
"gutter": {<br />
"value": 8<br />
}<br />
},<br />
"component": {<br />
"checkinHero": {<br />
"size": {<br />
"value": 160<br />
},<br />
"radius": {<br />
"value": 999<br />
}<br />
},<br />
"button": {<br />
"primary": {<br />
"height": {<br />
"value": 52<br />
},<br />
"radius": {<br />
"value": 16<br />
}<br />
}<br />
}<br />
}<br />
}</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**Included files**

- last_ok_design_system_v1_0.docx — 公開仕様書

- last_ok_design_tokens_v1_0.json — machine-readable token source

End of specification
