import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export default function ContactPage({ onBack, selectedBoard }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '12',
    board: selectedBoard || 'cbse',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        grade: '12',
        board: selectedBoard || 'cbse',
        subject: 'General Enquiry',
        message: ''
      });
    }, 4000);
  };

  const faqs = [
    {
      q: 'Are the study materials and mock tests on SmartStudy completely free?',
      a: 'Yes! All NCERT solutions, chapter notes, formula sheets, previous year papers, and online mock tests on SmartStudy are 100% free for all students without any hidden subscription charges.'
    },
    {
      q: 'Does SmartStudy follow the revised NCERT rationalized syllabus for 2024-25 / 2025-26?',
      a: 'Yes, strictly. All notes and questions reflect the rationalized NCERT textbooks and syllabus issued by CBSE and MPBSE. Deleted topics have been eliminated so students don\'t waste precious study hours.'
    },
    {
      q: 'Can Hindi Medium students of Madhya Pradesh Board benefit from SmartStudy?',
      a: 'Absolutely. We specifically cater to MP Board students with bilingual scientific terms, Hindi chapter summaries, and MPBSE official question banks and blueprints.'
    },
    {
      q: 'How are CBSE 50% competency-based questions handled in the tests?',
      a: 'Our mock tests and practice question banks incorporate real case-study questions, assertion-reason drills, and application-oriented problems in exact accordance with CBSE exam circulars.'
    },
    {
      q: 'Can I download the notes as PDF for offline study or printing?',
      a: 'Yes! Every chapter has a dedicated "Download PDF" button that generates a clean printable revision sheet with labeled diagrams and formulas.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs font-bold uppercase tracking-wider bg-teal-400 text-slate-900 px-2.5 py-0.5 rounded">
            Student & Parent Support Desk
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Contact SmartStudy Academic Support
          </h1>
          <p className="text-sm sm:text-base text-blue-100 mt-2 max-w-2xl">
            Have doubts regarding board blueprints, notes, or test series? Our team of senior teachers and coordinators is here to guide you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-5">
              <h3 className="text-base font-bold text-slate-900">Direct Contact Channels</h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Helpline & Doubt Call</strong>
                    <span>+91 731-SMARTSTUDY (+91 731 2928374)</span>
                    <p className="text-[11px] text-slate-400">Monday to Saturday: 9:00 AM – 8:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0 border border-teal-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Official Email Support</strong>
                    <span>support@smartstudy.edu.in</span>
                    <p className="text-[11px] text-slate-400">Response within 4 working hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp Student Community</strong>
                    <span>Join Class 11th & 12th Doubt Groups</span>
                    <p className="text-[11px] text-slate-400">Free daily question of the day</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Educational Center</strong>
                    <span>SmartStudy EdTech Center, Scheme 54, Vijay Nagar, Indore, MP - 452010</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Timings Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-5 border border-blue-200/80 text-xs text-slate-700">
              <div className="flex items-center space-x-2 text-brand-blue font-bold mb-2">
                <Clock className="w-4 h-4" />
                <span>Special Pre-Board Support Window</span>
              </div>
              <p>
                During January to March board examination season, our faculty support desk operates extended hours on Sundays from 10:00 AM to 6:00 PM for urgent syllabus queries.
              </p>
            </div>

          </div>

          {/* Right Column: Query Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Send an Academic Query or Feedback</h3>
              <p className="text-xs text-slate-500 mb-6">Our subject experts review every submission.</p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Thank You! Query Received.</h4>
                  <p className="text-xs text-slate-600">
                    Our academic coordinator will reach out to you via email or WhatsApp within a few hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Student / Parent Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@gmail.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Class</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="11">Class 11th</option>
                        <option value="12">Class 12th</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Board</label>
                      <select
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                        className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="cbse">CBSE</option>
                        <option value="mpbse">MP Board</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message or Specific Doubt *</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explain your doubt, chapter request, or blueprint query here..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Query</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex items-center space-x-2 mb-6">
            <HelpCircle className="w-5 h-5 text-brand-blue" />
            <h3 className="text-lg font-bold text-slate-900">Frequently Asked Questions (FAQs)</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between bg-slate-50/50 hover:bg-slate-100/60"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
