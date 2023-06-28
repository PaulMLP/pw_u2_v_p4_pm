<template>
  <div class="container">
    <img class="main-image" alt="Main image" src="../assets/caracola.png" />
    <img
      v-if="imageShow"
      class="answer-img"
      :src="urlImage"
      alt="No se puede presentar la imagen"
    />
    <div class="bg-dark">
      <strong v-if="win">YOU WIN!!</strong>
    </div>

    <div class="contenedor">
      <h1 class="titulo">Caracola Mágica</h1>
      <input type="text" placeholder="Hazme una pregunta" v-model="question" />
      <p>Recuerda Terminar con el signo "?"</p>
      <div>
        <h2>{{ question }}</h2>
        <h2>{{ questionAux }}</h2>
        <h1>{{ answer }}</h1>
        <h3>Yes: {{ countWin }}</h3>
        <div class="circulo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageShow: false,
      question: "",
      questionAux: "",
      answer: "",
      urlImage: "",
      win: false,
      countWin: 0,
    };
  },

  watch: {
    question(value, oldvalue) {
      console.log(value);
      console.log(oldvalue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.questionAux = "pensando...";
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
      this.imageShow = true;
      this.win = this.yesVerify();
    },
    yesVerify() {
      if (this.answer.toLowerCase() == "yes") {
        this.countWin++;
        console.log(this.countWin);
        if (this.countWin == 1) {
          return true;
        }
      } else {
        this.countWin = 0;
        return false;
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
}

.main-image {
  width: 250px;
  filter: drop-shadow(0 0 20px #e7d409);
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
}

.answer-img,
.bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  text-align: center;
}

.contenedor {
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p,
h1,
h2 {
  color: white;
}

p {
  font-size: 25px;
  margin-top: 20px;
}

strong {
  font-size: 80px;
  text-shadow: 0 0 10px #e7d409, 0 0 30px white;
  margin-top: 100px;
  animation: emphasis 0.6s linear infinite;
}

@keyframes emphasis {
  50% {
    font-size: 120px;
  }
  100% {
    font-size: 80px;
  }
}
</style>
