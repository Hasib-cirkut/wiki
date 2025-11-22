// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  interviewNotes:[
    'interview_notes/js_and_vue'
  ],
  javascriptSidebar: [
    'javascript/intro',
    {
      type: 'category',
      label: 'Foundation',
      items: [
        'javascript/foundation/objects',
        'javascript/foundation/arrays',
        'javascript/foundation/functions',
        'javascript/foundation/closures',
      ],
    },
    {
      type: 'category',
      label: 'Core Mechanisms',
      items: [
        'javascript/core_mechanism/js-is-single-threaded',
        'javascript/core_mechanism/async-js',
        'javascript/core_mechanism/hoisting',
        'javascript/core_mechanism/how-js-compiles-things',
      ],
    },
    {
      type: 'category',
      label: 'Object Oriented Programming',
      items: [
        'javascript/oop/prototypes',
        'javascript/oop/prototype-chain',
        'javascript/oop/prototypical-inheritance',
        'javascript/oop/object-oriented-programming',
        'javascript/oop/oop-principles',
        'javascript/oop/abstraction',
        'javascript/oop/encapsulation',
        'javascript/oop/inheritance',
        'javascript/oop/polymorphism',
        'javascript/oop/classes',
      ],
    },
  ],
};

export default sidebars;