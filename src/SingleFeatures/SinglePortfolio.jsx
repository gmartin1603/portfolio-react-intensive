import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaGlobe, FaInfoCircle, FaVideo } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
export default function SinglePortfolio(props) {
	const { portfolioImg, title, link, video } = props;

	const [show, setShow] = useState(false);

  // const detailsPage = "/portfolio-details/" + title.replace(/ /g, "-").toLowerCase();
  const detailsPage = false;

	const handleClose = () => {
		console.log("handleClose");
		setShow(false);
	};
	return (
		<div className="grid">
			<div className="col px-sm-2 mb-3">
				<a
					href={link}
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						textDecoration: "none",
					}}
				>
					<p
						style={{
							borderBottom: "1px solid white",
							width: "max-content",
							paddingLeft: "5%",
							paddingRight: "5%",
						}}
					>
						{title}
					</p>
				</a>
				<div className="portfolio-wrapper">
					<div className="portfolio-thumb">
						<img src={portfolioImg} style={{ height: "200px" }} alt={title} />
					</div>
					<div
						className="overlay"
						style={{ height: "60%", textAlign: "center" }}
						onClick={() => setShow(true)}
					>
						<img className="d-none" src={portfolioImg} alt={title} />
						<i>
							<FiPlus />
							<p>Click to enlarge</p>
						</i>
					</div>
					{/* <a href={portfolioImg} data-attribute="SRL">
            <div
              className="overlay"
              style={{ height: "60%", textAlign: "center" }}
            >
              <img className="d-none" src={portfolioImg} alt={title} />
              <i>
                <FiPlus />
                <p>Click to enlarge</p>
              </i>
            </div>
          </a> */}
				</div>
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg"
			>
				<span className="project-modal">
					<Modal.Header>
						<Modal.Title style={{ color: "white" }}>{title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<span className="w-100 d-flex justify-content-around">
							{video && (
								<div className="d-flex align-items-center">
									<div className="ct-item-icon float-left ml-30 mr-20">
										<i style={{color: "#e4aa48"}}>
											<FaVideo />
										</i>
									</div>
									<a
										href={video}
										target="_blank"
										rel="noopener noreferrer"
										className="btn-animation"
									>
										<p
											style={{
												width: "max-content",
												paddingLeft: "5%",
												paddingRight: "5%",
                        marginBottom: 0,
												color: "white",
											}}
										>
											- Video Walk Through -
										</p>
									</a>
								</div>
							)}
							{link && (
                <div className="d-flex align-items-center">
                  <div className="ct-item-icon float-left ml-30 mr-20">
                    <i style={{color: "#e4aa48"}}>
                      <FaGlobe />
                    </i>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
										className="btn-animation"
                  >
                    <p
                      style={{
                        width: "max-content",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        marginBottom: 0,
                        color: "white",
                      }}
                    >
                      - Live App -
                    </p>
                  </a>
                </div>
							)}
              {detailsPage && (
                <div className="d-flex align-items-center">
                  <div className="ct-item-icon float-left ml-30 mr-20">
                    <i style={{color: "#e4aa48"}}>
                      <FaInfoCircle />
                    </i>
                  </div>
                  <a
                    href={detailsPage}
										className="btn-animation"
                  >
                    <p
                      style={{
                        width: "max-content",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        marginBottom: 0,
                        color: "white",
                      }}
                    >
                      - Project Details Page -
                    </p>
                  </a>
                </div>
							)}
						</span>
						<img src={portfolioImg} alt={title} style={{ width: "100%", marginTop: "2%" }} />
					</Modal.Body>
					<Modal.Footer>
						{/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
						<div className="ct-btn" onClick={handleClose}>
							Close
						</div>
						{/* <Button variant="primary">Understood</Button> */}
					</Modal.Footer>
				</span>
			</Modal>
		</div>
	);
}
