---
title: "Introduction to javaScript DOM 101"
description: "Detailed Introduction to javaScript Dom API. Understanding javaScript Dom and how manipulate Html with the Dom."
date: 2020-04-29
published: true
canonical_url: true
tags: ['javascript', 'Dom', 'Api']
---

The javaScript DOM ( Document Object Model) Api is used to manipulate html document through javaScript.

```javaScript

  const button = document.querySelector('btn);

  button.addEventListener('click', doSomething);

  function doSomething() {
      console.log('you clicked the button');
  }
```
the above code is an example of how you manipulate a html document using the javaScript dom api. the above code listens for a click event, then executes the function command attached to it.