# React+Flux Starter Kit

**Not done yet, do not use**

This is a starter kit with "batteries included" to get you up and running with
React and Flux more quickly.

## Usage

There are several branches.

* [`master`](https://github.com/SirCmpwn/react-starter-kit/tree/master) - empty starter kit
* [`router-kit`](https://github.com/SirCmpwn/react-starter-kit/tree/router-kit) - empty starter kit plus routing
* [`todo`](https://github.com/SirCmpwn/react-starter-kit/tree/todo) - simple TODO list example (you are here)
* [`router`](https://github.com/SirCmpwn/react-starter-kit/tree/router) - simple TODO list example plus routing

To start your own React application based on this:

    git clone https://github.com/SirCmpwn/react-starter-kit.git
    mv react-starter-kit my-awesome-app
    cd my-awesome-app
    ./bootstrap.sh

If you need routing:

    git clone -b router-kit https://github.com/SirCmpwn/react-starter-kit.git
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

With the router kit, you also get
[react-router](https://github.com/rackt/react-router) and an index route.
