import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Payments Dashboard",
    description:
      "Payments Dashboard is a web app that generates analytics of payment data and transactions between Distributor, retailer and consumer.",
    image: "PaymentsDashboard.png",
    github: "",
    link: "https://dashboard.paynnow.com/",
  },
  {
    name: "Food Restaurant Web (Single Merchant)",
    description: "It is a single merchant food website for restaurant for seamless online food ordering business",
    image: "FoodWeb.png",
    github: "",
    link: "https://chawlabakery.chaafo.com/",
  },
  {
    name: "Food Restaurant Web (Multi Merchant)",
    description:
      "It is a multi merchant food website for restaurants having cloud kitchen or multiple restaurants",
    image: "MultiFoodWeb.png",
    github: "",
    link: "https://eatfactory.chaafo.com/",
  },
  {
    name: "Flights (Travel)",
    description:
      "Streamlined flight booking platform offering seamless travel planning and competitive deals.",
    image: "FlightsWeb.png",
    github: "",
    link: "https://flights.bumppy.com/",
  },
  {
    name: "Payments Platform",
    description:
      "Efficient payments platform facilitating seamless transactions between distributors, retailers and consumer, optimizing business operations",
    image: "PaymentsWeb.png",
    github: "",
    link: "https://payments.bumppy.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github &&
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
