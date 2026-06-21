const pageContent = `  <!-- Hero Section -->
  <section class="hero" id="home">
    <img src="assets/hero_steak.png" alt="Sizzling steak on open grill fire" class="hero-bg">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-logo-emblem">
        <img src="assets/logo.png" alt="Prime Cut Emblem">
      </div>
      <div class="hero-title-wrap">
        <span class="hero-title-pre">Est. 2026</span>
        <h1 class="hero-title">THE PRIME CUT</h1>
      </div>
      <p class="hero-tagline">Where Fire Meets Craftsmanship</p>
      <div class="hero-actions">
        <button class="btn-primary open-booking-btn" id="hero-cta-book">Reserve a Table</button>
        <a href="#menu" class="btn-secondary" id="hero-cta-menu">Explore Menu</a>
      </div>
    </div>
  </section>

  <!-- Menu Section -->
  <section class="menu-section fade-in-section" id="menu">
    <div class="container">
      <h2 class="section-title">Our Signature Cuts</h2>
      <p class="section-subtitle">Curated meats cooked to your exact temperature</p>

      <!-- Category Selector -->
      <div class="menu-filter-container">
        <button class="menu-filter-btn active" data-filter="all" id="filter-all">All Items</button>
        <button class="menu-filter-btn" data-filter="steaks" id="filter-steaks">Signature Steaks</button>
        <button class="menu-filter-btn" data-filter="sides" id="filter-sides">Starters & Sides</button>
        <button class="menu-filter-btn" data-filter="wines" id="filter-wines">Wine & Spirits</button>
      </div>

      <!-- Menu Grid -->
      <div class="menu-grid" id="menu-items-grid">
        
        <!-- Steak 1 -->
        <div class="menu-card" data-category="steaks">
          <div class="menu-card-header">
            <img src="assets/hero_steak.png" alt="USDA Prime Ribeye" class="menu-card-img">
            <span class="menu-card-badge">Dry-Aged</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">45-Day Dry Ribeye</h3>
              <span class="menu-card-price">$64</span>
            </div>
            <p class="menu-card-desc">16oz hand-cut USDA Prime ribeye, heavily marbled, dry-aged in-house for maximum beefiness and buttery bite.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-fire-flame-curved"></i> Oak-Grilled</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-weight-scale"></i> 16 oz</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

        <!-- Steak 2 -->
        <div class="menu-card" data-category="steaks">
          <div class="menu-card-header">
            <img src="assets/hero_steak.png" alt="Prime Tomahawk Steak" class="menu-card-img">
            <span class="menu-card-badge">Shareable</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">Tomahawk for Two</h3>
              <span class="menu-card-price">$135</span>
            </div>
            <p class="menu-card-desc">40oz long bone-in ribeye. A spectacular centerpiece with deep marbling and char, carved tableside with herb butter.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-fire-flame-curved"></i> Tableside Carve</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-weight-scale"></i> 40 oz</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

        <!-- Steak 3 -->
        <div class="menu-card" data-category="steaks">
          <div class="menu-card-header">
            <img src="assets/hero_steak.png" alt="Center Cut Filet Mignon" class="menu-card-img">
            <span class="menu-card-badge">Classic</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">Filet Mignon</h3>
              <span class="menu-card-price">$58</span>
            </div>
            <p class="menu-card-desc">8oz center-cut beef tenderloin, exceptionally lean, buttery texture that melts on the tongue, served with red wine reduction.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-fire-flame-curved"></i> Tender Cut</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-weight-scale"></i> 8 oz</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

        <!-- Side 1 -->
        <div class="menu-card" data-category="sides">
          <div class="menu-card-header">
            <img src="assets/dry_age.png" alt="Roasted Bone Marrow" class="menu-card-img">
            <span class="menu-card-badge">House Special</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">Bone Marrow Brûlée</h3>
              <span class="menu-card-price">$22</span>
            </div>
            <p class="menu-card-desc">Canoe-cut beef bones roasted with garlic butter, finished with an herb crust, served with grilled artisan sourdough.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-bread-slice"></i> Sourdough</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-mortar-pestle"></i> Herb Crust</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

        <!-- Side 2 -->
        <div class="menu-card" data-category="sides">
          <div class="menu-card-header">
            <img src="assets/hero_steak.png" alt="Truffle Parmesan Fries" class="menu-card-img">
            <span class="menu-card-badge">Crispy</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">Truffle Parm Fries</h3>
              <span class="menu-card-price">$14</span>
            </div>
            <p class="menu-card-desc">Hand-cut russet potatoes fried double-crisp, tossed in Italian white truffle oil, aged pecorino, and fresh parsley.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-cheese"></i> Pecorino</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-oil-can"></i> Truffle Oil</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

        <!-- Wine 1 -->
        <div class="menu-card" data-category="wines">
          <div class="menu-card-header">
            <img src="assets/dry_age.png" alt="Napa Valley Cabernet Sauvignon bottle" class="menu-card-img">
            <span class="menu-card-badge">Cellar</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-title-price">
              <h3 class="menu-card-title">Napa Cabernet</h3>
              <span class="menu-card-price">$24</span>
            </div>
            <p class="menu-card-desc">Bold and expressive, boasting dark blackberry notes, toasted oak, and smooth velvety tannins. Excellent with dry-aged ribeye.</p>
            <div class="menu-card-footer">
              <div class="menu-item-details">
                <span class="menu-detail-icon"><i class="fa-solid fa-wine-glass"></i> Glass / Bottle</span>
                <span class="menu-detail-icon"><i class="fa-solid fa-calendar-days"></i> Vintage 2021</span>
              </div>
              <button class="menu-action-btn open-booking-btn">Reserve Cut <i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Recipes Section -->
  <section class="menu-section fade-in-section" id="recipes" style="background-color: #0c0c0c; border-top: 1px solid #151515;">
    <div class="container">
      <h2 class="section-title">Chef's Signature Recipes</h2>
      <p class="section-subtitle">Recreate the premium steakhouse experience at home</p>
      
      <div class="about-grid" style="align-items: flex-start; gap: 3rem;">
        <div class="about-visual">
          <div class="about-img-frame">
            <img src="assets/steak_recipe.png" alt="Sizzling steak recipe" class="about-img" style="height: 380px;">
          </div>
        </div>
        
        <div class="about-content" style="padding-left: 0;">
          <span class="about-pretitle">The Masterclass</span>
          <h3 class="about-title" style="font-size: 2.2rem; margin-bottom: 1rem;">The Perfect Oakwood Ribeye Sear</h3>
          <p class="about-text" style="margin-bottom: 1.5rem;">
            Unlock the secrets of wood-fire caramelization. Master Chef Marcus Vance breaks down the step-by-step method to achieve the legendary charred crust and juicy medium-rare center.
          </p>
          
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.2rem;">
            <li style="display: flex; gap: 1rem; align-items: flex-start;">
              <div style="background: var(--accent-gold); color: #000; font-weight: bold; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
              <div>
                <strong style="color: var(--text-light); font-size: 1.05rem;">Temper and Salt</strong>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Bring the steak to room temperature (45 mins). Season generously with coarse sea salt and freshly cracked black pepper.</p>
              </div>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start;">
              <div style="background: var(--accent-gold); color: #000; font-weight: bold; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
              <div>
                <strong style="color: var(--text-light); font-size: 1.05rem;">Severe Searing Heat</strong>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Heat your cast iron pan or wood-fire grill until smoking hot (550°F+). Sear the steak for 2.5 minutes without moving it to build the crust.</p>
              </div>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start;">
              <div style="background: var(--accent-gold); color: #000; font-weight: bold; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
              <div>
                <strong style="color: var(--text-light); font-size: 1.05rem;">Butter & Herb Basting (Arrosé)</strong>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Flip the steak. Add 3 tbsp of high-fat butter, smashed garlic, and fresh rosemary. Tilt the pan and continuously spoon the hot foaming butter over the steak for 2 minutes.</p>
              </div>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start;">
              <div style="background: var(--accent-gold); color: #000; font-weight: bold; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">4</div>
              <div>
                <strong style="color: var(--text-light); font-size: 1.05rem;">Resting Period</strong>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Remove the steak and let it rest on a warm board for 8 minutes before slicing. This redistributes the savory juices back into the meat fibers.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section class="about fade-in-section" id="about" style="border-top: 1px solid #151515;">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual">
          <div class="about-img-frame">
            <img src="assets/chef_about.png" alt="Executive Chef at The Prime Cut" class="about-img">
          </div>
          <div class="about-badge">
            <span class="about-badge-number">15+</span>
            <span class="about-badge-text">Years of<br>Mastery</span>
          </div>
        </div>
        <div class="about-content">
          <span class="about-pretitle">Our Story</span>
          <h2 class="about-title">Crafting Culinary Legends</h2>
          <p class="about-text">
            Founded in 2011, The Prime Cut began as a passion project among three master butchers and a wood-fire grill enthusiast. Our collective dream was to create a sanctuary where high-quality heritage beef meets the raw, untamed power of open fire.
          </p>
          <p class="about-text">
            Led by Executive Chef Marcus Vance, our team continues to innovate, pairing centuries-old grilling techniques with modern culinary refinement. We are dedicated to providing an unforgettable, theatrical dining experience built on transparency, craftsmanship, and the highest grade of marbling.
          </p>
          <div class="craft-pillars">
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-trophy"></i></div>
              <h3 class="pillar-title">Award-Winning</h3>
              <p class="pillar-desc">Voted best wood-fired steakhouse in the state for four consecutive years.</p>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-users"></i></div>
              <h3 class="pillar-title">Heritage Sourced</h3>
              <p class="pillar-desc">Direct partnerships with family-owned farms committed to sustainable raising.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- The Craft Section (Dry Aging & Fire) -->
  <section class="about fade-in-section" style="background-color: #080808; border-top: 1px solid #151515;">
    <div class="container">
      <div class="about-grid" style="grid-template-columns: 1.1fr 1fr;">
        <div class="about-content" style="padding-left: 0; padding-right: 1rem;">
          <span class="about-pretitle">An Artisan Obsession</span>
          <h2 class="about-title">Cured & Cooked with Precision</h2>
          <p class="about-text">
            At The Prime Cut, we believe that cooking steak is an ancient art form that demands patience, top-grade wood fuel, and the absolute finest heritage cuts of beef. Every piece of beef is hand-selected and stored in our state-of-the-art dry-aging chambers for 45 days, locking in complex rich flavors and creating unparalleled tenderness.
          </p>
          <p class="about-text">
            Cooked over live glowing embers of native oakwood, the fire is tamed by our masters to deliver the signature sear that locks in all juices.
          </p>
          <div class="craft-pillars">
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-fire"></i></div>
              <h3 class="pillar-title">1200° Oak Grill</h3>
              <p class="pillar-desc">Sear cuts at extreme heat over pure wood fire for complex charcoal aromas.</p>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-circle-check"></i></div>
              <h3 class="pillar-title">A-Grade Marbling</h3>
              <p class="pillar-desc">Only certified USDA Prime cuts are selected for our aging drawers.</p>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="about-img-frame">
            <img src="assets/dry_age.png" alt="Premium ribeye beef dry-aging chamber" class="about-img">
          </div>
          <div class="about-badge">
            <span class="about-badge-number">45</span>
            <span class="about-badge-text">Days<br>Dry-Aged</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Section -->
  <section class="about fade-in-section" id="events" style="background-color: #090909; border-top: 1px solid #151515;">
    <div class="container">
      <div class="about-grid">
        <div class="about-content" style="padding-left: 0; padding-right: 1.5rem;">
          <span class="about-pretitle">Gatherings & Tastings</span>
          <h2 class="about-title">Exclusive Culinary Events</h2>
          <p class="about-text">
            Join us for curated dining experiences that celebrate rare ingredients, exceptional wines, and culinary mastery. From intimate tasting dinners to seasonal collaborations, we invite you to be part of our exclusive food community.
          </p>
          <div class="craft-pillars" style="grid-template-columns: 1fr; gap: 1.5rem;">
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-wine-glass"></i></div>
              <div style="display: flex; flex-direction: column;">
                <h3 class="pillar-title" style="margin-bottom: 0.2rem;">Sommelier's Wine Dinner</h3>
                <p class="pillar-desc">A five-course dry-aged meat tasting paired with rare vintages from Napa Valley and Bordeaux, hosted monthly.</p>
              </div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-user-tie"></i></div>
              <div style="display: flex; flex-direction: column;">
                <h3 class="pillar-title" style="margin-bottom: 0.2rem;">Chef's Table Experience</h3>
                <p class="pillar-desc">An intimate 8-seat interactive showcase right at the wood-fire hearth, hosted by Chef Marcus Vance every Friday.</p>
              </div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-champagne-glasses"></i></div>
              <div style="display: flex; flex-direction: column;">
                <h3 class="pillar-title" style="margin-bottom: 0.2rem;">Private Events & Parties</h3>
                <p class="pillar-desc">Our Obsidian Lounge is available for custom corporate bookings, family celebrations, and luxury receptions.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="about-img-frame">
            <img src="assets/events.png" alt="Luxury private dining events setup" class="about-img">
          </div>
          <div class="about-badge" style="width: 130px; height: 130px;">
            <span class="about-badge-number">Booking</span>
            <span class="about-badge-text">Available<br>Now</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reservation CTA Section -->
  <section class="reservation-banner fade-in-section">
    <img src="assets/hero_steak.png" alt="Steakhouse ambiance" class="res-banner-bg">
    <div class="res-banner-overlay"></div>
    <div class="res-banner-content">
      <h2 class="res-banner-title">An Unforgettable Culinary Feast</h2>
      <p class="res-banner-text">"Searing flame, wood fire, and perfectly marbled cuts designed to make dining memories last."</p>
      <button class="btn-primary open-booking-btn" id="cta-bottom-book">Reserve Your Table</button>
    </div>
  </section>

  <!-- Footer Section -->
  <footer id="contact">
    <div class="container">
      <div class="footer-grid">
        
        <!-- Col 1: About Brand -->
        <div class="footer-col">
          <h4 class="footer-col-title">The Prime Cut</h4>
          <p class="footer-about-text">A modern steakhouse combining centuries-old fire methods with custom-built in-house dry-aging rooms.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="Follow us on Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-link" aria-label="Follow us on Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-link" aria-label="Follow us on Twitter"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        <!-- Col 2: Info/Contact -->
        <div class="footer-col">
          <h4 class="footer-col-title">Location & Contact</h4>
          <div class="footer-contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <span>456 Obsidian Avenue,<br>Steak District, NY 10001</span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>+1 (212) 555-0199</span>
          </div>
          <div class="footer-contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>reservations@primecut.com</span>
          </div>
        </div>

        <!-- Col 3: Hours -->
        <div class="footer-col">
          <h4 class="footer-col-title">Opening Hours</h4>
          <ul class="hours-list">
            <li class="hours-item"><span class="hours-day">Mon - Thu</span> <span class="hours-time">5:00 PM - 10:00 PM</span></li>
            <li class="hours-item"><span class="hours-day">Fri - Sat</span> <span class="hours-time">4:30 PM - 11:00 PM</span></li>
            <li class="hours-item"><span class="hours-day">Sunday</span> <span class="hours-time">4:00 PM - 9:30 PM</span></li>
          </ul>
        </div>

        <!-- Col 4: Newsletter -->
        <div class="footer-col">
          <h4 class="footer-col-title">Newsletter</h4>
          <p class="footer-newsletter-text">Join the list for priority notifications regarding exclusive tasting events and rare meat cuts.</p>
          <form class="newsletter-form" >
            <input type="email" placeholder="Your Email" class="newsletter-input" required aria-label="Email address for newsletter">
            <button type="submit" class="btn-primary newsletter-btn" aria-label="Subscribe to newsletter"><i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2026 The Prime Cut Steakhouse. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
`;

export default pageContent;
