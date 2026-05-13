import Link from "next/link";

export default function HomePage() {
    return (
        <main className="wrapper">
            <section className="hero">
                <p className="badge">あんぴッチ</p>
                <h1>
                    毎日OKを1回押す。
                    <br />
                    反応がない時だけ、順番にお知らせします。
                </h1>
                <p className="lead">
                    あんぴッチは、毎日OKを記録するアプリです。 アプリを開くだけでは記録されません。
                    ホームでOKを押すと、今の時刻でOKを記録します。
                </p>
                <p className="lead">
                    最後にOKを押してから時間がたつと、24時間、30時間、36時間、42時間、48時間以上の順に進みます。
                    連絡先A/Bの2人の同意がそろうまで、自動通知は始まりません。
                </p>
                <div className="actions">
                    <a href="/manual/tutorial" className="primary">
                        3分体験コースを見る
                    </a>
                    <a href="/manual" className="secondary">
                        マニュアルを見る
                    </a>
                    <a href="/manual/faq" className="secondary">
                        FAQを見る
                    </a>
                </div>
            </section>

            <section id="features" className="features">
                <article>
                    <h2>毎日すること</h2>
                    <p>アプリのホームでOKを1回押します。押した時だけ、今の時刻でOKを記録します。</p>
                </article>
                <article>
                    <h2>連絡の順番</h2>
                    <p>24時間でスマホ通知、30時間で本人SMS、36時間で連絡先AへSMSを送ります。</p>
                </article>
                <article>
                    <h2>月額300円</h2>
                    <p>料金は月額300円です。</p>
                </article>
                <article>
                    <h2>このアプリがしないこと</h2>
                    <p>
                        危険、死亡、病気、今いる場所を判断しません。救助や発見を保証するものではありません。
                    </p>
                </article>
                <article>
                    <h2>2人の同意</h2>
                    <p>
                        連絡先Aと連絡先Bの2人が必要です。2人の同意がそろうまで自動通知は始まりません。
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
                <h2>信頼のために先に確認すること</h2>
                <p>
                    初めて見る方は、通知の順番、料金、できること・できないことから確認します。
                </p>
                <div className="actions">
                    <Link href="/how-it-works" className="secondary">
                        48時間の通知ルール
                    </Link>
                    <Link href="/pricing" className="secondary">
                        料金・課金方針
                    </Link>
                    <Link href="/trust" className="secondary">
                        できること・できないこと
                    </Link>
                </div>
            </section>

            <section id="trust-audience" className="contact">
                <h2>関係者別に確認する</h2>
                <p>
                    本人、家族、連絡先候補が同じ前提を確認できます。
                </p>
                <div className="actions">
                    <Link href="/for-family" className="secondary">
                        家族・パートナーの方へ
                    </Link>
                    <Link href="/for-contacts" className="secondary">
                        連絡先の方へ
                    </Link>
                    <Link href="/share-message" className="secondary">
                        説明文テンプレ
                    </Link>
                </div>
            </section>

            <section id="trust-operation" className="contact">
                <h2>運用時に確認する</h2>
                <p>
                    通知文面、受信停止、配信結果の読み方を確認できます。
                </p>
                <div className="actions">
                    <Link href="/notification-samples" className="secondary">
                        通知サンプル
                    </Link>
                    <Link href="/help/stop" className="secondary">
                        STOP / HELP
                    </Link>
                    <Link href="/delivery-status" className="secondary">
                        配信結果・通知ログ
                    </Link>
                </div>
            </section>

            <section id="trust-before" className="contact">
                <h2>登録前に確認する</h2>
                <p>
                    2名同意、毎日のOK、通信の限界が自分に合うか確認できます。
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
                <a href="mailto:info@anpi-watch.jp">info@anpi-watch.jp</a>
            </section>
        </main>
    );
}
