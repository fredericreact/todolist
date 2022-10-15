
# EJS
Install EJS
```javascript
npm install ejs
```
In the app :

```javascript
app.set('view engine', 'ejs');
```

```javascript
res.render("list", {
    listTitle: day,
    newListItem: items
  })
```

In the templates :

```javascript
 <h1> <%= listTitle%> </h1>
 ```


```javascript
   <% for (var i= 0; i< newListItem.length ;i++) { %>

<div class="item">
<input type="checkbox" >
  <p> <%= newListItem[i] %> </p>

</div>

  <% }; %>
   ```

# ejs layout or partials for factoring header and footer

header
```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>todolist</title>
    <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body>
```
footer
```javascript
</body>

<footer>
Copyright Fred
</footer>

</html>
```

```javascript
<%- include("header") -%>
```

```javascript
<%- include("footer") -%>
```

# Node Module Exports: How to Pass Functions and Data between Files

```javascript
exports.getDate  = function () {

  const today = new Date();

  const options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);



}
```

```javascript
exports.getDay = function () {

  const today = new Date();

  const options ={
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);



}

```

```javascript
const date = require(__dirname +"/date.js");
```

```javascript
const day = date.getDate();
```

