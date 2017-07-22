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
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}

const signUpFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'sign in failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check your credentials or pick a new username')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
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
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}

const signInFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Double check your credentials')
  console.log(data, 'sign in failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check your credentials')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const changePasswordSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Password changed')
  console.log(data, 'change password success')
  $('#register-dropdown').dropdown('toggle')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Password has been changed')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}

const changePasswordFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Double check that your old password is correct')
  console.log(data, 'change password failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Double check that your old password is correct')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const signOutSuccess = (data) => {
  console.log(data, 'signout success')
  $('.notifications').empty()
  $('#admin-actions').hide()
  $('#sign-out-button').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#register-dropdown').dropdown('toggle')
  $('.modal-title').empty()
  $('.notifications').append('Success! You are signed out')
  $('#user-log').empty()
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}

const signOutFailure = (data) => {
  console.log(data, 'signout failure')
  $('.notifications').empty()
  $('.modal-title').empty()
  $('.notifications').append('Error! You must be signed in in order to sign out')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
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
  $('.notifications').append('Success! Article created')
  console.log(data, 'create article success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article created')
  $('.article-container').empty()
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const createArticleFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'create article failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators May Post Articles')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const updateArticleSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Article updated')
  console.log(data, 'update article success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article updated')
  $('.article-container').empty()
  $('.form-control').val('')
  $('.article-id').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const updateArticleFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Update Articles')
  console.log(data, 'update article failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators May Update Articles')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const deleteArticleSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Article deleted')
  console.log(data, 'delete success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Article deleted')
  $('.delete-article-id').val('')
  $('.article-container').empty()
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const deleteArticleFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Delete Articles')
  console.log(data, 'delete failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators May Delete Articles')
  $('.notifications').append('Error! Access Denied. Only Administrators May Delete Articles')
}
const createCommentSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Comment created')
  console.log(data, 'create comment success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment created')
  $('.article-container').empty()
  $('.form-control').val('')
  $('.article-id-post').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const createCommentFailure = (data) => {
  $('.notifications').empty()
  console.log(data, 'create comment failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Only Administrators and Members May Post Comments')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const updateCommentSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Comment updated')
  console.log(data, 'update comment success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment updated')
  $('.article-container').empty()
  $('.form-control').val('')
  $('.comment-id').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const updateCommentFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Comment not updated')
  console.log(data, 'update comment failure')
  $('.modal-title').empty()
  $('.modal-title').append('Error! Access Denied. Make sure the comment you are updating is your comment')
  $('.form-control').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const deleteCommentSuccess = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Success! Comment deleted')
  console.log(data, 'delete success')
  $('.modal-title').empty()
  $('.modal-title').append('Success! Comment deleted')
  $('.article-container').empty()
  $('.comment-id').val('')
  $('.btn.btn-secondary').delay(10000).trigger('click')
}
const deleteCommentFailure = (data) => {
  $('.notifications').empty()
  $('.notifications').append('Error! Comment not deleted')
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
