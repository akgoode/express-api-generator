#!/bin/sh

API="http://localhost:4741"
URL_PATH="/dogs"
ID="58ba357cf61cbefc4823f8ac"
TOKEN="uMcZtfq91lgBQYprx6zev4ifecmq5I+lJxefxZ6bQwU=--8ECK0d9twUsjYloMpVOaeZ82UQVtlP2M/+3ILCL3f+0="
NAME="Kenzie"
BREED="Terrier"
VERB=GET

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request ${VERB} \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "dog": {
      "name": "'"${NAME}"'",
      "breed": "'"${BREED}"'"
    }
  }'

echo
