const React = require("react");


// Stateless Function
var About = (props) => {
	return (
			<div>
				<h1>About Component</h1>
				<h4>This is a Weather Application built with:</h4>
				<ul>
					<li>OpenWeatherMap.org API</li>	
					<li>React</li>
					<li>Node</li>
					<li>Express</li>
				</ul>
			</div>
	)
};

module.exports = About;