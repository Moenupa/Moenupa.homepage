<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
*::-webkit-scrollbar {
  width: .8rem;
  height: .6rem;
}

*::-webkit-scrollbar-track {
  background: var(--light);
}

*::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: .4rem;
  border: .15rem solid var(--light);
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
</style>
