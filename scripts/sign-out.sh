#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/58b98d18d9a24ac354f7c2bd" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
