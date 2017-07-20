'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onShowArticles = function () {
  event.preventDefault()
  api.showArticles()
    .then(ui.showArticlesSuccess)
    .catch(ui.showArticlesFailure)
}
const onCreateArticle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createArticle(data)
    .then(ui.createArticleSuccess)
    .catch(ui.createArticleFailure)
}
const onUpdateArticle = function (event) {
  event.preventDefault()
  store.article_id = $('.article-id').val()
  console.log(store.article_id)
  const data = getFormFields(event.target)
  api.updateArticle(data)
    .then(ui.updateArticleSuccess)
    .catch(ui.updateArticleFailure)
}
const onDeleteArticle = function (event) {
  event.preventDefault()
  store.article_id = $('.delete-article-id').val()
  api.deleteArticle()
    .then(ui.deleteArticleSuccess)
    .catch(ui.deleteArticleFailure)
}
const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentFailure)
}
const onUpdateComment = function (event) {
  event.preventDefault()
  store.comment_id = $('.comment-id').val()
  console.log(store.article_id)
  const data = getFormFields(event.target)
  api.updateComment(data)
    .then(ui.updateCommentSuccess)
    .catch(ui.updateCommentFailure)
}
const onDeleteComment = function (event) {
  event.preventDefault()
  store.comment_id = $('.delete-comment-id').val()
  api.deleteComment()
    .then(ui.deleteArticleSuccess)
    .catch(ui.deleteArticleFailure)
}

const addHandlers = () => {
  $('.register-form').on('submit', onSignUp)
  $('.login-form').on('submit', onSignIn)
  $('.change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
  $('#show-articles').on('click', onShowArticles)
  $('.article-form').on('submit', onCreateArticle)
  $('.article-edit-delete-form').on('submit', onUpdateArticle)
  $('#article-delete-button').on('click', onDeleteArticle)
  $('.comment-form').on('submit', onCreateComment)
  $('.comment-edit-delete-form').on('submit', onUpdateComment)
  $('#comment-delete-button').on('click', onDeleteComment)
}

module.exports = {
  addHandlers
}
