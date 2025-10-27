const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';


export async function fetchTasks() {
const res = await fetch(`${API_BASE}/tasks`);
return res.json();
}


export async function createTask(payload) {
const res = await fetch(`${API_BASE}/tasks`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
return res.json();
}


export async function updateTask(id, payload) {
const res = await fetch(`${API_BASE}/tasks/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
return res.json();
}


export async function deleteTask(id) {
await fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' });
}