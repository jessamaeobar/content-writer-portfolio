/* Jessa Mae Obar — Portfolio Assistant
 * Front-end widget shell. Keep API calls server-side; never expose provider API keys here.
 */
(function () {
  if (window.__jessaAssistantLoaded) return;
  window.__jessaAssistantLoaded = true;

  const launcher = document.createElement('button');
  launcher.className = 'jessa-assistant-launcher';
  launcher.type = 'button';
  launcher.setAttribute('aria-label', 'Open Jessa Mae Obar assistant');
  launcher.innerHTML = '<i class="fa-solid fa-message" aria-hidden="true"></i><span>Ask My Assistant</span>';

  const panel = document.createElement('section');
  panel.className = 'jessa-assistant-panel';
  panel.setAttribute('aria-label', 'Jessa Mae Obar professional assistant');
  panel.innerHTML = `
    <div class="jessa-assistant-header">
      <div>
        <strong>Jessa Mae Obar</strong>
        <span>Professional Portfolio Assistant</span>
      </div>
      <button type="button" class="jessa-assistant-close" aria-label="Close assistant">×</button>
    </div>
    <div class="jessa-assistant-body" aria-live="polite">
      <div class="jessa-assistant-message assistant">
        <strong>Assistant</strong>
        <p>Hi! Ask about Jessa’s experience, editing and proofreading background, content development, portfolio samples, education, certifications, or fit for a role. I’ll distinguish documented professional experience from portfolio evidence and training.</p>
      </div>
    </div>
    <form class="jessa-assistant-form">
      <label class="sr-only" for="jessa-assistant-input">Ask a question</label>
      <input id="jessa-assistant-input" type="text" autocomplete="off" placeholder="Ask about Jessa’s experience…" />
      <button type="submit" aria-label="Send question"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>
    </form>
    <div class="jessa-assistant-note">Evidence-based answers • No invented claims</div>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  const body = panel.querySelector('.jessa-assistant-body');
  const form = panel.querySelector('form');
  const input = panel.querySelector('input');
  const close = panel.querySelector('.jessa-assistant-close');

  function open() {
    panel.classList.add('is-open');
    launcher.classList.add('is-hidden');
    setTimeout(() => input.focus(), 50);
  }
  function shut() {
    panel.classList.remove('is-open');
    launcher.classList.remove('is-hidden');
  }

  launcher.addEventListener('click', open);
  close.addEventListener('click', shut);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) shut();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;

    addMessage('You', question, 'user');
    input.value = '';
    input.disabled = true;

    const typing = addMessage('Assistant', 'Thinking…', 'assistant typing');

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      if (!response.ok) throw new Error('Assistant endpoint unavailable');
      const data = await response.json();
      typing.remove();
      addMessage('Assistant', data.answer || 'I could not generate an answer right now.', 'assistant');
    } catch (error) {
      typing.remove();
      addMessage('Assistant', 'The live AI connection is not configured yet. The assistant interface is ready, but a secure server-side AI endpoint still needs to be connected.', 'assistant');
    } finally {
      input.disabled = false;
      input.focus();
    }
  });

  function addMessage(label, text, type) {
    const item = document.createElement('div');
    item.className = 'jessa-assistant-message ' + type;
    const strong = document.createElement('strong');
    strong.textContent = label;
    const p = document.createElement('p');
    p.textContent = text;
    item.append(strong, p);
    body.appendChild(item);
    body.scrollTop = body.scrollHeight;
    return item;
  }
})();
