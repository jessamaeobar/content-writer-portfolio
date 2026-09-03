/* Jessa Mae Obar — visitor-facing, client-side portfolio assistant. */
(function () {
  const PROFILE = {
    name: 'Jessa Mae Obar',
    positioning: 'Content Writer | Content Development | Copy Editing | Proofreading',
    email: 'loricamae@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jessamaeobar/',
    portfolio: 'https://jessamaeobar.github.io/content-writer-portfolio/',
    education: 'BA English, Bicol University, College of Arts and Letters, Legazpi, Albay (2017).',
    award: 'US Peace Corps National Write-On Competition — Second Place (2017).',
    languages: 'English — Fluent, CEFR C2; Filipino — Native.',
    remote: 'Remote-ready setup includes a 100 Mbps primary connection, 50 Mbps backup, power station, power banks, coworking backup, an i7 laptop, noise-canceling headset, HD webcam, and flexibility across time zones.',
    roles: [
      'Bitu JSC — ESL Teacher — Remote/Vietnam — May 2022–March 2026. Taught IELTS, TOEIC, Business English, Interview Preparation, Negotiation, Conversational English, and Roadmap; conducted trial and group classes; developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources; reviewed accuracy, clarity, consistency, and alignment with exam standards; translated complex language concepts into accessible content; mentored new teachers during onboarding.',
      'Course Hero — English/Writing/Literature Tutor — Freelance/Remote/USA — October 2021–October 2022. Provided essay structure, grammar, academic writing guidance, written feedback, copyediting/proofreading of essays and research papers, and improvements to clarity, structure, coherence, and academic conventions.',
      'PANDR BPO — Customer Success Specialist — Legazpi — May 2021–September 2021. Handled Intercom inquiries and cryptocurrency-investing support while collaborating with others. Transferable strengths include communication, problem-solving, and attention to detail.',
      'PANDR BPO — Administrative Support — Legazpi — February 2021–May 2021. Used Zenbly, TeamBuildr, Automation King, Notion, calendars, email, and invoicing; copyedited/proofread WordPress articles for grammar, clarity, readability, accuracy, and brand voice; handled ad hoc client requests.',
      'ESL Online Learning Center — ESL Teacher — Daraga, Albay — June 2017–January 2020. Taught Kids, General, Business, and Travel English plus IELTS/TOEFL/OPIC coaching; proofread student work and evaluation reports; conducted IELTS speaking evaluations and written feedback; copyedited/proofread IELTS/TOEFL essays, answer keys, and instructional materials; interviewed and mentored teachers.'
    ],
    certifications: [
      'Inbound Marketing Optimization Certified — HubSpot Academy (August 2026)',
      'Inbound Marketing Certified — HubSpot Academy (August 2026)',
      'Content-Led SEO with Brian Dean — Semrush Academy (August 2026)',
      'Semrush SEO Crash Course with Brian Dean — Semrush Academy (August 2026)',
      'Social Media Certified — HubSpot Academy (August 2026)',
      'Email Marketing Certified — HubSpot Academy (August 2026)',
      'Content Marketing Certified — HubSpot Academy (August 2026)',
      'AEO Fundamentals — HubSpot Academy (August 2026)',
      '120-Hour TEFL — Teacher Record (October 2021)',
      '120-Hour TESOL — International Open Academy (August 2021)',
      'Licensed Professional Teacher (LPT) — PRC (June 2019)',
      'Certificate in Methods of Teaching — Polangui Community College (October 2018)'
    ],
    development: [
      'AI for Marketing — HubSpot Academy (August 2026)',
      'Blogging Course — HubSpot Academy (August 2026)',
      'Roadmap Training Course Host — Bitu (August 2024)',
      'Online Debate Judge — Bitu (October 2022)',
      'IELTS Training Session — Bitu (July 2022)'
    ],
    tools: 'Google Docs, Google Sheets, Google Drive, Google Calendar, Microsoft Word, Microsoft Excel, Microsoft Outlook, ChatGPT, Gemini, Copilot, Grammarly, Notion, Zoom, Google Meet, Slack, Microsoft Teams, Discord, Telegram, and Canva.',
    skills: 'Content development and editing, copy editing, proofreading, editorial quality control, grammar/style, fact-checking, research, content planning, content strategy, business blogging, educational content, digital content, content marketing, social media marketing, email marketing, AEO, audience-focused content, marketing copywriting, professional written communication, email/document drafting, accuracy, attention to detail, organization, time management, adaptability, and problem-solving.'
  };

  const PROJECTS = {
    'Crumbiq': 'Website copy sample for a fictional/concept cookie brand. It demonstrates brand messaging, website content, and customer-focused copy. It is not client work.',
    'Blog Writing': '5 Simple Ways to Stay Productive While Working from Home — informative blog content written for a professional audience.',
    'SEO Writing': 'How to Organize Your Inbox: 7 Email Management Tips for Busy Professionals — an SEO-focused portfolio sample with naturally integrated keywords. It demonstrates SEO writing capability but does not establish five years of professional SEO employment.',
    'LinguaPro Academy': 'Landing-page copy sample created independently/speculatively to demonstrate conversion-focused messaging. It was not commissioned by LinguaPro Academy.',
    'Content Marketing': '5 Ways Small Businesses Can Improve Their Online Presence — strategic content focused on business growth and visibility.',
    'NovaFit Wellness & Lumevia Labs': 'Welcome/onboarding email samples focused on audience engagement and relationship building. They are fictional/speculative portfolio samples, not verified client campaigns.',
    'Glow Theory': 'Social-media content sample for a fictional/speculative skincare brand. No affiliation with or client relationship is established.',
    'Editing & Proofreading': 'Educational content editing sample demonstrating grammar improvement, clarity refinement, and readability enhancement. This portfolio sample complements documented professional editing/proofreading experience.',
    'IELTS Writing Guide': 'Learner-focused educational material with structured explanations, aligned with Jessa’s professional experience developing and editing instructional and exam-preparation materials.',
    'The Story Behind Everlane Roots': 'Creative brand storytelling sample focused on emotional storytelling and audience connection; portfolio evidence rather than verified client work.',
    'Advocacy & Public Education': 'Civic engagement and public-awareness content designed to make complex public issues relatable and encourage thoughtful civic participation across digital platforms.',
    'Reddit Content Writing': 'Community-focused Reddit posts and comments designed around authentic discussion and helpful, audience-aware communication.'
  };

  const FIT_ROLES = ['Content Writer', 'Content Editor', 'Copy Editor', 'Proofreader', 'Content Developer', 'Educational Content Specialist'];
  const lower = s => s.toLowerCase();
  const has = (q, words) => words.some(w => q.includes(w));

  function jobFitAnswer(question) {
    const q = lower(question);
    const isSpecificJob = has(q, ['job', 'position', 'role', 'requirement', 'requirements', 'candidate', 'qualified', 'suitable', 'fit for', 'good fit', 'meet the requirements', 'job description']);
    if (!isSpecificJob) return null;

    const hasYears2 = /(?:2|two)\s*\+?\s*years?|(?:at least|minimum of)\s*(?:2|two)\s*years?/i.test(q);
    const mentionsContent = has(q, ['content writer', 'content writing', 'content creation', 'blog writing', 'article writing', 'content development']);
    const mentionsSEO = has(q, ['seo', 'search engine optimization', 'keyword research', 'keywords']);
    const mentionsEditing = has(q, ['editing', 'editor', 'copy edit', 'copyediting', 'proofreading', 'proofreader']);
    const mentionsEmail = has(q, ['email marketing', 'email campaign', 'newsletter']);
    const mentionsSocial = has(q, ['social media', 'social media marketing']);
    const mentionsRemote = has(q, ['remote', 'remote team', 'work from home', 'distributed team', 'international team']);
    const mentionsMarketing = has(q, ['content marketing', 'inbound marketing', 'marketing content', 'marketing writing']);

    const items = [];
    if (hasYears2 || mentionsContent) {
      items.push(`1. Content writing / ${hasYears2 ? '2+ years of experience' : 'content development'}\nFit: Partial to good, depending on the exact requirement.\nEvidence: Jessa has documented professional content-development work at Bitu JSC, including developing, editing, and refining IELTS lesson materials, assessments, answer keys, and learning resources. PANDR BPO also involved copyediting/proofreading WordPress articles.\nGap: The record does not establish 2+ years under a professional Content Writer job title. Her broader writing capability is also supported by portfolio evidence.`);
    }
    if (mentionsSEO) {
      items.push(`2. SEO / keyword research\nFit: Supported, with a clear qualification.\nEvidence: Jessa has an SEO-focused portfolio sample, approved SEO-writing and keyword-research skills, and completed Content-Led SEO with Brian Dean and the Semrush SEO Crash Course with Brian Dean in August 2026.\nGap: The documented work history does not establish five years of professional SEO employment.`);
    }
    if (mentionsEditing) {
      items.push(`3. Editing and proofreading\nFit: Strong.\nEvidence: Jessa has documented professional editing/proofreading experience at Bitu JSC, Course Hero, PANDR BPO, and ESL Online Learning Center, covering instructional materials, assessments, essays, research papers, WordPress articles, answer keys, student work, and evaluation reports.`);
    }
    if (mentionsEmail) {
      items.push(`4. Email marketing\nFit: Supported, primarily through training and portfolio evidence.\nEvidence: Jessa holds HubSpot Email Marketing Certification and has NovaFit Wellness and Lumevia Labs welcome/onboarding email samples.\nGap: Those samples are fictional/speculative, so they should not be described as verified client campaigns.`);
    }
    if (mentionsSocial) {
      items.push(`5. Social media\nFit: Supported through portfolio evidence and training.\nEvidence: Jessa holds HubSpot Social Media Certification and has the Glow Theory social-media content sample.\nGap: Glow Theory is speculative/unaffiliated, so a professional client-management claim is not documented.`);
    }
    if (mentionsMarketing) {
      items.push(`6. Content/inbound marketing\nFit: Supported, with limitations.\nEvidence: Jessa has HubSpot Content Marketing, Inbound Marketing, and Inbound Marketing Optimization certifications plus a content-marketing portfolio sample.\nGap: The record does not establish five years of professional content-marketing employment.`);
    }
    if (mentionsRemote) {
      items.push(`7. Remote collaboration\nFit: Yes.\nEvidence: Jessa has documented remote experience with Bitu JSC and Course Hero and has used remote communication/collaboration tools. Her approved profile also documents a remote-ready setup and flexibility across time zones.`);
    }

    if (!items.length) {
      items.push(`1. Overall role requirements\nFit: Requires the job description for a precise assessment.\nEvidence: Strong documented areas include editing/proofreading, educational content development, written communication, research, and content development.\nGap: Specialized requirements must be checked individually rather than assumed from the job title alone.`);
    }

    return `Jessa appears to be a potentially good fit based on the information provided, but the exact fit depends on the job’s requirements. The assessment below separates professional evidence from portfolio evidence and training.\n\n${items.join('\n\n')}\n\nOverall Assessment\nJessa is particularly well supported for roles involving writing, editing, proofreading, educational content, content development, and clear written communication. SEO, content marketing, email marketing, and social media are supported by a combination of portfolio evidence, skills, and recent training, but these should not be presented as equivalent to years of specialized professional employment.\n\nPortfolio Evidence\n${PROFILE.portfolio}\n\nFor a complete assessment, paste the full job description and the assistant will evaluate each stated requirement separately.`;
  }

  function strongestExperienceAnswer() {
    return `Jessa’s strongest professional experience is in editing/proofreading and educational content development, supported by several years of work across teaching, tutoring, and digital-content contexts.\n\nStrongest areas\n• Copyediting and proofreading — instructional materials, assessments, essays, research papers, WordPress articles, answer keys, student work, and evaluation reports.\n• Educational content development — developing, editing, and refining IELTS lesson materials and learning resources while maintaining accuracy, clarity, consistency, and exam alignment.\n• Clear, audience-focused communication — translating complex language concepts into accessible content and adapting written feedback to learners.\n• Editorial quality control — improving grammar, structure, coherence, readability, accuracy, and consistency.\n• Academic and professional writing support — essay structure, grammar, academic-writing guidance, written feedback, and document refinement.\n\nKey professional evidence\nBitu JSC: Developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources; reviewed accuracy, clarity, consistency, and alignment with exam standards.\n\nCourse Hero: Provided academic-writing guidance and copyediting/proofreading for essays and research papers, with attention to clarity, structure, coherence, and academic conventions.\n\nPANDR BPO: Copyedited and proofread WordPress articles for grammar, clarity, readability, accuracy, and brand voice.\n\nESL Online Learning Center: Copyedited/proofread IELTS and TOEFL essays, answer keys, instructional materials, student work, and evaluation reports.\n\nOverall, the strongest documented professional foundation is editing, proofreading, educational content, and accuracy-focused content development. Her portfolio and recent training extend that foundation into SEO, content marketing, email marketing, social media, and AEO, but those areas should be described as portfolio/training-supported rather than overstated as equivalent professional employment experience.`;
  }

  function answer(question) {
    const q = lower(String(question || '').trim());
    if (!q) return 'Please enter a question about Jessa Mae Obar’s experience, skills, certifications, portfolio, or project fit.';

    // Job-fit routing MUST run before broad contact and generic skill handlers.
    const fit = jobFitAnswer(q);
    if (fit) return fit;

    if (has(q, ['strongest professional experience', 'strongest experience', 'strongest professional background', 'strongest area of experience', 'most experience'])) {
      return strongestExperienceAnswer();
    }

    if (has(q, ['contact', 'email', 'reach', 'linkedin', 'get in touch', 'hire her'])) {
      return `Contact Jessa Mae Obar through the following:\n\nEmail: ${PROFILE.email}\nLinkedIn: ${PROFILE.linkedin}\nPortfolio: ${PROFILE.portfolio}`;
    }
    if (has(q, ['who is jessa', 'about jessa', 'tell me about jessa', 'specialize', 'specialises', 'specializes', 'what does jessa do'])) {
      return `${PROFILE.name} is positioned as a ${PROFILE.positioning}.\n\nHer documented professional background combines ESL education, educational content development, copy editing, proofreading, academic-writing support, and administrative/customer-success experience.\n\nHer portfolio also demonstrates writing and marketing-content formats such as blogs, website copy, landing pages, SEO content, email, social media, and content marketing.`;
    }
    if (has(q, ['strong candidate', 'strongest skill', 'biggest strength', 'strengths', 'best skills', 'what makes jessa'])) {
      return `Jessa’s strongest documented areas are copyediting and proofreading, educational content development, clear written communication, accuracy-focused quality control, and audience-aware content refinement.\n\nHer professional experience supports these strengths through Bitu JSC, Course Hero, PANDR BPO, and ESL Online Learning Center. Her portfolio and recent training also add evidence of relevance to SEO, content marketing, email marketing, social media, and AEO.`;
    }
    if (has(q, ['best suited', 'best fit', 'type of role', 'roles is jessa', 'what roles'])) {
      return `Based on the documented evidence, Jessa is particularly relevant to roles such as:\n\n• ${FIT_ROLES.join('\n• ')}\n\nSuitability depends on the exact job requirements. Portfolio evidence and training support additional marketing/SEO relevance, but they should not be presented as equivalent to years of professional employment in those specialties.`;
    }
    if (has(q, ['editing', 'proofreading', 'copy edit', 'proofread', 'editorial'])) {
      return `Jessa has documented professional editing and proofreading experience across education, academic writing, and digital content.\n\nAt Bitu JSC, she developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources, ensuring accuracy, clarity, consistency, and alignment with exam standards while translating complex language concepts into accessible content.\n\nAt Course Hero, she copyedited and proofread essays and research papers for grammar, clarity, structure, coherence, and academic conventions.\n\nAt PANDR BPO, she copyedited and proofread WordPress articles for grammar, clarity, readability, accuracy, and brand voice.\n\nAt ESL Online Learning Center, she copyedited and proofread IELTS/TOEFL essays, answer keys, instructional materials, student work, and evaluation reports.\n\nOverall, the documented experience supports copyediting, proofreading, editorial quality control, and clarity-focused content refinement.`;
    }
    if (has(q, ['content writing', 'content writer', 'blog', 'article', 'write content', 'writing experience'])) {
      return `Jessa’s documented background supports content development through educational and digital content work.\n\nAt Bitu, she developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources.\n\nAt PANDR BPO, she copyedited and proofread WordPress articles.\n\nHer portfolio additionally demonstrates blog writing, SEO writing, website copy, content marketing, educational content, and other digital formats.\n\nThe strongest documented professional evidence is in educational content and editing; portfolio samples demonstrate broader content-writing capability.`;
    }
    if (has(q, ['website copy', 'landing page', 'web copy', 'sales page'])) {
      return `Jessa’s portfolio demonstrates website and landing-page copywriting through the Crumbiq concept website-copy sample and the LinguaPro Academy landing-page sample.\n\nThese are portfolio evidence, not verified client engagements.\n\nHer professional history also demonstrates strong editing, audience-focused communication, and content-development skills that transfer well to website copy.`;
    }
    if (has(q, ['seo', 'search engine', 'keyword'])) {
      return `Yes — Jessa has SEO-related experience, with an important distinction between portfolio evidence/training and documented professional employment.\n\n• Portfolio: She has an SEO-focused writing sample, “How to Organize Your Inbox: 7 Email Management Tips for Busy Professionals,” demonstrating SEO writing capability and naturally integrated keywords.\n\n• Training: She completed Content-Led SEO with Brian Dean and the Semrush SEO Crash Course with Brian Dean in August 2026.\n\n• Professional status: The documented work history does not establish five years of professional SEO employment.`;
    }
    if (has(q, ['pricing', 'price', 'rate', 'charge', 'hourly rate', 'salary expectation', 'salary'])) {
      return 'Pricing, numeric rates, or salary expectations are not documented in the approved information, so a figure should not be invented.';
    }
    if (has(q, ['available', 'availability', 'start date', 'when can jessa start', 'can jessa start'])) {
      return 'Current availability or a start date is not documented in the approved information, so it should not be assumed from past employment dates.';
    }
    if (has(q, ['portfolio', 'projects'])) {
      return `Jessa’s portfolio includes writing, SEO, content marketing, website copy, email, social media, educational content, editing/proofreading, brand storytelling, advocacy/public education, and community-focused Reddit content.\n\nPortfolio: ${PROFILE.portfolio}`;
    }
    if (has(q, ['certification', 'certifications', 'certificate', 'training'])) {
      return `Jessa’s approved certifications and training include HubSpot certifications in content marketing, email marketing, social media, inbound marketing, inbound marketing optimization, AEO, and AI for Marketing; Semrush SEO training with Brian Dean; 120-hour TEFL/TESOL credentials; Licensed Professional Teacher (LPT); and other professional development through Bitu and HubSpot Academy.`;
    }
    if (has(q, ['tools', 'software', 'platforms'])) {
      return `Jessa has used Google Workspace, Microsoft Office, ChatGPT, Gemini, Copilot, Grammarly, Notion, Zoom, Google Meet, Slack, Microsoft Teams, Discord, Telegram, Canva, and other work tools documented in her profile.`;
    }
    if (has(q, ['remote', 'work remotely', 'remote work'])) {
      return `Yes. Jessa has documented remote professional experience with Bitu JSC and Course Hero. Her approved profile also documents a remote-ready setup including primary and backup internet, backup power, coworking backup, an i7 laptop, a noise-canceling headset, an HD webcam, and flexibility across time zones.`;
    }
    if (has(q, ['education', 'degree', 'university', 'college'])) {
      return `${PROFILE.education}\n\nShe also placed Second in the US Peace Corps National Write-On Competition in 2017.`;
    }
    if (has(q, ['language', 'languages', 'speak'])) {
      return PROFILE.languages;
    }
    if (has(q, ['work history', 'employment history', 'previous jobs', 'experience'])) {
      return `Documented work history includes:\n\n• ${PROFILE.roles.join('\n\n• ')}`;
    }

    return `Jessa’s documented strengths center on content development, copyediting, proofreading, educational content, clear written communication, and editorial quality control. Her portfolio and training also support relevance to SEO, content marketing, email marketing, social media, and AEO.\n\nFor a more precise answer, ask about a specific skill, role, certification, portfolio project, or requirement.`;
  }

  window.JessaLocalAssistant = { answer };
})();
