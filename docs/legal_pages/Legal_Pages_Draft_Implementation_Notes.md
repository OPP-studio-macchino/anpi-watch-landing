# Legal Pages Draft Implementation Notes

## 今回作成したDraft route

- `/legal-review`
- `/legal-review/privacy`
- `/legal-review/terms`
- `/legal-review/specified-commercial-transactions`
- `/legal-review/privacy-choices`

これらはLegal / Product / CXレビュー用Draftです。本番公開・App Store提出には使用しません。

## `/legal-review/*` にした理由

- Privacy Policy URL / Terms URL / 特商法表記URLが未確定です。
- User Privacy Choices URLの必要性が未確定です。
- Legalレビュー前のため、正式なLegal URLとして見せないためです。
- footer、Manual、FAQ、グローバルナビから正式導線として扱わないためです。

## `/privacy` などを作らなかった理由

- `/privacy`、`/terms`、`/specified-commercial-transactions`、`/privacy-choices` は本番公開URL候補です。
- 事業者情報、削除方針、App Privacy回答、URLが未確認です。
- 本番Legal URLに見えるrouteを先に作ると、Legal最終版と誤認されるため、今回は作成していません。

## noindexにした理由

- レビュー用Draftであり、検索結果に出すページではないためです。
- 本番公開・App Store提出に使うページではないためです。
- 未確認情報が含まれるためです。

## footer / Manual / FAQへリンクしなかった理由

- Legalレビュー完了まで本番公開不可です。
- 事業者情報、URL、削除方針、App Privacy回答が未確定です。
- 正式導線は、正式Legal URL作成後に反映するためです。

## 反映した決定済み情報

- 月額300円。
- 課金方式は月額サブスクリプションのみ。
- Product IDは `anpi_watch.subscription.monthly.standard`。
- Subscription Display Nameは あんぴッチ 月額プラン。
- 36h / 42h / 48h通知は月額300円に含まれる。
- 36h以降追加料金なし。
- 通知ごとの追加請求なし。
- 2名URL同意が揃うまで通知は開始されない。
- 危険、事故、死亡、病状は検知しない。
- 救命、発見、所在確認、通知到達、連絡先の行動は保証しない。

## 未確認として表示した情報

- 事業者名。
- 住所。
- 電話番号。
- メールアドレス。
- 代表者名。
- 運営責任者名。
- Privacy Policy URL。
- Terms URL。
- 特商法表記URL。
- User Privacy Choices URLの必要性。
- データ削除方針。
- App Privacy回答。
- tracking判断。

未確認項目は「未確認 / 要Legal確認 / 要事業者確認」を使って表示しています。

## 次のDoing

- Legalレビュー。
- 事業者情報確定。
- `/privacy`、`/terms`、`/specified-commercial-transactions`、`/privacy-choices` の正式公開ページ作成。
- Manual / FAQ / Footerへ正式URL反映。
- iOS Settingsへ正式URL導線追加。

## やらないこと

- Legal最終版として扱わない。
- 本番公開ページとして扱わない。
- App Store Connect入力をしない。
- deployしない。
- 本番SMS、本番課金、本番DB、本番環境に触らない。
- `/anpi-watch` を変更しない。
