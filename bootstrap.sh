#!/usr/bin/env bash

echo "We are going to tweak this template for your project's needs."

echo -n "What npm package name do you want to use: "
read package_name

sed -E "s/reactjs-starter-kit/$package_name/g" package.json > .package.json
mv .package.json package.json

echo "I'll leave the rest of package.json to you."

echo -n "What git origin do you want to use: "
read git_origin

git remote rm origin
git remote add origin "$git_origin"

rm bootstrap.sh

git add -A
git commit -m "Bootstrap react starter kit into $package_name"

echo -n "Do you want to push (y/n)? "
read do_push

if [ "$do_push" == "y" ]
then
    git push -u origin master
fi

echo "Last step: going to set up your local environment."

npm install

echo "Okay, you're good. Run `npm start` to see this in your browser."
