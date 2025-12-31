import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<h2>Dashboard</h2>
			<nav>
				<NavLink to="/">Overview</NavLink>
				<NavLink to="/users">Users</NavLink>
				<NavLink to="/settings">Settings</NavLink>
			</nav>
		</aside>
	);
}
