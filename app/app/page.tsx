const promises = [
  {
    title: "判断しないことを隠さない",
    body: "危険、死亡、病気、今いる場所を判断しません。救助や発見を保証するものでもありません。"
  },
  {
    title: "48時間以上まで順番に進む",
    body: "24時間で本人へスマホ通知、30時間で本人SMS、36時間で連絡先A、42時間で連絡先Bへ進みます。"
  },
  {
    title: "通知と追加料金の記録が見える",
    body: "誰に、いつ送ったかを見られます。結果も残ります。追加料金の記録も見られます。"
  }
];

const timeline = [
  { time: "24時間", label: "本人へスマホ通知", detail: "まず本人のスマホに通知します。" },
  { time: "30時間", label: "本人SMS", detail: "本人へSMSを送ります。" },
  { time: "36時間", label: "連絡先A + 追加料金", detail: "連絡先AへSMSを送ります。この時点で追加料金が1回かかります。" },
  { time: "42時間", label: "連絡先B", detail: "連絡先BへSMSを送ります。追加料金は増えません。" },
  { time: "48時間以上", label: "A/Bへ最後のSMS", detail: "連絡先A/Bへ最後のSMSを送ります。追加料金は増えません。" }
];

const interfaceCards = [
  {
    title: "毎日の操作は1アクション",
    body: "ホームでOKを1回押します。アプリを開くだけでは記録されません。"
  },
  {
    title: "連絡先は2名固定スロット",
    body: "A/Bで登録します。2人の同意がそろうまで自動通知は始まりません。"
  },
  {
    title: "透明性を隠さない",
    body: "通知の記録と追加料金の記録を設定から確認できます。"
  }
];

const faqs = [
  {
    q: "これは緊急通報や救命サービスですか？",
    a: "いいえ。危険や死亡を判断するアプリではありません。救助や発見を保証するものでもありません。"
  },
  {
    q: "今いる場所を判断しますか？",
    a: "いいえ。今いる場所を判断しません。病気かどうかも判断しません。"
  },
  {
    q: "連絡先は何人必要ですか？",
    a: "連絡先Aと連絡先Bの2人が必要です。2人の同意がそろうまで自動通知は始まりません。"
  },
  {
    q: "いつ追加料金がかかりますか？",
    a: "36時間で連絡先AへSMSを送ると、1回分の追加料金がかかります。同じ回では最大1回です。42時間や48時間では増えません。"
  }
];

export default function HomePage() {
  return (
    <main className="marketing-shell">
      <header className="site-header">
        <div className="content header-inner">
          <a className="brand" href="#top" aria-label="LAST OK のトップへ移動">
            <span className="brand-mark" aria-hidden="true">LO</span>
            <span>LAST OK</span>
          </a>
          <nav className="header-nav" aria-label="セクション">
            <a href="#promise">約束</a>
            <a href="#flow">仕組み</a>
            <a href="#interface">画面</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="content hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">毎日OKを記録するアプリ</p>
            <h1>最後のOKから時間がたつと、<br />順番にお知らせします。</h1>
            <p className="hero-lead">
              あんぴッチは、毎日OKを1回記録するアプリです。
              アプリを開くだけでは記録されません。
              OKを押すと、今の時刻でOKを記録します。
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#flow">通知の順番を見る</a>
              <a className="button secondary" href="#interface">想定画面を見る</a>
            </div>

            <ul className="proof-list" aria-label="サービスの要点">
              <li>2人の同意がそろうまで自動通知は始まらない</li>
              <li>通知の記録と追加料金の記録を確認できる</li>
              <li>危険や死亡を判断するアプリではない</li>
            </ul>
          </div>

          <aside className="hero-panel" aria-label="ホーム画面のプレビュー">
            <div className="device-card">
              <div className="device-header">
                <span className="device-time">9:41</span>
                <span className="status-pill good">通知前</span>
              </div>

              <div className="ok-ring" aria-hidden="true">
                <div>
                  <span>今日の確認</span>
                  <strong>OK</strong>
                </div>
              </div>

              <div className="mini-card">
                <p className="mini-kicker">次の予定</p>
                <strong>24時間で本人へスマホ通知</strong>
                <p>連絡先にはまだ送りません。</p>
              </div>

              <ol className="mini-timeline" aria-label="通知の順番の例">
                {timeline.slice(0, 4).map((item) => (
                  <li key={item.time}>
                    <span>{item.time}</span>
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section id="promise" className="section-block">
        <div className="content">
          <div className="section-heading">
            <p className="eyebrow">このアプリの約束</p>
            <h2>できることと、できないことを分けます。</h2>
            <p>
              毎日することは、ホームでOKを1回押すことです。
              ただし、2人の同意、通知の順番、追加料金、できないことは隠しません。
            </p>
          </div>

          <div className="promise-grid">
            {promises.map((item) => (
              <article key={item.title} className="surface-card promise-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="section-block section-tint">
        <div className="content">
          <div className="section-heading narrow">
            <p className="eyebrow">通知の順番</p>
            <h2>最後のOKから時間がたつと、順番に進みます。</h2>
            <p>
              24時間では本人だけです。
              36時間で連絡先AへSMSを送ると、追加料金が1回かかります。
              同じ回では最大1回です。
            </p>
          </div>

          <ol className="timeline-grid" aria-label="通知のタイムライン">
            {timeline.map((item) => (
              <li key={item.time} className="surface-card timeline-card">
                <p className="timeline-time">{item.time}</p>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="interface" className="section-block">
        <div className="content interface-layout">
          <div className="section-heading narrow left-align">
            <p className="eyebrow">画面の考え方</p>
            <h2>見る場所を少なくします。</h2>
            <p>
              ホームでは、今の状態、最後のOK、OKから、次の予定を見ます。
              設定では、通知の確認、料金、通知の記録を見ます。
            </p>
          </div>

          <div className="interface-grid">
            {interfaceCards.map((item, index) => (
              <article key={item.title} className="surface-card interface-card">
                <span className="step-badge">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tint">
        <div className="content reassurance-grid">
          <article className="surface-card reassurance-card">
            <p className="eyebrow">毎日使う人へ</p>
            <h2>することは、OKを押すことです。</h2>
            <p>
              たくさんの操作は必要ありません。
              ホームでOKを押し、最後のOKの時刻を見ます。
              アプリを開くだけでは記録されません。
            </p>
          </article>
          <article className="surface-card reassurance-card">
            <p className="eyebrow">正直な前提</p>
            <h2>できないことも先に伝えます。</h2>
            <p>
              連絡先の同意が2人そろうまで、自動通知は始まりません。
              追加料金は予告します。
              記録はあとから見られます。
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="section-block">
        <div className="content faq-layout">
          <div className="section-heading narrow left-align">
            <p className="eyebrow">FAQ</p>
            <h2>最初に誤解されやすい点を先に説明する。</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="surface-card faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="beta" className="section-block cta-section">
        <div className="content">
          <div className="cta-card">
            <div>
              <p className="eyebrow">最後に確認</p>
              <h2>毎日OK。長くない時だけ、順番にお知らせします。</h2>
              <p>
                毎日OKを1回押します。
                2人の同意がそろうまで自動通知は始まりません。
                36時間で連絡先AへSMSを送ると、追加料金が1回かかります。
              </p>
            </div>
            <div className="cta-actions">
              <a className="button primary" href="#top">上に戻る</a>
              <a className="button secondary" href="#promise">約束を見直す</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
