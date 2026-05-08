export default function HomePage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">あんぴッチ</p>
        <h1>毎日OKを1回押す。
          <br />
          反応がない時だけ、順番にお知らせします。
        </h1>
        <p className="lead">
          あんぴッチは、毎日OKを記録するアプリです。
          アプリを開くだけでは記録されません。
          ホームでOKを押すと、今の時刻でOKを記録します。
        </p>
        <p className="lead">
          OKが長くない時は、24時間、30時間、36時間、42時間、48時間以上の順に進みます。
          連絡先A/Bの2人の同意がそろうまで、自動通知は始まりません。
        </p>
        <div className="actions">
          <a href="/manual/tutorial" className="primary">3分体験コースを見る</a>
          <a href="/manual" className="secondary">マニュアルを見る</a>
          <a href="/manual/faq" className="secondary">FAQを見る</a>
        </div>
      </section>

      <section id="features" className="features">
        <article>
          <h2>毎日すること</h2>
          <p>ホームでOKを1回押します。押した時だけ、今の時刻でOKを記録します。</p>
        </article>
        <article>
          <h2>連絡の順番</h2>
          <p>24時間でスマホ通知、30時間で本人SMS、36時間で連絡先AへSMSを送ります。</p>
        </article>
        <article>
          <h2>追加料金</h2>
          <p>36時間で連絡先AへSMSを送ると、1回分の追加料金がかかります。同じ回では最大1回です。</p>
        </article>
        <article>
          <h2>このアプリがしないこと</h2>
          <p>危険、死亡、病気、今いる場所を判断しません。救助や発見を保証するものではありません。</p>
        </article>
        <article>
          <h2>2人の同意</h2>
          <p>連絡先Aと連絡先Bの2人が必要です。2人の同意がそろうまで自動通知は始まりません。</p>
        </article>
        <article>
          <h2>記録を見返す</h2>
          <p>設定から、誰に、いつ送ったかを見られます。送信の結果と追加料金の記録も残ります。</p>
        </article>
      </section>

      <section id="contact" className="contact">
        <h2>使い方に迷った時</h2>
        <p>まず3分体験コースを見ます。次に、くわしいマニュアルとFAQを見ます。</p>
        <div className="actions">
          <a href="/manual/tutorial" className="primary">3分体験コース</a>
          <a href="/manual" className="secondary">マニュアル</a>
          <a href="/manual/faq" className="secondary">FAQ</a>
        </div>
        <a href="mailto:info@anpi-watch.jp">info@anpi-watch.jp</a>
      </section>
    </main>
  );
}
