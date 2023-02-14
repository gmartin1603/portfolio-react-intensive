import React, { useState, useEffect } from 'react'
import { Col, Row, Nav, Tab } from 'react-bootstrap'
import Masonry from 'react-responsive-masonry'
import SinglePortfolio from '../SingleFeatures/SinglePortfolio'
import portfolioImg_01 from '../assets/images/portfolio/1.png'
import portfolioImg_02 from '../assets/images/portfolio/2.png'
import portfolioImg_03 from '../assets/images/portfolio/3.png'
import portfolioImg_04 from '../assets/images/portfolio/4.png'
import portfolioImg_05 from '../assets/images/portfolio/5.png'
import portfolioImg_06 from '../assets/images/portfolio/6.png'
import { SRLWrapper } from 'simple-react-lightbox'
import SectionTitle from './section_title'

export default function Portfolios() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [portfolioColumns, setPortfolioColumns] = useState(3)

  const controlColumns = () => {
    setWindowWidth(window.innerWidth)

    if (windowWidth >= 992) {
      setPortfolioColumns(3)
    } else if (windowWidth <= 991 && windowWidth > 767) {
      setPortfolioColumns(3)
    }
    if (windowWidth <= 767) {
      setPortfolioColumns(1)
    }
  }

  window.addEventListener('resize', controlColumns)

  useEffect(() => {
    controlColumns()
  }, [windowWidth])

  return (
    <>
      <div className='portfolio-area section-ptb-2' id='portfolio'>
        <div className='container'>
          <SectionTitle
            title='PORTFOLIO'
            subTitle='My Masterpiece Collection'
            desc='Welcome to my project section, where you can find a selection of my past and current software development projects. I am passionate about creating high-quality, innovative solutions for a variety of industries and am always looking for new challenges to tackle.'
          />
          <Tab.Container defaultActiveKey='all'>
            <Row>
              <div className='col-xl-8 col-lg-9 col-sm-12 mx-auto'>
                <Nav className='pofo-cat pb-5 text-center justify-content-center'>
                  <Nav.Item>
                    <Nav.Link eventKey='all'>ALL</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='ux_ui'>UI / UX</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='web_development'>
                      WEB DEVELOPMENT
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey='web_research'>WEB RESEARCH</Nav.Link>
                  </Nav.Item> */}
                  {/* <Nav.Item>
                    <Nav.Link eventKey='marketing'>MARKETING</Nav.Link>
                  </Nav.Item> */}
                  <div className='pofo-line'></div>
                </Nav>
              </div>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey='all'>
                    {/* <SRLWrapper> */}
                      <Masonry columnsCount={portfolioColumns}>
                        <a href="https://www.loom.com/share/2dc3dcef23944e8ea972e42b229cc98f">
                          <p>Overtime Management - App Demo - Watch Video</p>
                          <img style={{maxWidth:"350px"}} src="https://cdn.loom.com/sessions/thumbnails/2dc3dcef23944e8ea972e42b229cc98f-1676224245435.gif" alt="Overtime Managment"/>
                        </a>
                        {/* <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Overtime Management'
                        /> */}
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          link="https://slack-clone-77bf7.web.app/"
                          title='Slack Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          link="https://clone-8b1b2.web.app/"
                          title='Amazon Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          link="https://chatgpt-clone-f112f.web.app/"
                          title='ChatGPT Clone'
                        />
                        {/* <SinglePortfolio
                          // portfolioImg={portfolioImg_06}
                          title='Spotify Player'
                        /> */}
                      </Masonry>
                    {/* </SRLWrapper> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey='ux_ui'>
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Overtime Management'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          title='Slack Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          title='Amazon Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          title='ChatGPT Clone'
                        />
                        {/* <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          title='Spotify Player'
                        /> */}
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  <Tab.Pane eventKey='web_development'>
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Overtime Management'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          title='Slack Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          title='Amazon Clone'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          title='ChatGPT Clone'
                        />
                        {/* <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          title='Spotify Player'
                        /> */}
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey='web_research'>
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Portfolio Title One'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          title='Portfolio Title Three'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          title='Portfolio Title Four'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          title='Portfolio Title Five'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          title='Portfolio Title Six'
                        />
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane> */}
                  {/* <Tab.Pane eventKey='marketing'>
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Portfolio Title One'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          title='Portfolio Title Three'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          title='Portfolio Title Four'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          title='Portfolio Title Five'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          title='Portfolio Title Six'
                        />
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane> */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  )
}
