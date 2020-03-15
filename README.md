# react_js_clean_architecture

## Overview
A React JS boilerplate that makes it easy and intuitive to implement [Uncle Bob's Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) in react js. This boilerplate provides basic structure that are designed according to the Clean Architecture.

The concept is borrrowed to this wonderfull code.

https://github.com/ShadyBoukhary/flutter_clean_architecture

https://github.com/janithl/react-clean-arch

Thanks to @ShadyBoukhary and @janithl 

## Flutter Clean Architecture Primer
### Introduction
It is architecture based on the book and blog by Uncle Bob. It is a combination of concepts taken from the Onion Architecture and other architectures. The main focus of the architecture is separation of concerns and scalability. It consists of four main modules: `App`, `Domain`, `Data`, and `Device`.

### The Dependency Rule
**Source code dependencies only point inwards**. This means inward modules are neither aware of nor dependent on outer modules. However, outer modules are both aware of and dependent on inner modules. Outer modules represent the mechanisms by which the business rules and policies (inner modules) operate. The more you move inward, the more abstraction is present. The outer you move the more concrete implementations are present. Inner modules are not aware of any classes, functions, names, libraries, etc.. present in the outer modules. They simply represent **rules** and are completely independent from the implementations.

### Layers

#### Domain
The `Domain` module defines the business logic of the application. It is a module that is independent from the development platform i.e. it is written purely in the programming language and does not contain any elements from the platform. The reason for that is that `Domain` should only be concerned with the business logic of the application, not with the implementation details. This also allows for easy migration between platforms, should any issues arise.

##### Contents of Domain
`Domain` is made up of several things.
* **Entities**
  * Enterprise-wide business rules
  * Made up of classes that can contain methods
  * Business objects of the application
  * Used application-wide
  * Least likely to change when something in the application changes
* **Usecases**
  * Application-specific business rules
  * Encapsulate all the usecases of the application
  * Orchestrate the flow of data throughout the app
  * Should not be affected by any UI changes whatsoever
  * Might change if the functionality and flow of application change
* **Repositories**
  * Abstract classes that define the expected functionality of outer layers
  * Are not aware of outer layers, simply define expected functionality
    * E.g. The `Login` usecase expects a `Repository` that has `login` functionality
  * Passed to `Usecases` from outer layers

`Domain` represents the inner-most layer. Therefore, it the most abstract layer in the architecture.

#### App
`App` is the layer outside `Domain`. `App` crosses the boundaries of the layers to communicate with `Domain`. However, the **Dependency Rule** is never violated. Using `polymorphism`, `App` communicates with `Domain` using inherited class: classes that implement or extend the `Repositories` present in the `Domain` layer. Since `polymorphism` is used, the `Repositories` passed to `Domain` still adhere to the **Dependency Rule** since as far as `Domain` is concerned, they are abstract. The implementation is hidden behind the `polymorphism`.

##### Contents of App
Since `App` is the presentation layer of the application, it is the most framework-dependent layer, as it contains the UI and the event handlers of the UI. For every page in the application, `App` defines at least 3 classes: a `Action`, a `Reducers`, and a `View`.
* **ACTIONS**
  * In a nutshell, actions are events. Actions send data from the application (user interactions, internal events such as API calls, and form submissions) to the store. The store gets information only from actions. Internal actions are simple JavaScript objects that have a type property (usually constant), describing the type of action and payload of information being sent to the store.

    ```
    {
        type: LOGIN_FORM_SUBMIT,
        payload: {username: ‘alex’, password: ‘123456’}
    }
    ```
    Actions are created with action creators. That sounds obvious, I know. They are just functions that return actions.

    ```
    function authUser(form) {
        return {
            type: LOGIN_FORM_SUBMIT,
            payload: form
        }
    }
    ```
    Calling actions anywhere in the app, then, is very easy. Use the dispatch method, like so:

    ```
    dispatch(authUser(form));
    ```
* **REDUCERS**

  * We’ve already discussed what a reducer is in functional JavaScript. It’s based on the array reduce method, where it accepts a callback (reducer) and lets you get a single value out of multiple values, sums of integers, or an accumulation of streams of values. In Redux, reducers are functions (pure) that take the current state of the application and an action and then return a new state. Understanding how reducers work is important because they perform most of the work. Here is a very simple reducer that takes the current state and an action as arguments and then returns the next state:

     ```
     function handleAuth(state, action) {
         return _.assign({}, state, {
             auth: action.payload
         });
     }
     ```
     For more complex apps, using the combineReducers() utility provided by Redux is possible (indeed, recommended). It combines all of the reducers in the app into a single index reducer. Every reducer is responsible for its own part of the app’s state, and the state parameter is different for every reducer. The combineReducers() utility makes the file structure much easier to maintain.

     If an object (state) changes only some values, Redux creates a new object, the values that didn’t change will refer to the old object and only new values will be created. That’s great for performance. To make it even more efficient you can add Immutable.js.

     ```
     const rootReducer = combineReducers({
         handleAuth: handleAuth,
         editProfile: editProfile,
         changePassword: changePassword
     });
     ```

* Extra
  * `Utility` classes (any commonly used functions like timestamp getters etc..)
  * `Constants` classes (`const` strings for convenience)
  * `Navigator` (if needed)
  
#### Data
Represents the data-layer of the application. The `Data` module, which is a part of the outermost layer, is responsible for data retrieval. This can be in the form of API calls to a server, a local database, or even both. 

##### Contents of Data
* **Repositories**
  * Every `Repository` **should** implement `Repository` from the **Domain** layer.
  * Using `polymorphism`, these repositories from the data layer can be passed across the boundaries of layers, starting from the `View` down to the `Usecases` through the `Controller` and `Presenter`.
  * Retrieve data from databases or other methods. 
  * Responsible for any API calls and high-level data manipulation such as
    * Registering a user with a database
    * Uploading data
    * Downloading data
    * Handling local storage
    * Calling an API
* **Models** (not a must depending on the application)
  * Extensions of `Entities` with the addition of extra members that might be platform-dependent. For example, in the case of local databases, this can be manifested as an `isDeleted` or an `isDirty` entry in the local database. Such entries cannot be present in the `Entities` as that would violate the **Dependency Rule** since **Domain** should not be aware of the implementation.
  * In the case of our application, models in the `Data` layer will not be necessary as we do not have a local database. Therefore, it is unlikely that we will need extra entries in the `Entities` that are platform-dependent.
* **Mappers**
  * Map `Entity` objects to `Models` and vice-versa.
  * Static classes with static methods that receive either an `Entity` or a `Model` and return the other.
  * Only necessary in the presence of `Models`
* Extra
  * `Utility` classes if needed
  * `Constants` classes if needed

#### Device
Part of the outermost layer, `Device` communicates directly with the platform i.e. Android and iOS. `Device` is responsible for Native functionality such as `GPS` and other functionality present within the platform itself like the filesystem. `Device` calls all Native APIs. 

##### Contents of Data
* **Devices**
  * Similar to `Repositories` in `Data`, `Devices` are classes that communicate with a specific functionality in the platform.
  * Passed through the layers the same way `Repositories` are pass across the boundaries of the layer: using polymorphism between the `App` and `Domain` layer. That means the `Controller` passes it to the `Presenter` then the `Presenter` passes it polymorphically to the `Usecase`, which receives it as an abstract class.
* Extra
  * `Utility` classes if needed
  * `Constants` classes if needed
