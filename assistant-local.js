/* Jessa Mae Obar — free, client-side portfolio assistant.
 * No API, account, server, or API key required.
 * Answers are generated only from the approved resume/portfolio knowledge below.
 */
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

  const lower = s => s.toLowerCase();
  const has = (q, words) => words.some(w => q.includes(w));

  function answer(question) {
    const q = lower(String(question || '').trim());
    if (!q) return 'Please enter a question about Jessa Mae Obar’s experience, skills, certifications, portfolio, or project fit.';

    if (has(q, ['contact', 'email', 'reach', 'linkedin', 'hire her', 'get in touch'])) {
      return `Contact Jessa Mae Obar through the following:

Email: ${PROFILE.email}
LinkedIn: ${PROFILE.linkedin}
Portfolio: ${PROFILE.portfolio}`;
    }
    if (has(q, ['who is jessa', 'about jessa', 'tell me about jessa', 'specialize', 'specialises', 'specializes', 'what does jessa do'])) {
      return `${PROFILE.name} is positioned as a ${PROFILE.positioning}.

Her documented professional background combines ESL education, educational content development, copy editing, proofreading, academic-writing support, and administrative/customer-success experience.

Her portfolio also demonstrates writing and marketing-content formats such as blogs, website copy, landing pages, SEO content, email, social media, and content marketing.`;
    }
    if (has(q, ['editing', 'proofreading', 'copy edit', 'proofread', 'editorial'])) {
      return `Jessa has documented professional editing and proofreading experience across education, academic writing, and digital content.

At Bitu JSC, she developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources, ensuring accuracy, clarity, consistency, and alignment with exam standards while translating complex language concepts into accessible content.

At Course Hero, she copyedited and proofread essays and research papers for grammar, clarity, structure, coherence, and academic conventions.

At PANDR BPO, she copyedited and proofread WordPress articles for grammar, clarity, readability, accuracy, and brand voice.

At ESL Online Learning Center, she copyedited and proofread IELTS/TOEFL essays, answer keys, instructional materials, student work, and evaluation reports.

Overall, the documented experience supports copyediting, proofreading, editorial quality control, and clarity-focused content refinement.`;
    }
    if (has(q, ['seo', 'search engine', 'keyword'])) {
      return `Yes — Jessa has SEO-related experience, with an important distinction between portfolio evidence/training and documented professional employment.

• Portfolio: She has an SEO-focused writing sample, “How to Organize Your Inbox: 7 Email Management Tips for Busy Professionals,” demonstrating SEO writing capability and naturally integrated keywords.

• Training: She completed Content-Led SEO with Brian Dean and the Semrush SEO Crash Course with Brian Dean in August 2026.

• Skills: Her approved skills include SEO writing, keyword research, and SEO content optimization.

• Limitation: The documented work history does not establish five years of professional SEO experience.

So, the strongest accurate answer is: Jessa has SEO writing capability supported by portfolio evidence, relevant skills, and recent SEO training, but five years of professional SEO employment is not documented.`;
    }
    if (has(q, ['content writing', 'blog', 'article', 'write content'])) {
      return `Jessa’s documented background supports content development through educational and digital content work.

At Bitu, she developed, edited, and refined IELTS lesson materials, assessments, answer keys, and learning resources.

At PANDR BPO, she copyedited and proofread WordPress articles.

Her portfolio additionally demonstrates blog writing, SEO writing, website copy, content marketing, educational content, and other digital formats.`;
    }
    if (has(q, ['website copy', 'landing page', 'web copy', 'sales page'])) {
      return `Jessa’s portfolio demonstrates website and landing-page copywriting through the Crumbiq concept website-copy sample and the LinguaPro Academy landing-page sample.

These are portfolio evidence, not verified client engagements.

Her professional history also demonstrates strong editing, audience-focused communication, and content-development skills that transfer well to website copy.`;
    }
    if (has(q, ['email marketing', 'email copy', 'newsletter', 'email campaign'])) {
      return `Her portfolio includes NovaFit Wellness and Lumevia Labs welcome/onboarding email samples, and she holds HubSpot Email Marketing Certification (August 2026).

These samples are fictional/speculative rather than verified client campaigns.

Her professional experience also includes substantial written communication and educational content development.`;
    }
    if (has(q, ['social media', 'social media marketing', 'instagram', 'facebook content'])) {
      return `Jessa has portfolio evidence in social media content through the Glow Theory skincare-brand sample, plus HubSpot Social Media Certification (August 2026).

The Glow Theory sample is speculative/unaffiliated and should not be presented as client work.

Her transferable strengths include audience-focused writing, content planning, communication, and marketing training.`;
    }
    if (has(q, ['education', 'degree', 'school', 'university', 'bachelor'])) return `${PROFILE.education}

She also placed Second in the US Peace Corps National Write-On Competition in 2017.`;
    if (has(q, ['certification', 'certified', 'certificate', 'credential'])) return `Documented certifications include:

• ${PROFILE.certifications.join('\n• ')}`;
    if (has(q, ['training', 'professional development', 'course'])) return `Documented professional development includes:

• ${PROFILE.development.join('\n• ')}`;
    if (has(q, ['tool', 'software', 'platform', 'canva', 'notion', 'grammarly'])) return `Documented tools include:

${PROFILE.tools}`;
    if (has(q, ['skill', 'strength', 'good at', 'capabilities'])) return `Core skills include:

${PROFILE.skills}`;
    if (has(q, ['experience', 'work history', 'employment', 'worked'])) return `Documented work history includes:

• ${PROFILE.roles.join('\n\n• ')}`;
    if (has(q, ['remote', 'work from home', 'internet', 'setup', 'equipment'])) return `Jessa has a remote-ready setup that includes:

• 100 Mbps primary internet connection
• 50 Mbps backup connection
• Power station and power banks
• Coworking backup
• i7 laptop
• Noise-canceling headset
• HD webcam
• Flexibility across time zones`;
    if (has(q, ['language', 'english', 'filipino'])) return PROFILE.languages;
    if (has(q, ['portfolio', 'sample', 'project'])) return `Portfolio evidence includes:

• ${Object.entries(PROJECTS).map(([k,v]) => `${k}: ${v}`).join('\n\n• ')}`;
    if (has(q, ['crumbiq'])) return PROJECTS.Crumbiq;
    if (has(q, ['linguapro'])) return PROJECTS['LinguaPro Academy'];
    if (has(q, ['novafit', 'lumevia'])) return PROJECTS['NovaFit Wellness & Lumevia Labs'];
    if (has(q, ['glow theory'])) return PROJECTS['Glow Theory'];
    if (has(q, ['after the floodwaters', 'floodwaters'])) return 'After the Floodwaters Receded is a fictionalized storytelling sample. It should not be presented as verified journalism or a reported client project.';
    if (has(q, ['professional seo', 'years of seo', 'five years seo'])) return `The documented record does not establish five years of professional SEO experience.

Jessa has SEO-focused portfolio evidence, relevant skills, and recent SEO training. These should be described separately from professional employment history.`;
    if (has(q, ['client', 'clients', 'commissioned', 'freelance client'])) return 'The available evidence does not establish client relationships for the speculative portfolio brands/samples. They should not be presented as commissioned client work unless separately verified.';
    if (has(q, ['fit', 'qualified', 'qualification', 'suitable', 'good candidate', 'job', 'role'])) return `Fit depends on the specific requirement.

Strong documented areas include editing/proofreading, educational content development, written communication, research, and content development.

Portfolio and training support additional relevance in SEO, content marketing, email marketing, social media, and AEO, but those should not be overstated as equivalent to years of professional employment.

Share the job description or requirements for a requirement-by-requirement assessment.`;
    if (has(q, ['price', 'rate', 'cost', 'salary', 'fee', 'how much'])) return 'Pricing or numeric rates are not documented in the approved information, so a rate should not be invented.';
    if (has(q, ['how many years', 'years of experience', 'years experience'])) return `The assistant can report documented dates for specific roles, but it should not turn the entire career timeline into a single inflated “years of content writing” figure.

Professional experience should be evaluated by the specific skill or requirement.`;

    return `Based on Jessa Mae Obar’s approved information, I can answer questions about her professional experience, editing/proofreading, content development, educational work, certifications, tools, portfolio samples, and project fit.

I’ll distinguish professional experience from portfolio evidence and training rather than treating them as the same thing.

Try asking:
• “What editing experience does Jessa have?”
• “Does she have SEO experience?”
• “How can I contact her?”`;
  }

  window.JessaLocalAssistant = { answer };
})();
