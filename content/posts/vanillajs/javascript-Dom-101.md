---
title: "Introduction to javaScript DOM 101"
description: "As a developer, creating web pages or web app, most of the time you will likely be manipulating the Document structure in one way or the other. It is usually done by using..."
date: 2020-05-3
published: true
canonical_url: true
tags: ['javascript', 'Dom', 'Api']
---

As a developer, creating web pages or web app, most of the time you will likely be manipulating the Document structure in one way or the other. It is usually done by using the Document Object Model which is DOM for short. The DOM is a set of APIs for controlling styling and HTML information that makes heavy use of the Document.

#Working with the Dom

let's try to manipulate a HTML button using the DOM. First the HTML document.

```html
 <!DOCTYPE html>
<html>

<head>
    <title>DOM example</title>
</head>
<style>
    body {
        background-color: gray;
        color: #fff;
        text-align: center;
    }
</style>

<body>

    <h2>Click the button</h2>
    <button id="btn">click</button>

    <script>
        const button = document.getElementById('btn');
        button.addEventListener('click', doSomething);

        function doSomething() {
            return (
                alert('you clicked on the button')
            );
        }
    </script>
</body>

</html>
```
If we save the code and open it on a web browser, and click on the button, we should get a pop-up box telling us that we clicked on the button.

lets try to understand the code above. first we have the javaScript code at the button just before the clossing body tag.

```javaScript
 const button = document.getElementById('btn');
     button.addEventListener('click', doSomething);

     function doSomething() {
       return(alert('you clicked on the button'));
     }
```

what this code does is that, first we grab the document that we want to manipulate and attach it to a variable, which is button.

```javaScript
const button = document.getElementById('btn');
```
secondary we attach an event listener to the button, in this case it is the **click** event and a function that will be triggered once the event happen.

```javaScript
button.addEventListener('click', doSomething);
```
the function that runs once we click on the button.

```javaScript
function doSomething(){
  return(alert('you clicked on the button'));
}
```
This is just a tiny piece of what can be done with the DOM. you can check out the [w3school](https://www.w3schools.com/js/js_htmldom_methods.asp) DOM tutorial on some of the amazing things you can do with the DOM API. [Mozilla javaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) also have an amazing tutorial on DOM API.
