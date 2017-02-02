💚 Stick Stack
=============

This is a slightly modified version of a jQuery plugin originally implemented by [@ilterocal](https://github.com/ilterocal).

# What does this plugin do?
It helps you stick a stack of elements (table headers, bootstrap panel headings, etc.) consecutively. **In only 75 lines.** As soon as the next sticky element arrives, the previous sticky element is released. Here is a demo:

![Demo](https://media.giphy.com/media/26xBMFekYTMCRAxHy/giphy.gif)


# How to use?

Just include src/stick-stack.js in your code and specify which elements you want to stick-stack like so:

	$(window).stickStack('.panel-heading');

Insert appropriate selector as the parameter.

# Customize

Instead of a selector, you can also pass an options object. Every possible option is listed below. The **el** key is compulsory in this mode, which should be the selector for stickable elements.

	$(window).stickStack({
		top: 0,
		margin: 0,
		zIndex: 10,
		el: '.selector',
		containerSelector: null
	});

If containerSelector is null, measurements will be done based on stackable div's immediate parent. If you pass in a selector, stick stack will find the closest match and use its height in calculating whether or not to hide the current sticky div. 