"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ReturnPolicy() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Return, Cancellation and Payment Policy"
      >
        <div>
          {/* Privacy Policy Section */}
          <section className="privacy-section pt_120 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div
                      className="sec-title mb_50"
                      style={{ textAlign: "center" }}
                    >
                      <h2>Return, Cancellation and Payment Policy</h2>
                      <p className="mt_30">
                        Welcome to jjperfumesinternational.com, owned and
                        operated by JJ Perfumes International. This Return,
                        Cancellation, and Payment Policy outlines the procedures
                        for returning products, cancelling orders, and
                        requesting refunds.
                      </p>
                    </div>
                    <div className="privacy-content">
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">1. Return Policy</h3>
                        <p>
                          Once items are delivered, they cannot be returned as
                          opened or used products cannot be reused or resold.
                          Damages caused by neglect, improper use, or incorrect
                          application will not be covered under this policy. We
                          do not assume responsibility for adverse reactions or
                          sensitivities caused by specific product ingredients.
                          Patch tests are recommended as advised on each product
                          packaging.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">2. Refund Policy</h3>
                        <p>
                          JJ Perfumes International is not responsible for any
                          damage that occurs after the product has been
                          delivered. If your order is marked as delivered but
                          not received, report this within 3 days of delivery
                          status. No refunds after this period. Delivery charges
                          are non-refundable.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">
                          3. Return Policy (Damaged in Transit)
                        </h3>
                        <p>
                          Refund or exchange can be initiated for products
                          damaged during transit (leakage, broken, or missing
                          items) after claim verification. Contact customer care
                          within 24-48 hours of receiving the damaged product
                          for claims.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">4. Payment Policy</h3>
                        <p>
                          50% payment of the total order value should be made
                          upfront for order confirmation. Remaining 50% should
                          be paid upon the delivery of the order.
                        </p>
                      </div>

                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">9. Contacting Us</h3>
                        <p>For any queries, you can reach us at:</p>
                        <p className="mt_20">
                          Phone: <a href="tel:+919645898599">+919645898599</a>
                        </p>
                        <p className="mt_20">
                          Email:{" "}
                          <a href="mailto:rjaydev@jjperfumes.com">
                            rjaydev@jjperfumes.com
                          </a>
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
