// 	NOTES :
// 	
// 	"Controller" : 
// 	Controller is a reference to a DOM element that has the overflow, that has the scrollbar, and in most cases this would be your browser window or the whole body. You can also set your own custom container but in 99% of the times you would use the body scrollbar to control your animations.


// 	"Scene" :  
// 	Scene is an invisible layer that could contain a single tween or a complex timeline or just trigger a class change on a specified element. 


// 	"Trigger Element" :  
// 	Trigger Element is any HTML element that will trigger the timeline or tween and its always the top of that element that will be used to trigger it.


// 	"Trigger Hook" :  
// 	Trigger Hook by default is set to the middle of the viewport (default value = 0.5), which means if the top of the element reaches the middle of the viewport, it is triggered.
// 	Trigger Hook Values = 
// 	[
// 		0 / onLeave, 
// 		0.5 
// 		1 / onEnter
// 	]


// 	"Offset" :  
// 	To be in precise control of our animation you can define Offset.
// 	If Offset is 200, the animation will trigger 200px later.


// 	"Duration" :  
// 	Duration has a default value of 0 which means that when the top of our element reaches the middle of the viewport, it will trigger the animation and it will take the amount of seconds that we define in the GreenSock tween.
// 	If we set the Duration to 200, it will take 200px of scrolling to see the whole animation from start to finish. So he'll be in control of the playback itself.








$(document).ready(function(){
	// 	Init ScrollMagic
	var controller = new ScrollMagic.Controller();		// tells the browser to use the scroll bar and trigger animation

	// 	Build a scene : for one element animation
	// var ourScene = new ScrollMagic.Scene({
	// 	triggerElement: '#project01 img',
	// 	// duration: '100%', 	// controls the amount of height the element stays visible, then removes it. 400 = 400px, '100%' = 100% of viewport height
	// 	triggerHook: 0.9,		// when top of wrapperElement reached top of the screen, triggers effect
	// 	reverse: false			// animation will only work when scrolling down
	// })
	// .setClassToggle('#project01', 'fade-in')	// adds class to project01
	// .addIndicators({							// this requires a plugin, adds indicator on browser screen
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	// indent: 200,
	// 	colorStart: '#75C695',
	// 	colorEnd: 'pink'
	// })
	// .addTo(controller);


	// 	pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,						// pin the intro to top of page
		duration: '30%', 					// for 30% of scroll, nothing happens, then unpins
	})
	.setPin('#intro', {pushFollowers: false})		// {pushFollowers: false} : works with 'duration' above, after 30% scroll, rest of the "#intro" unpins and follows the scrolling with rest of site
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: "#project01",
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller)

	// parallax scene
	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.8, {autoAlpha: 0, ease:Power0.easeNone}, 0.8)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)    // animate the background from -50%
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);



	// 	loop through each .project element
	$('.project').each(function(){

		// console.log(this);

		// 	Build a scene : for multiple element animation, place below inside a loop
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			// duration: '100%', 	// controls the amount of height the element stays visible, then removes it. 400 = 400px, '100%' = 100% of viewport height
			triggerHook: 0.9,		// when top of wrapperElement reached top of the screen, triggers effect
			reverse: false			// animation will only work when scrolling down
		})
		.setClassToggle(this, 'fade-in')	// adds class to project01
		.addIndicators({							// this requires a plugin, adds indicator on browser screen
			name: 'fade scene',
			colorTrigger: 'black',
			// indent: 200,
			colorStart: '#75C695',
			colorEnd: 'pink'
		})
		.addTo(controller);
	})
});


















