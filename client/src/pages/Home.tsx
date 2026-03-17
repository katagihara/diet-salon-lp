// Design: Figmaデザイン忠実再現
// Color: #f39f88 (salmon accent), #4dce6e (LINE green), #bf1391 (HotPepper magenta), #736357 (body text), #4b4f58 (heading)
// Font: Noto Sans JP
// Layout: Single column LP, max-width 700px centered

const LINE_HREF = "#";
const HOTPEPPER_HREF = "#";

function CTABlock() {
  return (
    <div className="flex flex-col items-center gap-3 w-full py-8">
      <a
        href={LINE_HREF}
        className="flex items-center justify-center gap-2 rounded-[3px] hover:opacity-90 transition-opacity"
        style={{ width: "321px", height: "49px", backgroundColor: "#4dce6e" }}
      >
        <i className="fab fa-line text-white text-2xl"></i>
        <span className="text-white text-xl font-semibold">LINE講座をスタート</span>
      </a>
      <p className="text-[#3a3a3a] text-[15px] text-center">1週間で痩せ体質を作る無料講座をプレゼント中🎁</p>
      <a
        href={HOTPEPPER_HREF}
        className="flex items-center justify-center gap-2 rounded-[3px] hover:opacity-90 transition-opacity"
        style={{ width: "392px", height: "49px", backgroundColor: "#bf1391" }}
      >
        <i className="fas fa-calendar text-white text-2xl"></i>
        <span className="text-white text-xl font-semibold">ホットペッパーで予約する</span>
      </a>
      <p className="text-[#3a3a3a] text-sm text-center">今すぐ予約したい方はこちらからどうぞ</p>
      <p className="text-[#3a3a3a] text-sm text-center">ダイエットカウンセリングが初回限定500円🎉</p>
    </div>
  );
}

function SectionDivider() {
  return <hr className="border-neutral-200 my-8" />;
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <i className="fas fa-check" style={{ color: "#f39f88", fontSize: "18px" }}></i>
      <span className="text-[#736357] text-base">{text}</span>
    </li>
  );
}

export default function Home() {
  const reviewPhotos = [
    "/assets/1-41.webp", "/assets/1-43.webp", "/assets/1-45.webp", "/assets/1-47.webp",
    "/assets/1-49.webp", "/assets/1-51.webp", "/assets/1-53.webp", "/assets/1-55.webp",
    "/assets/1-57.webp", "/assets/1-59.webp", "/assets/1-61.webp", "/assets/1-63.webp",
    "/assets/1-65.webp", "/assets/1-67.webp", "/assets/1-69.webp", "/assets/1-70.webp",
    "/assets/1-72.webp", "/assets/1-74.webp", "/assets/1-76.webp", "/assets/1-78.webp",
    "/assets/1-80.webp", "/assets/1-82.webp", "/assets/1-84.webp", "/assets/1-86.webp",
    "/assets/1-88.webp",
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* ===== FV (ファーストビュー) ===== */}
      <section className="flex justify-center bg-white">
        <img
          src="/assets/1-4.webp"
          alt="ダイエット整体サロン ファーストビュー"
          className="w-full max-w-[700px] h-auto"
        />
      </section>

      {/* ===== CTA セクション1 ===== */}
      <section className="flex justify-center bg-white">
        <div className="w-full max-w-[700px] px-4">
          <CTABlock />
        </div>
      </section>

      {/* ===== B/A実績 セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4 flex flex-col items-center gap-6">
          <img src="/assets/1-19.webp" alt="50代 ビフォーアフター -10.8kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-21.webp" alt="40代 ビフォーアフター -8.8kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-23.webp" alt="40代③ ビフォーアフター -8.9kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-25.webp" alt="30代② ビフォーアフター -10kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-27.webp" alt="50代 ビフォーアフター -7.5kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-29.webp" alt="50代② ビフォーアフター -14.9kg" className="w-full max-w-[460px] h-auto" />
          <img src="/assets/1-31.webp" alt="40代② ビフォーアフター -8.1kg" className="w-full max-w-[460px] h-auto" />
        </div>
      </section>

      {/* ===== CONCEPT セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <SectionDivider />
          <h2 style={{ color: "#f39f88", fontSize: "28px", fontWeight: "700", marginBottom: "16px", lineHeight: "1.4" }}>
            CONCEPT<br />我慢しない、無理しないで自分らしく痩せる
          </h2>
          <p className="text-[#3a3a3a] text-base mb-4 leading-relaxed">
            本当はもう少しカラダを引き締めたい。理想のボディラインがある。でも…「筋トレはきつ
            いし、甘いものも食べたいし…」という女性の方へ。
          </p>
          <p className="text-[#3a3a3a] text-base mb-4 leading-relaxed">
            当店の我慢しないダイエットはいかがですか？「筋トレなし、無理な食事制限なし」なのに
            ストレスなく痩せていく。その後もリバウンドしにくいカラダをずーっとキープしていく。
          </p>
          <p className="text-[#3a3a3a] text-base leading-relaxed">
            国家資格である柔道整復師。プロの資格を所有しているので、我慢しないダイエットが実現可能です。
          </p>
        </div>
      </section>

      {/* ===== Voice_S (お客様の声 写真グリッド) ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            {reviewPhotos.map((src, i) => (
              <div key={i} style={{ overflow: "hidden", aspectRatio: "1/1" }}>
                <img
                  src={src}
                  alt={`お客様の声 ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="fas fa-check" style={{ color: "#f39f88", fontSize: "18px" }}></i>
            <span className="text-[#736357] text-base">30代〜60代まで多くの女性がご利用しています</span>
          </div>
        </div>
      </section>

      {/* ===== 口コミ セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <SectionDivider />
          <h2 style={{ color: "#f39f88", fontSize: "28px", fontWeight: "600", marginBottom: "16px" }}>口コミ</h2>
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-3">ホットペッパーの口コミをご覧ください</h3>
          <p className="text-[#736357] text-base mb-6 leading-relaxed">
            当店は整体サロンです。ホットペッパーで沢山の口コミを頂いていますのでご確認ください。
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              className="hover:bg-gray-50 transition-colors"
              style={{
                width: "250px",
                height: "40px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #acacac",
                color: "#898989",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              口コミを見る ▼
            </button>
            <button
              className="hover:bg-gray-50 transition-colors"
              style={{
                width: "250px",
                height: "40px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #acacac",
                color: "#898989",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              口コミを見る ▼
            </button>
          </div>
        </div>
      </section>

      {/* ===== ３つのこだわり セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <SectionDivider />
          <h2 style={{ color: "#f39f88", fontSize: "28px", fontWeight: "600", marginBottom: "24px" }}>３つのこだわり</h2>

          {/* こだわり 01 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-4">01：個室のプライベート空間</h3>
          <div className="flex gap-2 mb-4">
            <img src="/assets/1-105.webp" alt="個室プライベート空間1" className="w-1/2 h-auto object-cover" />
            <img src="/assets/1-106.webp" alt="個室プライベート空間2" className="w-1/2 h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base mb-10 leading-relaxed">
            カーテンを閉めればプライベート空間になります。多くの場合、お客様ひとりずつでの接遇
            です。周りを気にせずに、なんでもご相談ください。
          </p>

          {/* こだわり 02 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-4">02：おひとりおひとりに合わせた無理のないプランをご提案します</h3>
          <div className="flex gap-2 mb-4">
            <img src="/assets/1-109.webp" alt="個別プラン提案1" className="w-1/2 h-auto object-cover" />
            <img src="/assets/1-110.webp" alt="個別プラン提案2" className="w-1/2 h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base mb-10 leading-relaxed">
            カウンセリングではお身体の状態を聞かせて頂き、お悩みに沿って無理なく痩せるプランを
            ご提案できます。
          </p>

          {/* こだわり 03 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-4">03：ダイエットだけじゃない！全身美容整体も施します</h3>
          <div className="flex gap-2 mb-4">
            <img src="/assets/1-113.webp" alt="全身美容整体1" className="w-1/2 h-auto object-cover" />
            <img src="/assets/1-114.webp" alt="全身美容整体2" className="w-1/2 h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base leading-relaxed">
            ダイエットはもちろんのこと、ストレートネック、反り腰、猫背、産後の骨盤矯正、小顔調
            整など、美しい姿勢改善もまるごと全部ご提供しています。痛みや疲れが取れて、痩せて見
            た目が良くなるって良いとは思いませんか？
          </p>
        </div>
      </section>

      {/* ===== スタッフ紹介 セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <SectionDivider />
          <h2 style={{ color: "#f39f88", fontSize: "28px", fontWeight: "600", marginBottom: "24px" }}>スタッフ紹介​</h2>

          {/* エステティシャン */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-6">エステティシャン：山下</h3>
          <div className="flex justify-center mb-6">
            <div style={{ width: "177px", height: "177px", borderRadius: "50%", overflow: "hidden" }}>
              <img
                src="/assets/1-125.webp"
                alt="エステティシャン 山下"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
          <ul className="mb-4 space-y-2">
            {["24歳", "キャリア2年", "エステティシャン＋保育士"].map((text, i) => (
              <CheckItem key={i} text={text} />
            ))}
          </ul>
          <p className="text-[#736357] text-base mb-10 leading-relaxed">
            「女性がキレイで自分らしくなれる美容整体」をご提供します。保育士の資格がありますので、お子様連れでもご安心いただけます。女性特有のお悩みをお気軽にご相談ください。
            優しい施術とカウンセリングが、お客様から喜ばれております。
          </p>

          <SectionDivider />

          {/* 院長 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-6">院長：福田　志門</h3>
          <div className="flex justify-center mb-6">
            <div style={{ width: "185px", height: "185px", borderRadius: "50%", overflow: "hidden" }}>
              <img
                src="/assets/1-157.webp"
                alt="院長 福田志門"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
          <ul className="mb-4 space-y-2">
            {["28歳", "キャリア9年", "国家資格：柔道整復師 所有", "アスレティックトレーナー資格"].map((text, i) => (
              <CheckItem key={i} text={text} />
            ))}
          </ul>
          <p className="text-[#736357] text-base mb-10 leading-relaxed">
            整体サロンを運営していくなかで、女性の「痩せたい！でも無理したくない！」と
            いうリクエストにお答えしてきました。きっとあなたの願望も実現できると思います。ぜひ
            一度、「初回体験セッション」で当店の我慢しないダイエットコースがどのようなものか？
            を体験してください。
          </p>

          <SectionDivider />

          {/* 代表 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-6">代表：阪東　繁樹</h3>
          <div className="flex justify-center mb-6">
            <div style={{ width: "185px", height: "185px", borderRadius: "50%", overflow: "hidden" }}>
              <img
                src="/assets/1-177.webp"
                alt="代表 阪東繁樹"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
          <ul className="mb-4 space-y-2">
            {["40歳", "キャリア20年", "国家資格：柔道整復師・はり師・きゅう師所有", "ダイエットエキスパート"].map((text, i) => (
              <CheckItem key={i} text={text} />
            ))}
          </ul>
          <p className="text-[#736357] text-base leading-relaxed">
            整体サロンを運営していくなかで、女性の「痩せたい！でも無理したくない！」と
            いうリクエストにお答えしてきました。きっとあなたの願望も実現できると思います。ぜひ
            一度、「初回体験セッション」で当店の我慢しないダイエットコースがどのようなものか？
            を体験してください。
          </p>
        </div>
      </section>

      {/* ===== 店舗情報 セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <SectionDivider />
          <h2 style={{ color: "#f39f88", fontSize: "32px", fontWeight: "600", marginBottom: "24px" }}>店舗情報</h2>
          <img
            src="/assets/1-181.webp"
            alt="店舗外観"
            className="w-full h-auto mb-6 object-cover"
          />
          <ul className="mb-8 space-y-3">
            {[
              { icon: "fas fa-clock", text: "営業時間：9時30分〜20時 (最終受付19時)" },
              { icon: "fas fa-calendar-times", text: "定休日：日曜日" },
              { icon: "fas fa-map-marker-alt", text: "住所：京都府京都市西京区樫原江ノ本町11-1洛西ハイツ1F" },
              { icon: "fas fa-credit-card", text: "カードOK / 交通系IC / PayPay" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className={`${item.icon}`} style={{ color: "#f39f88", fontSize: "18px", marginTop: "2px" }}></i>
                <span className="text-[#736357] text-base">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Google マップ */}
          <img
            src="/assets/1-234.webp"
            alt="店舗地図"
            className="w-full h-auto mb-8 object-cover"
          />
        </div>
      </section>

      {/* ===== BOOK特典 + CTA2 ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4 flex flex-col items-center">
          <img
            src="/assets/1-236.webp"
            alt="BOOK特典"
            className="h-auto mb-4"
            style={{ width: "301px" }}
          />
          <CTABlock />
        </div>
      </section>

      {/* ===== 成功する理由 セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <h2 style={{ color: "#f39f88", fontSize: "32px", fontWeight: "600", marginBottom: "24px" }}>当店のダイエットが成功する理由</h2>

          {/* 理由1 */}
          <div style={{ border: "2px solid #e5e5e5", borderRadius: "4px", padding: "24px", marginBottom: "24px" }}>
            <h3 style={{ color: "#f39f88", fontSize: "26px", fontWeight: "600", marginBottom: "16px" }}>理由１：太った理由を徹底分析</h3>
            <div className="flex gap-2 mb-4">
              <img src="/assets/1-251.webp" alt="肥満DNA検査1" className="w-1/2 h-auto object-cover" />
              <img src="/assets/1-252.webp" alt="肥満DNA検査2" className="w-1/2 h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base leading-relaxed">
              肥満DNA検査による自分のスーパーフード知ることができ、分子栄養学を用いて体質を考慮した効率的なダイエットメニューを作成します。
            </p>
          </div>

          {/* 理由2 */}
          <div style={{ border: "2px solid #e5e5e5", borderRadius: "4px", padding: "24px", marginBottom: "24px" }}>
            <h3 style={{ color: "#f39f88", fontSize: "26px", fontWeight: "600", marginBottom: "16px" }}>理由２：痩身整体で生涯太りにくい体質作り</h3>
            <div className="flex gap-2 mb-4">
              <img src="/assets/1-256.webp" alt="痩身整体1" className="w-1/2 h-auto object-cover" />
              <img src="/assets/1-257.webp" alt="痩身整体2" className="w-1/2 h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base leading-relaxed">
              主に姿勢矯正と骨盤矯正を行なって、痩せやすい体づくりをしていきます。
            </p>
          </div>

          {/* 理由3 */}
          <div style={{ border: "2px solid #e5e5e5", borderRadius: "4px", padding: "24px", marginBottom: "24px" }}>
            <h3 style={{ color: "#f39f88", fontSize: "26px", fontWeight: "600", marginBottom: "16px" }}>理由３：マンツーマン食事サポート</h3>
            <div className="flex gap-2 mb-4">
              <img src="/assets/1-261.webp" alt="マンツーマン食事サポート1" className="w-1/2 h-auto object-cover" />
              <img src="/assets/1-262.webp" alt="マンツーマン食事サポート2" className="w-1/2 h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base leading-relaxed">
              LINEでサポート！楽しく続く食習慣を形成していきます。
            </p>
          </div>

          {/* 理由4 */}
          <h3 style={{ color: "#f39f88", fontSize: "26px", fontWeight: "600", marginBottom: "16px" }}>理由4：国家資格の柔道整復師を所有。だから安心！</h3>
          <p className="text-[#736357] text-base mb-8 leading-relaxed">
            体の構造を知り尽くした、プロの整体師の証である「国家資格：柔道整復師」。
            安心してダイエットを任せることができます。
          </p>
        </div>
      </section>

      {/* ===== 免許 セクション ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4">
          <div className="flex justify-center gap-0">
            <img src="/assets/1-280.webp" alt="資格証明書1" className="w-1/3 h-auto object-cover" />
            <img src="/assets/1-281.webp" alt="資格証明書2" className="w-1/3 h-auto object-cover" />
            <img src="/assets/1-282.webp" alt="資格証明書3" className="w-1/3 h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* ===== BOOK特典2 + 最終CTA ===== */}
      <section className="flex justify-center bg-white py-4">
        <div className="w-full max-w-[700px] px-4 flex flex-col items-center">
          <img
            src="/assets/1-268.webp"
            alt="BOOK特典"
            className="h-auto mb-4"
            style={{ width: "301px" }}
          />
          <CTABlock />
        </div>
      </section>
    </div>
  );
}
