'use strict'
const showArticlesTemplate = require('../templates/all-articles.handlebars')
const showGuestArticlesTemplate = require('../templates/all-guest-articles.handlebars')
const showArticleTemplate = require('../templates/one-article.handlebars')
const showGuestArticleTemplate = require('../templates/one-guest-article.handlebars')
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-up/`,
    method: 'POST',
    data
  })
  .then(console.log)
}
const signInGuest = function () {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-in`,
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
    let showArticlesHtml
    if (!store.guest) {
      showArticlesHtml = showArticlesTemplate({ article: response.articles })
    } else {
      showArticlesHtml = showGuestArticlesTemplate({ article: response.articles })
    }
    $('.article-container').append(showArticlesHtml)
    $('.notifications').empty()
    return store.userToken
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-in`,
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
    url: `${config.apiOrigins.development}/change-password/${store.id}`,
    method: 'PATCH',
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-out/${store.id}`,
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
    url: `${config.apiOrigins.development}/articles`,
    method: 'GET'
  })
}
const searchArticles = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/articles/${data.articles.id}`,
    method: 'GET'
  })
}
const createArticle = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/articles`,
    method: 'POST',
    data
  })
}
const updateArticle = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/articles/${store.article_id}`,
    method: 'PATCH',
    data
  })
}
const deleteArticle = function () {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/articles/${store.article_id}`,
    method: 'DELETE'
  })
}
const createComment = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/comments`,
    method: 'POST',
    data
  })
}
const updateComment = function (data) {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/comments/${store.comment_id}`,
    method: 'PATCH',
    data
  })
}
const deleteComment = function () {
  return $.ajax({
    headers: {
      'Authorization': `Token token=${store.userToken}`
    },
    url: `${config.apiOrigins.development}/comments/${store.comment_id}`,
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
