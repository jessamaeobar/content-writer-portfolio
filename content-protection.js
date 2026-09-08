/* Jessa Mae Obar Portfolio — Content Protection
 * Deterrence only: browser-side protections cannot prevent screenshots,
 * OCR, browser extensions, or other forms of extraction.
 */

(function () {
  'use strict';

  function initContentProtection() {
    var articles = document.querySelectorAll('.article-content');

    if (!articles.length) return;

    /* Ownership metadata */
    if (!document.querySelector('meta[name="author"]')) {
      var authorMeta = document.createElement('meta');
      authorMeta.name = 'author';
      authorMeta.content = 'Jessa Mae Obar';
      document.head.appendChild(authorMeta);
    }

    var ownershipMeta = document.createElement('meta');
    ownershipMeta.name = 'content-ownership';
    ownershipMeta.content =
      'Original portfolio content by Jessa Mae Obar. All rights reserved.';
    document.head.appendChild(ownershipMeta);

    /* Protection CSS */
    var style = document.createElement('style');
    style.id = 'jessa-content-protection-style';
    style.textContent = `
      .article-content {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }

      .article-content img {
        -webkit-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important;
      }

      .jessa-ownership-label {
        margin: 0 0 1.25rem;
        padding: 0.7rem 0.9rem;
        border-left: 3px solid currentColor;
        font-size: 0.88rem;
        line-height: 1.5;
        opacity: 0.8;
      }

      .jessa-copyright-notice {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid currentColor;
        font-size: 0.85rem;
        line-height: 1.5;
        opacity: 0.75;
      }

      @media print {
        .article-content {
          display: none !important;
        }

        .jessa-ownership-label,
        .jessa-copyright-notice {
          display: none !important;
        }

        body::after {
          content: "Protected portfolio content — Jessa Mae Obar";
          display: block;
          margin: 2rem;
          font-size: 12pt;
        }
      }
    `;

    document.head.appendChild(style);

    articles.forEach(function (article) {
      /* Ownership label */
      if (!article.querySelector('.jessa-ownership-label')) {
        var label = document.createElement('div');
        label.className = 'jessa-ownership-label';
        label.textContent =
          'Portfolio Sample — Original Work by Jessa Mae Obar';
        article.insertBefore(label, article.firstChild);
      }

      /* Copyright notice */
      if (!article.querySelector('.jessa-copyright-notice')) {
        var notice = document.createElement('div');
        notice.className = 'jessa-copyright-notice';
        notice.textContent =
          '© Jessa Mae Obar. Original portfolio content. All rights reserved.';
        article.appendChild(notice);
      }

      /* Disable context menu */
      article.addEventListener('contextmenu', function (event) {
        event.preventDefault();
      });

      /* Disable selection */
      article.addEventListener('selectstart', function (event) {
        event.preventDefault();
      });

      /* Disable copy/cut */
      article.addEventListener('copy', function (event) {
        event.preventDefault();

        if (event.clipboardData) {
          event.clipboardData.setData(
            'text/plain',
            'Content protected — © Jessa Mae Obar'
          );
        }
      });

      article.addEventListener('cut', function (event) {
        event.preventDefault();
      });

      /* Disable dragging */
      article.addEventListener('dragstart', function (event) {
        event.preventDefault();
      });

      article.querySelectorAll('img').forEach(function (img) {
        img.setAttribute('draggable', 'false');

        img.addEventListener('dragstart', function (event) {
          event.preventDefault();
        });
      });
    });

    /* Block common copy/cut shortcuts only while inside articles */
    document.addEventListener(
      'keydown',
      function (event) {
        var target = event.target;

        if (!target || !target.closest) return;

        var article = target.closest('.article-content');

        if (!article) return;

        var key = String(event.key || '').toLowerCase();
        var modifier = event.ctrlKey || event.metaKey;

        if (modifier && (key === 'c' || key === 'x')) {
          event.preventDefault();
          event.stopPropagation();
        }

        /* Block printing while article is focused/active */
        if (modifier && key === 'p') {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContentProtection);
  } else {
    initContentProtection();
  }
})();
