<template>
  <div id="profile">
    <div id="selfie" class="my-4">
      <v-avatar size="10rem">
        <img src="/static/img/87535316_p0.png" alt="" />
      </v-avatar>
      <!-- author link: https://www.pixiv.net/users/23223750 not yet authorized-->
    </div>
    <div>
      <h1>Moenupa WANG</h1>
      <p>Current Undergraduate Student at Hong Kong PolyU</p>
    </div>
    <div class="mb-1">
      <div class="contacts mt-1" v-for="list in contactlists" :key="list.id">
        <v-tooltip bottom v-for="(item, index) in list" :key="index">
          <template v-slot:activator="{ on, attrs }">
            <a :href="item.link" v-bind="attrs" v-on="on">
              <v-icon
                :color="item.accent"
              >
                {{ item.icon }}
              </v-icon>
            </a>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
#selfie img {
  object-fit: cover;
}
.contacts a {
  text-decoration: none;
}
.contacts *:hover,
.contacts *:focus {
  color: inherit;
  filter: brightness(80%);
}
.contacts > * + * {
  margin-left: .8rem;
}
.theme--dark .mdi-steam {
  color: #1275a7 !important;
}
</style>

<script>
export default {
  data() {
    return {
      contactlists: [
        [
          {icon: "mdi-wechat", name: "WeChat", accent: "#1AAD19", link: "https://u.wechat.com/MJ28uzxd5_hdvmexQCcPyws"},
          {icon: "mdi-email", name: "E-mail", accent: "#198FE9", link: "mailto:Moenupa@gamil.com"},
          {icon: "mdi-github", name: "Github", accent: "#666666", link: "https://github.com/Moenupa"},
          {icon: "mdi-twitter", name: "Twitter", accent: "#55ACEE", link: "https://twitter.com/Moenupa"},
          {icon: "mdi-facebook", name: "Facebook", accent: "#3B5998", link: "https://facebook.com/Moenupa"},
        ],
        [
          {icon: "mdi-music-circle", name: "Netease Music", accent: "#e32e2e", link: "https://music.163.com/#/user/home?id=392696583"},
          {icon: "mdi-steam", name: "Steam", accent: "#2a475e", link: "https://steamcommunity.com/id/moenupa/"},
          {icon: "mdi-youtube", name: "Youtube", accent: "#cd201f", link: "https://youtube.com/channel/UCbOOUmgSADEx9TK4gMQS85w"},
          {icon: "mdi-television-classic", name: "Bilibili", accent: "#03a5dd", link: "https://m.bilibili.com/space/380763134"},
        ],
      ]
    }
  },
  methods: {
  }
}
</script>