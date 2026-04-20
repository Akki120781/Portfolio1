import React from "react";
import Image from "next/image";

const certifications = [
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
    image: "/certifications/cert-python-hackerrank.jpg",
    link: "#",
  },
  {
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "2024",
    image: "/certifications/cert-sql-hackerrank.jpg",
    link: "#",
  },
  {
    title: "The Complete React Developer Course",
    issuer: "Udemy",
    date: "2024",
    image: "/certifications/cert-react-udemy.jpg",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (deeplearning.ai)",
    date: "2024",
    image: "/certifications/cert-ml-coursera.jpg",
    link: "#",
  },
  {
    title: "NodeJS — The Complete Guide",
    issuer: "Udemy",
    date: "2025",
    image: "/certifications/cert-nodejs-udemy.jpg",
    link: "#",
  },
  {
    title: "Full Stack Developer Bootcamp - Master Frontend to Backend",
    issuer: "GeeksforGeeks",
    date: "2026",
    image: "/certifications/cert-gfg-fullstack.png",
    link: "#",
  },
  {
    title: "MongoDB Schema Design Patterns and Anti-patterns",
    issuer: "MongoDB",
    date: "2026",
    image: "/certifications/cert-skillscert.png",
    link: "https://www.credly.com/badges/3fffffc3-7e9f-4a09-a2aa-6003c1c0bf9a",
  },
  {
    title: "Digital Skills: Social Media",
    issuer: "Accenture",
    date: "2026",
    image: "/certifications/cert-social-media.png",
    link: "#",
  },
  {
    title: "Placement Ace: Java Bootcamp",
    issuer: "Lovely Professional University",
    date: "2025",
    image: "/certifications/cert-lpu-java.png",
    link: "#",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-decorative tracking-tight">Certifications</h1>
          <p className="text-gray-500 dark:text-gray-400">Courses and credentials I've earned — more coming soon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <article key={cert.title} className="group relative flex flex-col items-start justify-between rounded-3xl bg-white dark:bg-[#111821] p-5 shadow-sm border border-black/5 dark:border-white/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              
              <div className="w-full relative h-[210px] mb-5 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 w-full relative">
                <div className="flex items-center gap-x-4 text-xs mb-3">
                  <time dateTime={cert.date} className="text-gray-500 dark:text-gray-400">
                    Earned in {cert.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="mt-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white group-hover:text-[#6f5ef5] transition-colors line-clamp-2">
                  <a href={cert.link}>
                    <span className="absolute inset-0" />
                    {cert.title}
                  </a>
                </h3>

                <div className="mt-5 w-full">
                  <a href={cert.link} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-50 dark:bg-gray-800 py-2.5 px-4 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    View Certificate
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
        
      </div>
    </main>
  );
}
