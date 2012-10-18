modalTouch
==========

a jQuery plug in for modal window. It works on desktop and mobile devices. It's using CSS3 for styling, so provide your own CSS if you want to style it up on IE8 or older.

You need jQuery or Zepto (haven't tested it), modaltouch.js and modaltouch.css

* jQuery note: there's a bug in jQuery 1.8.2 that calculate the browser viewport incorrectly, please use older version 1.7.2 or later version if it's released.

html block
----------

```html

<a id="hey">Click here to trigger the modal</a>

<div id="loadingModal" class="modalTouch">
	<div class="modalContent">
		Loading...
	</div>
	<div class="modalClose"> <div class="icon">X</div></div>
</div>

```

Place html in .modalContent
.modalClose is a button to close the modal. If it can be removed if not needed.

```js
$("#hey").click(function(){
    $("#loadingModal").modalTouch();
});
```

Manually close the modal:

```js
$("#loadingModal").modalTouch("hide");
```



