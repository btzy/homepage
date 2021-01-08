---
title: Statistics from Google Search Console
layout: blog
---

Recently, I've noticed a trend on Google Search Console, which keeps statistics for impressions and clicks of my website (<https://bernardteo.me>) on Google search.

My website contains a list of things that I have done or achieved, mostly of academic nature --- like a resume, but without any page limit.  It also contains reviews of most of the modules that I have taken at NUS (which are also posted on NUSMods), and cheatsheets I've made that are good enough (in my opinion) to share.  These three groups of people would hence be interested in visiting my website:
- Random people who want to find out more about me (e.g. recruiters), who treat my website as an extended resume
- Students looking for help deciding on modules to read
- Students looking for a cheatsheet for a module that they are currently reading

Let's look at the statistics from Google Search Console and see if we can find any trends.

*Note: All screenshots were taken on 8 Jan 2021.*

<div class="imgbox white"><img src="/post-assets/img/site-search-console-trends.png" alt="Trends" width="758.667" /></div>

Five noticeable peaks are circled in the screenshot above, which shows a 6-month range, roughly corresponding to semester 1 of academic year 2020-2021.

By taking a look at the [NUS academic calendar](/post-assets/ay2020-2021.pdf), we can make guesses for the reasons behind these peaks.

Peaks 1 and 5 correspond to module registration periods, where students have to ballot for the modules that they will read in the upcoming semester.  Seems like students come to my website for information about the modules that they intend to read --- either the reviews or the cheatsheets.

Peak 4 corresponds to the reading week and final examination period, where students do their last minute cramming for their exams.  Apparently, students think that cheatsheets from seniors are useful at this point.

Peak 2 roughly corresponds to weeks 7-8 of the semester, which is about the time when midterm tests are conducted.  It's a smaller peak than the final exam, probably because not all modules have midterms.

Peak 3 roughly corresponds to weeks 11-12 of the semester.  It's small, but noticeable enough.  I'm not too sure why this peak arose, but perhaps pandemic-related arrangements led to some final exams being changed to in-class tests on those weeks.  Or maybe it's just random noise and I'm reading too much into the data.

There are also noticeably more clicks and impressions in the first half of the semester (i.e. between peak 1 and 2) than the second half.  It isn't clear why this is so... maybe the first half of the semester is internship/job recruitment season for some companies?

Next, let's look at some of the pages most accessed:

<div class="imgbox white"><img src="/post-assets/img/site-search-console-pages.png" alt="Pages" width="583.333" /></div>

The main page has the most clicks by far, and this is probably expected because that's where you'd end up at if you searched my name on Google, and that's also where most information resides at.  You'd only go to a specific page if you were looking for information about a particular module.

The runner-up is my new-ish page on advice for NUS computer science students.  This is somewhat surprising, given that this page was put up only in August 2020.  Apparently students want to see my (perhaps questionable) advice.  More on this later.

In the remaining eight pages, those that end with ".pdf" are cheatsheets (they are written in LaTeX but I've only uploaded the compiled PDF files), and those that end with ".txt" are reviews.  The review webpages were recently migrated to remove the ".txt" extension and share a site-wide theme, but that broke Google's indexing somewhat, so I've probably gotten far fewer impressions than usual for the new semester.

Perhaps unsurprisingly, the CS2106 and MA1521 cheatsheets got the most clicks --- both have a large class size (of >200 students each), and I was a teaching assistant for CS2106.

I find CS4231 to be rather surprising.  CS4231 is a difficult level 4 algorithms module with a small class size (of around 50 students).  It is surprising because of the high number of clicks relative to class size.  Furthermore, students who dare to take level 4 modules that are known to be difficult would probably not want to use my cheatsheet, right?

Here are the most searched queries:

<div class="imgbox white"><img src="/post-assets/img/site-search-console-queries.png" alt="Search queries" width="585.333" /></div>

Not too surprising here --- most people who search for my name would probably want to take a look at my website.  And if they weren't looking for me, they're probably here for module reviews or cheatsheets.  CS2106 is probably not surprising, since it's noted on my website that I was a teaching assistant for this module.  CS3203 and GES1019 --- maybe there's a shortage of other reviews for these modules?

## The "Advice" page

This page merits special mention because it's the most clicked page apart from the main page, even though it was only added in August 2020.  It contains some of my own advice and observations from my studies at NUS, mostly geared towards students studying computer science.

Here's the 6-month clicks and impressions chart like the previous one, but this chart contains only the data for the advice page:

<div class="imgbox white"><img src="/post-assets/img/site-search-console-advice-trends.png" alt="Trends for advice page" width="758.667" /></div>

It's been a sleepy page since its inauguration in August, but suddenly in late December (which corresponds to the module registration period for the upcoming semester) it received significantly more attention.  What did people search for that led to the increase?

Here's the search queries that led to this page for the same date range:

<div class="imgbox white"><img src="/post-assets/img/site-search-console-advice-queries.png" alt="Search queries for advice page" width="584" /></div>

For some reason, Google has been listing this page in searches for ES2660.  What a surprise!  I've no idea why --- the advice page only mentions "ES2660" once, and does not mention anything specific to this module.

The rest of the search queries have too few clicks, so it's probably best to regard them as random noise for now.