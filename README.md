# fitnessforallapp.com: static site

Plain HTML/CSS/JS with no build step. Upload this folder as-is (screenshots/ and README.md are optional).
- Preview: `cd /workspace/website && python3 -m http.server 8787`, then open http://localhost:8787
- Regenerate pages: `python3 /workspace/website_tools/build.py`. Regenerate images: `/workspace/website-venv/bin/python /workspace/website_tools/make_assets.py`
- Screenshots: `/workspace/website-venv/bin/python /workspace/website_tools/shoot.py`

## Before going live
1. Hosting: GitHub Pages with custom domain fitnessforallapp.com (`CNAME` and `.nojekyll` are in place; `screenshots/` is git-ignored). Point Porkbun DNS at GitHub Pages and enable HTTPS.
2. After launch, set the App Store Connect Support URL to https://fitnessforallapp.com/support.html, the Privacy Policy URL to https://fitnessforallapp.com/privacy.html, and the Marketing URL to the home page.
3. Answered Nov 1, 2026: "Maddie, 16-year-old founder" wording approved; meal logging is Premium (paid).

## Still to confirm with a parent
- Parent review of the Privacy Policy and Terms (general drafts, not legal advice). Make sure the privacy policy matches what the app actually collects and that the App Store privacy labels match.
- Terms operator: because Maddie is under 18, decide whether a parent should be named as the operator (pages currently say "run by Maddie Sanders").
- Governing-law state: Terms currently say "the U.S. state where Fitness For All's operator lives". Replace with the actual state.
- "Last updated" dates are set to November 1, 2026. Update them on the actual publish date if different.
- Children/COPPA: the app is rated 9+ and has a Kids category. Check whether under-13 users can sign up and how parental consent works, then update Privacy section "Children".
- Phone number: the old policy listed phone number. The new one omits it. Add it back only if the app asks for it.
- Payment path: if any purchases happen outside the App Store (e.g. a web checkout/Stripe), name the processor in Privacy, add cancel steps in Support, and make Terms section 4 match.
- Service providers: optionally name actual providers (e.g. Base44 hosting, the AI provider for photo logging/chat) and confirm which analytics the app uses.
- Account deletion: confirm whether the app has in-app account deletion (Apple requires it for apps with sign-up) and describe where it is on the Support page.
- Apple Health: if the app ever uses HealthKit, add that HealthKit data is never sold or used for advertising.
- Website analytics: none now. If added later, update Privacy section 9.
