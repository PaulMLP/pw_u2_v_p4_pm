<template>
  <div class="container">
    <h1>Caracola Mágica</h1>
    <img class="main-image" alt="Main image" src="../assets/caracola.png" />
    <div class="bg-dark"></div>
            <img
          class="answer-img"
          :src="urlImage"
          alt="answer image"
        />
    <div class="answer-container">
      <input type="text" placeholder="Hazme una pregunta" v-model="question" />
      <p>Recuerda terminar con un signo de interrogación</p>
      <div>
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "Hola Mundo",
      answer: "",
      urlImage: "",
    };
  },

  watch: {
    question(value, oldvalue) {
      console.log(value);
      console.log(oldvalue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.consumeAPI();
      }
    },
  },
  methods: {
    async consumeAPI() {
      const reply = await fetch("https://yesno.wtf/api").then((r) => r.json());
      console.log(reply);
      const { answer, image } = reply;
      console.log(answer);
      console.log(image);
      this.answer = answer;
      this.urlImage = image;
    },
  },
};
</script>

<style>
:root {
  --widthImg: 250px;
}
body {
  background: linear-gradient(#59c4cc, #3373e2);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
}
.main-image {
  width: var(--widthImg);
  filter: drop-shadow(0 0 10px #ffff);
  animation: shake 1s ease-in-out infinite;
}
@keyframes shake {
  20% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-5deg);
  }
  35% {
    transform: rotate(0);
  }
  40% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0);
  }
}

.answer-img,
.bg-dark {
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-height: 100%;
  position: fixed;
}

.bg-dark {
  background-color: rgba(0,0,0,.4);
}

.answer-container{
  position: relative;
}

p{
  margin-top: 15px;
}

input {
  margin-top: 10px;
  width: var(--widthImg);
  padding: 10px 15px;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>
