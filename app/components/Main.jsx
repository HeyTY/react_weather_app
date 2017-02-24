const React 	= require("react");
const Nav		= require("Nav");


var Main = (props) => {
	return (
			<div>
				<Nav/>
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 col-centered">
								{props.children}
							</div>
						</div>
					</div>
				<h2>Main Component</h2>
				
				
			</div>
		);
}

module.exports = Main;