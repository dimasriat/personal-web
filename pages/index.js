import menuButton from "../public/svg/menu.svg";
import pattern1 from "../public/svg/pattern-1.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
	return (
		<div
			className="px-8 lg:px-24 flex flex-row items-center"
			style={{ backgroundColor: "#121212", color: "#F5F5F5" }}
		>
			<div className="text-4xl font-bold py-4">dimasriat —</div>
			<div className="ml-auto py-4 cursor-pointer">
				<Image src={menuButton} />
			</div>
		</div>
	);
}

function Jumbotron() {
	return (
		<div
			className="px-8 lg:px-24 flex flex-row items-center"
			style={{
				backgroundImage: "url('/img/jumbotron.png')",
				backgroundPosition: "center",
				backgroundSize: "cover",
				height: 480,
			}}
		>
			<div className="h-full flex w-full">
				<div className="w-1/2 flex items-end lg:items-start">
					<div
						style={{ backgroundColor: "#121212", color: "#F5F5F5" }}
						className="p-8 mt-4 text-3xl lg:text-5xl font-bold text-white"
					>
						Hi there,
						<br />
						I am Dimas
					</div>
				</div>
				<div className="w-full h-full flex items-end relative"></div>
				<div className="w-1/2 flex items-end">
					<div className="p-4 mt-4 text-xl font-bold text-white">
						I build beautiful, secure and functionally applications.
						And I love what I do.
					</div>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div
			className="px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8"
			style={{
				backgroundColor: "#121212",
				color: "#F5F5F5",
			}}
		>
			<div className="lg:order-1 order-2">
				<div
					className="relative w-full mt-16 lg:mt-32"
					style={{ height: 480 }}
				>
					<Image src={pattern1} layout="fill" objectFit="contain" />
				</div>
			</div>
			<div className="lg:order-2 order-1">
				<div className="text-6xl text-yellow-400 font-bold pt-32">
					About Me
				</div>
				<div className="mt-8">
					I am a full stack software developer, crafting with
					Typescript, React, and Node.js at the moment. I have been
					passionate in developing programs for 6 years since I was in
					Junior High School.
				</div>
				<div className="mt-8">
					I am driven to create impact, by solving problems, creating
					values, and driving innovations, then inspire others to do
					the same.
				</div>
				<button className="mt-8 bg-blue-700 p-6 rounded-xl">
					Download CV
				</button>
			</div>
		</div>
	);
}

function WorkExperiences() {
	const [data] = useState([
		{
			company: "Student Association of Accounting UNS",
			position: "Freelance Fullstack Developer",
			date: "Nov 2021 - Des 2021",
			jobs: [
				"Developing an election system for Student Association of Accounting's CEO that handle 700 student votes traffic using modern tech stacks such as JWT authentication, Firebase, Heroku and Express.js.",
			],
			color: "text-green-400",
			fill: "fill-green-400",
		},
		{
			company: "Sebelas Maret University",
			position: "Software Engineer Intern ",
			date: "Oct 2021 - Des 2021",
			jobs: [
				"Continue developing Research and Innovation Internal Application using PHP Laravel 8 as a Full Stack Developer.",
				"Collaborated with other Programmers, Project Manager, UI / UX designer and Content Writer",
			],
			color: "text-blue-700",
			fill: "fill-blue-700",
		},
		{
			company: "PT Semangat Inovasi Anak Bangsa",
			position: "Software Engineer Intern ",
			date: "Apr 2021 - Oct 2021",
			jobs: [
				"Developing landing pages using Codeigniter as a Backend and Tailwind CSS as a Front-end.",
				"Designing the wireframe and the UI of the landing pages using Figma.",
				"Developing mobile application mock-up using React Native.",
				"Developing internal budgeting application using PHP Laravel 8.",
				"Collaborating with Project Manager, other Programmers and other UI Designer.",
			],
			color: "text-red-400",
			fill: "fill-red-400",
		},
		{
			company: "Dayskomvis 5",
			position: "Freelance Full-Stack Developer",
			date: "Jul 2021 – Sep 2021",
			jobs: [
				"Slicing the UI / UX provided by the designer.",
				"Developing art galleries for 20 artists page with unique elements for each.",
				"Developing using pug.js and tailwind for the front-end side and express.js for the back-end side.",
			],
			color: "text-yellow-400",
			fill: "fill-yellow-400",
		},
	]);

	return (
		<div
			className="px-8 lg:px-24"
			style={{
				backgroundColor: "#121212",
				color: "#F5F5F5",
			}}
		>
			<div className="">
				<div className="text-6xl text-green-400 font-bold py-32 text-center">
					Experiences
				</div>
				{data.map((exp, index) => (
					<div className="flex flex-row" key={index}>
						<div className="w-full hidden md:inline-block">
							<div className="font-bold text-2xl">
								{exp.company}
							</div>
							<div className="mt-4">{exp.date}</div>
						</div>
						<div className="w-1/12">
							<svg className={exp.fill}>
								<circle cx="8" cy="8" r="8"></circle>
							</svg>
						</div>
						<div className="w-full ">
							<div className={`font-bold text-2xl ${exp.color}`}>
								{exp.position}
							</div>
							<div className="md:hidden block font-bold text-xl mt-4">
								{exp.company}
							</div>
							<div className="md:hidden block mt-4">
								{exp.date}
							</div>
							<ul className="mt-4 mb-8 list-disc">
								{exp.jobs.map((li, i2) => (
									<li className="ml-4" key={i2}>{li}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function Tools() {
	const [data] = useState([
		{
			name: "Laravel",
			icon: "/svg/icon-laravel.svg",
		},
		{
			name: "React",
			icon: "/svg/icon-react.svg",
		},
		{
			name: "MySQL",
			icon: "/svg/icon-mysql.svg",
		},
		{
			name: "MongoDB",
			icon: "/svg/icon-mongodb.svg",
		},
		{
			name: "Firebase",
			icon: "/svg/icon-firebase.svg",
		},
		{
			name: "Node.js",
			icon: "/svg/icon-nodejs.svg",
		},
		{
			name: "Django",
			icon: "/svg/icon-django.svg",
		},
		{
			name: "Linux",
			icon: "/svg/icon-linux.svg",
		},
		{
			name: "Figma",
			icon: "/svg/icon-figma.svg",
		},
		{
			name: "GraphQL",
			icon: "/svg/icon-graphql.svg",
		},
	]);

	return (
		<div
			className="px-8 lg:px-24"
			style={{
				backgroundColor: "#121212",
				color: "#F5F5F5",
			}}
		>
			<div className="pb-32">
				<div className="text-6xl text-red-400 font-bold py-32 text-center">
					Tools and Skills
				</div>
				<div className="grid lg:grid-cols-5 grid-cols-3 gap-4">
					{data.map((item, index) => (
						<div className="relative flex mx-auto" key={index}>
							<Image src={item.icon} width={240} height={240} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function Contact() {
	return (
		<div
			className="px-8 lg:px-24"
			style={{
				backgroundColor: "#121212",
				color: "#F5F5F5",
			}}
		>
			<div className="pb-32">
				<div className="text-6xl text-blue-600 font-bold py-16 text-center">
					Get in touch
				</div>
				<div className="text-3xl font-bold text-center">
					<a
						href="mailto:dimasriat@gmail.com"
						className="hover:underline"
					>
						dimasriat@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<About />
			<WorkExperiences />
			<Tools />
			<Contact />
		</div>
	);
}
