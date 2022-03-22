const twitterOptions = {
  'service': 'smk',
  'type': 'user',
  'screen_name': '@CoR_President',
  'count': 3,
  'include_rts': false,
  'rts_display_original': false,
  'exclude_replies': true,
  'display_user': true,
  'display_user_pic': true,
  'auto_expand_photo': false,
  'auto_expand_video': false,
  'tweet_more_btn': true
};


class CorTwitterContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = document.querySelector('cor-twitter-container button');
    button.addEventListener('click', this._onClick.bind(this));
    this.addEventListener('click', this._onClick.bind(this));
  }

  _onClick() {
    this.loadScript();
  }

  _onMouseenter() {
    this.classList.add('shadow');
  }

  _onMouseleave() {
    this.classList.remove('shadow');
  }

  loadScript() {

    $wt.render('twitterContainer', twitterOptions);
    this.setAttribute('loaded', '');

  }
}

if (!customElements.get('cor-twitter-container')) {
  customElements.define('cor-twitter-container', CorTwitterContainer);
}