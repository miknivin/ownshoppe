"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ReturnPolicy() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Shipping and Delivery Policy"
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
                      <h2>Shipping and Delivery Policy</h2>
                      <p className="mt_30">
                        Welcome to jjperfumesinternational.com, owned and
                        operated by JJ Perfumes International. This Shipping
                        Policy outlines the details regarding shipping and
                        delivery for products purchased on our website.
                      </p>
                    </div>
                    <div className="privacy-content">
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">1. Delivery Time</h3>
                        <p>
                          The estimated delivery time for confirmed orders is 30
                          to 35 days from the date of order confirmation and
                          advance payment. Please note that delivery times may
                          vary based on factors such as product availability,
                          destination location, and any unforeseen
                          circumstances.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">2. Delivery Locations</h3>
                        <p>
                          We provide shipping services to locations across the
                          World.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">3. Courier Service</h3>
                        <p>
                          JJ Perfumes International utilizes the services of
                          different Shipment partners based on client location
                          and requirement.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">4. Shipment Confirmation</h3>
                        <p>
                          Upon shipment of your order, you will receive a
                          confirmation email containing details about your
                          purchase, including the items ordered, the total cost,
                          and the shipping information.
                        </p>
                      </div>
                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">
                          5. Delayed or Unsuccessful Delivery
                        </h3>
                        <p>
                          While we strive to ensure timely and successful
                          deliveries, delays may occur due to unforeseen
                          circumstances or issues with the courier service. In
                          the event of a delayed or unsuccessful delivery, we
                          will make every effort to communicate with you and
                          provide updates on the status of your shipment.
                        </p>
                      </div>

                      <div className="privacy-item mb_40">
                        <h3 className="mb_20">9. Contacting Us</h3>
                        <p>For any queries, you can reach us at:</p>
                        <p className="mt_20">
                          Phone: <a href="tel:+918848101280">+918848101280</a>
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
