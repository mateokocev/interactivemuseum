<template>

  <div class="mainDiv">

    <div class="appNameDiv">
      <span class="appNameStart">i</span> <span class="appNameMain">NTERACT</span>
    </div>

    <div class="slogan">
      <span class="sloganFirst">A focused way to <span class="sloganKey1">EXPLORE </span><span class="sloganKey2">KNOWLEDGE</span></span>
      <span class="sloganDot">.</span>
    </div>

  </div>

</template>

<script>

  export default {

    name: 'Home',
  }
</script>

<style>
.mainDiv {
  position: fixed;
}

.appNameDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 180px;
}

.appNameStart {
  color: #CCEC13;
  font-family: 'Monoton', cursive;
  font-size: 100px;
}

.appNameMain {
  color: black;
  font-family: 'Monoton', cursive;
  font-size: 100px;
}

.slogan {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 190px;
}

.sloganFirst {
  color: black;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
}

.sloganKey1 {
  color: #CCEC13;
}

.sloganKey2 {
  color: white;
}

.sloganDot {
  color: black;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
}
</style>