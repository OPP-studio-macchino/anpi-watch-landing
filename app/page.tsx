import Link from "next/link";

export default function HomePage() {
    return (
        <main className="wrapper">
            <section className="hero">
                <p className="badge">あんぴッチ</p>
                <h1>反応が途切れた時の連絡ルールを、先に決めておく。</h1>
                <p className="lead">
                    あんぴッチは、毎日のOKが一定時間途切れた場合に、登録・同意済みの連絡先へ段階通知を試行するアプリです。
                </p>
                <p className="lead">
                    本人が24時間以上OKを押していない場合は本人へ、36時間以上続くと登録・同意済みの連絡先へ通知します。
                </p>
                <div className="actions">
                    <Link href="/how-it-works" className="primary">
                        48時間の通知ルールを見る
                    </Link>
                    <Link href="/notification-samples" className="secondary">
                        連絡先に届く文面を見る
                    </Link>
                    <Link href="/before-you-start" className="secondary">
                        登録前チェックリストを見る
                    </Link>
                </div>
            </section>

            <section id="features" className="features">
                <article>
                    <h2>毎日すること</h2>
                    <p>
                        アプリのホームでOKを1回押します。押した時だけ、今の時刻で安否OKを記録します。
                    </p>
                </article>
                <article>
                    <h2>連絡の順番</h2>
                    <p>
                        24時間で本人へ通知、30時間で本人SMS、36時間で連絡先A、42時間で連絡先B、48時間でA/BへSMS送信を試行します。
                    </p>
                </article>
                <article>
                    <h2>月額300円</h2>
                    <p>料金は月額300円です。</p>
                </article>
                <article>
                    <h2>このアプリがしないこと</h2>
                    <p>
                        危険、死亡、病気、今いる場所を判断しません。救命・発見・所在確認は保証しません。
                    </p>
                </article>
                <article>
                    <h2>2名の同意</h2>
                    <p>
                        連絡先Aと連絡先Bの2名が必要です。2名同意が揃うまで通知は開始されません。
                    </p>
                </article>
                <article>
                    <h2>記録を見返す</h2>
                    <p>
                        設定から、誰に、いつ送ったかを見られます。送信の結果と通知履歴も残ります。
                    </p>
                </article>
            </section>

            <section id="trust-foundation" className="contact">
                <h2>はじめに知っておきたいこと</h2>
                <p>
                    通知の流れ、月額300円の料金、このアプリでできること・できないことを確認できます。
                </p>
                <div className="actions">
                    <Link href="/how-it-works" className="secondary">
                        48時間の通知ルールを見る
                    </Link>
                    <Link href="/notification-samples" className="secondary">
                        連絡先に届く文面を見る
                    </Link>
                    <Link href="/before-you-start" className="secondary">
                        登録前チェックリストを見る
                    </Link>
                </div>
            </section>

            <section id="trust-audience" className="contact">
                <h2>立場に合わせて読む</h2>
                <p>
                    本人に提案したい方、連絡先としてSMSを受け取る方、説明文を準備したい方はこちら。
                </p>
                <div className="actions">
                    <Link href="/for-family" className="secondary">
                        本人に提案したい方へ
                    </Link>
                    <Link href="/for-contacts" className="secondary">
                        連絡先としてSMSを受け取る方へ
                    </Link>
                    <Link href="/share-message" className="secondary">
                        提案・依頼の文面テンプレ
                    </Link>
                </div>
            </section>

            <section id="trust-operation" className="contact">
                <h2>通知を受け取った時・送った後</h2>
                <p>実際の通知文、受信停止、配信結果の見方を確認できます。</p>
                <div className="actions">
                    <Link href="/notification-samples" className="secondary">
                        通知サンプル
                    </Link>
                    <Link href="/help/stop" className="secondary">
                        受信停止・HELP
                    </Link>
                    <Link href="/delivery-status" className="secondary">
                        通知履歴・配信結果の見方
                    </Link>
                </div>
            </section>

            <section id="trust-before" className="contact">
                <h2>登録前にチェックする</h2>
                <p>
                    連絡先2名のURL同意、毎日のOK、通知が届かない場合があることを確認してから始められます。
                </p>
                <div className="actions">
                    <Link href="/before-you-start" className="secondary">
                        登録前チェックリスト
                    </Link>
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>使い方に迷った時</h2>
                <p>まず3分体験コースを見ます。次に、くわしいマニュアルとFAQを見ます。</p>
                <div className="actions">
                    <a href="/manual/tutorial" className="primary">
                        3分体験コース
                    </a>
                    <a href="/manual" className="secondary">
                        マニュアル
                    </a>
                    <a href="/manual/faq" className="secondary">
                        FAQ
                    </a>
                </div>
                <a href="mailto:support@anpi-watch.app">support@anpi-watch.app</a>
            </section>
        </main>
    );
}
