import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter ,ListGroup,ListGroupItem,Media } from 'reactstrap';


class Footer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tellstoryModal: false
		};

		this.toggleTellStory = this.toggleTellStory.bind(this);
		this.toggleChat = this.toggleChat.bind(this);
	}

	toggleTellStory() {
		this.setState({
			tellstoryModal: !this.state.tellstoryModal
		});
	}

	toggleChat() {
		this.setState({
			chatModal: !this.state.chatModal
		});
	}


	render() {
		return (
			<div>
				<footer className="container d-block d-sm-none fixed-bottom bg-light">
					<div className="row justify-content-md-center">
						<div className="col-4 text-center">
							<Button color="outline-secondary" onClick={this.toggleTellStory}><i className="fa fa-pencil"></i></Button>
						</div>
						<div className="col-4 text-center">
							<Button color="outline-secondary"><i className="fa fa-user-circle"></i></Button>
						</div>
						<div className="col-4 text-center">
							<Button color="outline-secondary" onClick={this.toggleChat}><i className="fa fa-comments"></i></Button>
						</div>
					</div>
				</footer>

				<div>
					<Modal id="TellStory" isOpen={this.state.tellstoryModal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggleTellStory}>
							Tell Your Story
						</ModalHeader>
						<ModalBody>
							<textarea type="text" className="form-control" placeholder="Tell Your Story" aria-label="Recipient's username" aria-describedby="basic-addon2"></textarea>
						</ModalBody>
						<ModalFooter>
							<button id="xs-btn" className="btn btn-outline-secondary" type="button">
								<i className="fa fa-picture-o"></i>
								<input id="xs-input" type="file" style={{ display: "none" }} />
							</button>
							<button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i></button>
						</ModalFooter>
					</Modal>
				</div>

				<div>
					<Modal id="Chat" isOpen={this.state.chatModal} toggle={this.toggleChat} className={this.props.className}>
						<ModalHeader toggle={this.toggleChat}>
							Your Latest Chat
						</ModalHeader>
						<ModalBody>
							<div className="chat-list">
								<ListGroup flush className="scrollspy-example">
									<ListGroupItem>
										<Media>
											<Media object src="https://placehold.it/30x30" alt="Generic placeholder" />
											<Media body>
												<h5 className="mt-0">Person</h5>
											</Media>
										</Media>
									</ListGroupItem>

									<ListGroupItem>
										<Media>
											<Media object src="https://placehold.it/30x30" alt="Generic placeholder" />
											<Media body>
												<h5 className="mt-0">Person</h5>
											</Media>
										</Media>
									</ListGroupItem>

								</ListGroup>
							</div>
						</ModalBody>
						<ModalFooter>
							<input type="text" className="search w-100" placeholder="Search" />
						</ModalFooter>
					</Modal>
				</div>

			</div>
		);
	}
}

export default Footer;
