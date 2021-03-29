<template>
  <div class="profile-wrapper">
    <div class="selfie">
      <img src="/Moenupa.homepage/static/img/87535316_p0.png" alt="">
      <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
    </div>
    <h1>Moenupa WANG</h1>
    <p>Undergraduate Student at HKPolyU</p>
    <div class="contacts">
      <Icon ititle="Wechat"   ilink="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws"  iicon="mdi-wechat" />
      <Icon ititle="E-Mail"   ilink="mailto:Moenupa@gamil.com"                      iicon="mdi-email" />
      <Icon ititle="Github"   ilink="https://github.com/Moenupa"                    iicon="mdi-github" />
      <Icon ititle="Twitter"  ilink="https://twitter.com/Moenupa"                   iicon="mdi-twitter" />
      <Icon ititle="Facebook" ilink="https://facebook.com/Moenupa"                  iicon="mdi-facebook" />
    </div>
    <div class="contacts">
      <Icon
        ititle="Netease Music" 
        ilink="https://music.163.com/#/user/home?id=392696583"
        iicon="mdi-music-circle" 
      />
      <Icon 
        ititle="Steam" 
        ilink="https://steamcommunity.com/id/moenupa/"
        iicon="mdi-steam"
      />
      <Icon 
        ititle="YouTube" 
        ilink="https://youtube.com/channel/UCbOOUmgSADEx9TK4gMQS85w"
        iicon="mdi-youtube"
      />
      <!-- <span data-toggle="tooltip" data-placement="bottom" title="Bilibili">
        <a href="https://m.bilibili.com/space/380763134" target="_blank"><embed src="/Moenupa.homepage/static/img/bilibili.svg" type="image/svg+xml" class="mdi bilibili" style="margin-bottom:-2px;" /></a>
      </span> -->
      <span data-toggle="tooltip" data-placement="bottom" title="Bilibili">
        <a href="https://m.bilibili.com/space/380763134" target="_blank"><span class="mdi bilibili" style="margin-bottom:-2px;" >
          <svg id="bilibili" data-name="bilibili" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.91 548.9" width="24px" style="margin-top: -10px"><defs><style>.cls-1{fill:#03a5dd;}</style></defs><path class="cls-1" d="M723.73,424.28c-1.94-81.31-72.6-96.8-72.6-96.8S596,327,524.19,326.67l52-50.45s8.39-10.32-5.81-21.94-15-6.45-19.74-3.22c-4.35,2.93-66.76,64.38-77.92,75.38-34.42-.14-70.38-.24-104.47-.25h28s-74.85-73.84-79.63-77.07-5.55-8.39-19.74,3.23-5.81,21.94-5.81,21.94l53.56,51.9h3c-59.4.05-110.6.39-134.08,1.29-75.5,21.3-69.69,96.8-69.69,96.8s1,161.64-.11,243.44c8.13,81.79,71.25,94.86,71.25,94.86s25.17.48,43.56.48c1.94,5.33,3.39,31,31.94,31s31.95-31,31.95-31,209.08-1,226.5-1c1,8.72,5.33,32.43,33.88,31.95s30.49-33.88,30.49-33.88,9.68-1,38.72,0c67.76-12.59,71.63-92,71.63-92S722.76,505.58,723.73,424.28Zm-58.3,258.77c0,12.83-10.16,23.23-22.69,23.23H230.61c-12.53,0-22.69-10.4-22.69-23.23v-273c0-12.83,10.16-23.23,22.69-23.23H642.74c12.53,0,22.69,10.4,22.69,23.23Z" transform="translate(-143.81 -245.15)"/><polygon class="cls-1" points="107.5 242.02 228.49 218.79 237.69 264.29 117.66 287.52 107.5 242.02"/><polygon class="cls-1" points="484.03 242.02 363.04 218.79 353.84 264.29 473.87 287.52 484.03 242.02"/><path class="cls-1" d="M381.5,599.93s26.62,47.92,56.14-15.48c28.56,61.95,60,16.42,60,16.42l17.9,11.65s-33.39,53.72-77.43,13.06c-37.27,40.66-76.47-13-76.47-13Z" transform="translate(-143.81 -245.15)"/></svg>
        </span></a>
      </span>
    </div>
  </div>
</template>

<style>
.profile-wrapper > * {
  text-align: center !important;
}
.selfie img {
  width:10rem;
  height:10rem;
  margin:.5rem 2rem 1rem;
  border-radius:50%;
  object-fit: cover;
}
.contacts span+span {
  margin-left: 1rem;
}
.mdi:hover, .mdi:focus {
  color: inherit;
  filter: brightness(80%);
}
.mdi-github {
  color: rgba(var(--dark-rgb),.8) !important;
}
.mdi-wechat {
  color: #1AAD19 !important;
}
.mdi-music-circle {
  color: #E32E2E !important;
}
.mdi-youtube {
  color: #F70000 !important;
}
.mdi-twitter {
  color: #1DA1F2 !important;
}
.mdi-facebook {
  color: #4867AA !important;
}
.mdi-steam {
  color: #2A475E !important;
}
[data-theme="dark"] .mdi-steam {
  color: #1275A7 !important;
}

</style>