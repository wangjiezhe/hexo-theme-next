/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;
  if (!theme.utterances.enable || !theme.utterances.repo || !theme.utterances.issue_term || !theme.utterances.theme) return;

  injects.comment.raw('utterances', `
  <div class="comments" id="comments">
    {% if page.comments %}
    <script{{ pjax }} src="https://utteranc.es/client.js"
      repo="{{ theme.utterances.repo }}"
      issue-term="{{ theme.utterances.issue_term }}"
      theme="{{ theme.utterances.theme }}"
      crossorigin="anonymous"
      async>
    </script>
    {% endif %}
  </div>
  `, {}, {cache: true});

});
