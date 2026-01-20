import React from "react";

const certifications = [
   {
    title: "Case study Hackathon",
    issuer: "Amity university online",
    year: " Dec 2025",
   credentialLink:"",
  },
  {
    title: "Capstone Project in Agent Development",
    issuer: "Google and Kaggle",
    year: "Dec 2025",
   credentialLink:"",
  },
  {
    title: "Basic of AI",
    issuer: "Amity university online",
    year:"NOV 2025",
    
    
       credentialLink: "https://www.linkedin.com/posts/arman-rayma_ai-fundamentals-activity-7395080351506726912-Hr3H?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFR06mQBSDtJYTQ2OHkt0lZ8zr1Cdwid2vo",
  },
  {
    title: "Cybersecurity Fundamentals ",
    issuer: "IBM",
    year: "NOV 2025",
    
    credentialLink: "https://www.linkedin.com/posts/arman-rayma_cybersecurity-fundamentals-was-issued-by-activity-7392129036510056448-0Sdu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFR06mQBSDtJYTQ2OHkt0lZ8zr1Cdwid2vo",
  },
   {
    title: "Certicate Course in Professional and Life Skills",
    issuer: "Amity university online",
    year: " July 2025",
   credentialLink:"https://www.linkedin.com/posts/arman-rayma_certificate-in-professional-and-life-skills-activity-7355079038064836608-qIF4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFR06mQBSDtJYTQ2OHkt0lZ8zr1Cdwid2vo",
  },
  {
    title: "Workshop on Personal Branding and Career Development",
    issuer: "Amity university online",
    year: " April 2025",
   credentialLink:"https://www.linkedin.com/posts/arman-rayma_participation-amityuniversityonline-activity-7349063777373323265-SZWJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFR06mQBSDtJYTQ2OHkt0lZ8zr1Cdwid2vo",
  },
    {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and Linkedin",
    year: " Nov 2024",
   credentialLink:"https://www.linkedin.com/learning/certificates/254cd508887394ea9df968f54902a0e3264f7fff8771c49d837abe8de5262b48?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BXwwV0zROQ2WxDv35Wxotpg%3D%3D",
  },
    {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and Linkedin",
    year: "Nov 2024",
   credentialLink:"https://www.linkedin.com/learning/certificates/9f1d582dfccb6e3a8ac266c49f39619e7342a7f6f3bda687d8eaf54c36174f82?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BXwwV0zROQ2WxDv35Wxotpg%3D%3D",
  },
    
   
  
];

const Certifications = () => {
  return (
    <section
      id="Certifications"
      className="min-h-screen bg-white dark:bg-black px-6 py-12 flex flex-col items-center transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 text-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-300 font-medium">
                {cert.issuer}
              </p>
              <p className="text-gray-400 mb-3">
                {cert.year}
              </p>
              <p className="text-gray-300 mb-4">
                {cert.description}
              </p>
            </div>
            <a
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-xl text-center transition-colors duration-200"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
