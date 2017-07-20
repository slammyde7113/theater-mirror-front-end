'use strict'
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
const signIn = function (data) {
  return $.ajax({
    url: `${config.apiOrigins.development}/sign-in`,
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
    return store.userToken
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
  changePassword,
  signOut,
  createArticle,
  updateArticle,
  deleteArticle,
  createComment,
  updateComment,
  deleteComment
}
