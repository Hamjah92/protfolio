import { CodeIcon, CogIcon, FingerPrintIcon, HomeIcon, InboxInIcon } from "@heroicons/react/solid";
import images from "../assets/images";
import { FaLinkedinIn, FaStackOverflow, FaUserGraduate } from "react-icons/fa";

const data = {
    navbar: {
        linksDetails: [
            { link: "/#home", title: "Home" },
            { link: "/#work", title: "Work" },
            { link: "/#skills", title: "Skills" },
            { link: "/about", title: "About" },
            { link: "/about#education", title: "Education" },
            { link: "/#contact", title: "Contact" },
        ],
        menu_links: [
            { link: "/#home", title: "Home", Icon: HomeIcon },
            { link: "/#work", title: "Work", Icon: CodeIcon },
            { link: "/#skills", title: "Skills", Icon: CogIcon },
            { link: "/about", title: "About", Icon: FingerPrintIcon },
            { link: "/about#education", title: "Education", Icon: FaUserGraduate },
            { link: "/#contact", title: "Contact", Icon: InboxInIcon },
        ]
    },
    header: {
        hello: "Hello, I am",
        name: "Hamjah",
        title: "Software Developer",
        tech: [
            {
                image: images.typescriptCube,
                alt: "Typescript",
                classNames: "h-24 w-24 m-4 xl:h-28 xl:w-28",
            },
            {
                image: images.reactAtomic,
                alt: "React",
                classNames: "h-40 w-40 m-9 lg:m-7 xl:h-44 xl:w-44 xl:ml-10",
            },
            {
                image: images.reactAtomic,
                alt: "Tailwind",
                classNames: "h-16 w-16 m-4 xl:h-20 xl:w-20",
            },
        ]
    },
    work: {
        tabs: ["Project", "Small clip"]
    },
    copyright: {
        txt1: "@2022 Muhammadmedhamjah",
        txt2: "All rights reserved",
    },
    socials: [
        { link: "https://stackoverflow.com/users/13685048/hamza-t", Icon: FaStackOverflow },
        { link: "https://www.linkedin.com/in/hamza-t-3a33a8139/", Icon: FaLinkedinIn },
    ],
    education: [
        {
            title: "Ontario College Graduate Certificate - Web Development",
            institute: "Conestoga College - Kitchener",
            image: "Conestoga.png",
            start: "Jan 2023",
            end: "Present",
            grade: null,
            verificationImage: null,
            verificationUrl: null,
            verificationText: null
        },
        {
            title: "B. E. - Computer Engineering",
            institute: "Gujarat Technological University - Ahmadabad",
            grade: "8.4 CGPA",
            image: "GTU.png",
            start: "June 2015",
            end: "Sept 2020",
            verificationImage: "wes.jpg",
            verificationUrl: "wes.jpg",
            verificationText: "Evaluated by WES (3.65 GPA)"
        }

    ],
    certificates: [
        {
            title: "DevOps Beginners to Advanced",
            courseLink: "https://bit.ly/3WhsfeW",
            description: ["Learn DevOps from total scratch", "Linux, AWS, Bash & Python Scripting, Jenkins, Ansible, Docker, Kubernetes, Cloudformation, Terraform & More", "Understand how various technologies work together in DevOps", "Get a firm understanding in DevOps Processes, Tools & Technologies"],
            instructor: "Imran Teli",
            instructorImage: "udemy.png",
            status: "Ongoing"
        },
        {
            title: "The Complete Node.js Course",
            courseLink: "https://codewithmosh.com/p/the-complete-node-js-course",
            instructor: "Mosh Hamedani",
            instructorImage: "Mosh_Cropped.png",
            description: ["Build, test and deploy Node applications", "Use cutting-edge ES8 JavaScript", "Store complex data in MongoDB"],
            status: "Completed"
        },
        {
            title: "Complete SQL Mastery",
            courseLink: "https://codewithmosh.com/p/complete-sql-mastery",
            description: ["Write SQL queries", "Design and optimize relational databases", "Secure your databases"],
            instructor: "Mosh Hamedani",
            instructorImage: "Mosh_Cropped.png",
            status: "Completed"
        },

    ]
}

export default data;