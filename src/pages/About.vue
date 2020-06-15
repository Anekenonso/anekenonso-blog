<template>
  <div class="about">
    <nav>
      <ul class="nav">
        <li>
          <ToggleTheme/>
        </li>
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
    <br>
    <div class="about__data">
      <div class="bio">
        <h1 class="intro">Hello! I'm kenneth 👋</h1>
        <span>
          I'm a Front end Developer, a pursuer of professional development, 
          lover of music, cybersecurity, and remote work. I have continued to enhance my career in
          software development by continuously learning some of the industry's best practices.
        </span>
        <p class="links">
          <a href="//twitter.com/anekenonso1">
            <g-image alt="twitter" class src="~/assets/images/twitter.png" width="30" />
          </a>
          <a href="//www.upwork.com/o/profiles/users/~0109de556cd2771e84/?s=1110580755057594368">
            <g-image alt="dev" class src="~/assets/images/upwork.png" width="30"/>
          </a>
          <a href="//github.com/anekenonso">
            <g-image alt="github" class src="~/assets/images/github.png" width="30" />
          </a>
          <a href="//www.linkedin.com/in/okenwakenneth/">
            <g-image alt="linkedin" class src="~/assets/images/linkedin.png" width="32"/>
          </a>
          <a href="mailto:okenwanonsokenneth@gmail.com">
            <g-image alt="notist" class src="~/assets/images/email.svg" width="34"/>
          </a>
        </p>   
      </div>
      <div class="headshot">
        <g-image
          src="https://res.cloudinary.com/anekenonso/image/upload/v1592090272/author1.png"
          class="pic"
          alt="Picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
export default {
  components: {
    ToggleTheme
  }
};
</script>

<style lang="scss" scooped>
.about {
  min-height: 100vh;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.nav {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  li {
    padding: 20px;
    margin-top: 30px;
  }
}
.links {
  margin-top: 0.9em;
  a {
    margin: 0 0.5em;
  }
}
.bio {
  width: 32em;
  margin-right: 20px;
  text-align: left;
}

.intro {
  font-size: 3em;
}

.pic {
  border-radius: 50%;
  height: 300px;
}

@media only screen and (max-width: 650px) {
  .about {
    &__data {
      display: flex;
      flex-direction: column;

      .bio {
        width: 20rem;
        text-align: center;
      }

      .headshot {
        border-radius: 50%;
        display: none;
      }
    }
  }
}
</style>
