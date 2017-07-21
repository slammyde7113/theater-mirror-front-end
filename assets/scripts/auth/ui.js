'use strict'
const showArticlesTemplate = require('../templates/all-articles.handlebars')
const showArticleTemplate = require('../templates/one-article.handlebars')

const signUpSuccess = (data) => {
  console.log(data, 'sign up success')
  $('#register-dropdown').dropdown('toggle')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}

const signUpFailure = (data) => {
  console.log(data, 'sign in failure')
  $('.notifications').empty()
  $('.notifications').append('Error!')
}
const signInSuccess = (data) => {
  console.log(data, 'sign in success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}

const signInFailure = (data) => {
  console.log(data, 'sign in failure')
}
const changePasswordSuccess = (data) => {
  console.log(data, 'change password success')
  $('#register-dropdown').dropdown('toggle')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}

const changePasswordFailure = (data) => {
  console.log(data, 'change password failure')
  $('.notifications').empty()
  $('.notifications').append('Error!')
}
const signOutSuccess = (data) => {
  console.log(data, 'signout success')
  $('#register-dropdown').dropdown('toggle')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}

const signOutFailure = (data) => {
  console.log(data, 'signout failure')
  $('.notifications').empty()
  $('.notifications').append('Error!')
}
const showArticlesSuccess = (data) => {
  console.log(data)
  $('.article-container').empty()
  const showArticlesHtml = showArticlesTemplate({ article: data.articles })
  $('.article-container').append(showArticlesHtml)
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const showArticlesFailure = (data) => {
  console.log(data)
  $('.notifications').empty()
  $('.notifications').append('Error!')
}
const searchArticlesSuccess = (data) => {
  console.log(data)
  $('.article-container').empty()
  const showArticleHtml = showArticleTemplate({ article: data.article })
  $('.article-container').append(showArticleHtml)
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const searchArticlesFailure = (data) => {
  console.log(data)
  $('.notifications').empty()
  $('.notifications').append('Error!')
}

const createArticleSuccess = (data) => {
  console.log(data, 'create article success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const createArticleFailure = (data) => {
  console.log(data, 'create article failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Post Articles')
}
const updateArticleSuccess = (data) => {
  console.log(data, 'update article success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const updateArticleFailure = (data) => {
  console.log(data, 'update article failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Update Articles')
}
const deleteArticleSuccess = (data) => {
  console.log(data, 'delete success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const deleteArticleFailure = (data) => {
  console.log(data, 'delete failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators May Delete Articles')
}
const createCommentSuccess = (data) => {
  console.log(data, 'create comment success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const createCommentFailure = (data) => {
  console.log(data, 'create comment failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied. Only Administrators and Members May Post Comments')
}
const updateCommentSuccess = (data) => {
  console.log(data, 'update comment success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const updateCommentFailure = (data) => {
  console.log(data, 'update comment failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied.')
}
const deleteCommentSuccess = (data) => {
  console.log(data, 'delete success')
  $('.notifications').empty()
  $('.notifications').append('Success!')
}
const deleteCommentFailure = (data) => {
  console.log(data, 'delete failure')
  $('.notifications').empty()
  $('.notifications').append('Error! Access Denied.')
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
