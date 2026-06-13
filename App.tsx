import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import LandingView from './components/LandingView';
import AuthView from './components/AuthView';
import DashboardView from './components/DashboardView';
import SearchView from './components/SearchView';
import ProfileDetailsModal from './components/ProfileDetailsModal';
import ChatView from './components/ChatView';
import AdminView from './components/AdminView';
import FooterPagesView from './components/FooterPagesView';
import { Profile, InterestRequest } from './types';
import { INITIAL_PROFILES } from './data';
import { Phone, MessageCircle, ShieldCheck, RotateCcw } from 'lucide-react';

// Web Audio API feedback synthesizer with offline safety & zero dependencies
function playFeedbackSound(type: 'click' | 'reset' | 'success') {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(760, ctx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'reset') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);
      
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'success') {
      // Harmonic arpeggio
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.24); // C6
      
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch (err) {
    console.log("Web Audio API not allowed or supported yet:", err);
  }
}
import VerifyIdentityModal from './components/VerifyIdentityModal';
import PremiumSuiteModal from './components/PremiumSuiteModal';
import GlobalPreloader from './components/GlobalPreloader';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const [interactionCount, setInteractionCount] = useState(0);

  const handleIncrementInteraction = (e?: React.MouseEvent) => {
    if (e) {
      // General safety check
    }
    const nextVal = interactionCount + 1;
    setInteractionCount(nextVal);
    if (nextVal > 0 && nextVal % 10 === 0) {
      playFeedbackSound('success');
      showToast("Premium Support Target Unlocked! 🌟 Priority Queue Activated.", "success");
    } else {
      playFeedbackSound('click');
    }
  };

  const handleResetInteraction = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setInteractionCount(0);
    playFeedbackSound('reset');
    showToast("Interaction metrics successfully recycled.", "info");
  };

  // Global Preloader State
  const [globalLoading, setGlobalLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [lastView, setLastView] = useState<string>('home');

  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; phone: string } | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [quickRegData, setQuickRegData] = useState<any>(null);
  const [authIsSignUp, setAuthIsSignUp] = useState<boolean | undefined>(undefined);

  // Favorites & Interests lists State parameters
  const [favorites, setFavorites] = useState<string[]>(['p1', 'p5']);
  const [interests, setInterests] = useState<InterestRequest[]>([
    { id: 'i1', senderId: 'p1', receiverId: 'me', status: 'pending', timestamp: 'Today' },
    { id: 'i2', senderId: 'p3', receiverId: 'me', status: 'pending', timestamp: 'Yesterday' },
    { id: 'i3', senderId: 'p6', receiverId: 'me', status: 'accepted', timestamp: '2 days ago' }
  ]);

  // Selected candidates detailed modal
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // Custom Toast state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const toastTimeoutRef = React.useRef<any>(null);

  const showToast = React.useCallback((message: string, type: 'success' | 'info' | 'error' = 'info') => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ message, type });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4500);
  }, []);

  React.useEffect(() => {
    (window as any).showToast = (msg: string, t?: 'success' | 'info' | 'error') => {
      showToast(msg, t || 'info');
    };
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      delete (window as any).showToast;
    };
  }, [showToast]);

  // Verification modal state
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);

  // Premium suite modal states
  const [premiumSuiteOpen, setPremiumSuiteOpen] = useState(false);
  const [premiumSuiteTab, setPremiumSuiteTab] = useState('ai-score');

  // My profile details simulation model
  const myProfile: Profile = {
    id: 'me',
    name: currentUser?.name || 'Prestige Member',
    age: 28,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    photos: [],
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    location: 'Mumbai, India',
    education: 'B.Tech + PG Software Dev',
    profession: 'Design Architect at Google',
    income: '₹30 Lakhs per Annum',
    height: "5'11\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Educated parents residing in Dadar, Mumbai.',
    lifestyle: 'Vegetarian, strictly non-smoker.',
    partnerPreferences: 'Seeking compatible progressive professionals in Mumbai, age 24-29.',
    verified: true,
    phone: currentUser?.phone || '+91 9031117202',
    email: 'support@soulmatch.com',
    whatsapp: '9031117202',
    aboutMe: 'Software Design Architect settled in Mumbai. Grounded in traditional values, modern worldview.'
  };

  const handleNavigate = (view: string) => {
    if (view === 'how-it-works') {
      if (currentView !== 'home') {
        setLastView(currentView);
        setCurrentView('home');
      }
      setTimeout(() => {
        const el = document.getElementById('how-it-works-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return;
    }
    setLastView(currentView);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (name: string, phone: string) => {
    setCurrentUser({ name, phone });
    setIsLoggedIn(true);
    setAuthOpen(false);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentView('home');
  };

  const handleQuickRegister = (formData: any) => {
    setQuickRegData(formData);
    // Auto populate signup fields and launch the passcode OTP sequence
    setAuthOpen(true);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleSendInterest = (profileId: string) => {
    if (!isLoggedIn) {
      setAuthOpen(true);
      return;
    }
    // Check duplication
    const exists = interests.some(item => item.receiverId === profileId && item.senderId === 'me');
    if (exists) {
      showToast("Matrimony locks: You have already signaled interest to this candidate.", "error");
      return;
    }

    const newInterest: InterestRequest = {
      id: Math.random().toString(),
      senderId: 'me',
      receiverId: profileId,
      status: 'pending',
      timestamp: 'Just Now'
    };

    setInterests(prev => [...prev, newInterest]);
    showToast("Match Request Dispatched: Your profile compatibility signal has been securely sent!", "success");
  };

  const handleAcceptInterest = (interestId: string) => {
    setInterests(prev => 
      prev.map(item => item.id === interestId ? { ...item, status: 'accepted' } : item)
    );
    showToast("Sacred Alliance Active: Match accepted! Conversation lines whitelisted.", "success");
  };

  const handleDeclineInterest = (interestId: string) => {
    setInterests(prev => prev.filter(item => item.id !== interestId));
    showToast("Inquiry closed: Matrimonial match query was successfully dismissed.", "info");
  };

  // Determine sub view page details
  const isFooterPage = ['about', 'contact', 'privacy', 'terms', 'safety', 'help', 'stories', 'pricing', 'blog', 'refund'].includes(currentView);

  // Dynamic circular progress ring configurations for gamified interaction metrics
  const targetClicks = 10;
  const progressRatio = (interactionCount % targetClicks) / targetClicks;
  const activeProgress = interactionCount > 0 && interactionCount % targetClicks === 0 ? 1 : progressRatio;
  const ringRadius = 14;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = ringCircumference - (activeProgress * ringCircumference);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 pb-16 md:pb-0" id="main-application-stage">
      
      {/* Global premium preloader */}
      <GlobalPreloader isLoading={globalLoading} />
      
      {/* Premium Navigation Header */}
      <Header 
        currentView={currentView}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onOpenAuth={(isSignUp) => { setQuickRegData(null); setAuthIsSignUp(isSignUp); setAuthOpen(true); }}
        unreadCount={interests.filter(i => i.status === 'pending').length}
      />

      {/* Main active workspace container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* View Routers */}
            {currentView === 'home' && (
              <LandingView 
                onNavigate={handleNavigate}
                onOpenAuth={(isSignUp) => { setQuickRegData(null); setAuthIsSignUp(isSignUp); setAuthOpen(true); }}
                onQuickRegister={handleQuickRegister}
                isLoggedIn={isLoggedIn}
                onOpenPremiumSuite={(tabId) => { setPremiumSuiteTab(tabId); setPremiumSuiteOpen(true); }}
              />
            )}

            {currentView === 'search' && (
              <SearchView 
                onSelectProfile={(p) => setSelectedProfile(p)}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                isLoggedIn={isLoggedIn}
                onOpenAuth={() => setAuthOpen(true)}
              />
            )}

            {currentView === 'dashboard' && (
              <DashboardView 
                onNavigate={handleNavigate}
                favorites={favorites}
                onSelectProfile={(p) => setSelectedProfile(p)}
                myProfile={myProfile}
                interests={interests}
                onAcceptInterest={handleAcceptInterest}
                onDeclineInterest={handleDeclineInterest}
              />
            )}

            {currentView === 'chat' && (
              <ChatView myProfile={myProfile} />
            )}

            {currentView === 'admin' && (
              <AdminView />
            )}

            {isFooterPage && (
              <FooterPagesView 
                pageId={currentView}
                onBack={() => handleNavigate(lastView)}
              />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Auth dialog Modal locks */}
      {authOpen && (
        <AuthView 
          onClose={() => setAuthOpen(false)}
          onLoginSuccess={handleLoginSuccess}
          quickRegData={quickRegData}
          initialIsSignUp={authIsSignUp}
        />
      )}

      {/* Detailed profile preview overlay dialog */}
      {selectedProfile && (
        <ProfileDetailsModal 
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          myProfile={myProfile}
          onSendInterest={handleSendInterest}
          interestSent={interests.some(i => i.receiverId === selectedProfile.id && i.senderId === 'me')}
          isLoggedIn={isLoggedIn}
          onOpenAuth={() => { setSelectedProfile(null); setAuthOpen(true); }}
        />
      )}

      {/* Semi-Floating / Sticky bottom communication bar for mobile viewports */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3 flex items-center justify-between md:hidden cursor-pointer selection:bg-rose-100 hover:bg-slate-50/50 active:bg-rose-50/10 transition-colors duration-200"
        id="mobile-sticky-nav-bar"
        onClick={() => handleIncrementInteraction()}
      >
        <div className="flex items-center gap-3 text-left">
          {/* Progress Ring wrapping the count */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-rose-50 rounded-full shrink-0">
            <svg className="w-8 h-8 transform -rotate-90">
              <circle
                cx="16"
                cy="16"
                r={ringRadius}
                className="stroke-slate-200/50 fill-transparent"
                strokeWidth="2.5"
              />
              <motion.circle
                cx="16"
                cy="16"
                r={ringRadius}
                className="stroke-rose-500 fill-transparent"
                strokeWidth="2.5"
                strokeDasharray={ringCircumference}
                animate={{ strokeDashoffset }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[10px] font-black text-rose-600">
              {interactionCount}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">{t('nav.directContact')}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-serif font-black text-[#0B2545] tracking-wide">{t('nav.supportTitle')}</span>
              {interactionCount > 0 && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={handleResetInteraction}
                  className="p-1 rounded-full bg-slate-100 border border-slate-200 text-slate-400 hover:text-rose-500 cursor-pointer flex items-center justify-center hover:bg-rose-50 hover:border-rose-200 transition-colors"
                  title="Reset Clicks"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </motion.button>
              )}
            </div>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setVerifyModalOpen(true);
              }}
              className="mt-1 inline-flex items-center gap-1 text-[8px] font-extrabold uppercase tracking-wider text-[#B45309] hover:text-amber-800 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 hover:from-amber-500/15 hover:to-yellow-500/15 border border-amber-500/30 hover:border-amber-500/60 px-2 py-0.5 rounded-full transition-colors duration-300 self-start cursor-pointer group"
              id="mobile-nav-verify-badge"
              animate={{
                boxShadow: [
                  "0 1px 4px rgba(217, 119, 6, 0.08), 0 0 0 0px rgba(217, 119, 6, 0.1)",
                  "0 2px 8px rgba(217, 119, 6, 0.15), 0 0 0 6px rgba(217, 119, 6, 0)",
                  "0 1px 4px rgba(217, 119, 6, 0.08), 0 0 0 0px rgba(217, 119, 6, 0.1)"
                ],
                scale: [1, 1.03, 1]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-2.5 h-2.5 text-amber-600 group-hover:text-amber-700 transition-colors shrink-0 group-hover:rotate-12 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M12 7l1.5 3 3.5.5-2.5 2.5 1 3.5-3.5-2-3.5 2 1-3.5-2.5-2.5 3.5-.5z" fill="currentColor" />
              </svg>
              <span>{t('nav.verifyIdentity')}</span>
            </motion.button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Direct Call Button */}
          <a
            href="tel:+919031117202"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center space-x-1 px-2.5 py-1.5 bg-[#0B2545] hover:bg-[#134074] text-[#C5A880] hover:text-white rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            id="mobile-nav-call-trigger"
          >
            <Phone className="w-3 h-3" />
            <span>{t('nav.call')}</span>
          </a>

          {/* WhatsApp communication Trigger */}
          <a
            href="https://wa.me/919031117202?text=Hi%20there!%20I%20am%20interested%20in%20SoulMatch%20premium%20matri%20services."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center space-x-1 px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            id="mobile-nav-whatsapp-trigger"
          >
            <MessageCircle className="w-3 h-3" />
            <span>{t('nav.whatsapp')}</span>
          </a>
        </div>
      </div>

      {/* Desktop Persistent Premium Floating Support & Interaction Center */}
      <div 
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/80 p-3 pr-4 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#C5A880]/40 transition-all duration-300 select-none group" 
        id="desktop-floating-support-center"
      >
        {/* Interaction trigger area of desktop widget */}
        <div 
          onClick={() => handleIncrementInteraction()}
          className="flex items-center gap-2.5 cursor-pointer shrink-0 active:scale-95 transition-transform"
          title="Click to signal support presence"
        >
          {/* Progress Ring */}
          <div className="relative w-9 h-9 flex items-center justify-center bg-rose-50 rounded-full shrink-0">
            <svg className="w-9 h-9 transform -rotate-90">
              <circle
                cx="18"
                cy="18"
                r={ringRadius}
                className="stroke-slate-200/50 fill-transparent"
                strokeWidth="2.5"
              />
              <motion.circle
                cx="18"
                cy="18"
                r={ringRadius}
                className="stroke-rose-500 fill-transparent"
                strokeWidth="2.5"
                strokeDasharray={ringCircumference}
                animate={{ strokeDashoffset }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[10px] font-black text-rose-600">
              {interactionCount}
            </span>
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[8px] uppercase font-bold tracking-widest text-[#C5A880]">Desktop Hot-Line</span>
            <span className="text-xs font-serif font-black text-[#0B2545] tracking-wide">SoulMatch Concierge</span>
          </div>
        </div>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-slate-200" />

        {/* Action Triggers */}
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {/* Reset action button */}
          {interactionCount > 0 && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.85 }}
              onClick={handleResetInteraction}
              className="p-1.5 rounded-full bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer flex items-center justify-center"
              title="Reset Clicks"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </motion.button>
          )}

          <a
            href="tel:+919031117202"
            className="p-1.5 bg-[#0B2545] hover:bg-[#134074] text-[#C5A880] hover:text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center"
            title="Call Helpline"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://wa.me/919031117202?text=Hi%20there!%20I%20am%20interested%20in%20SoulMatch%20premium%20matri%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center"
            title="WhatsApp Support"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {premiumSuiteOpen && (
        <PremiumSuiteModal 
          isOpen={premiumSuiteOpen}
          onClose={() => setPremiumSuiteOpen(false)}
          initialTab={premiumSuiteTab}
          isLoggedIn={isLoggedIn}
          onOpenAuth={(isSignUp) => { setPremiumSuiteOpen(false); setAuthIsSignUp(isSignUp); setAuthOpen(true); }}
        />
      )}

      <VerifyIdentityModal 
        isOpen={verifyModalOpen}
        onClose={() => setVerifyModalOpen(false)}
      />

      {/* Elegant glassmorphic Toast notification banner */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className={`fixed top-4 sm:top-6 right-4 sm:right-6 left-4 sm:left-auto z-[300] max-w-sm p-4.5 rounded-2xl shadow-2xl border flex items-start gap-3 backdrop-blur-md transition-all ${
              toast.type === 'success'
                ? 'bg-[#0B2545]/95 text-white border-emerald-500/30'
                : toast.type === 'error'
                ? 'bg-rose-950/95 text-rose-100 border-rose-500/30'
                : 'bg-slate-900/95 text-slate-100 border-slate-700/30'
            }`}
            id="global-custom-toast"
          >
            {/* Left accent icon indicator based on toast type */}
            <div className={`p-1.5 rounded-lg shrink-0 ${
              toast.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-400'
                : toast.type === 'error'
                ? 'bg-rose-500/10 text-rose-400'
                : 'bg-[#C5A880]/15 text-[#C5A880]'
            }`}>
              {toast.type === 'success' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : toast.type === 'error' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>

            <div className="flex-1 text-xs font-semibold leading-relaxed">
              {toast.message}
            </div>

            {/* Simple Dismiss X Button */}
            <button
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-white shrink-0 p-0.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
