---
title: "Top picks — 2024 June"
summary: ""
---

Hey, web folks! Summer season is here, and I am writing this intro while looking at the sunrise in a beautiful Santorini, giggling due to a loud crowing rooster. A vacation with my family, away from my day-to-day responsibilities, helped me relax and regain creativity to do more exciting things! A quick reminder to take a holiday from time to time 🏖️

Despite the holiday season, the Web is still vital, and many great resources pop out in June. I picked the ones that I found most interesting for you all, as I always do! So, after a music recommendation for a month, enjoy the list of resources worth checking from the past month.

---

## Album of the month

I was casually browsing Bandcamp while waiting for the CI/CD pipeline to finish and came across this Melbourne-based funk band. Super groovy funk, with tons of soul and jazz elements, deep drums and other live instruments, crate the unique cinematic feel of ["Hold Your Horses" by Karate Boogaloo](https://www.discogs.com/release/30565777-Karate-Boogaloo-Hold-Your-Horses). The last tune of the A-side, "One Hand One Bounce", is my absolute number one, followed by the "Alighting Lullaby" that concludes the album. Also, the cover with this sick optical illusion presents real attention to the details of Australian fellas.

![](album.jpg)

---

## Top picks

### [Cap Unit](https://ishadeed.com/article/css-cap-unit/)

Ahmad Shadeed shares this practical explanation of a CSS cap unit and a few use cases. I love it when the article or side project results from a previously faced problem. I knew nothing about the cap unit before today, but now I know.

### [News from WWDC24: WebKit in Safari 18 beta](https://webkit.org/blog/15443/news-from-wwdc24-webkit-in-safari-18-beta/)

A new drop of features from Apple is coming to the upcoming version of Safari 18. The introduction of WebXR puts Safari closer to the presented year ago visionOS, but there is a lot more stuff for web developers. CSS View Transitions (not between the pages yet), Style Queries, animating discrete properties like `display`, better integration with PWAs, improved data and time inputs, fuzzy search code completion (finally). Apple engineers also put some effort into the interoperability of the Web by removing a bunch of properties with the `-webkit` prefix. Solid release.

### [Let’s hang! An intro to CSS Anchor Positioning with basic examples](https://utilitybend.com/blog/lets-hang-an-intro-to-css-anchor-positioning-with-basic-examples)

This article by Brecht is an excellent introduction to CSS anchor positioning. It covers some history and explains why we ended up with something that looks like two APIs to do the same thing. It explains the feature well and goes through some drawbacks and issues with the current implementation.

### [State of JavaScript 2023](https://2023.stateofjs.com/en-US)

Results from the 2023 survey finally arrived. Sacha Greif does an incredible job, and every year, I keep finding great insights. I no longer need to wonder how formal education affects professionals' salaries. Well-deserved awards for the most likeable and adopted tools go to Vite and Vitest. I am slightly sad that Deno is not more popular than it is!

### [Conditionals on Custom Properties](https://geoffgraham.me/conditionals-on-custom-properties/)

A few days ago, [a post about CSS if statements by Lea Verou](https://x.com/LeaVerou/status/1801192208025940200) gained traction on socials. This is not an April fool, so hopefully, you are no longer in the "CSS is not a programming language" camp. Going through the whole conversation on the CSS Working Group GitHub issue isn't an easy-to-grasp process, so Geoff published a digestible explainer of the feature, its limitations and potential future enrichments.

### [A modern approach to browser support](https://clearleft.com/thinking/a-modern-approach-to-browser-support)

I recently contributed to a project that strictly defined the list of CSS features allowed. It allowed everything based on the two most recent major releases of popular browsers. It makes no sense to treat the Googe Chrome version released six weeks ago and the release of Safari announced on WWDC two years ago without any pragmatic flexibility in these rules. This article on Clearleft's blog perfectly summarised a sensible approach to features support. "Baseline progressive enhancement" by Jeremy Keith is a similar post about the problem. No more `last 2 versions` for me, please!

### [Naming things just got easier thanks to @scope](https://youtu.be/PkFuytYVqI8)

The `@scope` at-rule is a modern method of precise scoping styling to a particular range of DOM subtrees. It is a powerful method, but complicated to grasp at first, at least it was for me. Kevin, as always, did an incredible job recording an explainer on the subject with several practical demos. He also explains the difference between nesting selectors using `&` and `:scope` pseudo-class.

### [Inline conditionals in CSS, now?](https://lea.verou.me/blog/2024/css-conditionals-now/)

Before the native CSS "if" statement becomes a reality, it will take a while (at least two years if things go smoothly, according to Lea's estimation). Luckily, there are some other options for conditional logic in CSS, and Lea explains most of the known techniques in this lengthy deep dive. She goes into the origins of each method, including its use cases and limitations. Very nerdy CSS space!
