import { html } from 'lit-html';

export default {
  title: 'Design System/Multimedia',
}

export const Audio = () => html`
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</figure>
`;

export const Video = () => html`
<video src="fichiervideo.webm" autoplay poster="vignette.jpg">
  Votre navigateur ne permet pas de lire les vidéos.
  Mais vous pouvez toujours
  <a href="fichiervideo.webm">la télécharger</a> !

  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">

  <track kind="subtitles" src="toto.en.vtt" srclang="en" label="Anglais">
  <track kind="subtitles" src="toto.sv.vtt" srclang="sv" label="Suédois">
</video>
`;