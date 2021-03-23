<template>
  <div>
    <div class="selfie">
      <img src="/Moenupa.homepage/static/img/87535316_p0.png" alt="">
      <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
    </div>
    <h1>Moenupa WANG</h1>
    <p>Undergraduate Student at HKPolyU</p>
    <div class="contacts">
      <span data-toggle="tooltip" data-placement="bottom" title="Wechat">
        <a href="https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws" target="_blank"><span class="mdi mdi-wechat mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="E-Mail">
        <a href="mailto:Moenupa@gamil.com" target="_blank"><span class="mdi mdi-email mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="Github">
        <a href="https://github.com/Moenupa" target="_blank"><span class="mdi mdi-github mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="Twitter">
        <a href="https://twitter.com/Moenupa" target="_blank"><span class="mdi mdi-twitter mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="Facebook">
        <a href="https://facebook.com/Moenupa" target="_blank"><span class="mdi mdi-facebook mdi-24px"></span></a>
      </span>
    </div>
    <div class="contacts">
      <span data-toggle="tooltip" data-placement="bottom" title="Netease Music">
        <a href="https://music.163.com/#/user/home?id=392696583" target="_blank"><span class="mdi mdi-music-circle mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="Steam">
        <a href="https://steamcommunity.com/id/moenupa/" target="_blank"><span class="mdi mdi-steam mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="YouTube">
        <a href="https://youtube.com/channel/UCbOOUmgSADEx9TK4gMQS85w" target="_blank"><span class="mdi mdi-youtube mdi-24px"></span></a>
      </span>
      <span data-toggle="tooltip" data-placement="bottom" title="Bilibili">
        <a href="https://m.bilibili.com/space/380763134" target="_blank"><embed src="/Moenupa.homepage/static/img/bilibili.svg" type="image/svg+xml" class="mdi bilibili" style="margin: 1px 2px;" /></a>
      </span>
    </div>
  </div>
</template>

<style scoped>
* {
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
  color: var(--dark) !important;
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