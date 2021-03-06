#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comments"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "comment": {
      "user_id": 1,
      "article_id": 3,
      "title": "Comment Curl Script Permissions",
      "body": "Comment Body"
    }
  }'

echo
