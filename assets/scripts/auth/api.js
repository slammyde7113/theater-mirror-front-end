'use strict'
const showArticlesTemplate = require('../templates/all-articles.handlebars')
const showGuestArticlesTemplate = require('../templates/all-guest-articles.handlebars')
const showArticleTemplate = require('../templates/one-article.handlebars')
const showGuestArticleTemplate = require('../templates/one-guest-article.handlebars')
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-up/`,
    method: 'POST',
    data
  })
}
const signInGuest = function () {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-in`,
    method: 'POST',
    data: {
      'credentials': {
        'email': 'Guest User',
        'password': 'guest'
      }
    }
  })
  .then((response) => {
    $('#user-log').append('Signed in as: ' + response.user.email + ', ID = ' + response.user.id)
    store.userToken = response.user.token
    store.id = response.user.id
    store.guest = true
    $('.article-container').empty()
    $('.notifications').empty()
    $('.notifications').append('Sign out success')
    return store.userToken
  })
}
const signIn = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-in`,
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
    store.guest = false
    return response
  })
}
const changePassword = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/change-password/${store.id}`,
    method: 'PATCH',
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigins.production}/sign-out/${store.id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${store.userToken}`
    }
  })
  .then(() => {
    signInGuest()
  })
}
const showArticles = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/articles`,
    method: 'GET'
  })
}
const searchArticles = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/articles/${data.articles.id}`,
    method: 'GET'
  })
}
const createArticle = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/articles`,
    method: 'POST',
    data
  })
}
const updateArticle = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/articles/${store.article_id}`,
    method: 'PATCH',
    data
  })
}
const deleteArticle = function () {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/articles/${store.article_id}`,
    method: 'DELETE'
  })
}
const createComment = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/comments`,
    method: 'POST',
    data
  })
}
const updateComment = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/comments/${store.comment_id}`,
    method: 'PATCH',
    data
  })
}
const deleteComment = function () {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.production}/comments/${store.comment_id}`,
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  signInGuest,
  changePassword,
  signOut,
  showArticles,
  searchArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  createComment,
  updateComment,
  deleteComment
}
