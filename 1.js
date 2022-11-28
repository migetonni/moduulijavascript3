'use strict'
let target = document.querySelector('#target');

const html = '<li>First item</li>' +
    '<li>Second item</li>' +
    '<li>Third item</li>';

function set_list() {
  let element = document.getElementById('target')
  element.classList.add("my-list");
}

set_list()

target.innerHTML = html



