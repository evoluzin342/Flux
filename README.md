
## Overview

Flux is an architectural pattern based on unidirectional data flow.

## Flux Parts

- Dispatcher
- Store
- Action
- View

## Dispatcher

The dispatcher receives actions and dispatches them to stores that have
registered with the dispatcher. **Every store will receive every action.**
There should be only one singleton dispatcher in each application.



## Store

A store is what holds the data of an application. Stores will register
with the application's dispatcher so that they can receive actions. **The
data in a store must only be mutated by responding to an action.** There
should not be any public setters on a store, only getters. Stores decide
what actions they want to respond to. **Every time a store's data changes it
must emit a "change" event.** There should be many stores in each
application.



## Actions

Actions define the internal API of your application. They capture the ways
in which anything might interact with your application. They are simple
objects that have a "type" field and some data.

 

## Views

Data from stores is displayed in views. Views can use whatever framework
you want (In most examples here we will use React). **When a view uses data
from a store it must also subscribe to change events from that store.** Then
when the store emits a change the view can get the new data and re-render.
If a component ever uses a store and does not subscribe to it then there
is likely a subtle bug waiting to be found. Actions are typically dispatched
from views as the user interacts with parts of the application's interface.




   
## Flow of data

We can piece the parts of Flux above into a diagram describing how data flows
through the system.

1. Views send actions to the dispatcher.
2. The dispatcher sends actions to every store.
3. Stores send data to the views.
  - _(Different phrasing: Views get data from the stores.)_

![Data flow within Flux application](./counter/flux-simple-f8-diagram-with-client-action-1300w.png)

_(There is also another node in the diagram accounting for actions that do not
originate from views, which is common)_


## Building an Application with Flux

```bash
 # clone the repo
  git clone  https://github.com/evoluzin342/Flux.git

# cd into project of your choice
cd counter

# install dependencies
npm install

# start the server
npm start
    
```
 

# Reference

[What is Flux](http://fluxxor.com/what-is-flux.html)

[Flux pattern](https://softwareengineering.stackexchange.com/questions/295119/understanding-flux-pattern)
 




