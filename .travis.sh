#!/bin/bash

PROJECT_LOCKFILE="yarn.lock"
GITHUB_EMAIL=${GITHUB_EMAIL:-"task-runner@travis"}
GITHUB_NAME=${GITHUB_NAME:-"Travis <$GITHUB_EMAIL>"}

# Remove this if you don't care about greenkeeper
if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
  exit 0
fi

if ! git diff-index --quiet HEAD $PROJECT_LOCKFILE --; then
  git config --global user.email $GITHUB_EMAIL
  git config --global user.name $GITHUB_NAME
  git remote add travis https://"$GITHUB_PUSH_TOKEN"@github.com/"$TRAVIS_REPO_SLUG".git

  git add $PROJECT_LOCKFILE
  git commit -m "chore(*): update lockfile [ci skip]"
  LAST_COMMIT=`git rev-parse HEAD`
  git push travis $LAST_COMMIT:$TRAVIS_PULL_REQUEST_BRANCH
  git remote rm travis
fi
