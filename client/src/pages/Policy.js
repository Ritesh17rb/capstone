import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={'Privacy Policy'}>
            <div className="policy-container">
                <h2>Privacy Policy</h2>
                <p>
                    At Grievance Management System, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website and utilize our services.
                </p>
                <h3>Information We Collect</h3>
                <p>
                    We collect personal information such as your name,  for analytical purposes.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                    We use the information we collect to process your orders, provide customer support, improve our products and services, and communicate with you about promotions and updates. We do not sell or share your personal information with third parties.
                </p>
                <h3>Security</h3>
                <p>
                    We implement security measures to protect your personal information from unauthorized access and use. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <h3>Changes to This Policy</h3>
                <p>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this policy periodically for any updates.
                </p>
                <p>
                    If you have any questions or concerns about our Privacy Policy, please contact us at privacy@ritesh.com.
                </p>
            </div>
        </Layout>
    );
};

export default Policy;
