import React, { useState } from 'react';
import { Calendar, Clock, Users, Car, CheckCircle2 } from 'lucide-react';
import { SiteVisitFormData } from '../../types';

interface SiteVisitFormProps {
  onSuccess?: () => void;
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<SiteVisitFormData>({
    fullName: '',
    mobile: '',
    email: '',
    preferredDate: '',
    preferredTimeSlot: '10:00 AM - 12:00 PM',
    numberOfVisitors: 2,
    pickupRequired: false,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.mobile.trim()) errs.mobile = 'Mobile number is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a visit date';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fade-in shadow-card">
        <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
            Site Visit Scheduled
          </span>
          <h3 className="font-serif text-3xl font-bold text-emerald-950">
            We Look Forward to Welcoming You!
          </h3>
        </div>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Hello <span className="font-semibold">{formData.fullName}</span>, your private site visit to <span className="font-semibold">Vistara Greenfields</span> has been provisionally booked for <span className="font-semibold">{formData.preferredDate}</span> ({formData.preferredTimeSlot}).
        </p>

        <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
          <div className="flex justify-between">
            <span className="text-slate-500">Contact Number:</span>
            <span className="font-semibold">{formData.mobile}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Visitors Count:</span>
            <span className="font-semibold">{formData.numberOfVisitors} Persons</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">AC Cab Pickup:</span>
            <span className="font-semibold text-emerald-700">
              {formData.pickupRequired ? 'Requested (Driver details will be sent)' : 'Self-Drive'}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          A confirmation SMS & WhatsApp location pin have been sent to your mobile.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-card">
      <div className="border-b border-cream-200 pb-4 mb-2">
        <h3 className="font-serif text-2xl font-bold text-brand-900">
          Book a Guided Private Site Visit
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Experience the 120-acre master layout, roads, and surrounding infrastructure in person with a dedicated relationship officer.
        </p>
      </div>

      {/* Row 1: Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Ramesh Kumar"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-cream-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-cream-200 focus:ring-brand-800'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            placeholder="e.g. +91 98765 43210"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-cream-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.mobile ? 'border-red-400 focus:ring-red-400' : 'border-cream-200 focus:ring-brand-800'
            }`}
          />
          {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
        </div>
      </div>

      {/* Row 2: Email & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="e.g. ramesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 text-sm bg-cream-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-cream-200 focus:ring-brand-800'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Preferred Date *
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full px-4 py-3 text-sm bg-cream-50 border rounded-xl text-brand-900 focus:outline-none focus:ring-2 ${
                errors.preferredDate ? 'border-red-400 focus:ring-red-400' : 'border-cream-200 focus:ring-brand-800'
              }`}
            />
          </div>
          {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
        </div>
      </div>

      {/* Row 3: Slot & Visitors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Time Slot
          </label>
          <select
            value={formData.preferredTimeSlot}
            onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-cream-50 border border-cream-200 rounded-xl text-brand-900"
          >
            <option value="09:00 AM - 11:00 AM">Morning (09:00 AM - 11:00 AM)</option>
            <option value="11:00 AM - 01:00 PM">Mid-Day (11:00 AM - 01:00 PM)</option>
            <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
            <option value="04:00 PM - 06:00 PM">Sunset Tour (04:00 PM - 06:00 PM)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Number of Visitors
          </label>
          <select
            value={formData.numberOfVisitors}
            onChange={(e) => setFormData({ ...formData, numberOfVisitors: Number(e.target.value) })}
            className="w-full px-4 py-3 text-sm bg-cream-50 border border-cream-200 rounded-xl text-brand-900"
          >
            <option value={1}>1 Person</option>
            <option value={2}>2 Persons (Family)</option>
            <option value={4}>3-4 Persons</option>
            <option value={6}>5+ Persons (Group)</option>
          </select>
        </div>
      </div>

      {/* Free Pickup Checkbox */}
      <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-900 text-gold-400 rounded-xl">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-900 block">
              Complimentary Chauffeur-Driven Cab Pickup
            </span>
            <span className="text-[11px] text-slate-500">
              Pick up and drop-off from key city locations or metro stations.
            </span>
          </div>
        </div>

        <input
          type="checkbox"
          checked={formData.pickupRequired}
          onChange={(e) => setFormData({ ...formData, pickupRequired: e.target.checked })}
          className="w-5 h-5 accent-brand-800 rounded cursor-pointer"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-gold-500 hover:bg-gold-600 text-brand-950 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Confirming Schedule...</span>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>Request Guaranteed Site Visit</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        🚗 Site visits are available 7 days a week from 9:00 AM to 6:00 PM.
      </p>
    </form>
  );
};
