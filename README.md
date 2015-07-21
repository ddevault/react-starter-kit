# React+Flux Starter Kit

This is a starter kit with "batteries included" to get you up and running with
React and Flux more quickly.

## Usage

Branches:

* [`master`](https://github.com/SirCmpwn/react-starter-kit/tree/master) - empty starter kit
* [`todo`](https://github.com/SirCmpwn/react-starter-kit/tree/todo) - simple Todo list example (you are here)

To start your own React application based on this:

    git clone -b master https://github.com/SirCmpwn/react-starter-kit.git
    mv react-starter-kit my-awesome-app
    cd my-awesome-app
    ./bootstrap.sh

## What you get

* Some no-brainer dependencies:
    * React
    * Flux (dispatcher)
    * Babel (ES6/ES7/JSX transpiling)
    * Underscore
* A base Store class
* An entry point

## Todo Example

This isn't the usual TodoMVC style application. It's very very stripped down so
that there's the minimal amount of code to read to grok it. You can get it like so:

    git clone -b todo https://github.com/SirCmpwn/react-starter-kit.git
    cd react-starter-kit
    npm install
    npm start # run dev server
