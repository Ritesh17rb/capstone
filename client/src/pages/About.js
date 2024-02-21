import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={'About Green Delight'}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="\images\about.jpg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        <h2 >Welcome to Grievance Mangement</h2>
                        <p >
                            At Grievance Management System, we believe that every voice deserves to be heard and every concern deserves attention. Our platform is dedicated to providing a seamless and efficient mechanism for individuals and organizations to address grievances, resolve conflicts, and foster positive change.
                        </p>
                        <p >
                            With the ever-increasing complexity of modern society, effective grievance management is paramount for maintaining harmony and promoting justice. Whether you're an employee seeking resolution in the workplace, a consumer with concerns about a product or service, or a citizen advocating for social change, our platform is designed to facilitate constructive dialogue and meaningful action.
                        </p>
                        <p>
                            Join us in creating a world where grievances are met with empathy, understanding, and proactive solutions. Together, let's transform challenges into opportunities for growth and progress. Welcome to the Grievance Management System, where voices matter and resolutions happen.
                        </p>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;