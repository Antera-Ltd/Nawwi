'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Package, Calendar, ShoppingBag, Plus, Edit, Trash2, X, Save } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  async function fetchData() {
    setLoading(true);
    if (activeTab === 'products') {
      const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      setProducts(data || []);
    } else if (activeTab === 'events') {
      const { data } = await supabase.from('events').select('*').order('date', { ascending: true });
      setEvents(data || []);
    } else if (activeTab === 'orders') {
      const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      setOrders(data || []);
    }
    setLoading(false);
  }

  const handleOpenModal = (item: any = null) => {
    setEditingItem(item);
    if (item) {
      setFormData(item);
    } else {
      setFormData(activeTab === 'products'
        ? { name: '', description: '', price: 0, stock: 0, scent_notes: [] }
        : { title: '', description: '', date: '', venue: '', price: 0, capacity: 0, seats_remaining: 0 }
      );
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingItem) {
        const { error } = await supabase
          .from(activeTab)
          .update(formData)
          .eq('id', editingItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from(activeTab)
          .insert([formData]);
        if (error) throw error;
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to save.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    setLoading(true);
    try {
      const { error } = await supabase.from(activeTab).delete().eq('id', id);
      if (error) throw error;
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Delete failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId);
    if (!error) fetchData();
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 px-4">Admin Console</h2>
          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold ${activeTab === 'products' ? 'bg-[#b47878] text-white shadow-lg' : 'hover:bg-neutral-100'}`}
          >
            <Package size={18} /> Products
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold ${activeTab === 'events' ? 'bg-[#b47878] text-white shadow-lg' : 'hover:bg-neutral-100'}`}
          >
            <Calendar size={18} /> Events
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold ${activeTab === 'orders' ? 'bg-[#b47878] text-white shadow-lg' : 'hover:bg-neutral-100'}`}
          >
            <ShoppingBag size={18} /> Orders
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-serif capitalize">{activeTab}</h1>
            {(activeTab === 'products' || activeTab === 'events') && (
              <button
                onClick={() => handleOpenModal()}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#b47878] transition-colors"
              >
                <Plus size={16} /> Add New
              </button>
            )}
          </div>

          {loading && !isModalOpen ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-16 bg-neutral-50 animate-pulse rounded-xl" />)}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-neutral-100 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {activeTab === 'products' && (
                    <tr>
                      <th className="px-4 py-4">Name</th>
                      <th className="px-4 py-4">Price</th>
                      <th className="px-4 py-4">Stock</th>
                      <th className="px-4 py-4 text-right">Actions</th>
                    </tr>
                  )}
                  {activeTab === 'events' && (
                    <tr>
                      <th className="px-4 py-4">Title</th>
                      <th className="px-4 py-4">Date</th>
                      <th className="px-4 py-4">Seats</th>
                      <th className="px-4 py-4 text-right">Actions</th>
                    </tr>
                  )}
                  {activeTab === 'orders' && (
                    <tr>
                      <th className="px-4 py-4">Order ID</th>
                      <th className="px-4 py-4">Customer</th>
                      <th className="px-4 py-4">Total</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4 text-right">Update</th>
                    </tr>
                  )}
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {activeTab === 'products' && products.map(p => (
                    <tr key={p.id} className="text-sm">
                      <td className="px-4 py-4 font-bold">{p.name}</td>
                      <td className="px-4 py-4">${p.price}</td>
                      <td className="px-4 py-4">{p.stock}</td>
                      <td className="px-4 py-4 text-right space-x-2">
                        <button onClick={() => handleOpenModal(p)} className="p-2 hover:text-[#b47878]"><Edit size={16} /></button>
                        <button onClick={() => handleDelete(p.id)} className="p-2 hover:text-red-500"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                  {activeTab === 'events' && events.map(e => (
                    <tr key={e.id} className="text-sm">
                      <td className="px-4 py-4 font-bold">{e.title}</td>
                      <td className="px-4 py-4">{new Date(e.date).toLocaleDateString()}</td>
                      <td className="px-4 py-4">{e.seats_remaining} / {e.capacity}</td>
                      <td className="px-4 py-4 text-right space-x-2">
                        <button onClick={() => handleOpenModal(e)} className="p-2 hover:text-[#b47878]"><Edit size={16} /></button>
                        <button onClick={() => handleDelete(e.id)} className="p-2 hover:text-red-500"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                  {activeTab === 'orders' && orders.map(o => (
                    <tr key={o.id} className="text-sm">
                      <td className="px-4 py-4 font-mono text-xs">{o.id.slice(0, 8)}...</td>
                      <td className="px-4 py-4">
                        <div className="font-bold">{o.customer_name}</div>
                        <div className="text-xs text-neutral-400">{o.customer_email}</div>
                      </td>
                      <td className="px-4 py-4 font-bold">${o.total}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${o.status === 'delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                          {o.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <select
                          className="text-[10px] font-bold uppercase tracking-widest border border-neutral-100 rounded-lg px-2 py-1 outline-none"
                          value={o.status}
                          onChange={(e) => handleStatusChange(o.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="ready">Ready</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* Modal for Add/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif">{editingItem ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                {activeTab === 'products' ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Name</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Price ($)</label>
                        <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Stock</label>
                        <input required type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: parseInt(e.target.value)})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Description</label>
                      <textarea rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Event Title</label>
                      <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Date</label>
                        <input required type="datetime-local" value={formData.date ? new Date(formData.date).toISOString().slice(0, 16) : ''} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Venue</label>
                        <input required type="text" value={formData.venue} onChange={e => setFormData({...formData, venue: e.target.value})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Price ($)</label>
                        <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Capacity</label>
                        <input required type="number" value={formData.capacity} onChange={e => {
                          const cap = parseInt(e.target.value);
                          setFormData({...formData, capacity: cap, seats_remaining: cap});
                        }} className="w-full px-6 py-4 rounded-xl border border-neutral-100 outline-none focus:border-[#b47878] transition-colors" />
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#b47878] transition-colors"
                >
                  <Save size={18} />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
