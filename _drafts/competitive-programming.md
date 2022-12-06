---
title: My Competitive Programming Journey
layout: blog
---

The ICPC World Finals 2020, held in October 2021, was my final competitive programming contest in university.  This contest, for the most part, marked the end of my competitive programming journey as a student.  While there are still individual contests organised by various technology companies that I can take part in, those will no longer come with the atmosphere, training, teamwork, and other things that make up the experience of competing as a student.  It is hence fitting that I write about my competitive programming journey at this point --- this is something that a few of my friends have suggested I write about.

## Background on Singapore's education system

Singapore's education system is based on that of the British.  There are usually three distinct schools a Singaporean student will go through before getting to university --- six years of primary school, four years of secondary school, and then two years of junior college.  At the end of each school, there is a major national examination that all students need to take, and their performance at those exams (and a few other factors) determine which schools they can choose to go next (and for the exam at the end of junior college, the universities and courses they can choose to enroll in).

There are some alternative paths to university, but the vast majority of students go by the above route.

## The beginning

In Singapore, primary schools have hardly any programming classes (at least during my time).  A handful of secondary schools offer computing as a GCE O-level subject, but even then, very few students took this subject (and I was not one of them).  (Amongst the organisers of the National Olympiad in Informatics (NOI), which I was a part of, we sometimes lament this fact...)

There was thus little opportunity for most people to pick up programming at a young age.

My first foray into programming was in Primary 5 (the fifth year of primary school).  Somehow (I'm not sure why), a trainer from somewhere was made to come to my primary school to conduct a four-day VB.NET workshop for a small number of students.  They invited students who performed well in a recent mathematics test to attend that workshop, and I happened to be one of them.  ([Ranald Lam](https://codecla.ws/), who has done really well in competitive programming, has volunteered in various committees in the NOI and IOI, and is the creator of [mrJudge](https://dunjudge.me/), was also one of them.)  In that workshop, they showed us how to use the (relatively new at that time) drag-and-drop Windows Forms designer and taught us how to write simple event handlers (or at least, attempted to teach us).  The workshop was four full days, roughly two days of classes and two days of programming on your own, and we were to create four simple applications by the end of the workshop.

I don't remember much of that workshop, but I do remember that none of my applications worked properly.  I was aware of the bugs (from testing the applications), but I couldn't get them fixed before the end of the workshop.  Oops.  (They asked us to leave the applications on the computer, but I don't know if they ever got around to looking at every one of our applications.)  Some years later, when I started to learn C♯ (which is semantically really similar to VB), I realised that I didn't even grasp the idea of reference types when I was taking the workshop.  But that workshop was sufficient to make be see the serenity and joy in programming and the satisfaction in seeing the end product of my work, and not too long later I found myself installing Visual Basic Express onto my desktop at home.

## Introduction to competitive programming

After graduating from primary school, I enrolled at Hwa Chong Institution (HCI), which offered the Integrated Programme (IP), which is a six-year program that combines secondary school and junior college.  (This meant that I did not need to take the national examination at the end of secondary school.)  In Secondary 1 and 2, we were required to take a class called "infocomm studies".  This class was not a regular subject like mathematics or physics --- we had only around one hour per week of this class, and this class was broken into three sections, each in one quarter of the year (there were no infocomm studies classes in the fourth quarter).  The three sections were C++, web, and Flash programming, and each section was taught by a different teacher.  As there was no final exam for this class, and it was effectively three quarter-long courses, it felt more like an enrichment class.

The C++ programming section covered basic usage of things like statements, expressions, and loops, and the primary form of assessment was giving us a C++ program with some expressions blanked out, and asking us to fill them in.  (We did not write programs that were more than a handful of lines long, so this course did not cover abstractions at all.)  I found them pretty easy --- aside from my natural aptitude in logic, this was likely aided in no small part by the fact that I've been toying around with VB.NET for over a year by then.

In Secondary 2, the teacher of the C++ programming section noticed that I was quite adept at programming (perhaps because I had argued for my marks in a couple of the fill-in-the-blanks tests where my solution differed from the intended solution but was also correct (in my opinion at that time), and I managed to convince the teacher that the code would work).  He said something to the effect of "why didn't I notice you in Secondary 1?", and invited me to join some NOI training sessions that were held (I think) during the long vacation at the end of that year.  And I joined, because why not?  Mathematics competitions are fun (I had already taken many of them at this point), and I seem to be pretty good in programming, so a programming competition ought to be fun too, right?

And so I was initiated into the world of competitive programming.

## The National Olympiad in Informatics (NOI)

This was where I met Gan Wei Liang, who was one year my senior at HCI.  He's another student who has done really well at competitive programming, and was in the IOI scientific committee as a representative of Singapore (as the IOI was held in Singapore in 2020 and 2021 (as far as possible during these COVID years, at least)).

The NOI training sessions that I joined were conducted by Wei Liang and another senior, Ang Ray Yan (if memory serves).  They taught us basic C++ (at least, the stuff needed for competitive programming), followed by fundamental topics in competitive programming such as greedy, dynamic programming, and basic graph algorithms.  Compared to my "infocomm studies" classes, this was way more difficult.  Apparently I didn't understand much of the training sessions or I wasn't very capable at writing workable code, because when January rolled around and I sat for HCI's internal NOI selection test (which was necessary because each school is only allowed to send a maximum of five students to the NOI), I didn't do well enough to qualify for the NOI.

In Secondary 3 and 4, I enrolled in HCI's Science and Mathematics Talent Programme (SMTP), which was where students that were good in mathematics and science usually go to.  Mathematics and science classes were conducted at a somewhat higher level in this programme, and we also had generally more freedom than those outside the programme.  For example, those students taking part in the Singapore Mathematics Olympiad were often allowed to skip regular mathematics classes to do self-driven training during the competition season.  There were some additional things that one needed to do too.  One important requirement was that our year-long project (which was something most students needed to do, usually in small groups of 2 to 3 students) had to be from one of three categories: mathematics, *experimental research* (aka. science), and *defence science*.  I'm not sure why it's called "defence science", but it encompasses all computing-related projects. (Maybe they have some ties to Singapore's Defence Science Organisation (DSO) or Defence Science and Technology Agency (DSTA)?  I don't know.)

Because of the project requirement, in Secondary 3, I did a software engineering project on handwriting recognition with my fellow SMTP classmate Mark Theng (who became my best friend for the remaining four years of my studies at HCI), who during our time together in the IP had taken part in, and performed exceptionally well in, various competitions in informatics (aka. competitive programming), mathematics, physics, chemistry, astronomy, and perhaps other fields.

Computing projects were rare --- we were the only teams from our SMTP batch that did a defence science project, and there were only three defence science projects in our batch (a *batch* refers all students who enrolled in the same year, i.e. all students that were also studying at HCI and in Secondary 3 then), including us.  I was slightly afraid to embark on such a large programming project as the only software engineering experience I had were small projects on VB.NET.  However, Mark had some prior experience in C♯.NET (from playing around with personal projects, probably), and managed to convince me that a year-long software engineering project in handwriting recognition would be achievable for us (we both did reasonably well in olympiad mathematics, so we both knew that we were probably better in logical reasoning than the average SMTP student).  So we did the project in C♯, using the fancy IDE known as Visual C♯ Express.  (Debugging was really a lot easier than the Dev-C++ that we were made to use in the infocomm studies class!)  (We set goals of being able to decipher a single character, then a single word, and then hopefully an entire sentence.  But alas, our algorithms didn't work too well...)  Mark helped quite a lot with this project, especially with respect to software design --- something I was fairly new to.

This project gave me much experience in reasoning about and debugging code (at least, compared to what I started with), and I definitely wouldn't have been able to do such a project (which was *big* to me at that time) without my friend Mark or without it being part of our curriculum (our grades depended on the outcome of this project).

The year went by, we concluded the project and gave a presentation about what we did (and what we failed to do), and I soon found myself joining the NOI training course conducted by Wei Liang, just as I did the year before.  However, this time, perhaps because I took the same course a year earlier, I understood more of the material that was covered.  The internal NOI selection test also went a lot better for me, much due to my newfound experience in reasoning about and debugging code (even though I did not know GDB and did my debugging with print statements), and I qualified to represent HCI at the NOI.

I was also invited to attend CS3233 at NUS as a guest student.  CS3233 is the competitive programming module conducted at NUS by Dr. Steven Halim to train NUS students for the International Collegiate Programming Contest (ICPC), conducted in the spring semester, but we sat in for the lectures and took part in the weekly mini-contests to prepare ourselves for the NOI.  (Lots of stuff went over my head then.)

The NOI is held in March, allowing for enough time to register top students (those obtaining silver or above in the NOI) for the Asia-Pacific Informatics Olympiad (APIO), which is held in May.  This was my first ever programming competition, and when the day came round, I went to NUS School of Computing (where the competition was held), and relished in the competition experience  --- banners, registration, free food, computers all set up and ready for us, and being ushered around like important guests.

The contest started, and I flipped open the question paper, and started working on the tasks.  They were not trivial, but with the techniques I had learnt from the NOI training course (and perhaps from clever guesswork), enough of them seemed doable, at least on a high level.  I typed out my solutions, taking food and toilet breaks after solving (or getting stuck on) each task.

In competitions, it is often difficult to tell if one has done well, because the questions are purposely chosen to be difficult enough to differentiate even the top students.  It was even more difficult, perhaps essentially impossible, for me to determine how well I did, with just the knowledge about the points I have obtained.  After the contest, upon speaking to the other competitors representing HCI, I knew I had done relatively well (compared to them), but it's hard to pinpoint exactly how well because I didn't really know their abilities.  I only definitively knew that Wei Liang was better than me, but that didn't tell me anything because he obtained more points than me.

The prize presentation ceremony (where the results are announced) is held on the same day, a few hours after the contest ends.  It turned out that I had obtained a silver award, which was apparently better than what my teachers expected of me.  I was pretty happy with the result, and after the ceremony we ate dinner at the catered buffet spread, discussing the contest with enthusiasm, having had a tiring but interesting day.

It was then that I realised the informatics competition season for that year wasn't yet over for me.

## Journey to the International Olympiad in Informatics (IOI)

I was quickly told about the APIO and the IOI, and how students were to be selected.

The IOI is, of course, the premier informatics competition for pre-university students, and (up to) four students from each country are allowed to participate.  In Singapore, the Ministry of Education sponsors all costs for the four students representing Singapore for the IOI, which means that we would get a fully-paid week-long trip to wherever the IOI was held, and immerse ourselves in the entire onsite competition experience.  That year, the IOI was to be held in Italy in September (and I had never yet been to Europe, which made it all the more enticing for me).

The APIO is an online contest modelled on the IOI and is held a few months before the IOI.  Obtaining a silver award or above from the NOI qualified one to represent Singapore in the APIO, which meant that I was going to participate in this online contest (which was held in May).  (As the selection of IOI contestants is left entirely to each country, there is no requirement that students must perform sufficiently well, or even participate in the APIO, to be eligible for the IOI.  However, given the high quality of tasks in the APIO, Singapore (and probably many other countries) partially used (and still does use) the APIO to select the four students for the IOI.)

Dr. Halim is in charge of selecting Singapore's four IOI contestants.  He laid down the selection criteria clearly:  There would be three selection contests --- the first one was to be the APIO, and the other two were to be contests created by some of Singapore's past IOI contestants.  The top two scores of these three contests would be taken and weighted equally, each contributing 45% to the selection criteria, and the final 10% would come from the CS3233 weekly.  The top four contenders will represent Singapore in the IOI.  (I really liked how transparent the IOI selection process was, and still is.  The rules are crystal clear and totally objective, leaving no room for ambiguity.  Coupled with the fact that all these informatics competitions employ automated grading, the selection process could not be any fairer.)

The prospect of representing Singapore in an onsite international competition was alluring, but I decided that it was very unlikely to happen, given how I've had only just participated in my first NOI, and the people I was competing against had much more experience than I did.  Furthermore, I was selected for the Singapore IMO junior training classes a year or two before due to my reasonably good performance in the Singapore Mathematical Olympiad, and I knew that there were many of my peers far better than me in olympiad mathematics, and hence perhaps logical thinking in general (there were junior, senior, and national team classes, and each class had around 20-30 students, so there were probably around 40-90 students better than me).  So I prepared myself for the APIO, hoped for the best, but expected nothing to come out of it.

Students in Singapore were to take the APIO at the NUS School of Computing (which is also where the NOI was held).  This was to be the most difficult contest that I had ever taken.  And indeed, when I looked at the tasks, they were really complicated and novel... which was, contrary to what one might expect, a good thing for me!  I was still not particularly adept in writing code quickly, and so complicated algorithms took me upwards of an hour (and usually even longer) to implement correctly.  A very difficult contest means that most contestants will only be able to attempt tasks partially, or get a single task fully correct.  This means that being slow in writing code wouldn't factor in too much to my overall performance --- there wouldn't be much code to be written anyway because most of the tasks would be too difficult to even solve conceptually.  Essentially, a hard contest means that contestants will spend more time working out conceptual solutions, and less time writing code.

I managed to fully solve a single task, and spent the rest of my time fruitlessly trying to obtain partial points for a second task... and that was apparently pretty good, since I obtained a silver award, and was tied for second in a three-way tie amongst the Singaporean delegation (i.e. those who are vying to represent Singapore in the IOI).  This was a great achievement and a surprise for me --- it put me on par with Ranald, who was at that time far more experienced in competitive programming than me, and just slightly below the top scorer in the Singaporean delegation, Hubert Teo, who is two years older than me and known to be much better than all other Singaporean contenders for the IOI.  (If memory serves, Wei Liang did not participate in this contest due to other commitments, which would be a reason why Dr. Halim had decided that only the top two of the three selection contests would be counted.)

The training plan was then laid out: During the June holidays (a four-week long break from school), there would be training sessions conducted by past Singaporean IOI contestants --- Koh Zi Chun, Shen Chuanqi, Raymond Kang, and Chin Zhan Xiong.  All four of them set tasks used in the trainings, but Zi Chun and Chuanqi were the ones usually physically present to discuss the solutions after each contest.  In contrast to the CS3233 classes, these IOI trainings were much more algorithm-focused, which is more reflective of the IOI.  I enjoyed these trainings much better than CS3233, as there was far more satisfaction to be had being absorbed in solving a difficult algorithmic problem than to be writing and debugging code under a tight time limit (as was usually the case in CS3233 contests).

Dr. Halim also announced that the two upcoming selection contests would be as difficult as the APIO, and solving subtasks would only attain a small number of points (he reasoned that it should be this way as we would be taking the top two out of three contests).  He also remarked that the difficult selection contests will cause the selected IOI contestants to ``likely [be] the better algorists and not just good coders'' --- something which would level the playing field for me, giving me a better chance of making the top four.

And indeed the contests were difficult.  Things went my way --- I was able to maintain my position in the two selection contests, which put me in third position overall.  I was exhilarated to be going to represent Singapore in the IOI!

It wasn't the first time I was going overseas for a competition --- I had already went to the International Mathematics Competition (IMC) in Bali, Indonesia and the American Regions Mathematics League (ARML/IRML) at that time.  However, it was the first time I was going for an international Olympiad --- _the_ top competition in high-school students.

In Singapore, our Ministry of Education (MOE) oversees and covers all costs for the Singaporean delegation.  This makes the delegation state-sanctioned, with a sense of officialness --- MOE issues to the four contestants red blazers with the Singapore crest, and sends a staff member to accompany the delegation to the competition.  There was also a ``briefing'' we had to attend at the MOE headquarters, where they tell you lots of dos and don'ts.  (At the briefing I felt that we were being treated as children by the staff member who would accompany us, and hence was reminded about how fortunate I was to be treated as adults by most teachers at HCI.)

And so on the 23<sup>rd</sup> day of September 2012, we met at Changi Airport, ready for our trip to Sirmione, Italy.

## The International Olympiad in Informatics (IOI)

TODO



TODO