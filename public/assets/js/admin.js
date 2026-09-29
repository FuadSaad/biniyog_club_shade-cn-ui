// admin.js - Full Workable Admin Panel
const TOKEN = localStorage.getItem('token');
const HEADERS = { 'Authorization': 'Bearer ' + TOKEN, 'Content-Type': 'application/json', 'Accept': 'application/json' };

async function loadAdminData() {
    if (!TOKEN) return window.location.href = '/index.html';
    const role = localStorage.getItem('role');
    if (role !== 'admin') return window.location.href = '/dashboard/dashboard.html';

    const path = window.location.pathname;

    try {
        // ============================================================
        // ADMIN DASHBOARD PAGE
        // ============================================================
        if (path.includes('admin-dashboard')) {
            const res = await fetch('/api/admin/stats', { headers: HEADERS });
            if (res.ok) {
                const stats = await res.json();
                const statElements = document.querySelectorAll('h3.text-3xl.font-extrabold.text-slate-900');
                if (statElements.length >= 4) {
                    statElements[0].textContent = stats.total_users;
                    statElements[1].textContent = '৳ ' + Number(stats.total_investments).toLocaleString();
                    statElements[2].textContent = stats.pending_deposits;
                    statElements[3].textContent = stats.pending_withdrawals;
                }
            }

            // Load recent users
            const userRes = await fetch('/api/admin/users', { headers: HEADERS });
            if (userRes.ok) {
                const users = await userRes.json();
                const userListContainer = document.querySelector('.bg-white.p-6.rounded-2xl .space-y-4');
                if (userListContainer) {
                    userListContainer.innerHTML = '';
                    users.slice(0, 5).forEach(u => {
                        userListContainer.innerHTML += `
                            <div class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition cursor-pointer border border-transparent hover:border-slate-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">${u.name.substring(0, 2).toUpperCase()}</div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-800">${u.name}</h4>
                                        <p class="text-xs text-slate-500">${u.email}</p>
                                    </div>
                                </div>
                                <span class="text-emerald-600 font-bold text-sm">৳${Number(u.wallet_balance || 0).toLocaleString()}</span>
                            </div>
                        `;
                    });
                }
            }
        }

        // ============================================================
        // ADMIN USERS PAGE
        // ============================================================
        if (path.includes('admin-users')) {
            const res = await fetch('/api/admin/users', { headers: HEADERS });
            if (res.ok) {
                const users = await res.json();
                const tbody = document.querySelector('tbody');
                if (tbody) {
                    tbody.innerHTML = '';
                    users.forEach(u => {
                        tbody.innerHTML += `
                            <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition">
                                <td class="py-4 font-bold text-slate-800">${u.name}</td>
                                <td class="py-4 text-slate-600">${u.email}</td>
                                <td class="py-4 text-slate-600">${u.investor_code || 'N/A'}</td>
                                <td class="py-4 text-emerald-600 font-bold">৳${Number(u.wallet_balance || 0).toLocaleString()}</td>
                                <td class="py-4"><span class="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-md">Active</span></td>
                                <td class="py-4 text-right">
                                    <button class="text-emerald-600 hover:text-emerald-800 text-sm font-bold px-3 py-1 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition">View</button>
                                </td>
                            </tr>
                        `;
                    });
                }
            }
        }

        // ============================================================
        // ADMIN PROJECTS PAGE
        // ============================================================
        if (path.includes('admin-projects')) {
            const res = await fetch('/api/admin/projects', { headers: HEADERS });
            if (res.ok) {
                const projects = await res.json();
                const container = document.getElementById('projectsGrid') || document.querySelector('.grid');
                if (container) {
                    container.innerHTML = '';
                    projects.forEach(p => {
                        container.innerHTML += `
                            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition" data-project-id="${p.id}">
                                <div class="flex gap-4">
                                    <img src="/${p.image_url}" class="w-28 h-20 rounded-xl object-cover" alt="${p.title}">
                                    <div class="flex-1">
                                        <h3 class="font-bold text-lg text-slate-800">${p.title}</h3>
                                        <p class="text-slate-500 text-sm">${p.location}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-3 mt-4">
                                    <div><span class="text-xs text-slate-400 uppercase">Duration</span><input class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm proj-duration" value="${p.duration}"></div>
                                    <div><span class="text-xs text-slate-400 uppercase">Target (BDT)</span><input class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm proj-target" value="${p.target_amount}"></div>
                                    <div><span class="text-xs text-slate-400 uppercase">Share Value (BDT)</span><input class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm proj-share" value="${p.share_value}"></div>
                                    <div><span class="text-xs text-slate-400 uppercase">Profit Share (%)</span><input class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm proj-profit" value="${p.profit_share}"></div>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <span class="px-3 py-1 rounded-full text-xs font-bold ${p.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">${p.status}</span>
                                    <div class="flex gap-2">
                                        <button onclick="saveProject(${p.id}, this)" class="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition">Save Updates</button>
                                        <button onclick="toggleProject(${p.id}, '${p.status}')" class="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 transition">${p.status === 'Active' ? 'Hide Project' : 'Show Project'}</button>
                                        <button onclick="deleteProject(${p.id})" class="px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-xl hover:bg-red-100 transition">Delete</button>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
            }
        }

        // ============================================================
        // ADMIN DEPOSITS PAGE
        // ============================================================
        if (path.includes('admin-deposits')) {
            const res = await fetch('/api/admin/deposits', { headers: HEADERS });
            if (res.ok) {
                const deposits = await res.json();
                const tbody = document.querySelector('tbody');
                if (tbody) {
                    tbody.innerHTML = '';
                    if (deposits.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="6" class="py-8 text-center text-slate-400">No deposit requests yet</td></tr>';
                    }
                    deposits.forEach(d => {
                        const statusClass = d.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                           d.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                           'bg-red-100 text-red-700';
                        tbody.innerHTML += `
                            <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition">
                                <td class="py-4 font-bold text-slate-800">${d.user ? d.user.name : 'N/A'}</td>
                                <td class="py-4 text-slate-600">${d.user ? d.user.email : 'N/A'}</td>
                                <td class="py-4 text-emerald-600 font-bold">৳${Number(d.amount).toLocaleString()}</td>
                                <td class="py-4 text-slate-500">${d.reference || 'N/A'}</td>
                                <td class="py-4"><span class="px-2.5 py-1 ${statusClass} text-xs font-bold rounded-md">${d.status}</span></td>
                                <td class="py-4 text-right">
                                    ${d.status === 'Pending' ? `
                                        <button onclick="approveDeposit(${d.id})" class="text-emerald-600 hover:text-emerald-800 text-sm font-bold px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition mr-1">Approve</button>
                                        <button onclick="rejectDeposit(${d.id})" class="text-red-600 hover:text-red-800 text-sm font-bold px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-lg transition">Reject</button>
                                    ` : '<span class="text-slate-400 text-sm">Processed</span>'}
                                </td>
                            </tr>
                        `;
                    });
                }
            }
        }

        // ============================================================
        // ADMIN WITHDRAWALS PAGE
        // ============================================================
        if (path.includes('admin-withdrawals')) {
            const res = await fetch('/api/admin/withdrawals', { headers: HEADERS });
            if (res.ok) {
                const withdrawals = await res.json();
                const tbody = document.querySelector('tbody');
                if (tbody) {
                    tbody.innerHTML = '';
                    if (withdrawals.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="6" class="py-8 text-center text-slate-400">No withdrawal requests yet</td></tr>';
                    }
                    withdrawals.forEach(w => {
                        const statusClass = w.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                           w.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                           'bg-red-100 text-red-700';
                        tbody.innerHTML += `
                            <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition">
                                <td class="py-4 font-bold text-slate-800">${w.user ? w.user.name : 'N/A'}</td>
                                <td class="py-4 text-slate-600">${w.user ? w.user.email : 'N/A'}</td>
                                <td class="py-4 text-red-600 font-bold">৳${Number(w.amount).toLocaleString()}</td>
                                <td class="py-4 text-slate-500">${w.reference || 'N/A'}</td>
                                <td class="py-4"><span class="px-2.5 py-1 ${statusClass} text-xs font-bold rounded-md">${w.status}</span></td>
                                <td class="py-4 text-right">
                                    ${w.status === 'Pending' ? `
                                        <button onclick="approveWithdrawal(${w.id})" class="text-emerald-600 hover:text-emerald-800 text-sm font-bold px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition mr-1">Approve</button>
                                        <button onclick="rejectWithdrawal(${w.id})" class="text-red-600 hover:text-red-800 text-sm font-bold px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-lg transition">Reject</button>
                                    ` : '<span class="text-slate-400 text-sm">Processed</span>'}
                                </td>
                            </tr>
                        `;
                    });
                }
            }
        }

    } catch (e) {
        console.error('Admin Error:', e);
    }
}

// ============================================================
// ADMIN ACTION FUNCTIONS
// ============================================================

async function saveProject(id, btn) {
    const card = btn.closest('[data-project-id]');
    const data = {
        duration: card.querySelector('.proj-duration').value,
        target_amount: card.querySelector('.proj-target').value,
        share_value: card.querySelector('.proj-share').value,
        profit_share: card.querySelector('.proj-profit').value,
    };
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'PUT', headers: HEADERS, body: JSON.stringify(data) });
    if (res.ok) { alert('Project updated!'); } else { alert('Failed to update'); }
}

async function toggleProject(id, currentStatus) {
    const newStatus = currentStatus === 'Active' ? 'Hidden' : 'Active';
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'PUT', headers: HEADERS, body: JSON.stringify({ status: newStatus }) });
    if (res.ok) { location.reload(); } else { alert('Failed'); }
}

async function deleteProject(id) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE', headers: HEADERS });
    if (res.ok) { location.reload(); } else { alert('Failed'); }
}

async function approveDeposit(id) {
    if (!confirm('Approve this deposit?')) return;
    const res = await fetch(`/api/admin/deposits/${id}/approve`, { method: 'POST', headers: HEADERS });
    const data = await res.json();
    alert(data.message || data.error);
    location.reload();
}

async function rejectDeposit(id) {
    if (!confirm('Reject this deposit?')) return;
    const res = await fetch(`/api/admin/deposits/${id}/reject`, { method: 'POST', headers: HEADERS });
    const data = await res.json();
    alert(data.message || data.error);
    location.reload();
}

async function approveWithdrawal(id) {
    if (!confirm('Approve this withdrawal?')) return;
    const res = await fetch(`/api/admin/withdrawals/${id}/approve`, { method: 'POST', headers: HEADERS });
    const data = await res.json();
    alert(data.message || data.error);
    location.reload();
}

async function rejectWithdrawal(id) {
    if (!confirm('Reject this withdrawal?')) return;
    const res = await fetch(`/api/admin/withdrawals/${id}/reject`, { method: 'POST', headers: HEADERS });
    const data = await res.json();
    alert(data.message || data.error);
    location.reload();
}

document.addEventListener('DOMContentLoaded', loadAdminData);
