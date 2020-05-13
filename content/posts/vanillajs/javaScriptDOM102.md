---
title: "Introduction to javaScript DOM 102"
description: "The javascript DOM API have a lot of interesting features, and can be used to do cool stuffs like appending a new paragraph, creating a pop-up message "
date: 2020-05-06
published: true
canonical_url: true
tags: ['javascript', 'Dom', 'Api']
---

The javascript DOM API have a lot of interesting features, and can be used to do cool stuffs like appending a new paragraph, creating a pop-up message, resizing web content to fit the display window e.t.c.

you can manipulate anything on the page using javascript **Dom Api**

lets take a look at some of the things we can do with the **Dom Api**.

we can show all the different properties and methods attached to the document object by executing this code:
```javascript
 console.dir(document);
```
You can print out the domain you are working on
```javascript
console.log(document.domain);
```
You can access the URL
```javascript
console.log(document.URL);
```
Get title of the page
```javascript
console.log(document.title);
```
We can change the title of the page
```javascript
document.title = 'new title';
```
Get the Doctype
```javascript
console.log(document.doctype);
```
You can get the head and body tag
```javascript
console.log(document.head);
```
this will print out everything in the head tag to the console. same thing with the body tag.

```javascript
console.log(document.all);
```
this will give you an **array** of everything in the **html** element.

A lot can be done using the javascript **Dom Api**. this is just a tiny piece of what you can do with the **Dom Api**.

the code for this post is available on [github](https://github.com/Anekenonso/domApi102).
