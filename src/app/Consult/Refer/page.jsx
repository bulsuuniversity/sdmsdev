"use client"

import React, { useState } from "react";
import Layout from "@/components/Layout";

const Page = () => {
  const [formData, setFormData] = useState({
    referredStudent: "",
    college: "",
    reasonForReferral: "",
    situationDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <Layout>
      <div className="p-10 grid grid-cols-2">
        <form className="border border-2 p-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold">REFERRAL CONSULTATION FORM</h2>
          <p className="text-xs italic">Please provide the details for the referral</p>
          <label>
            Referred Student:
            <input
              type="text"
              name="referredStudent"
              value={formData.referredStudent}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            College:
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Reason for Referral:
            <select
              className="border-b"
              name="reasonForReferral"
              value={formData.reasonForReferral}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Reason</option>
              <option value="Academic Issues">Academic Issues</option>
              <option value="Behavioral Concerns">Behavioral Concerns</option>
              <option value="Emotional Support">Emotional Support</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Describe the Situation:
            <textarea
              name="situationDescription"
              value={formData.situationDescription}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Page;
