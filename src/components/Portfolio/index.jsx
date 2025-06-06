import React, { useEffect, useState } from "react"

// Styles
import "./portfolio.css"

// components
import { Heading } from "../Heading/Heading"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare"
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock"

import PortfolioItem from "./PortfolioItem/PortfolioItem"

const Portfolio = ({ projects }) => {
  const [selected, setSelected] = useState("projects")
  const [data, setData] = useState([])
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    let tempList = []
    projects.map(({ category }) => {
      if (!tempList.includes(category)) {
        tempList.push(category)
      }

      return null
    })
    setProjectList(tempList)
  }, [projects])

  useEffect(() => {
    projectList.map((list) => {
      if (selected === list) {
        setData(projects.filter((project) => project.category === list))
      }

      return null
    })
  }, [selected, projectList, projects])

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" style={{ padding: "3rem" }} />
      <div className="list">
        {projectList &&
          projectList.map((list) => (
            <PortfolioItem
              title={list}
              key={list}
              active={selected === list}
              setSelected={setSelected}
              id={list}
            />
          ))}
      </div>
      <div className="row">
        {data.length &&
          data.map((item, index) => (
            <div className="column" key={index}>
              <img src={item?.img} alt={item.title} />
              <div className="overlay">

                <div className="right">
                  <h3>{item.title}</h3>
                  {item.category =="projects" && (
                    <a href={item.repositoryUrl}>
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        size="2x"
                        className="icon"
                        style={{ marginRight: "0.3em" }}
                        title="Github Repo"
                      />
                    </a>
                  )}

                  {item.liveUrl !== "private" ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkSquareAlt}
                        size="2x"
                        className="icon"
                        title="Live view"
                      />{" "}
                    </a>
                  ) : (
                    <a href="#_" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="icon"
                        title="Private Link"
                      />{" "}
                    </a>
                  )}
                  
                </div>
                <div className="left">
                  {Array.isArray(item.tagline)&&item.tagline.length>0 && (
                    <div>
                      {
                        item.tagline.map((tag)=>(
                            <p>-{tag}</p>
                          )
                        )
                      }
                    </div>
                    )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Portfolio
