<template>
  <div class="nuxt-container">
    <Header />
    <Nuxt />
  </div>
</template>

<style scoped>
*::-webkit-scrollbar {
  width: .8rem;
  height: .6rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(var(--dark-rgb),.5);
  border-radius: .4rem;
  border: .15rem solid var(--light);
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
:root {
  /*to change color theme, edit bootstrap scss */
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  
  --white: #fff;
  --gray: #6c757d;
  --light: #f8f9fa;
  --dark: #343a40;

  --blue-rgb: 0,123,255;
  --indigo-rgb: 102,16,242;
  --purple-rgb: 111,66,193;
  --pink-rgb: 232,62,140;
  --red-rgb: 220,53,69;
  --orange-rgb: 253,126,20;
  --yellow-rgb: 255,193,7;
  --green-rgb: 40,167,69;
  --teal-rgb: 32,201,151;
  --cyan-rgb: 23,162,184;

  --white-rgb: 255,255,255;
  --gray-rgb: 108,117,125;
  --light-rgb: 248,249,250;
  --dark-rgb: 52,58,64;
  
  --primary: var(--blue);
  --secondary: var(--gray);
  --success: var(--green);
  --info: var(--cyan);
  --warning: var(--yellow);
  --danger: var(--red);
}
:root[data-theme="dark"] {
  --white: #000;
  --gray: #6c757d;
  --light: #343a40;
  --dark: #f8f9fa;

  --white-rgb: 0,0,0;
  --gray-rgb: 108,117,125;
  --light-rgb: 52,58,64;
  --dark-rgb: 248,249,250;
}
body {
  background-color: var(--white);
}

* {
	transition: all 0.3s ease-in-out, color 0.3s ease-out,
		background-color 0.3s ease-out, font 0.1s ease-in-out;
}
.nuxt-container
{
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>
