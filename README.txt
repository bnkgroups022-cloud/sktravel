SK Travels & SK House — Demo Website
=====================================

This is a self-contained demo website built to show the business owner
what a real site could look like. Open index.html in any browser to view it
(no server or install needed).

FILES
-----
index.html   -> page structure/content
css/style.css -> all styling (colors, layout, animations)
js/script.js -> mobile menu, scroll effects, animated counters, form demo

BEFORE SHOWING/SELLING THIS TO THE BUSINESS, UPDATE:
-----------------------------------------------------
1. Phone numbers — currently placeholders (+91 XXXXX XXXXX).
   Search the files for "XXXXX" / "XXXXXXXXXX" and replace with the
   real number. Used in: header call button, hero WhatsApp link,
   CTA banner, footer, and the floating WhatsApp button.

2. Email address — currently a placeholder: info@sktravelshouse.in
   Replace with their real business email in the Contact section
   and footer.

3. Exact address — the Contact section has "[Add exact address]".
   Replace with the full street address.

4. Google Map — the embedded map already points to the correct
   coordinates pulled from their Google Maps listing
   (23.0041941, 87.825417), so it should already show the right
   location. Double check it still matches once you have the exact
   address.

5. Testimonials — the three review cards are intentionally left as
   clearly-labeled templates ("Add a real guest review here...").
   Swap in real customer names and quotes once you have permission
   to use them.

6. Social links (#) in the footer and contact section — point these
   to their real Facebook/Instagram pages if they have them.

7. Footer credit — "[Your Name / Studio]" is a placeholder for your
   own business name, since you'll be the one pitching/building this.

8. The contact form currently just shows a confirmation popup — it
   is NOT wired to actually send messages anywhere. To make it work,
   connect it to a form service (e.g. Formspree, EmailJS) or a simple
   backend, or replace it with a WhatsApp click-to-chat link if that's
   simpler for them.

NOTES ON IMAGES
----------------
This build uses hand-crafted SVG illustrations and a warm teal/amber/
terracotta color palette instead of photographs, since no real photos
of the business were available. It keeps the file fully self-contained
(nothing breaks if opened offline, and there's no dependency on any
photo hosting). If you get real photos of the guest house rooms, the
vehicles, or the local area, they can be swapped in easily — the
sections marked ".room-visual" and the hero illustration are the best
places to swap SVG art for <img> photo tags.

DEPLOYING
---------
This site is plain HTML/CSS/JS, so it can be hosted anywhere: any
shared hosting plan, Netlify, Vercel, GitHub Pages, or a simple cPanel
account. Just upload the whole folder and point the domain at
index.html.
