import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap,
  Sparkles,
  LogOut
} from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLogin, 
  onLogout,
  selectedBoard,
  setSelectedBoard
}) {
  if (!isOpen) return null;

  const [authMode, setAuthMode] = useState('otp'); // 'otp' | 'email'
  const [phone, setPhone] = useState('9826012345');
  const [email, setEmail] = useState('student@gmail.com');
  const [name, setName] = useState('Ayush Sharma');
  const [grade, setGrade] = useState('12');
  const [board, setBoard] = useState(selectedBoard || 'cbse');
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('4821');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setOtpStep(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    onLogin({
      name: name || 'Smart Student',
      phone: phone,
      grade: grade,
      board: board
    });
    setSelectedBoard(board);
    onClose();
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    onLogin({
      name: name || 'Student',
      email: email,
      grade: grade,
      board: board
    });
    setSelectedBoard(board);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue to-teal-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Student Portal</h3>
              <p className="text-[11px] text-blue-100">SmartStudy India • Free Access</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {currentUser ? (
            /* Logged In Profile Dashboard */
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                  {currentUser.name ? currentUser.name.charAt(0) : 'S'}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{currentUser.name}</h4>
                  <p className="text-xs text-slate-500">
                    Class {currentUser.grade}th • {currentUser.board === 'cbse' ? 'CBSE Board' : 'MP Board'}
                  </p>
                </div>
              </div>

              {/* Progress Summary Cards */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Completed Tests</div>
                  <div className="text-base font-bold text-brand-blue">4 Tests</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-400 font-medium">Average Score</div>
                  <div className="text-base font-bold text-emerald-600">88%</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>All notes, formula sheets & mock tests are unlocked and free.</span>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-xs hover:bg-brand-blue-dark transition-colors"
                >
                  Continue Studying
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-xs border border-rose-200 flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            /* Login Form */
            <div>
              {/* Tab selector */}
              <div className="flex bg-slate-100 p-1 rounded-xl mb-5">
                <button
                  onClick={() => { setAuthMode('otp'); setOtpStep(false); }}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    authMode === 'otp' ? 'bg-white text-brand-blue shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Mobile OTP
                </button>
                <button
                  onClick={() => setAuthMode('email')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    authMode === 'email' ? 'bg-white text-brand-blue shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Email ID
                </button>
              </div>

              {authMode === 'otp' ? (
                !otpStep ? (
                  <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ayush Sharma"
                          className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (Indian +91)</label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    {/* Class and Board Preferences */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Class</label>
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white"
                        >
                          <option value="11">Class 11th</option>
                          <option value="12">Class 12th</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Board</label>
                        <select
                          value={board}
                          onChange={(e) => setBoard(e.target.value)}
                          className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white"
                        >
                          <option value="cbse">CBSE Board</option>
                          <option value="mpbse">MP Board (MPBSE)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                    >
                      <span>Get Instant OTP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  /* OTP Verification step */
                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl text-xs text-slate-600">
                      OTP sent to <strong>+91 {phone}</strong>
                      <div className="text-[11px] text-brand-blue font-bold mt-1">Hint: Demo OTP is already entered (4821)</div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 text-center">Enter 4-Digit OTP</label>
                      <input
                        type="text"
                        maxLength="4"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-36 mx-auto text-center font-mono tracking-widest text-lg py-2 rounded-xl border border-brand-blue font-bold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verify & Enter SmartStudy</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOtpStep(false)}
                      className="w-full text-center text-xs text-slate-500 hover:text-slate-700"
                    >
                      Change Mobile Number
                    </button>
                  </form>
                )
              ) : (
                /* Email Login */
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sneha Patel"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Class</label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="11">Class 11th</option>
                        <option value="12">Class 12th</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Board</label>
                      <select
                        value={board}
                        onChange={(e) => setBoard(e.target.value)}
                        className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="cbse">CBSE</option>
                        <option value="mpbse">MP Board</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>Sign In to SmartStudy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              <div className="mt-4 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400">
                100% Free Forever • No paid subscriptions required
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
