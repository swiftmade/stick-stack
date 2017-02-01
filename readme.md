💚 Stick Stack
=============

This is a slightly modified version of a jQuery plugin originally implemented by [@ilterocal](https://github.com/ilterocal).

# What does this plugin do?
It helps you stick a stack of elements (table headers, bootstrap panel headings, etc.) consecutively. As soon as the next sticky element arrives, the previous sticky element is released. Here is a demo:

![Demo](https://media.giphy.com/media/26xBMFekYTMCRAxHy/giphy.gif)


# How to use?

Just include src/stick-stack.js in your code and specify which elements you want to stick-stack like so:

	$(window).stickStack('.panel-heading');

Insert any class or selector instead of panel-haeding. Voila!


# Customize

Instead of a selector, you can pass an options object. Every possible options is listed below, only the **el** key is compulsory in this mode, which should be your selector string.

	$(window).stickStack({
		
	});