#!/bin/bash

API="http://localhost:4741"
URL_PATH="/articles"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "article": {
      "user_id": 1,
      "title": "Article Curl Script",
      "body": "Article Body"
    }
  }'

echo
