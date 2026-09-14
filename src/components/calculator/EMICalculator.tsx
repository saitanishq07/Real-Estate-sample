import React, { useState, useMemo } from 'react';
import { Calculator, Info, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EMICalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(2500000);
  const [downPayment, setDownPayment] = useState<number>(750000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(10);

  const { loanAmount, monthlyEmi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const loan = Math.max(0, propertyPrice - downPayment);
    if (loan <= 0 || interestRate <= 0 || loanTenureYears <= 0) {
      return {
        loanAmount: 0,
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const r = interestRate / (12 * 100);
    const n = loanTenureYears * 12;

    const emi = Math.round((loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPay = emi * n;
    const totInterest = Math.max(0, totalPay - loan);

    const pPct = Math.round((loan / totalPay) * 100);
    const iPct = 100 - pPct;

    return {
      loanAmount: loan,
      monthlyEmi: emi,
      totalInterest: totInterest,
      totalPayment: totalPay,
      principalPercent: pPct,
      interestPercent: iPct,
    };
  }, [propertyPrice, downPayment, interestRate, loanTenureYears]);

  const formatLakhs = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const applyPreset = (price: number) => {
    setPropertyPrice(price);
    setDownPayment(Math.round(price * 0.3));
  };

  return (
    <div className="bg-alabaster-100 rounded-3xl p-6 sm:p-10 border border-alabaster-200 shadow-luxury">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-alabaster-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-900 text-gold-400 flex items-center justify-center shadow-glow-gold">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold text-brand-900">
              Plot Finance & Loan Estimator
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Pre-approved by HDFC Bank, ICICI Bank, SBI, & Axis Bank for up to 80% plot loans.
            </p>
          </div>
        </div>

        {/* Quick Size Presets */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Presets:</span>
          <button
            onClick={() => applyPreset(2500000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
              propertyPrice === 2500000 ? 'bg-brand-900 text-gold-300 border-brand-800' : 'bg-white text-slate-700 border-alabaster-200'
            }`}
          >
            150 Sq.Yd (₹25L)
          </button>
          <button
            onClick={() => applyPreset(3500000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
              propertyPrice === 3500000 ? 'bg-brand-900 text-gold-300 border-brand-800' : 'bg-white text-slate-700 border-alabaster-200'
            }`}
          >
            200 Sq.Yd (₹35L)
          </button>
          <button
            onClick={() => applyPreset(5000000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
              propertyPrice === 5000000 ? 'bg-brand-900 text-gold-300 border-brand-800' : 'bg-white text-slate-700 border-alabaster-200'
            }`}
          >
            300 Sq.Yd (₹50L)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Input Form */}
        <div className="lg:col-span-7 space-y-6 bg-white p-7 rounded-3xl border border-alabaster-200 shadow-subtle">
          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
              <span>Plot Purchase Price</span>
              <span className="font-serif font-bold text-brand-900 text-xl">
                {formatLakhs(propertyPrice)}
              </span>
            </div>
            <input
              type="range"
              min={1000000}
              max={10000000}
              step={100000}
              value={propertyPrice}
              onChange={(e) => {
                const newPrice = Number(e.target.value);
                setPropertyPrice(newPrice);
                if (downPayment > newPrice) setDownPayment(Math.round(newPrice * 0.3));
              }}
              className="w-full h-2.5 bg-alabaster-200 rounded-lg appearance-none cursor-pointer accent-brand-800"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
              <span>₹10 Lakhs</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
              <span>Down Payment ({Math.round((downPayment / propertyPrice) * 100)}%)</span>
              <span className="font-serif font-bold text-brand-900 text-xl">
                {formatLakhs(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min={Math.round(propertyPrice * 0.1)}
              max={Math.round(propertyPrice * 0.8)}
              step={50000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2.5 bg-alabaster-200 rounded-lg appearance-none cursor-pointer accent-brand-800"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
              <span>10% Min</span>
              <span>30% Recommended</span>
              <span>80% Max</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
              <span>Interest Rate (p.a)</span>
              <span className="font-serif font-bold text-brand-900 text-xl">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min={6.5}
              max={15.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2.5 bg-alabaster-200 rounded-lg appearance-none cursor-pointer accent-brand-800"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
              <span>6.5%</span>
              <span>8.5% (Plot Loan Avg)</span>
              <span>15.0%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 mb-2">
              <span>Loan Tenure</span>
              <span className="font-serif font-bold text-brand-900 text-xl">
                {loanTenureYears} Years ({loanTenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={loanTenureYears}
              onChange={(e) => setLoanTenureYears(Number(e.target.value))}
              className="w-full h-2.5 bg-alabaster-200 rounded-lg appearance-none cursor-pointer accent-brand-800"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1.5">
              <span>1 Year</span>
              <span>10 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Output Box */}
        <div className="lg:col-span-5 bg-brand-900 text-white p-7 sm:p-8 rounded-3xl border border-brand-800 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-architectural text-gold-300 font-bold block mb-1">
              Estimated Monthly Installment
            </span>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
              ₹{monthlyEmi.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-300">/ month</span>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Principal ({principalPercent}%)</span>
                <span>Interest ({interestPercent}%)</span>
              </div>
              <div className="w-full h-3 bg-dark-900 rounded-full overflow-hidden flex border border-brand-800">
                <div
                  style={{ width: `${principalPercent}%` }}
                  className="bg-gold-400 h-full transition-all duration-300"
                />
                <div
                  style={{ width: `${interestPercent}%` }}
                  className="bg-emerald-500 h-full transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3 pt-6 border-t border-brand-800 text-xs font-medium">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Loan Principal:</span>
                <span className="font-semibold text-white">₹{loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Total Interest Payable:</span>
                <span className="font-semibold text-white">₹{totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-brand-800">
                <span className="text-gold-300 font-bold">Total Payment Amount:</span>
                <span className="font-serif font-bold text-lg text-gold-400">
                  ₹{totalPayment.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-brand-800">
            <div className="flex items-start gap-2 text-[11px] text-slate-300 leading-normal">
              <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                Illustrative calculation only. Pre-approved bank offers subject to standard loan documentation.
              </span>
            </div>

            <Link
              to="/site-visit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gold-400 hover:bg-gold-500 text-brand-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
            >
              <span>Check Pre-Approved Bank Offers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
