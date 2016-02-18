"use strict;";
var page = {
  'div': {
    '@class': 'red',
    'h1': 'Hello, heading <h1>',
    'p': 'This is a paragraph'
  },
  'h2': 'Heading <h2>',
  'strong': {
    '@class': 'red',
    '@value': 'Make it nasty!'
  },
  'h3': 'Heading <h3>',
  'section': {
    '@class': 'red',
    'i': 'Some text here',
    'div': {
      '@class': 'blue',
      'span': 'Some more span here'
    }
  }
};

function generateAdvancedTree(page, node) {
  var tag;
  var text;
  for (var item in page) {
    if (node === undefined) {
      tag = document.createElement(item);
      document.getElementById('page').appendChild(tag);
    } else {
        if (item.substring(0, 1) != '@') {
            tag = document.createElement(item);
            node.appendChild(tag);
            }
        }

    if (typeof page[item] === 'object') {
      generateAdvancedTree(page[item], tag);
    } else {
      if (item.substring(0, 1) == '@') {
        var attrName = item.substring(1);
        var attrValue = page[item];
        node.setAttribute(attrName, page[item]);
        } else {
            if (node === undefined) {
                text = document.createTextNode(page[item]);
                tag.appendChild(text);
             } else {
                 text = document.createTextNode(page[item]);
                 tag.appendChild(text);
                 }
            }
        }
    }
}