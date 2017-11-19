<template>
	<div class="conversion">
		<div class="conversion__element"></div>
	</div>
</template>


<script>
import {TimelineMax} from 'gsap'

	export default {
		data() {
			return {
				message: 'LOADER'
			}
		},
		mounted: function() {

			let tl = new TimelineMax({onComplete:function() {
				this.restart();
			}});
			tl.to('.conversion__element', 2, {rotation: 360, ease: Power0.easeNone})
			// animConversion.to('.conversion__element', 1, { x:360 })
			console.log(document.querySelector('.conversion__element'))
		}
	}
</script>

<style lang="scss">
	.conversion {
		background: #000;
		position: fixed;
		left: 0;
		top: 0;
		width: 0;
		height: 100%;
		

		&__element {
			display: block;
			width: 50px;
			height: 50px;
			-webkit-border-radius: 50%;
			        border-radius: 50%;
			background: #c4c4c4;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			
			&:after, &:before {
				content: '';
				width: 10px;
				height: 10px;
				left: 0;
				top: 50%;
				position: absolute;
				background: #000;
				-webkit-border-radius: 50%;
				        border-radius: 50%;
			}

			&:before {
				left: initial;
				right: 0;
			}


		}
	}
</style>
