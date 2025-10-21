"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Terms and Conditions">
        <div>
          {/* Terms and Conditions Section */}
          <section className="terms-section pt_120 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div className="sec-title mb_50" style={{ textAlign: 'center' }}>
                      <h2>Terms and Conditions</h2>
                      <p className="mt_30">
                        Welcome to JJ Perfumes, a website owned and operated by OWNSHOPI LLP. By using this website, you accept and agree to comply with these Terms and Conditions. Please read the following terms carefully.
                      </p>
                    </div>
                    <div className="terms-content">
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">1. Intellectual Property</h3>
                        <p>
                          The content, design, and intellectual property of this website are owned by OWNSHOPI LLP. Reproduction, distribution, or any other use of the materials on this website is prohibited without the express written consent of OWNSHOPI LLP.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">2. Accuracy of Information</h3>
                        <p>
                          While we strive to provide accurate and up-to-date information on this website, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">3. Product Availability</h3>
                        <p>
                          Product availability on the website is subject to change without notice. We do not guarantee the availability of any product listed on the website.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">4. External Links</h3>
                        <p>
                          This website may contain links to external websites. These links are provided for your convenience, and we do not endorse the content of third-party websites.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">5. User Responsibilities</h3>
                        <p>
                          You are responsible for ensuring that all information you provide on this website is accurate, current, and complete. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">6. Order Acceptance</h3>
                        <p>
                          All orders placed on JJ perfumes are subject to acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspicion of fraudulent activity.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">7. Pricing and Payment</h3>
                        <p>
                          Prices for products are subject to change without notice. We reserve the right to modify or discontinue products at any time. Payments are processed through secure payment gateways. We do not store credit card details.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">8. Shipping</h3>
                        <p>
                          Shipping costs and delivery times are provided during the checkout process. We are not responsible for delays or issues caused by shipping carriers.
                        </p>
                      </div>
                     
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">9. User Accounts</h3>
                        <p>
                          You may be required to create a user account to access certain features of the website. You are responsible for maintaining the confidentiality of your account information and for restricting access to your account.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">10. Changes to Terms and Conditions</h3>
                        <p>
                          OWNSHOPI LLP reserves the right to change these terms and conditions at any time without notice. By using this website, you agree to be bound by the current version of these terms and conditions.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">11. Governing Law</h3>
                        <p>
                          These terms and conditions are governed by and construed in accordance with the laws of Kerala, India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Kerala, India, specifically the High Court of Kerala.
                        </p>
                      </div>
                      <div className="terms-item mb_40">
                        <h3 className="mb_20">12. Contacting Us</h3>
                        <p>
                          If you have any questions about these Terms and Conditions, please contact us at:
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
          {/* Terms and Conditions Section End */}
        </div>
      </Layout>
    </>
  );
}