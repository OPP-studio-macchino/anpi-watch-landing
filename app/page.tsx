export default function HomePage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">anpi-watch</p>
        <h1>災害時の安否確認を、
          <br />
          もっと早く、もっと確実に。
        </h1>
        <p className="lead">
          家族・チーム・地域で使える安否確認プラットフォーム。
          通知、回答、集計までをひとつにまとめます。
        </p>
        <div className="actions">
          <a href="#contact" className="primary">導入相談をする</a>
          <a href="#features" className="secondary">機能を見る</a>
        </div>
      </section>

      <section id="features" className="features">
        <article>
          <h2>一斉通知</h2>
          <p>メールやSMSで一斉配信し、初動を短縮します。</p>
        </article>
        <article>
          <h2>状況の可視化</h2>
          <p>回答状況をリアルタイムで確認できます。</p>
        </article>
        <article>
          <h2>運用しやすい設計</h2>
          <p>管理者・利用者ともに迷わないシンプルな操作です。</p>
        </article>
      </section>

      <section id="contact" className="contact">
        <h2>お問い合わせ</h2>
        <p>導入検討・連携のご相談はお気軽にご連絡ください。</p>
        <a href="mailto:info@anpi-watch.jp">info@anpi-watch.jp</a>
      </section>
    </main>
  );
}
