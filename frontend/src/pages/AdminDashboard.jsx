import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, subtitle, colorClass }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className={`text-3xl font-bold mt-2 ${colorClass}`}>{value}</p>
    <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
  </div>
);

const DashboardOverview = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Shelter Overview</h1>
      <p className="text-gray-500">Current status and recent activities at Maa Astha.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Sheltered" value="142" subtitle="+3 this week" colorClass="text-blue-600" />
      <StatCard title="Recently Added" value="12" subtitle="Last 7 days" colorClass="text-orange-500" />
      <StatCard title="Reunited" value="89" subtitle="All time" colorClass="text-green-500" />
      <StatCard title="Medical Needs" value="15" subtitle="Requires attention" colorClass="text-red-500" />
    </div>
  </div>
);

const AddPerson = () => {
  const initialForm = { 
    name: '', age: '', gender: 'Select', 
    location: '', image: '', identificationMarks: '', 
    clothing: '', description: '', status: 'Sheltered' 
  };
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Record saved successfully! (Backend integration pending)");
    setFormData(initialForm);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Person Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Row 1: Name, Age, Gender */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" required placeholder="e.g. Unknown or John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Approx. Age</label>
            <input type="number" required placeholder="e.g. 45"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
              value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
              <option value="Select" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 2: Location and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location Found</label>
            <input type="text" required placeholder="Detailed location..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
            <input type="file" accept="image/*"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={e => setFormData({...formData, image: e.target.files[0]})} />
          </div>
        </div>

        {/* Row 3: Identification Marks & Clothing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identification Marks</label>
            <input type="text" placeholder="Scars, birthmarks, tattoos..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.identificationMarks} onChange={e => setFormData({...formData, identificationMarks: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Clothes Found Wearing</label>
            <input type="text" placeholder="e.g. Blue shirt, black pants..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.clothing} onChange={e => setFormData({...formData, clothing: e.target.value})} />
          </div>
        </div>

        {/* Row 4: Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Physical Condition & Medical Needs</label>
          <textarea rows="3" required placeholder="Describe their mental/physical state, any immediate medical requirements..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button type="button" onClick={() => setFormData(initialForm)} className="px-5 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium">
            Clear Form
          </button>
          <button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm font-medium">
            Save Record
          </button>
        </div>
      </form>
    </div>
  );
};

const Records = () => {
  const [records] = useState([
    { id: 1, name: 'Unknown Male', age: 45, location: 'Central Station', status: 'Sheltered' },
    { id: 2, name: 'Sunita Sharma', age: 62, location: 'Market Road', status: 'Reunited' },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Shelter Records</h2>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-sm border-b">
            <th className="p-4">Name</th>
            <th className="p-4">Age</th>
            <th className="p-4">Location Found</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {records.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50">
              <td className="p-4 font-medium text-gray-800">{record.name}</td>
              <td className="p-4 text-gray-600">{record.age}</td>
              <td className="p-4 text-gray-600">{record.location}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  record.status === 'Reunited' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- MAIN DASHBOARD LAYOUT ---

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate(); // <-- Added hook here

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'add', label: 'Add Person', icon: '➕' },
    { id: 'records', label: 'View Records', icon: '📁' },
  ];

  const handleLogout = () => {
    navigate('/admin'); // <-- Navigates back to the login page
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardOverview />;
      case 'add': return <AddPerson />;
      case 'records': return <Records />;
      default: return <DashboardOverview />;
    }
  };

  return (
    // 'h-screen' ensures the dashboard takes the full window height
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-blue-600">Maa Astha</h2>
          <p className="text-xs text-gray-500 mt-1">Admin Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-100 p-4 flex justify-between items-center">
          <h2 className="font-semibold text-gray-700 capitalize">
            {activeTab.replace('-', ' ')}
          </h2>
          <button onClick={handleLogout} className="text-sm text-red-600 font-medium hover:underline">Logout</button>
        </header>
        
        {/* Dynamic View Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;