import { useNavigate } from "react-router-dom";

const assetBase = `${import.meta.env.BASE_URL}certification/`;
const queryIllustration = `${assetBase}query-illustration.png`;
const backIcon = `${assetBase}back-icon.svg`;
const headerMask = `url("${assetBase}header-mask.svg")`;

export default function CertificationQueryingPage() {
  const navigate = useNavigate();

  return (
    <main className="certification-querying-page">
      <section
        className="certification-querying-screen"
        aria-label="认证结果查询"
        style={{ "--certification-header-mask": headerMask }}
      >
        <div className="certification-header-bg" aria-hidden="true" />
        <button
          className="certification-back-button"
          type="button"
          aria-label="返回"
          onClick={() => navigate(-1)}
        >
          <img src={backIcon} alt="" aria-hidden="true" />
        </button>

        <div className="certification-querying-state" role="status">
          <img
            className="certification-querying-illustration"
            src={queryIllustration}
            alt=""
            aria-hidden="true"
          />
          <h1>查询中</h1>
          <p>正在查询...请稍后</p>
        </div>


      </section>
    </main>
  );
}
