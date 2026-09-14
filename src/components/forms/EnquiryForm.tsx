import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { EnquiryFormData } from '../../types';

interface EnquiryFormProps {
  prefilledPlot?: string;
  onSuccess?: () => void;
  title?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  prefilledPlot,
  onSuccess,
  title = 'Send an Instant Property Enquiry'
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobile: '',
    email: '',
    project: 'Vistara Greenfields',
    preferredPlotSize: '200 Sq. Yds',
    preferredFacing: 'East',
    budgetRange: '₹25 Lakhs - ₹40 Lakhs',
    message: prefilledPlot ? `I am interested in plot ${prefilledPlot} at Vistara Greenfields. Please share legal pricing sheets and layout documentation.` : '',
    selectedPlotNumber: prefilledPlot,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.mobile.trim()) errs.mobile = 'Mobile number is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    
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
      if (onSuccess) setTimeout(onSuccess, 2500);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-fade-in shadow-card">
        <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="font-serif text-3xl font-bold text-emerald-950">
          Enquiry Received Successfully!
        </h4>
        <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold">{formData.fullName}</span>. Our relationship officer will contact you shortly at <span className="font-bold">{formData.mobile}</span> with pricing sheets and legal approvals.
        </p>
        {prefilledPlot && (
          <div className="bg-white p-2.5 rounded-xl inline-block border border-emerald-200 text-xs font-bold text-emerald-900">
            Tagged Interest: Plot {prefilledPlot}
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <h4 className="font-serif text-2xl sm:text-3xl font-bold text-brand-900 mb-2">{title}</h4>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Vikram Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-alabaster-200 focus:ring-brand-800'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            placeholder="e.g. +91 98765 43210"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className={`w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.mobile ? 'border-red-400 focus:ring-red-400' : 'border-alabaster-200 focus:ring-brand-800'
            }`}
          />
          {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="e.g. vikram@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border rounded-xl text-brand-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-alabaster-200 focus:ring-brand-800'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Selected Project
          </label>
          <select
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            className="w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border border-alabaster-200 rounded-xl text-brand-900 focus:ring-2 focus:ring-brand-800"
          >
            <option value="Vistara Greenfields">Vistara Greenfields (Bangalore Highway)</option>
            <option value="Vistara Crest">Vistara Crest (Airport Expressway)</option>
            <option value="Vistara Meadows">Vistara Meadows (East City Corridor)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Plot Size
          </label>
          <select
            value={formData.preferredPlotSize}
            onChange={(e) => setFormData({ ...formData, preferredPlotSize: e.target.value })}
            className="w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border border-alabaster-200 rounded-xl text-brand-900"
          >
            <option value="150 Sq. Yds">150 Sq. Yds (30×45)</option>
            <option value="200 Sq. Yds">200 Sq. Yds (30×60)</option>
            <option value="250 Sq. Yds">250 Sq. Yds (37.5×60)</option>
            <option value="300 Sq. Yds">300 Sq. Yds (45×60)</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Facing
          </label>
          <select
            value={formData.preferredFacing}
            onChange={(e) => setFormData({ ...formData, preferredFacing: e.target.value })}
            className="w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border border-alabaster-200 rounded-xl text-brand-900"
          >
            <option value="East">East Facing</option>
            <option value="West">West Facing</option>
            <option value="North">North Facing</option>
            <option value="South">South Facing</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
            Budget Range
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border border-alabaster-200 rounded-xl text-brand-900"
          >
            <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
            <option value="₹25 Lakhs - ₹40 Lakhs">₹25 Lakhs - ₹40 Lakhs</option>
            <option value="₹40 Lakhs - ₹60 Lakhs">₹40 Lakhs - ₹60 Lakhs</option>
            <option value="Above ₹60 Lakhs">Above ₹60 Lakhs</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1">
          Specific Requirements / Questions
        </label>
        <textarea
          rows={3}
          placeholder="Specify any questions about approvals, plot availability, or site visits..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 text-xs font-semibold bg-alabaster-50 border border-alabaster-200 rounded-xl text-brand-900 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-800"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-brand-900 hover:bg-brand-800 text-gold-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Processing Submission...</span>
        ) : (
          <>
            <span>Submit Official Enquiry</span>
            <Send className="w-4 h-4 text-gold-400" />
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-slate-500">
        🔒 Confidential buyer assistance. Zero spam policy.
      </p>
    </form>
  );
};
