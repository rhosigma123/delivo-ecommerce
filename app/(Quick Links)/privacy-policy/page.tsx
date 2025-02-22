import React from "react";
import NewNavbar from "@/components/commons/NewNavbar";

const PrivacyPolicyRoute = () => {
  return (
    <>
      <NewNavbar />
      <div className="delivo__container mx-auto px-4 py-8">
        <div className="w-full relative h-auto flex  items-center gap-6 justify-start ">
          <h1 className=" text-3xl lg:text-5xl font-thin  text-primary  ">
            Delivo Privacy Notice
          </h1>
          <p className=" text-base lg:text-lg font-medium text-fontPrimary">
            Effective Date: 24 July 2024
          </p>
        </div>

        <p className="mb-4 mt-6">
          This Privacy Notice applies to Delivo Marketplace Private Limited
          (hereinafter referred to as “Delivo” or “the Company”), a company
          incorporated under the Companies Act, 2013 and having its registered
          office at [Insert Address], and its subsidiaries, holding company, and
          affiliates. The Company owns the website
          <a
            href="https://delivoapp.com"
            className="text-primary hover:underline"
          >
            delivoapp.com
          </a>{" "}
          and the mobile application ‘Delivo’ (collectively, the “Platform”).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary ">
          1. Collection of Information
        </h2>
        <p className="mb-4">
          We collect various types of information from you when you access or
          use the Platform, register an account, or interact with our services.
          This includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Personal Information:</strong> Name, mobile number, email
            address, date of birth, gender, address, and other identification
            details.
          </li>
          <li>
            <strong>Sensitive Personal Information:</strong> Passwords,
            financial information, health data, and biometric information.
          </li>
          <li>
            <strong>Transactional Information:</strong> Order history, payment
            details, and transaction status.
          </li>
          <li>
            <strong>Location-Based Information:</strong> IP address, device
            location, and browsing behavior.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, operating
            system, and aggregated user data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          2. Use of Information
        </h2>
        <p className="mb-4">
          We use your information for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To create and manage your account.</li>
          <li>To provide and improve our services.</li>
          <li>To process payments and fulfill orders.</li>
          <li>To send promotional offers and updates.</li>
          <li>To comply with legal obligations and prevent fraud.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          3. Sharing of Information
        </h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Business partners, service providers, and delivery partners.</li>
          <li>Regulatory authorities and law enforcement agencies.</li>
          <li>
            Third parties in case of mergers, acquisitions, or business
            restructuring.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          4. Security Measures
        </h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your information
          from unauthorized access, disclosure, or misuse. However, no system is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          5. Retention of Information
        </h2>
        <p className="mb-4">
          We retain your information only for as long as necessary to fulfill
          the purposes outlined in this Privacy Notice or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          6. Your Rights
        </h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access, correct, or delete your personal information.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Lodge complaints with supervisory authorities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          7. Changes to This Privacy Notice
        </h2>
        <p className="mb-4">
          We may update this Privacy Notice from time to time. Any changes will
          be effective immediately upon posting on the Platform. Your continued
          use of the Platform constitutes acceptance of the updated Privacy
          Notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">
          8. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Notice,
          please contact our Grievance Officer at{" "}
          <a
            href="mailto:legal@delivoapp.com"
            className="text-primary hover:underline"
          >
            legal@delivoapp.com
          </a>
          .
        </p>

        <p className="text-sm text-gray-600 mt-8">
          © 2025 Delivo, All rights reserved.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyRoute;
