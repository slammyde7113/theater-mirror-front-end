'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const api = require('./auth/api.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
  api.signInGuest()
  .then(() => {
    $('#show-articles').trigger('click')
  })
  $('.dropdown li').click(function (e) {
    e.stopPropagation()
  })
  $('.dropdown-inner').click(function (e) {
    e.stopPropagation()
    $(this).toggleClass('open').trigger('shown.bs.dropdown')
  })
})
