# Phase 2 Wedge Launch Channel Test Plan

## 結論

Phase 2では、Apple Ads / Google Search / Contact Referral / Trust Content を小額・高意図で検証する。広く集めるのではなく、高意図ユーザーを72h Armedまで通すことを優先する。

Broad Paid Socialは実施しない。初期大量出稿もしない。今回の文書は設計のみであり、広告アカウント操作、広告作成、配信開始、予算投入は行わない。

## チャネル優先順位

| 優先度 | チャネル | 方針 |
| --- | --- | --- |
| P0 | Apple Ads Search | App Store内の高意図検索だけを小額で検証する。 |
| P0 | Google Search high-intent | 課題が明確な検索語に絞る。恐怖訴求はしない。 |
| P0 | Contact Referral Loop | 連絡先同意後と月次透明性サマリーから、自然紹介を測る。 |
| P1 | Founder-Led Trust Content | 透明性、できないこと、通知ルールを記事で説明する。 |
| P1 | Community / Newsletter small placement | 小さな掲載のみ。高意図コミュニティに限定する。 |
| P3 | Broad Paid Social | Phase 2初期では実施しない。大量出稿しない。 |

## Apple Ads 小額テスト設計

### 目的

- App Store検索で、見守り、安否確認、連絡ルールに近い高意図ユーザーが反応するかを見る。
- 登録数ではなく、72h Armed Activation と NAD につながる流入かを見る。
- 料金誤認、救命保証誤認、通知到達保証誤認が起きないかを見る。

### 対象セグメント

- 一人暮らしの本人。
- 離れて暮らす家族に、本人の同意を前提に提案したい人。
- 毎日監視ではなく、未反応時の連絡ルールを決めたい人。
- 連絡先2名を用意できる人。

### 想定キーワードテーマ

- 安否確認 アプリ
- 見守り アプリ
- 一人暮らし 安否
- 親 安否確認
- 家族 見守り iPhone
- OKボタン 安否
- 連絡先 通知
- 未反応 通知

### 広告コピー案

- 反応が途切れた時の連絡ルールを、先に決めておく。
- 未反応時の連絡ルールを見える化。
- 2名同意で始める段階通知。
- 料金は月額300円。
- 毎日監視せず、未反応時のルールを本人と決める。

### 遷移先ページ

- App Store product page が主導線。
- LPで説明が必要な場合は `/before-you-start`、`/how-it-works`、`/pricing`、`/trust` を確認導線にする。
- 連絡先候補向けの説明には `/for-contacts` を使う。

### 成功指標

- App Store product page view to install。
- Install to signup started。
- Signup started to phone verified。
- Contact A/B added。
- Consent request sent。
- Consent completed。
- Armed state entered。
- 72h Armed Activation Rate。
- NAD。

### ガードレール指標

- Price Objection Rate。
- Misleading Claims Inquiry。
- Contact STOP Rate。
- STOP率。
- HELP率。
- SMS Delivery Success Rate。
- Support Contact Rate。
- Contact consent decline。

### 中止条件

- 救命保証と誤解した問い合わせが増える。
- 危険検知と誤解した問い合わせが増える。
- 通知到達や連絡先行動を保証すると誤解される。
- 料金は月額300円であることが伝わっていない。
- 2名URL同意が揃うまで通知が始まらないことが伝わっていない。
- STOP率が悪化する。
- 72h Armed Activation に進まない流入が多い。

## Google Search 小額テスト設計

### 目的

- 課題が明確な検索ユーザーが、LPで理解し、連絡先2名のURL同意まで進むかを見る。
- 価格、できないこと、通知の限界を読んだうえで、NADと72h Armedにつながるかを見る。

### キーワード群

- 安否確認 アプリ 一人暮らし
- 親 安否確認 アプリ
- 家族 見守り アプリ iPhone
- 一人暮らし 見守り 通知
- 毎日 OK 安否確認
- 連絡先 SMS 通知
- 未反応 連絡 ルール
- 家族 連絡 ルール

### 除外キーワード方針

- 緊急通報、自動通報、救急、警察、消防を強く求める検索は除外候補にする。
- 位置情報、GPS、心拍、体温、転倒検知を主目的にする検索は除外候補にする。
- 無料だけを探す検索、割引だけを探す検索は除外候補にする。
- 死亡確認、事故検知、病状検知を求める検索は除外候補にする。

### 広告コピー案

- 反応が途切れた時の連絡ルールを、先に決めておく。
- 未反応時の連絡ルールを見える化。
- 2名同意で始める段階通知。
- 料金は月額300円。
- 毎日監視せず、未反応時のルールを本人と決める。

### 遷移先ページ

- `/before-you-start`
- `/how-it-works`
- `/pricing`
- `/trust`
- `/for-family`
- `/for-contacts`

### 成功指標

- LP sessions。
- LP CTA click。
- Signup started。
- Phone verified。
- Contact A/B added。
- Consent request sent。
- Consent completed。
- Armed state entered。
- 72h Armed Activation Rate。
- NAD。

### ガードレール指標

- Bounce from `/pricing`。
- Price Objection Rate。
- Misleading Claims Inquiry。
- Contact STOP Rate。
- STOP率。
- SMS failure rate。
- L3+ Escalation Rate / 100 Armed Users。

### 中止条件

- 検索意図が救命、危険検知、緊急対応に寄りすぎる。
- LP CTA click はあるが、2名同意や72h Armedに進まない。
- 料金誤認が増える。
- 連絡先からの苦情やSTOP率が上がる。
- Broad Paid Social的な広い配信に近づく。

## Contact Referral Loop 設計

### 同意完了後CTA

- 連絡先がURL同意を完了した後に、本人への説明ページや `/for-contacts` を確認できる導線を出す。
- 紹介を強要しない。
- 連絡先の負担を増やさない。
- CTA文言は「同じように連絡ルールを決めたい人がいれば、説明ページを共有できます」程度に留める。

### 月次透明性サマリー内CTA

- 月次で、今月のOK、通知回数、同意状態、STOP状態、配信結果を見える形にする。
- その末尾で、紹介CTAを小さく置く。
- CTAは「家族や連絡先と同じ説明を見られるページを共有する」にする。

### 成功指標

- Contact-to-user Signup。
- Contact-to-user Armed。
- Share page view。
- Referral CTA click。
- Consent completed from referred users。
- NAD from referred users。

### STOP率ガードレール

- Contact Referral経由でSTOP率が上がる場合は止める。
- 紹介CTAが連絡先への圧に見える場合は止める。
- HELPや苦情が増える場合は止める。

## Trust Content 設計

### 最初に出す記事5本

1. あんぴッチが「しないこと」
2. 48時間で何が起きるか
3. 連絡先にはどんなSMSが届くか
4. なぜ2名同意が必要なのか
5. 月額300円と通知履歴の見方

### 記事の役割

- 販売よりも理解を優先する。
- 料金は月額300円であることを明確にする。
- 2名URL同意が揃うまで通知が始まらないことを説明する。
- 救命、発見、所在確認、通知到達、閲覧、連絡先行動を保証しないことを説明する。
- NADと72h Armedにつながるユーザーだけを残す。

## Community / Newsletter Small Placement

- 小さな掲載だけを検討する。
- 本人同意、連絡先2名、月額300円、できないことを説明できる媒体に限る。
- CVRよりも、72h Armed Activation と問い合わせ品質を見る。
- 価格割引でCVRを取りに行かない。

## 使う表現

- 反応が途切れた時の連絡ルールを、先に決めておく。
- 未反応時の連絡ルールを見える化。
- 2名同意で始める段階通知。
- 料金は月額300円。
- 毎日監視せず、未反応時のルールを本人と決める。

## 使わない表現

以下は広告コピー、LPコピー、SNS投稿の販売表現として使わない。ここでは禁止表現リストとしてのみ記録する。

- 孤独死を防ぐ
- 危険を検知する
- 死亡を検知する
- 助けが来る
- すぐ助けが来る
- 必ず見つかる
- 確実に届く
- これで安心

## 禁止事項

- 広告配信しない。
- 広告アカウントを触らない。
- Broad Paid Social大量出稿しない。
- 恐怖マーケティングしない。
- 価格割引でCVRを取りに行かない。
- App Store Connectの商品作成をしない。
- 本番課金開始をしない。
- Vercel CLI、deploy、本番SMS、本番DB、本番環境に触らない。
