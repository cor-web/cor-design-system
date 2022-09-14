import { html } from 'lit-html';
import TweetTemplate from '@cor-web/components/tweet/template.js';
import '@cor-web/components/tweet/tweet.css'

export default {
  title: 'Components/Tweet',
  args: {
    quote: 'Ea sit qui aliqua sint ex. Nisi velit anim eiusmod Lorem incididunt duis nisi irure quis. Sint non id aliqua aliquip eu reprehenderit consectetur esse in mollit ea duis labore ad.',
    tweetAccount: '@CoR_President',
    tweetURL: 'twitter.com/CoR_President',
    imgSrc: 'https://dummyimage.com/500.gif',
    imgAlt: 'alt text'
  }
}

export const Default = TweetTemplate.bind({});
