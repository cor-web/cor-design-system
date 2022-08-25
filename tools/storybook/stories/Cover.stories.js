import { html } from 'lit-html';
import CoverTemplate from '@cor-web/components/cover/template.js'
import '@cor-web/components/cover/cover.css'


export default {
  title: 'Components/Cover',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      defaultValue: 'Title of the page',
      description: 'demo description',
      table: {
        category: 'content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Title 1' },
      },
      control: {
        type: 'text'
      }
    },
    subtitle: {
      name: 'subtitle',
      type: { name: 'string', required: false },
      defaultValue: 'Subtitle of the page',
      description: 'demo description',
      table: {
        category: 'content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Title 1' },
      },
      control: {
        type: 'text'
      }
    },
    description: {
      name: 'description',
      type: { name: 'string', required: false },
      defaultValue: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
      description: 'demo description',
      table: {
        category: 'content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Title 1' },
      },
      control: {
        type: 'text'
      }
    },
    ctaText: {
      name: 'Call to action text',
      type: { name: 'string', required: false },
      defaultValue: 'Register',
      description: 'demo description',
      table: {
        category: 'content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Title 1' },
      },
      control: {
        type: 'text'
      }
    },
    ctaLink: {
      name: 'Call to action link',
      type: { name: 'string', required: false },
      defaultValue: 'Register',
      description: 'demo description',
      table: {
        category: 'content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Title 1' },
      },
      control: {
        type: 'text'
      }
    },
    campaignColor: { control: 'color' },
    imagePosition: {
      control: 'radio',
      // options: ['1/2 left', '1/2 right', 'center', '1/4 left', '1/4 right'],
      options: {
        'left': "cor-cover--img-left",
        'right': "",
      },
    }
  }
}


export const Default = CoverTemplate.bind({});


export const Cover = CoverTemplate.bind({});

Cover.args = {
  description: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
  imagePosition: "cor-cover--img-left",
  topbar: true,
  imageSrc: 'https://dummyimage.com/1000x400.jpg',
  imageAlt: 'Proident sint nostrud irure dolor anim aute occaecat exercitation qui.',
  ctaText: 'Enim irure sunt elit.',
  ctaLink: 'http://google.be'
};

export const Grid2 = CoverTemplate.bind({});

Grid2.args = {
  grid: 2,
  description: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
  imagePosition: "",
  topbar: true,
  imageSrc: 'https://dummyimage.com/600x400.jpg',
  imageAlt: 'Proident sint nostrud irure dolor anim aute occaecat exercitation qui.',
  ctaText: 'Enim irure sunt elit.',
  ctaLink: 'http://google.be'
};

export const Grid2ImageLeft = CoverTemplate.bind({});

Grid2ImageLeft.args = {
  grid: 2,
  borderColor: { control: 'color' },
  description: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
  imagePosition: "cor-cover--img-left",
  topbar: true,
  imageSrc: 'https://dummyimage.com/600x400.jpg',
  imageAlt: 'Proident sint nostrud irure dolor anim aute occaecat exercitation qui.',
  ctaText: 'Enim irure sunt elit.',
  ctaLink: 'http://google.be'
};

export const Grid4 = CoverTemplate.bind({});

Grid4.args = {
  grid: 4,
  description: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
  imagePosition: "",
  topbar: true,
  imageSrc: 'https://dummyimage.com/600x400.jpg',
  imageAlt: 'Proident sint nostrud irure dolor anim aute occaecat exercitation qui.',
  ctaText: 'Enim irure sunt elit.',
  ctaLink: 'http://google.be'
};

export const Grid4ImageLeft = CoverTemplate.bind({});

Grid4ImageLeft.args = {
  grid: 4,
  description: 'Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur. Officia commodo deserunt ipsum in. In non excepteur amet sunt sint aute pariatur. Est duis fugiat in non. Sunt excepteur ea eiusmod duis excepteur.',
  imagePosition: "cor-cover--img-left",
  topbar: true,
  imageSrc: 'https://dummyimage.com/600x400.jpg',
  imageAlt: 'Proident sint nostrud irure dolor anim aute occaecat exercitation qui.',
  ctaText: 'Enim irure sunt elit.',
  ctaLink: 'http://google.be'
};


