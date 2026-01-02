import { useState, useEffect } from "react";

const usersData = [
	{
		id: 1,
		name: "Jane Doe",
		email: "jane@company.com",
		role: "Admin",
		status: "active",
	},
	{
		id: 2,
		name: "John Smith",
		email: "john@company.com",
		role: "User",
		status: "inactive",
	},
	{
		id: 3,
		name: "Maria Lopez",
		email: "maria@company.com",
		role: "Editor",
		status: "active",
	},
	{
		id: 4,
		name: "Chris Evans",
		email: "chris@company.com",
		role: "User",
		status: "active",
	},
	{
		id: 5,
		name: "Alex Kim",
		email: "alex@company.com",
		role: "User",
		status: "inactive",
	},
	{
		id: 6,
		name: "Nina Patel",
		email: "nina@company.com",
		role: "Admin",
		status: "active",
	},
];
function SkeletonRow() {
	return (
		<tr className="skeleton-row">
			<td>
				<div className="skeleton-box" />
			</td>
			<td>
				<div className="skeleton-box" />
			</td>
			<td>
				<div className="skeleton-box small" />
			</td>
			<td>
				<div className="skeleton-pill" />
			</td>
		</tr>
	);
}
function EmptyState() {
	return (
		<tr>
			<td colSpan="4" className="empty-state">
				<p>No users found</p>
				<span>Try adjusting your search or filters</span>
			</td>
		</tr>
	);
}
function UserModal({ user, onClose }) {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<h3>{user.name}</h3>
				<p>{user.email}</p>
				<p>Role: {user.role}</p>
				<p>Status: {user.status}</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
}

export default function Users() {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const pageSize = 4;
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [users, setUsers] = useState(usersData);

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase())
	);

	const paginatedUsers = filteredUsers.slice(
		(page - 1) * pageSize,
		page * pageSize
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			const failed = false; // change to true to test
			if (failed) {
				setError(true);
			} else {
				setIsLoading(false);
			}
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	if (error) {
		return (
			<div className="error-state">
				<h3>Something went wrong</h3>
				<button onClick={() => window.location.reload()}>Retry</button>
			</div>
		);
	}
	function toggleStatus(id) {
		setUsers((prev) =>
			prev.map((u) =>
				u.id === id
					? { ...u, status: u.status === "active" ? "inactive" : "active" }
					: u
			)
		);
	}

	return (
		<div className="users-card">
			<div className="users-header">
				<h3>Users</h3>
				<input
					type="text"
					placeholder="Search users..."
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setPage(1);
					}}
				/>
			</div>

			<table className="users-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{isLoading
						? Array.from({ length: pageSize }).map((_, i) => (
								<SkeletonRow key={i} />
						  ))
						: paginatedUsers.map((user) => (
								<tr key={user.id} onClick={() => setSelectedUser(user)}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>
										<span
											className={`status ${user.status}`}
											onClick={(e) => {
												e.stopPropagation();
												toggleStatus(user.id);
											}}
										>
											{user.status}
										</span>
									</td>
								</tr>
						  ))}
					{!isLoading && paginatedUsers.length === 0 && <EmptyState />}
				</tbody>
			</table>

			<div className="pagination">
				<button disabled={page === 1} onClick={() => setPage(page - 1)}>
					Prev
				</button>
				<span>
					Page {page} of {Math.ceil(filteredUsers.length / pageSize)}
				</span>
				<button
					disabled={page * pageSize >= filteredUsers.length}
					onClick={() => setPage(page + 1)}
				>
					Next
				</button>
			</div>
			{selectedUser && (
				<UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
			)}
		</div>
	);
}
