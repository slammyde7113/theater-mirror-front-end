'use strict'
// const showMenuTemplate = require('../templates/menu-list.handlebars')
// const showProfilesTemplate = require('../templates/profiles-list.handlebars')
// const showCouponTemplate = require('../templates/coupon-list.handlebars')
// const api = require('./api')

const signUpSuccess = (data) => {
  console.log(data, 'sign up success')
}

const signUpFailure = (data) => {
  console.log(data, 'sign in failure')
}
const signInSuccess = (data) => {
  console.log(data, 'sign in success')
}

const signInFailure = (data) => {
  console.log(data, 'sign in failure')
}
const changePasswordSuccess = (data) => {
  console.log(data, 'change password success')
}

const changePasswordFailure = (data) => {
  console.log(data, 'change password failure')
}
const signOutSuccess = (data) => {
  console.log(data, 'signout success')
}

const signOutFailure = (data) => {
  console.log(data, 'signout failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
