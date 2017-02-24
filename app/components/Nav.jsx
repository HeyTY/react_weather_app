const React 	= require("react");
const {Link, IndexLink} 	= require("react-router"); 


var Nav = React.createClass({

	onSearch: function (e) {
		e.preventDefault();
		alert("Not yet wired up");
	},

render: function () {
	return (
		<div>
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="#">WeatherApp</a>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li>
		        	<IndexLink to="/" activeclassName="active" activeStyle={{fontWeight: "bold"}}> Get Weather </IndexLink>
		        </li>
		        <li>
		        	<Link to="/about" activeclassName="active" activeStyle={{fontWeight: "bold"}}> About </Link>
		        </li>
		        <li>
		        	<Link to="/examples" activeclassName="active" activeStyle={{fontWeight: "bold"}}> Examples </Link>
		        </li>
		      </ul>
		      
		      <form onSubmit={this.onSearch} className="navbar-form navbar-right">
		        <div className="form-group">
		          <input type="search" className="form-control" placeholder="Search Weather"/>
		        	<input type="submit" className="btn btn-info" value="Get Weather"/>
		         </div>
		      </form>

		    </div>
		  </div>
		</nav>
		</div>	
		);
	}
});

module.exports = Nav;
