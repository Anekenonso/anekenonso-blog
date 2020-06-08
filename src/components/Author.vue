<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			I am a pursuer of professional development, a lover of music, cybersecurity, and remote work. I have continued to enhance my career in
software development by continuously learning some of the industry's best practices.
		</p>

		<p class="author__links">
			<a href="//twitter.com/anekenonso1"><g-image alt="twitter" class src="~/assets/images/twitter.png" width="30px"/></a>
			<a href="//github.com/anekenonso"><g-image alt="twitter" class src="~/assets/images/github.png" width="30px"/></a>
			<a href="https://www.upwork.com/o/profiles/users/~0109de556cd2771e84/?s=1110580755057594368">
			<g-image alt="twitter" class src="~/assets/images/upwork.png" width="30px"/>
			</a>
			<a href="///www.linkedin.com/in/okenwakenneth/"><g-image alt="twitter" class src="~/assets/images/linkedin.png" width="30px" /></a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		margin-top: -10px;	
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
