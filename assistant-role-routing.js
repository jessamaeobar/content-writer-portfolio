/* Role-question routing layer for Jessa Mae Obar's visitor-facing assistant. */
(function () {
  function has(q, words) {
    return words.some(function (word) { return q.includes(word); });
  }

  function rolesHeldAnswer() {
    return `Jessa’s documented professional roles include:\n\n• ESL Teacher — Bitu JSC (Remote/Vietnam), May 2022–March 2026\n• English/Writing/Literature Tutor — Course Hero (Freelance/Remote/USA), October 2021–October 2022\n• Customer Success Specialist — PANDR BPO (Legazpi), May 2021–September 2021\n• Administrative Support — PANDR BPO (Legazpi), February 2021–May 2021\n• ESL Teacher — ESL Online Learning Center (Daraga, Albay), June 2017–January 2020\n\nThese roles are all part of her professional background. They should not be omitted simply because her current positioning is Content Writer | Content Development | Copy Editing | Proofreading. Several responsibilities within these roles directly support her current content career, including educational content development, copyediting/proofreading, academic-writing support, WordPress article editing, written communication, accuracy, and audience-focused communication.`;
  }

  function bestSuitedRolesAnswer() {
    return `Based on the documented evidence, Jessa’s strongest current fit is for content and editorial roles such as:\n\n• Content Writer\n• Content Editor\n• Copy Editor\n• Proofreader\n• Content Developer\n• Educational Content Specialist\n\nHer broader professional background also includes ESL teaching, English/Writing/Literature tutoring, Administrative Support, and Customer Success. Those roles provide transferable strengths in communication, explaining complex information, written feedback, organization, client support, problem-solving, and attention to detail.\n\nHer portfolio and recent training additionally support relevance to SEO, content marketing, email marketing, social media, and AEO. These areas should be described as portfolio/training-supported unless professional employment evidence is specifically documented.`;
  }

  function install() {
    if (!window.JessaLocalAssistant || window.__jessaRoleRoutingInstalled) return;
    window.__jessaRoleRoutingInstalled = true;

    var originalAnswer = window.JessaLocalAssistant.answer;

    window.JessaLocalAssistant.answer = function (question) {
      var q = String(question || '').trim().toLowerCase();

      if (has(q, [
        'what roles has jessa held',
        'roles has jessa held',
        'what positions has jessa held',
        'positions has jessa held',
        'what professional roles has jessa held',
        'professional roles',
        'previous roles',
        'past roles',
        'previous jobs',
        'work history',
        'employment history'
      ])) {
        return rolesHeldAnswer();
      }

      if (has(q, [
        'what roles is jessa best suited for',
        'what types of roles is jessa best suited for',
        'what role is jessa best suited for',
        'what type of role is jessa suited for',
        'what types of roles is jessa suited for',
        'best suited roles',
        'best suited',
        'best fit roles',
        'best fit'
      ])) {
        return bestSuitedRolesAnswer();
      }

      return originalAnswer(question);
    };
  }

  if (window.JessaLocalAssistant) {
    install();
  } else {
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (window.JessaLocalAssistant) {
        window.clearInterval(timer);
        install();
      } else if (attempts >= 100) {
        window.clearInterval(timer);
      }
    }, 50);
  }
})();
