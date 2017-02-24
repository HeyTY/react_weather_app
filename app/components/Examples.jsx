const React 		= require("react");
const {Link}		= require("react-router")

var Examples = (props) => {
	return (
			<div>
				<h1 className="text-center">Example</h1>
				<p>Here are a few example locations to try out</p>
				<ol>
					<li>
						<Link to="/?location=New York City">New York City</Link>
					</li>	
					<li>
						<Link to="/?location=Los Angeles">Los Angeles</Link>
					</li>
					<li>
						<Link to="/?location=San Francisco">San Francisco</Link>
					</li>
				</ol>
			</div>
			)
};

module.exports = Examples;