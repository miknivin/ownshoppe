"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Privacy Policy">
        <div>
          {/* Privacy Policy Section */}
          <section className="privacy-section pt_120 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="sec-title mb_50" style={{ textAlign: 'center' }}>
                      <h2>Privacy Policy</h2>
                      <p className="mt_30">
                        Welcome to JJ Perfumes, owned and operated by OWNSHOPI LLP. This Privacy Policy outlines how we collect, use, maintain, and disclose information obtained from users of the FlorenzaItaliya.com website.
                      </p>
                    </div>
                    <div className="privacy-content">
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">1. Information We Collect</h3>
                        <p>
                          <strong>Personal Identification Information:</strong> We may collect personal identification information when users visit our site, register, place an order, subscribe to the newsletter, or engage in other activities.<br />
                          <strong>Non-personal Identification Information:</strong> We may collect non-personal identification information such as browser type, operating system, and other technical details.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">2. How We Use Collected Information</h3>
                        <p>
                          <strong>Order Processing:</strong> Personal information may be used to process orders and provide a personalized user experience.<br />
                          <strong>Communication:</strong> We may use the email address provided for order processing to send periodic emails related to orders and updates. The email address may also be used for responding to inquiries and other requests.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">3. How We Protect Your Information</h3>
                        <p>
                          We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">4. Sharing Your Personal Information</h3>
                        <p>
                          We do not sell, trade, or rent users’ personal identification information to others. Generic aggregated demographic information may be shared with trusted affiliates for statistical purposes.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">5. Third-party Websites</h3>
                        <p>
                          FlorenzaItaliya.com may contain links to external websites for your convenience. We do not endorse the content or practices of third-party sites. Users are advised to read the privacy policies of these external sites.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">6. Cookies</h3>
                        <p>
                          Our site may use “cookies” to enhance user experience. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Note that some parts of the site may not function properly if cookies are disabled.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">7. Changes to this Privacy Policy</h3>
                        <p>
                          OWNSHOPI LLP has the discretion to update this privacy policy at any time. Users are encouraged to check this page for any changes. The last updated date will be revised accordingly.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">8. Your Acceptance of These Terms</h3>
                        <p>
                          By using JJ perfumes, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">9. Contacting Us</h3>
                        <p>
                          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                        </p>
                        <p className="mt_20">
                          Email: <Link href="rjaydev@jjperfumes.com">rjaydev@jjperfumes.com</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Privacy Policy Section End */}
        </div>
      </Layout>
    </>
  );
}