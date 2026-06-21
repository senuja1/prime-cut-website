import React, { useEffect, useMemo, useState } from 'react';
import pageContent from './pageContent.js';

const navItems = [
  { id: 'nav-logo', label: 'Home', href: '#home', left: '5.5%', width: '9.0%', brand: true },
  { id: 'nav-menu', label: 'Menu', href: '#menu', left: '17.5%', width: '8.5%' },
  { id: 'nav-recipes', label: 'Recipes', href: '#recipes', left: '27.0%', width: '8.5%' },
  { id: 'nav-about', label: 'About', href: '#about', left: '37.0%', width: '8.5%' },
  { id: 'nav-events', label: 'Events', href: '#events', left: '47.0%', width: '8.5%' },
  { id: 'nav-contact', label: 'Contact', href: '#contact', left: '57.0%', width: '9.5%' },
];

function Header({ activeSection, mobileOpen, onToggleMobile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 50);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header id="main-header" className={scrolled ? 'scrolled' : ''}>
      <div className="navbar-container">
        <a href="#home" className="mobile-brand" id="mobile-brand-logo">
          <span className="mobile-brand-text">THE PRIME CUT</span>
        </a>

        <nav className="knife-navbar" id="desktop-nav" aria-label="Main Navigation">
          <div className="knife-img-wrap">
            <img src="/assets/knife_nav.png" alt="Chef Knife Navigation Bar" className="knife-img" draggable="false" />
            {navItems.map((item) => {
              const target = item.href.replace('#', '');
              const active = !item.brand && (activeSection === target || (target === 'home' && !activeSection));
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`knife-hotspot${active ? ' active' : ''}`}
                  id={item.id}
                  aria-label={item.label}
                  data-label={item.label}
                  style={{ left: item.left, width: item.width }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (target === 'home') {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      return;
                    }
                    const element = document.getElementById(target);
                    if (element) {
                      const offset = 220; // header height offset
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              );
            })}
          </div>
        </nav>

        <div className="header-controls">
          <button className="mobile-nav-toggle" id="mobile-toggle" aria-label="Open navigation menu" onClick={onToggleMobile}>
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({ open, onClose, onOpenBooking }) {
  return (
    <div className={`mobile-nav-overlay${open ? ' open' : ''}`} id="mobile-menu-drawer">
      <ul className="mobile-menu-list">
        {[
          ['#home', 'fa-house-fire', 'Home'],
          ['#menu', 'fa-utensils', 'Menu'],
          ['#recipes', 'fa-book-open', 'Recipes'],
          ['#about', 'fa-wheat-awn', 'About Us'],
          ['#events', 'fa-calendar-days', 'Events'],
          ['#contact', 'fa-envelope', 'Contact'],
        ].map(([href, icon, label]) => (
          <li className="mobile-menu-item" key={href}>
            <a href={href} className="mobile-menu-link mobile-nav-item" onClick={onClose}>
              <i className={`fa-solid ${icon}`} /> {label}
            </a>
          </li>
        ))}
        <li className="mobile-menu-item" style={{ marginTop: '3rem' }}>
          <button className="btn-primary open-booking-btn" id="mobile-book-btn" onClick={onOpenBooking}>
            Book a Table
          </button>
        </li>
      </ul>
    </div>
  );
}

function BookingModal({ open, onClose }) {
  const [success, setSuccess] = useState(null);
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  useEffect(() => {
    if (!open) {
      const timer = window.setTimeout(() => setSuccess(null), 300);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const date = data.get('date');
    const dateObj = new Date(`${date}T12:00:00`);
    const seating = String(data.get('seating')).replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    setSuccess({
      name: data.get('name'),
      email: data.get('email'),
      guests: data.get('guests'),
      date: dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      time: data.get('time'),
      seating,
      confirmation: `PRIME-${Math.floor(100000 + Math.random() * 900000)}`,
    });
    form.reset();
  };

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      id="booking-modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-container" id="booking-modal-box">
        <div className="modal-header">
          <h3 className="modal-title" id="booking-modal-title">{success ? 'Reservation Confirmed' : 'Book a Table'}</h3>
          <button className="modal-close-btn" id="close-booking-btn" aria-label="Close booking modal" onClick={onClose}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="modal-body" id="booking-modal-body">
          {success ? (
            <div className="booking-success">
              <div className="success-icon"><i className="fa-solid fa-circle-check" /></div>
              <h4 className="success-title">Your Table is Ready, {success.name}!</h4>
              <p className="success-text" style={{ marginBottom: '1.5rem' }}>
                We are pleased to confirm your reservation at <strong>The Prime Cut</strong>.
              </p>
              <div className="booking-summary">
                {[
                  ['Confirmation', success.confirmation],
                  ['Guests', `${success.guests} ${success.guests === '1' ? 'Person' : 'People'}`],
                  ['Date', success.date],
                  ['Time', success.time],
                  ['Seating', success.seating],
                ].map(([label, value]) => (
                  <div className="booking-summary-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <p className="success-text" style={{ fontSize: '0.88rem', fontStyle: 'italic' }}>
                A confirmation email has been sent to <strong>{success.email}</strong>. Please note that we hold reservations for a maximum of 15 minutes.
              </p>
              <button className="btn-primary" id="success-close-btn" style={{ marginTop: '2rem', width: '100%' }} onClick={onClose}>Done</button>
            </div>
          ) : (
            <form className="booking-form" id="res-booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-name" className="form-label">Full Name</label>
                  <input name="name" type="text" id="booking-name" className="form-input" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-phone" className="form-label">Phone Number</label>
                  <input name="phone" type="tel" id="booking-phone" className="form-input" required placeholder="(123) 456-7890" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="booking-email" className="form-label">Email Address</label>
                <input name="email" type="email" id="booking-email" className="form-input" required placeholder="john@example.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-guests" className="form-label">Party Size</label>
                  <select name="guests" id="booking-guests" className="form-input" required defaultValue="">
                    <option value="" disabled>Select Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests (Call Us)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="booking-date" className="form-label">Date</label>
                  <input name="date" type="date" id="booking-date" className="form-input" required min={today} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-time" className="form-label">Time</label>
                  <select name="time" id="booking-time" className="form-input" required defaultValue="">
                    <option value="" disabled>Select Time</option>
                    {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                      <option value={time} key={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="booking-seating" className="form-label">Seating Preference</label>
                  <select name="seating" id="booking-seating" className="form-input" defaultValue="no-preference">
                    <option value="no-preference">No Preference</option>
                    <option value="main-room">Main Dining Room</option>
                    <option value="hearth-counter">Wood-Fire Hearth Counter</option>
                    <option value="bar">Bar Lounge</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary form-button" id="submit-booking-btn">Confirm Reservation</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      let current = 'home';
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        current = 'contact';
      } else {
        document.querySelectorAll('section[id], footer[id]').forEach((section) => {
          if (window.scrollY >= section.offsetTop - 220) current = section.id;
        });
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('load', updateActiveSection);
    
    const timer = setTimeout(updateActiveSection, 1000);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('load', updateActiveSection);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || bookingOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, bookingOpen]);

  const openBooking = () => {
    setMobileOpen(false);
    setBookingOpen(true);
  };

  const handlePageClick = (event) => {
    const bookingButton = event.target.closest('.open-booking-btn');
    if (bookingButton) {
      openBooking();
      return;
    }

    const filterButton = event.target.closest('.menu-filter-btn');
    if (filterButton) {
      const filterValue = filterButton.dataset.filter;
      document.querySelectorAll('.menu-filter-btn').forEach((button) => button.classList.toggle('active', button === filterButton));
      document.querySelectorAll('.menu-card').forEach((card) => {
        const visible = filterValue === 'all' || card.dataset.category === filterValue;
        card.style.opacity = visible ? '1' : '0';
        card.style.transform = visible ? 'scale(1)' : 'scale(0.95)';
        card.style.display = visible ? 'flex' : 'none';
      });
      return;
    }

    if (event.target.closest('.newsletter-form')) {
      event.preventDefault();
      alert('Thank you for subscribing!');
    }
  };

  return (
    <>
      <Header activeSection={activeSection} mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((open) => !open)} />
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} onOpenBooking={openBooking} />
      <main onClick={handlePageClick} dangerouslySetInnerHTML={{ __html: pageContent }} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
