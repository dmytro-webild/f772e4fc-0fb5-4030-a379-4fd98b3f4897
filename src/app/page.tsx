"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "About Us",          id: "about-us"},
        {
          name: "Services",          id: "services"},
        {
          name: "Rentals",          id: "rentals"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Partners",          id: "partners"},
        {
          name: "FAQ",          id: "faq"},
        {
          name: "Contact",          id: "contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oq2kng"
      logoAlt="Patzees logo"
      brandName="Patzees"
      bottomLeftText="Your Dream Event"
      bottomRightText="info@patzees.com"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Patzees"
      description="Bringing Your Dream Events to Life with Exquisite Decorations & Seamless Set-ups."
      buttons={[
        {
          text: "Explore Services",          href: "#services"},
        {
          text: "Request a Quote",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pink-roses-with-heart-shape_1258-10.jpg",          imageAlt: "Elegant wedding reception decor"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/red-orange-bokeh-particles-background_84443-94456.jpg",          imageAlt: "Grand corporate event setup"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449700-na7e5f2z.png",          imageAlt: "Vibrant birthday party decorations"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449700-zjcv48q9.png",          imageAlt: "Beautiful outdoor wedding ceremony"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449700-lsi3hdrf.png",          imageAlt: "Modern table setting with floral accents"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449701-3tivngmk.png",          imageAlt: "Dramatic event lighting"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about-us" data-section="about-us">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="Your Vision, Our Expertise"
      description="At Patzees, we transform ordinary spaces into extraordinary experiences. Specializing in weddings, corporate events, and private parties, we offer bespoke decoration designs, premium rental items, and professional setup services. Our passion is crafting unforgettable moments tailored to your unique style and budget."
      tag="About Us"
      bulletPoints={[
        {
          title: "Personalized Design",          description: "Custom decor concepts tailored to your unique taste and event theme."},
        {
          title: "Extensive Rentals",          description: "A curated collection of high-quality items from classic to contemporary."},
        {
          title: "Seamless Execution",          description: "Professional setup and teardown, ensuring a stress-free experience."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449701-3tivngmk.png"
      imageAlt="Event decorator discussing plans with a client"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Wedding Decorations",          description: "From romantic ceremonies to lavish receptions, we create breathtaking wedding decor that reflects your love story.",          imageSrc: "http://img.b2bpic.net/free-photo/romantic-wedding-photocall-with-neon-love-sign_23-2151978946.jpg",          imageAlt: "Luxurious wedding decor setup",          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-view-serving-wedding-table-restaurant_8353-11605.jpg",          buttonText: "View Weddings",          buttonHref: "#"},
        {
          title: "Event Set-ups",          description: "Professional and timely setup services for corporate events, parties, and special gatherings, ensuring perfection.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275471.jpg",          imageAlt: "Professional event setup crew",          titleImageSrc: "http://img.b2bpic.net/free-photo/glasses-table_1157-17816.jpg",          buttonText: "Discover Events",          buttonHref: "#"},
        {
          title: "Custom Themes",          description: "Transform your event with unique, custom-designed themes and personalized decor elements that stand out.",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-table-decor-restaurant_8353-9677.jpg",          imageAlt: "Diverse event rental collection",          titleImageSrc: "http://img.b2bpic.net/free-photo/wineglasses-stand-table-before-restaurant_8353-9656.jpg",          buttonText: "Request Custom",          buttonHref: "#"},
      ]}
      title="Our Signature Event Services"
      description="Discover how Patzees can elevate your next occasion with our comprehensive range of decoration and event setup solutions."
      tag="What We Offer"
    />
  </div>

  <div id="rentals" data-section="rentals">
      <ProductCardThree
      animationType="opacity"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "product-1",          name: "Elegant Floral Centerpiece",          price: "$75",          imageSrc: "http://img.b2bpic.net/free-photo/composed-vases-with-flowers_23-2147761215.jpg",          imageAlt: "Elegant floral centerpiece rental",          rating: 5,
        },
        {
          id: "product-2",          name: "Luxury Table Linens",          price: "$25",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-wedding-table-arrangement_23-2150279480.jpg",          imageAlt: "Premium table linens rental",          rating: 5,
        },
        {
          id: "product-3",          name: "Custom Photo Backdrops",          price: "$150",          imageSrc: "http://img.b2bpic.net/free-photo/sweet-festive-buffet-fruit-caps-macaroni-lots-sweets_78826-2182.jpg",          imageAlt: "Custom wedding backdrop rental",          rating: 4,
        },
        {
          id: "product-4",          name: "Ambient Event Lighting",          price: "$100",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-wooden-word-love-cup-drink-cozy-decor-details-blurred-background-with-lights_169016-9663.jpg",          imageAlt: "Event uplighting rental effects",          rating: 5,
        },
        {
          id: "product-5",          name: "Chic Chiavari Chairs",          price: "$10",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-empty-chairs-with-medical-masks-prepared-group-therapy-session_23-2148752114.jpg",          imageAlt: "Chiavari chairs event rental",          rating: 4,
        },
        {
          id: "product-6",          name: "Wedding Ceremony Arches",          price: "$200",          imageSrc: "http://img.b2bpic.net/free-photo/decorated-wedding-tables-hall-interior_1303-18633.jpg",          imageAlt: "Wedding ceremony arch rental",          rating: 5,
        },
      ]}
      title="Premium Decoration Rentals"
      description="Explore our curated collection of high-quality decor items available for rent, perfect for adding that special touch to your event."
      tag="Our Collection"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah & Tom M.",          role: "Newlyweds",          testimonial: "Patzees made our wedding day absolutely magical! The decorations were beyond perfect, truly transforming our venue into a fairytale. Every detail was meticulously handled.",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-happy-bride-white-bathrobe-morning-she-looks-bouquet-flowers-hands-smiling_197531-576.jpg",          imageAlt: "Happy bride smiling testimonial"},
        {
          id: "2",          name: "Jessica L.",          role: "Event Planner",          testimonial: "Working with Patzees is always a pleasure. Their professionalism, creativity, and extensive rental collection ensure every event is a smashing success. Highly recommend!",          imageSrc: "http://img.b2bpic.net/free-photo/workers-taking-break_1098-1262.jpg",          imageAlt: "Groom happy testimonial review"},
        {
          id: "3",          name: "David R.",          role: "Corporate Client",          testimonial: "For our annual gala, Patzees delivered an exceptional setup. The ambiance created was sophisticated and truly impressed our guests. We'll definitely be repeat customers.",          imageSrc: "http://img.b2bpic.net/free-photo/man-with-balloons-near-woman-with-glass-wine-room_23-2148024601.jpg",          imageAlt: "Event planner happy client"},
        {
          id: "4",          name: "Emily P.",          role: "Birthday Host",          testimonial: "My sister's birthday party was a dream thanks to Patzees! The custom decor was vibrant and fun, exactly what we envisioned. They handled everything seamlessly.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-having-fun-coffee-shop_1098-424.jpg",          imageAlt: "Couple happy wedding review"},
        {
          id: "5",          name: "Michael S.",          role: "Gala Organizer",          testimonial: "The elegance and scale of the decorations provided by Patzees for our charity gala were outstanding. Their team was incredibly efficient and professional throughout.",          imageSrc: "http://img.b2bpic.net/free-photo/bride-posing-with-flowers-medium-shot_23-2149722038.jpg",          imageAlt: "Mother of bride happy testimonial"},
      ]}
      title="What Our Clients Say"
      description="Hear from happy couples and event planners who trusted Patzees to bring their celebrations to life."
      tag="Client Stories"
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "The Grand Ballroom",        "Elite Event Management",        "Gardenia Venues",        "Celebration Planners Inc.",        "Luxury Weddings Co.",        "City Convention Center",        "Bloom Floral Studios"]}
      title="Trusted by Leading Venues & Planners"
      description="We're proud to collaborate with top event professionals to deliver exceptional experiences."
      tag="Our Partners"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "How far in advance should I book?",          content: "We recommend booking 6-12 months in advance for weddings and large events, and 2-4 months for smaller gatherings, to ensure availability."},
        {
          id: "faq-2",          title: "Do you offer custom design services?",          content: "Yes, we specialize in creating bespoke decoration concepts tailored to your unique vision and event theme."},
        {
          id: "faq-3",          title: "What areas do you serve?",          content: "Patzees proudly serves clients across [Your City/Region]. Please contact us for events outside this area."},
        {
          id: "faq-4",          title: "What is included in your rental packages?",          content: "Our rental packages typically include delivery, setup, and teardown of all rented items. Specifics vary by package."},
        {
          id: "faq-5",          title: "Can I combine decoration services with rentals?",          content: "Absolutely! Many clients choose to combine our full design and setup services with selections from our rental inventory for a cohesive look."},
        {
          id: "faq-6",          title: "What is your cancellation policy?",          content: "Our cancellation policy is outlined in your service agreement. Please review it carefully or contact us for clarification."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services, booking process, and event logistics."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Get in Touch"
      title="Plan Your Unforgettable Event"
      description="Ready to transform your vision into reality? Contact Patzees today for a consultation and let's start planning the perfect decorations for your special occasion. Visit us at 2648 Hamilton Rd, Dorchester, ON N0L 1G5 or call us at +15198583282."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E2B6sbG4tzuhOYbHkAy2ib1OZ3/uploaded-1781135449700-rqc156xb.png"
      imageAlt="Elegant event invitation card or consultation graphic"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Your Email Address"
      buttonText="Send Inquiry"
      termsText="By submitting your inquiry, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Wedding Decorations",              href: "#services"},
            {
              label: "Event Set-ups",              href: "#services"},
            {
              label: "Decoration Rentals",              href: "#rentals"},
            {
              label: "Custom Themes",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about-us"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Partners",              href: "#partners"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get a Quote",              href: "#contact"},
            {
              label: "Email Us",              href: "mailto:info@patzees.com"},
            {
              label: "Call Us",              href: "tel:+15198583282"},
            {
              label: "Visit Us",              href: "https://www.google.com/maps/search/2648+Hamilton+Rd,+Dorchester,+ON+N0L+1G5"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Patzees. All rights reserved."
      bottomRightText="Handcrafted with passion"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
