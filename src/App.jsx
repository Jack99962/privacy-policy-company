import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AgreementPage from "./pages/AgreementPage";
import CertificationQueryingPage from "./pages/CertificationQueryingPage";

import userAgreementAxml from "../userAgreement/index.axml?raw";
import privacyPolicyAxml from "../privacyPolicy/index.axml?raw";
import personalAuthAxml from "../personalInformationUsageAuthorizationAgreement/index.axml?raw";

const pages = [
  {
    path: "/user-agreement",
    title: "用户协议",
    content: userAgreementAxml,
  },
  {
    path: "/privacy-policy",
    title: "隐私政策",
    content: privacyPolicyAxml,
  },
  {
    path: "/personal-information-authorization",
    title: "个人信息使用授权协议",
    content: personalAuthAxml,
  },
];

export default function App() {
  return (
    <Routes>
      <Route
        path="/certification-result-querying"
        element={<CertificationQueryingPage />}
      />
      <Route element={<Layout pages={pages} />}>
        <Route index element={<Navigate to="/user-agreement" replace />} />
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<AgreementPage source={page.content} />}
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/user-agreement" replace />} />
    </Routes>
  );
}
