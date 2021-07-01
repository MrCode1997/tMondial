<template>
  <div class="container">
    
    <div class="main-header" :style="{ 'background-image': `url('${path('/main.jpg')}')` }">
      <div class="backdrop">
          <img :src="path('/logo.png')" width="100x" height="50px" />
          <div class="important-text">
            <transition name="text">
              <p v-if="!showVideo">
                On September 15, 2008 the international financial world collapsed due to the American Bank of the Lehman Brothers, which had been operating since 1850. Due to this international bankruptcy, the

                casualties brought the world into a financial liquidity crisis.

                Together with my  clients, which concist of: royal families and owners with large sources of investment all around the globe, together we have been assisting financial loans to those in need. We are here to help you no matter where you are in the world. Today's international financial system is unable to relieve the current situation, let alone the future.

                So once again, to all of our customers, we are here for you  and all of your economic needs.
              </p>
            </transition>
          </div>
      </div>
    </div>

    <div v-if="!showVideo" class="locations">

      <p>
        Our offices
      </p>

      <a target="_blank" href="https://www.google.com/maps/place/32+London+Bridge+St,+London+SE1+9SG,+Regno+Unito/@51.5040552,-0.0864586,3a,75y,345.44h,102.9t/data=!3m6!1e1!3m4!1sfYJy-k0yuE-GCru-IHLRVg!2e0!7i16384!8i8192!4m5!3m4!1s0x4876035a75fdcc9d:0x901b27cf2811f15e!8m2!3d51.5042997!4d-0.0863703" class="location-item">
        <div>
          <div class="city">
            London - 32 London Bridge St
          </div>
          <a href="tel:+442038078231" class="phone">
            Phone Number: +442038078231
          </a>
          <br>
          <a href="tel:+442038078231" class="phone">
            Fax: +44 33 08180378
          </a>
          <br>
          <a href="mailto:busn.london@themondialinternationalbusinessbrokers.com" class="phone">
            Email: busn.london@themondialinternationalbusinessbrokers.com
          </a>
        </div>
        <div class="goMaps">
          >
        </div>
      </a>
      <a target="_blank" href="https://www.google.com/maps/place/MLC+Centre/@-33.8687636,151.2090293,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNn6Z2vUPXKXsmwJq7_zd8frbGYc-f2zUullSEU!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNn6Z2vUPXKXsmwJq7_zd8frbGYc-f2zUullSEU%3Dw114-h86-k-no!7i4032!8i3024!4m5!3m4!1s0x6b12ae40184ef44f:0x50a3bac69682c951!8m2!3d-33.868427!4d151.2092173" class="location-item">
        <div>
          <div class="city">
            Sydney - MLC Centre
          </div>
          <a href="tel:+61 2 8091 4911" class="phone">
            Phone Number: +61 2 8091 4911
          </a>
          <br>
          <a href="tel:+61 2 8091 4911" class="phone">
            Fax: +61 2 79082426
          </a>
          <br>
          <a href="mailto:busn.sydney@themondialinternationalbusinessbrokers.com" class="phone">
            Email: busn.sydney@themondialinternationalbusinessbrokers.com
          </a>
        </div>
        <div class="goMaps">
          >
        </div>
      </a> 
    </div>

    <div v-if="!showVideo" class="footer">
      <img :src="path('/logo.png')" width="100x" height="50px" />
    </div>


    <transition name="fade">
      <video v-show="showVideo" id="video" autoplay muted playsinline>
        <source :src="path('/video.mp4')" type="video/mp4">
      </video> 
    </transition>

  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      showVideo: true,
      dev: true,
      staging: 'staging',
    };
  },
  computed: {
    path() {
      return (path) => {
        return this.dev ? `/${this.staging}/${path}` : `${path}`;
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.getElementById('video').addEventListener('ended', () => {
        this.showVideo = false;
      })
    });
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

body {
  background-color: #e5e5e5;
  font-family: Roboto, sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  scale: 0;
}

.text-enter-active, .text-leave-active {
  transition: all .5s;
}
.text-enter, .text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-200px) scale(0);
}

.text2-enter-active, .text2-leave-active {
  transition: all .7s;
}
.text2-enter, .text2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  scale: 0;
  transform: translateY(200px) scale(0);
}

.text3-enter-active, .text3-leave-active {
  transition: all .9s;
}
.text3-enter, .text3-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-200px) scale(0);
}


.main-header {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  @media (max-width:500px) {
    background-position: -400px;
    background-attachment: scroll;
  }

  img {
    margin: 20px;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.6);

    .important-text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: white;
      > p {
        font-family: 'Courgette', cursive;
        padding: 0 30px;
        background-color: rgba(0,0,0,0.5);
        font-size: 25px;
        text-align: center;
        transition-delay: 0.5s;
        @media (max-width:375px) {
          font-size: 20px;
        }
      }
    }
  }

  
}

.locations {
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    margin: 30px 0;
    font-size: 20px;
    font-weight: bold;
  }

  .location-item {
    width: 80%;
    padding: 30px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);
    margin: 10px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: black;

    .city {
      font-size: 18px;
      font-weight: bold;
    }
    .phone {
      text-decoration: none;
      color: black;
      font-size: 17px;
    }

    .goMaps {
      font-size: 30px;
      color: lightgrey;
    }
  }
}

.footer {
  background-color: #2c3e50;
  width: 100%;
  height: 400px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}


video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }
</style>
