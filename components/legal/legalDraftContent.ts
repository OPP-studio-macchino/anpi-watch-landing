import type { Metadata } from "next";

export const draftNoindexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
  },
};

export const unknownStatus = "未確認 / 要Legal確認 / 要事業者確認";
export const legalReviewStatus = "未確認 / 要Legal確認";
export const businessReviewStatus = "未確認 / 要事業者確認";

export const draftNoticeItems = [
  "このページはLegal / Product / CXレビュー用Draftです。",
  "本番公開・App Store提出には使用しません。",
  "未確認情報が含まれます。",
  "事業者情報・URL・削除方針・App Privacy回答は未確定です。",
];

export const legalReviewLinks = [
  {
    href: "/legal-review/privacy",
    title: "Privacy Policy Draft",
    description: "データ収集、利用目的、外部送信、削除、privacy choicesを確認するDraftです。",
  },
  {
    href: "/legal-review/terms",
    title: "Terms Draft",
    description: "サービス内容、利用条件、料金、解約、免責、連絡先同意を確認するDraftです。",
  },
  {
    href: "/legal-review/specified-commercial-transactions",
    title: "特商法表記 Draft",
    description: "表示項目候補、決定済み情報、未確認の事業者情報を確認するDraftです。",
  },
  {
    href: "/legal-review/privacy-choices",
    title: "User Privacy Choices Draft",
    description: "削除、同意撤回、STOP、連絡先本人からの依頼を確認するDraftです。",
  },
];

export const nonProductionRouteNotes = [
  "/legal-review/* はLegal / Product / CXレビュー用のDraft routeです。",
  "/privacy、/terms、/specified-commercial-transactions、/privacy-choices は今回作成していません。",
  "本番用Legal URL、App Store Connect入力、App Store提出には使用しません。",
  "footer、Manual、FAQ、グローバルナビから正式導線としてリンクしていません。",
];

export const decidedServiceFacts = [
  "サービス名は、あんぴッチ / anpi-watchです。",
  "本人のOKが一定時間途切れた場合に、登録・同意済み連絡先へ段階通知を試行します。",
  "連絡先2名の2名URL同意が揃うまで通知は開始されない設計です。",
  "本サービスは、警察、消防、救急、自治体、病院、警備会社への自動通報又は代行通報サービスではありません。",
  "BillingEventは課金ではなく通知エピソード監査ログです。",
  "L5 email assistはplaceholder logのみで、実送信は未実装です。",
];

export const pricingFacts = [
  "料金は月額300円です。",
  "課金方式は月額サブスクリプションのみです。",
  "Product IDは anpi_watch.subscription.monthly.standard です。",
  "Subscription Display Nameは あんぴッチ 月額プラン です。",
  "36h / 42h / 48h通知は月額300円に含まれます。",
  "36h以降追加料金なしです。",
  "通知ごとの追加請求なしです。",
  "36h用 Consumable IAPは作成しません。",
  "App Store Connect商品作成、本番課金開始は別Doingです。",
];

export const noGuaranteeFacts = [
  "本サービスは、危険、事故、死亡、病状を検知しません。",
  "救命、発見、所在確認、通知到達、連絡先の行動は保証しない設計です。",
  "通知は、通信状況、端末設定、OS設定、外部provider、迷惑メッセージ判定、障害、送信上限の影響を受けます。",
  "providerが送信要求を受理したことは、受信者の閲覧、理解、返信、対応を意味しません。",
  "緊急の危険がある場合は、公的緊急手段又は他の適切な手段を使う必要があります。",
];

export const legalUrlReadinessItems = [
  "Privacy Policy URLは未確定です。",
  "Terms URLは未確定です。",
  "特商法表記URLは未確定です。",
  "User Privacy Choices URLの必要性は未確定です。",
  "事業者情報、住所、電話番号、メールアドレス、代表者名、運営責任者名は未確認です。",
  "Legalレビュー完了まで本番公開不可です。",
];

export const privacyDataRows = [
  ["user phone number", "実装証跡あり", "本人確認、SMS、アカウント識別に使われる可能性。"],
  ["contact name", "実装証跡あり", "連絡先登録、同意、通知説明に使われる可能性。"],
  ["contact phone number", "実装証跡あり", "Twilio SMS送信、同意URL、STOP/HELP処理に関係する。"],
  ["device token", "実装証跡あり", "backend認証又は端末識別に使われる可能性。"],
  ["APNs token", "実装証跡あり", "Apple / APNsへのPush通知に使われる。"],
  ["OK timestamp / CheckinEvent", "実装証跡あり", "OK操作、最終反応時刻、通知段階判定に使われる。"],
  ["consent status", "実装証跡あり", "連絡先同意状態、STOP状態、稼働条件確認に使われる。"],
  ["consent ledger", "実装証跡あり", "同意証跡として保持される可能性。"],
  ["consent IP address", "実装証跡あり", "同意URLアクセス証跡として保持される可能性。"],
  ["consent user agent", "実装証跡あり", "同意URLアクセス証跡として保持される可能性。"],
  ["notification logs", "実装証跡あり", "SMS / Push / email placeholderの送信履歴、provider結果に関係する。"],
  ["SMS provider SID / MessageSid", "実装証跡あり", "Twilio送信結果、inbound、status callbackの照合に使われる。"],
  ["Twilio status callback payload", "実装証跡あり", "status/errorの保持範囲は要Engineering確認。"],
  ["inbound STOP / START / HELP body", "実装証跡あり", "STOP、START、HELP、その他本文の保持範囲は要Legal確認。"],
  ["Episode", "実装証跡あり", "通知エピソード監査ログに関係する。"],
  ["BillingEvent / notification episode audit log", "実装証跡あり", "課金ではなく通知エピソード監査ログ。"],
  ["JobHeartbeat", "実装証跡あり", "job監視、障害調査に関係する。"],
  ["support inquiry data", "未確認", "support窓口、問い合わせフォーム、support toolは要CX / Engineering確認。"],
  ["subscription / Apple transaction data if implemented", "将来確認対象", "StoreKit実装後にApp PrivacyとPrivacy Policyを再確認する。"],
  ["email placeholder", "実装証跡あり", "L5 email assistはplaceholder logのみで、実送信は未実装。"],
];

export const privacyPurposeItems = [
  "本人確認、アカウント識別、セッション管理。",
  "連絡先登録、連絡先2名のURL同意、同意撤回、STOP状態管理。",
  "本人のOK時刻記録、36h / 42h / 48h の段階通知判定。",
  "SMS / Push通知の送信試行、配信結果、通知履歴、障害調査。",
  "STOP / START / HELP、誤登録、同意拒否、再同意への対応。",
  "サポート、問い合わせ、苦情、削除依頼、返金/解約問い合わせへの対応。",
  "不正利用、過剰送信、障害、provider callback失敗、セキュリティ調査。",
  "サブスクリプション管理 if implemented。",
];

export const privacyProviderRows = [
  ["Twilio", "SMS送信、status callback、STOP / START / HELP inbound", "phone number, contact phone, SMS body, MessageSid, status callback, inbound body", "実装証跡あり / 要Legal確認"],
  ["Apple / APNs", "Push通知", "APNs token, push payload, apns-id", "実装証跡あり / 要Legal確認"],
  ["App Store / StoreKit", "月額300円サブスクリプション管理 if implemented", "Product ID, transaction, subscription status", "Product ID Decision済み / StoreKit実装は別Doing"],
  ["Email provider if future implementation", "L5 email assist又はsupport通知", "email address, email body, delivery status", "実送信not found / 将来確認対象"],
  ["Hosting / infrastructure provider if applicable", "API、同意URL、logs", "IP address, user agent, request path, access logs", "Provider未確認 / 要Engineering確認"],
  ["Analytics provider if any", "利用状況分析 if implemented", "events, identifiers, app/device info", "実装not found / tracking判断は要Legal確認"],
];

export const privacyRetentionItems = [
  "保持期間、削除対象、保持例外、backup保持、provider側保持、同意証跡保持は未確認です。",
  "Consent Workflowでは、連絡先本人の同意証跡をappend-only consent ledgerとして保持する方針が示されています。",
  "削除請求に対し、同意証跡、STOP履歴、通知ログ、課金・返金・不正防止・紛争対応に必要な情報をどこまで保持するかは要確認です。",
  "Privacy PolicyとUser Privacy Choicesで整合確認が必要です。",
];

export const privacyChoicesItems = [
  "問い合わせ。",
  "アカウント削除依頼。",
  "データ削除依頼。",
  "連絡先同意の撤回。",
  "STOP。",
  "START / 再同意。",
  "サブスクリプション解約。",
  "連絡先本人からの削除/問い合わせ依頼。",
  "User Privacy Choices URLがApp Store Connectで必要かは未確認 / 要Legal確認です。",
];

export const privacyNoGoItems = [
  "App Privacy回答が実装又は第三者送信と一致していない。",
  "Privacy Policy URLが未確定。",
  "User Privacy Choices URL要否が未確認のまま提出する。",
  "tracking判断をLegal確認せず決めている。",
  "データ保持/削除方針が未確認。",
  "事業者情報、問い合わせ窓口、削除依頼窓口が未確認。",
];

export const privacyReviewRows = [
  ["Legal", "App Privacy category、user-linked、tracking、第三者送信、国外処理の最終判断。Privacy Policy URL、User Privacy Choices URL、Terms URL、特商法表記URLの要否と公開状態。"],
  ["Product", "ユーザーと連絡先に説明するデータ利用目的、月額300円、36h以降追加料金なし、通知ごとの追加請求なし、2名URL同意、保証しない説明の整合。"],
  ["Engineering", "本番予定のhosting、monitoring、analytics、support tool、server logs、backup保持。Twilio status callback raw payload、APNs payload、NotificationLog本文の保存範囲。"],
  ["CX", "STOP / START / HELP、削除依頼、連絡先本人問い合わせ、返金/解約問い合わせの窓口と本人確認。"],
];

export const termsServiceItems = [
  "本人のOKが一定時間途切れた場合に、登録・同意済み連絡先へ段階通知を試行します。",
  "36h / 42h / 48h の連絡先通知は月額300円のサブスクリプションに含まれます。",
  "連絡先2名の2名URL同意が揃うまで通知は開始されません。",
  "月額300円のApp Storeサブスクリプションを前提とします。",
  "BillingEventは課金ではなく通知エピソード監査ログです。",
  "L5 email assistはplaceholder logのみで、実送信は未実装です。",
];

export const termsUseConditionRows = [
  ["本人電話番号", "本人が利用可能な電話番号が必要。"],
  ["iPhone利用", "iOSアプリ利用を前提。動作環境の最終表記は未確認。"],
  ["SMS受信可能性", "本人確認、同意、STOP / HELP等にSMSが関係する可能性。"],
  ["Push通知利用可能性", "APNs token登録とPush通知許可が必要になる可能性。"],
  ["連絡先2名の同意", "2名同意 / URL同意が揃うまで通知は開始されない。"],
  ["正確な連絡先情報", "連絡先名、電話番号、同意状態を正確に保つ必要がある。"],
];

export const termsProhibitedItems = [
  "第三者の電話番号、氏名、連絡先情報を無断で登録すること。",
  "連絡先本人による同意なしに利用すること。",
  "虚偽又は不正確な情報を登録すること。",
  "本サービスだけに救命用途を依存すること。",
  "公的緊急通報、医療判断、警備会社出動の代替として利用すること。",
  "不正アクセス、token改ざん、同意URLの濫用、過剰な再招待、迷惑行為を行うこと。",
  "SMS、Push、App Store、backend、外部providerに過度な負荷を与えること。",
];

export const termsCancelItems = [
  "解約はApp Store subscription管理で行う想定です。",
  "App Store Connect商品作成、StoreKit実装、解約後のアプリ状態、support運用は未確認です。",
  "アカウント削除やアプリ削除だけでは、Apple側のサブスクリプションが解約されない場合があります。",
  "この説明を規約、Privacy Policy、User Privacy Choices、FAQ、support macroで一致させる必要があります。",
];

export const termsContactConsentItems = [
  "ユーザーが連絡先番号を入力しただけでは、連絡先本人の同意になりません。",
  "連絡先2名の2名URL同意が揃うまで通知は開始されません。",
  "連絡先が同意しない、同意を撤回する、STOPする、番号が不達になる場合、通知稼働条件を満たさなくなることがあります。",
  "STOP後は、再同意が完了するまで運用通知を停止します。",
  "連絡先本人からの削除/問い合わせ依頼の処理は、Legal / CX / Engineering確認が必要です。",
];

export const termsNoGoItems = [
  "規約が救命、発見、所在確認、通知到達、連絡先対応を保証しているように見える。",
  "2名同意前に通知稼働するように読める。",
  "月額300円表示、36h以降追加料金なし、通知ごとの追加請求なしがApp Store表示と一致しない。",
  "解約、返金、Appleサブスクリプション管理、アカウント削除の説明が未確認。",
  "事業者情報、問い合わせ窓口、準拠法/紛争解決が未確認のまま本番公開する。",
];

export const termsReviewRows = [
  ["Legal", "規約全体の責任制限、免責、消費者向け表現、App Store課金との整合。禁止事項、連絡先同意、STOP、削除依頼、support対応の法的妥当性。準拠法、紛争解決、問い合わせ窓口、事業者情報。"],
  ["CX", "解約、返金、STOP / HELP、誤登録、SMS不達、削除依頼のsupport macroと一致するか。連絡先本人からの問い合わせに説明できるか。"],
  ["Product", "月額300円、36h以降追加料金なし、通知ごとの追加請求なし、2名URL同意がApp Store、LP、FAQ、Paywallと一致するか。App Store説明、Screenshot copy、Custom Product Pageと保証しない説明が一致するか。"],
  ["Engineering", "2名URL同意が揃うまで通知が開始されない実装確認。STOP後の送信停止、notification logs、BillingEventの説明と実装の一致。StoreKit実装、解約後状態、receipt / transaction handling、Sandbox test plan。"],
];

export const sctaDisplayRows = [
  ["販売事業者", unknownStatus, "Blocker"],
  ["代表者名", unknownStatus, "Blocker"],
  ["運営責任者名", unknownStatus, "Blocker"],
  ["所在地", unknownStatus, "Blocker"],
  ["電話番号", unknownStatus, "Blocker"],
  ["メールアドレス", unknownStatus, "Blocker"],
  ["販売価格", "月額300円", "決定済み"],
  ["商品代金以外の必要料金", "インターネット接続料、通信料、SMS受信料等の扱いは要Legal確認。36h以降追加料金なし、通知ごとの追加請求なし。", "要Legal確認"],
  ["支払方法", "App Storeサブスクリプション想定", "App Store Connect入力は別Doing"],
  ["支払時期", "Appleのサブスクリプション管理に従う想定", "要Legal確認"],
  ["サービス提供時期", "課金、本人確認、連絡先2名のURL同意、稼働条件との関係を要確認", "要Product / Engineering確認"],
  ["解約方法", "App Store subscription管理想定", "StoreKit / CX確認が必要"],
  ["返品・キャンセル", "未確認", "要Legal確認"],
  ["動作環境", "iPhone、iOS、SMS、Push、通信環境の最終表記は未確認", "要Engineering確認"],
  ["特別条件", "2名同意 / URL同意が揃うまで通知は開始されない", "決定済み"],
];

export const sctaUnconfirmedItems = [
  `事業者名: ${unknownStatus}`,
  `住所: ${unknownStatus}`,
  `電話番号: ${unknownStatus}`,
  `メールアドレス: ${unknownStatus}`,
  `代表者名: ${unknownStatus}`,
  `運営責任者名: ${unknownStatus}`,
  `返金/キャンセル方針: ${unknownStatus}`,
  `解約導線: ${unknownStatus}`,
  `App Store課金開始日: ${unknownStatus}`,
  `消費税表記: ${unknownStatus}`,
  `動作環境の最終表記: ${unknownStatus}`,
  "Privacy Policy URL / Terms URL / 特商法表記URL: 未確定",
];

export const sctaDisplayCautions = [
  "救命保証なし。",
  "危険、事故、死亡、病状の検知なし。",
  "発見、所在確認、通知到達、連絡先行動を保証しない。",
  "通知は登録・同意済み連絡先への試行であり、公的緊急通報、自動救急要請、警備会社出動ではありません。",
  "月額300円には36h / 42h / 48h通知が含まれ、通知ごとの追加請求なしです。",
  "2名URL同意が揃うまで通知は開始されない設計です。",
];

export const sctaReviewRows = [
  ["Legal", "特商法上必要な表示項目、表示方法、電話番号表示、問い合わせ窓口の妥当性。消費税表記、返金/キャンセル、解約、Apple IAP返金手続との整合。"],
  ["CX", "解約、返金、問い合わせ、STOP / HELP、誤登録、通知不達に関するsupport macroと一致するか。特商法表記から問い合わせ導線へ迷わず到達できるか。"],
  ["Product", "Paywall、App Store商品表示、LP、FAQ、特商法表記で月額300円と追加料金なしが一致するか。本番課金開始Decisionなしに販売開始を示していないか。"],
];

export const sctaNoGoItems = [
  "事業者名、住所、電話番号、メールアドレス、代表者名、運営責任者名が未確認。",
  "Privacy Policy URL / Terms URL / 特商法表記URLが未確定。",
  "App Store価格と特商法/LP/FAQ価格が不一致。",
  "解約、返金、キャンセル説明が未確認。",
  "救命保証、危険検知、通知到達保証、連絡先行動保証に見える。",
  "App Store Connect商品作成又は本番課金開始が未実施なのに販売開始済みに見える。",
];

export const privacyChoiceRows = [
  ["OK操作をやめる", "OKが途切れると段階通知判定に進む可能性があるため、説明が必要。", "要Product確認"],
  ["連絡先変更", "連絡先変更時は新しい連絡先のURL同意が必要。", "要Engineering確認"],
  ["連絡先同意の再取得", "STOP、番号変更、同意失効時の再同意フロー確認が必要。", "要Engineering / CX確認"],
  ["STOP / START / HELP", "Twilio inboundと自社状態の扱いをPrivacy Policy / Termsと一致させる。", "要Legal / Engineering確認"],
  ["アカウント削除依頼", "アプリ内導線、support導線、削除後の通知停止を確認する。", "未確認"],
  ["データ削除依頼", "削除対象、保持例外、本人確認、回答期限を確認する。", "未確認"],
  ["サポート問い合わせ", "問い合わせ窓口、保存データ、保持期間が未確認。", "要CX確認"],
  ["サブスクリプション解約", "Apple subscription管理で行う想定。アカウント削除とは別に説明する。", "要Legal / Product確認"],
];

export const contactChoiceRows = [
  ["URL同意しない", "連絡先本人が同意しなければ運用通知は開始されない。", "決定済み"],
  ["STOP", "STOP後は再同意まで運用通知を停止する。", "要Engineering確認"],
  ["HELP", "サービス説明、停止方法、問い合わせ導線を案内する。", "要CX確認"],
  ["START / 再同意", "再同意の条件、本人確認、同意証跡を確認する。", "要Legal / Engineering確認"],
  ["削除/問い合わせ依頼", "連絡先本人からの依頼処理、本人確認、保持例外を確認する。", "未確認"],
];

export const privacyChoicesUnconfirmedItems = [
  "アプリ内削除導線。",
  "削除依頼受付窓口。",
  "削除対象データ。",
  "同意証跡の保持期間と削除例外。",
  "STOP履歴、通知ログ、Twilio MessageSid、raw payloadの保持期間。",
  "Apple transaction dataの扱い if implemented。",
  "サポート問い合わせデータの保持。",
  "連絡先本人からの削除依頼処理。",
  "User Privacy Choices URLの必要性。",
  "Privacy Policy URL、Terms URL、特商法表記URLとの整合。",
];

export const dataDeletionRows = [
  ["account / phone", "削除又は無効化候補", "不正防止、紛争、課金/返金、法令対応", "Legal / Engineering"],
  ["contacts", "削除又は無効化候補", "同意証跡、STOP履歴、誤送信/苦情対応", "Legal / CX"],
  ["consent ledger", "原則保持候補", "同意証明、STOP後再送防止", "Legal"],
  ["notification logs", "削除又はマスキング候補", "配信調査、苦情、監査", "Legal / Engineering / CX"],
  ["BillingEvent", "通知エピソード監査ログ", "課金ではないが監査・support用途あり", "Product / Legal / Engineering"],
  ["Apple transaction data if implemented", "Apple手続に従う候補", "課金、返金、会計、App Store要件", "Legal / Engineering"],
  ["support inquiry data", "削除又は保持期間設定候補", "問い合わせ再発、紛争対応", "CX / Legal"],
];

export const privacyChoicesReviewRows = [
  ["Legal", "User Privacy Choices URLの必要性。削除/開示/利用停止/同意撤回/第三者提供停止の範囲。連絡先本人の権利行使とユーザー本人の通知ログの関係。"],
  ["Product", "ユーザー向け画面で削除、解約、STOP、再同意をどの順序で説明するか。月額300円、36h以降追加料金なし、通知ごとの追加請求なし、2名URL同意の説明がTerms / FAQと一致するか。"],
  ["Engineering", "アカウント削除導線、APNs token無効化、同意リンク無効化、エスカレーション対象除外。backend削除/マスキング処理、backup、logs、provider側保持。"],
  ["CX", "削除依頼、連絡先本人問い合わせ、STOP / HELP、返金/解約問い合わせのsupport macro。本人確認、回答期限、エスカレーション先。"],
];

export const privacyChoicesNoGoItems = [
  "User Privacy Choices URL要否が未確認。",
  "削除依頼窓口、削除対象、保持例外が未確認。",
  "tracking判断をLegal確認せず決めている。",
  "App Privacy回答、Privacy Policy、Terms、support macroが不一致。",
  "アカウント削除とApple subscription解約を混同している。",
];
