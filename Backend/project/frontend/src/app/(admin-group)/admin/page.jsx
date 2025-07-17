import React from 'react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 rounded-lg p-4 shadow">
                        <h2 className="text-xl font-semibold text-blue-800 mb-2">Users</h2>
                        <p className="text-gray-700">Manage user accounts and permissions.</p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-4 shadow">
                        <h2 className="text-xl font-semibold text-green-800 mb-2">Reports</h2>
                        <p className="text-gray-700">View and export system reports.</p>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 shadow">
                        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Settings</h2>
                        <p className="text-gray-700">Configure application settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
