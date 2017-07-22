'use strict'
const showArticlesTemplate = require('../templates/all-articles.handlebars')
const showGuestArticlesTemplate = require('../templates/all-guest-articles.handlebars')
const showArticleTemplate = require('../templates/one-article.handlebars')
const showGuestArticleTemplate = require('../templates/one-guest-article.handlebars')
const store = require('../store')

const signUpSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'sign up success')
  $('#register-dropdown').dropdown('toggle')
  $('.modal-title').empty()
  $('.modal-title').append('Success! You are signed up')
}

const signUpFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'sign in failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check your credentials or pick a new username')
}
const signInSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'sign in success')
  if (data.user.email === 'admin@theatermirror.com') {
    $('#admin-actions').show()
  }
  $('#sign-out-button').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#user-log').empty()
  $('#user-log').append('Signed in as: ' + data.user.email + ', ID = ' + data.user.id)
  $('.modal-title').empty()
  $('.modal-title').append('Success! You are signed in')
  $('#show-articles').trigger('click')
}

const signInFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'sign in failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check your credentials')
}
const changePasswordSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'change password success')
  $('#register-dropdown').dropdown('toggle')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Password has been changed')
}

const changePasswordFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'change password failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check that your old password is correct')
}
const signOutSuccess = (data) => {
  console.log(data, 'signout success')
  $('#admin-actions').hide()
  $('#sign-out-button').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#register-dropdown').dropdown('toggle')
  $('.modal-title').empty()
  $('.notifications').append('Success! You are signed out')
}

const signOutFailure = (data) => {
  console.log(data, 'signout failure')
  $('.modal-title').empty()
  $('.notifications').append('Error! You must be signed in in order to sign out')
}
const showArticlesSuccess = (data) => {
  console.log(data)
  $('.article-container').empty()
  let showArticlesHtml
  if (!store.guest) {
    showArticlesHtml = showArticlesTemplate({ article: data.articles })
  } else {
    showArticlesHtml = showGuestArticlesTemplate({ article: data.articles })
  }
  $('.article-container').append(showArticlesHtml)
  $('.notifications').empty()
}
const showArticlesFailure = (data) => {
  $('.notifications').empty()
  console.log(data)
  $('.modal-title').empty()
  $('.modal-title').append('Error! Please reload the page')
}
const searchArticlesSuccess = (data) => {
  console.log(data)
  $('.article-container').empty()
  let showArticleHtml
  if (!store.guest) {
    showArticleHtml = showArticleTemplate({ article: data.article })
  } else {
    showArticleHtml = showGuestArticleTemplate({ article: data.article })
  }
  $('.article-container').append(showArticleHtml)
  $('.notifications').empty()
  $('.notifications').append('Search success!')
}
const searchArticlesFailure = (data) => {
  console.log(data)
  $('.notifications').empty()
  $('.modal-title').empty()
  $('.notifications').append('Error! Article you are looking for does not exist')
}

const createArticleSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'create article success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article created')
  $('.article-container').empty()
}
const createArticleFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'create article failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators May Post Articles')
}
const updateArticleSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'update article success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article updated')
  $('.article-container').empty()
}
const updateArticleFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'update article failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators May Update Articles')
}
const deleteArticleSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'delete success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article deleted')
  $('.article-container').empty()
}
const deleteArticleFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'delete failure')
  $('.modal-title').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Delete Articles')
}
const createCommentSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'create comment success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment created')
  $('.article-container').empty()
}
const createCommentFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'create comment failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators and Members May Post Comments')
}
const updateCommentSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'update comment success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment updated')
  $('.article-container').empty()
}
const updateCommentFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'update comment failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Make sure the comment you are updating is your comment')
}
const deleteCommentSuccess = (data) => {
  $('.notifications').empty()
  console.log(data, 'delete success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment deleted')
  $('.article-container').empty()
}
const deleteCommentFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'delete failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Make sure the comment you are updating is your comment')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  showArticlesSuccess,
  showArticlesFailure,
  searchArticlesSuccess,
  searchArticlesFailure,
  createArticleSuccess,
  createArticleFailure,
  updateArticleSuccess,
  updateArticleFailure,
  deleteArticleSuccess,
  deleteArticleFailure,
  createCommentSuccess,
  createCommentFailure,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentSuccess,
  deleteCommentFailure
}
