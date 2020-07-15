---
title: "Understanding JavaScript promise"
description: "In this article we are going to talk about javascript promise and take a look at some use case and best practices"
date: 2020-07-15
published: true
canonical_url: true
tags: ['javascript', 'Promise']
---

In this article we are going to talk about javascript promise and take a look at some use case and best practices.

In [MDN Mozilla]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises') Documentation on javascript Promise, Promise is defined as  "an object representing the eventual completion or failure of an asynchronous operation.".

What this mean in simple tone is that, Promise in javaScript is an object which can be returned when a task is going on or when a task is complete.

A promise is an object which can be returned when a task is going on and when a task is not happening or done at the same time or speed with other task.

Does that make sense ? Maybe not. So lets get technical with the explanation below.

A promise is an object which can be returned synchronously from a asynchronous function.

A promise is settled if it's not pending, that is, if it has been resolved or rejected.  A  promise continues to run as long as it have not been rejected.

Three things are mainly involved in a promise, **resolve()**, **reject()** and **Pending**.

You can look at **resolve()** as a onFulfilled() function which literary means it is fulfilled/completed.

**reject()** which is self explanatory, when it is rejected.

**Pending** means it have not been rejected or Fulfilled. You can look at it as seating on the fence, have not made a choice yet.

Sometimes you hear/read people use **resolved** or **settled** to actually mean the same thing. Which means it have been completed and not pending.

How about a little exercise to kind of show you how this works?.

```javascript
   const hold = time => new Promise((resolve) =>
   setTimeout(resolve, time));

   hold(3000).then(() =>

   console.log(' waited then now this');
```

The **hold(3000)** call will hold it's chill for 3000ms which is 3 seconds and then prints out "waited then now this".  You use the **.then()** method that is used to pass handlers which can take the resolve or reject value instead of pending.

A standard for promises was defined by the [Promise/A+ specification]("https://promisesaplus.com/implementations") community. There are many implementations which conform to the standard, including the JavaScript standard ECMAScript promises.

Here is another simple example of a promise

```javascript
let promise = new Promise((resolve, reject) => {

    var a = 10;
    var b = 20;

    if (a < b) {
        resolve('you are correct');
    } else {
        reject('you are wrong');
    }
});

promise.then((message) => {
    console.log('this belong to the resolve ' + message);
}).catch((message) => {
    console.log('and this is rejected ' + message)
});
```

We defined a new promise that takes two parameter, resolve and reject. Then we create two variables and assign some numbers to each of them. With an **if** statement to check if true or not, if true the **resolve()** gets called else the **reject()** gets called.

```javascript
promise.then((message) => {
   console.log('this belong to the resolve ' + message);
})
```

This get's called if the statement is true.

```javascript
.catch((message) => {
    console.log('and this is rejected ' + message)
});
```

And this gets called if the statement is false.

Promise in javascript is like promise in real life. You promise something and then you resolve or reject that thing or you catch an error.

I hope this post helps you to understand **Promise** in javaScript, if so you can subscribe to my newsletter just below this post and be among the first to know when a new article is up.

if you need help in your web project, or need help with any other Javascript or web development in general, i'm available on [Upwork](https://www.upwork.com/o/profiles/users/~0109de556cd2771e84/?s=1110580755057594368).
