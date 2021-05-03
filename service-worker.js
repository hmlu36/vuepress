/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "4.24盧鄭府喜宴_原始.jpg",
    "revision": "41700e5cebe9f11483afe3323502de01"
  },
  {
    "url": "4.24盧鄭府喜宴.jpg",
    "revision": "1733d96e5119006c0b1fa7892a8a5f9b"
  },
  {
    "url": "404.html",
    "revision": "3a430eae221823c27fe7ccd458db9354"
  },
  {
    "url": "assets/css/0.styles.e8cb5d89.css",
    "revision": "4743386405bd9aa95c22bce24ba961c6"
  },
  {
    "url": "assets/img/001.佳恩-無憂歲月.0fe6b38a.jpg",
    "revision": "0fe6b38a904bfe58856e42937d0b7938"
  },
  {
    "url": "assets/img/002.佳恩-無憂歲月.225ebf67.jpg",
    "revision": "225ebf67bfe70d177b3802faeae33433"
  },
  {
    "url": "assets/img/003.佳恩-祖孫情深.0397a7c3.jpg",
    "revision": "0397a7c3c3285f78801f2c737dbab948"
  },
  {
    "url": "assets/img/004.佳恩-祖孫情深.2e9c77e6.jpg",
    "revision": "2e9c77e6449a132ddb8b7d650ac0b86d"
  },
  {
    "url": "assets/img/005.佳恩-手足情深.c400b810.jpg",
    "revision": "c400b810bd2c46bc9f9da01085becada"
  },
  {
    "url": "assets/img/006.佳恩-手足情深.227652f0.jpg",
    "revision": "227652f0f361ebabc6608844b8310d69"
  },
  {
    "url": "assets/img/007.佳恩-兄妹情深.77717db1.jpg",
    "revision": "77717db1e1e20a28bf1e3c8583969039"
  },
  {
    "url": "assets/img/008.佳恩-兄妹情深.75d246f9.jpg",
    "revision": "75d246f90a6f3dd7f1bb2395a67ee687"
  },
  {
    "url": "assets/img/009.佳恩-幼稚園畢業.4f72bbd5.jpg",
    "revision": "4f72bbd51a56f10a020f84c576348f7d"
  },
  {
    "url": "assets/img/010.佳恩-兄妹情深.b9e15c07.jpg",
    "revision": "b9e15c07cedb0cd20439af59a05b1d44"
  },
  {
    "url": "assets/img/011.佳恩-難忘童年.66ce256c.jpg",
    "revision": "66ce256c281d2cacb3cc2d187efb5000"
  },
  {
    "url": "assets/img/012.佳恩-直笛比賽.8980ae9d.jpg",
    "revision": "8980ae9da677ee7f999da494e1084302"
  },
  {
    "url": "assets/img/013.佳恩-難忘童年.7c110909.jpg",
    "revision": "7c11090946d655f0c0879fde6ec45c65"
  },
  {
    "url": "assets/img/014.佳恩-兄妹情深.c702fdd5.jpg",
    "revision": "c702fdd505aa83385482b97da8dee3a9"
  },
  {
    "url": "assets/img/015.佳恩-難忘童年.d9d94e99.jpg",
    "revision": "d9d94e99a97e2ac38853bd2ee29f01bf"
  },
  {
    "url": "assets/img/016.佳恩-國中畢業.2f9794a5.jpg",
    "revision": "2f9794a5c7bf4b689d919a0f0395c11a"
  },
  {
    "url": "assets/img/017.佳恩-高中畢業.c9292c0e.jpg",
    "revision": "c9292c0e71721b441045e46909328062"
  },
  {
    "url": "assets/img/018.佳恩-兄妹情深.a47d3d43.jpg",
    "revision": "a47d3d435ba6931695748c864745d33d"
  },
  {
    "url": "assets/img/019.佳恩-新的家庭.82cceb9f.jpg",
    "revision": "82cceb9f86f68152eddc47e92140ad8b"
  },
  {
    "url": "assets/img/020.佳恩-幸福家庭.9d4cc3c1.jpg",
    "revision": "9d4cc3c1afd7021fa902d96681dd73fa"
  },
  {
    "url": "assets/img/021.佳恩-全家福.4a3713ac.jpg",
    "revision": "4a3713ac0e809f78fbe8b9b1082b76ba"
  },
  {
    "url": "assets/img/022.佳恩-幸福一家人.7710cfb5.jpg",
    "revision": "7710cfb5089e295ae6ffb719f9eacb96"
  },
  {
    "url": "assets/img/023.佳恩-幸福一家人.60364627.jpg",
    "revision": "603646277ad6701d30bf26390ea906b8"
  },
  {
    "url": "assets/img/024.佳恩-幸福一家人.339142be.jpg",
    "revision": "339142be9e8c6f4f326e51ba97967ad0"
  },
  {
    "url": "assets/img/025.佳恩-中師團契青春歲月.7dd24bbb.jpg",
    "revision": "7dd24bbb297018ac73a68c7d48d7f957"
  },
  {
    "url": "assets/img/026.佳恩-中師團契青春歲月.e6b56a16.jpg",
    "revision": "e6b56a1632f739a824632872759e8e01"
  },
  {
    "url": "assets/img/027.佳恩-中師團契熱血青年.18cdab6a.jpg",
    "revision": "18cdab6ab678d7d52ae747f04e78d954"
  },
  {
    "url": "assets/img/028.佳恩-中師團契生活.28fe6175.jpg",
    "revision": "28fe6175a3f7b9897ec160e1c1541381"
  },
  {
    "url": "assets/img/029.佳恩-富強教會青春歲月.b3e70492.jpg",
    "revision": "b3e70492ee676dc4031675b38987d1ea"
  },
  {
    "url": "assets/img/030.佳恩-教會生活.91cb1cb0.jpg",
    "revision": "91cb1cb0db7ac5aed976c42d0b0013d2"
  },
  {
    "url": "assets/img/031.佳恩-教會生活.e7484a7b.jpg",
    "revision": "e7484a7ba41d0f72abd859cc457addc6"
  },
  {
    "url": "assets/img/032.佳恩-教會生活.73ec5640.jpg",
    "revision": "73ec56407889fa5022394a45f844b3aa"
  },
  {
    "url": "assets/img/033.佳恩-教會生活.08a50e9e.jpg",
    "revision": "08a50e9eae8b901e654017070ab30a59"
  },
  {
    "url": "assets/img/034.佳恩-教會生活.e19c0599.jpg",
    "revision": "e19c059983cd1a340c85bdb31c41ccf9"
  },
  {
    "url": "assets/img/035.佳恩-童年回憶.64a7b145.jpg",
    "revision": "64a7b145e733813b3028762b26523fc7"
  },
  {
    "url": "assets/img/036.佳恩-童年回憶.a74a7f8d.jpg",
    "revision": "a74a7f8df94066fbd24f0902a8f0edf3"
  },
  {
    "url": "assets/img/037.佳恩-童年回憶.ed54ca7c.jpg",
    "revision": "ed54ca7ca1591912cf9a4fa516ae9ee6"
  },
  {
    "url": "assets/img/038.佳恩-童年回憶.4873316d.jpg",
    "revision": "4873316d7594acfba37afb3ac76948bc"
  },
  {
    "url": "assets/img/039.佳恩-年輕歲月.ae454a93.jpg",
    "revision": "ae454a93a7bf3499abda35748c864fa2"
  },
  {
    "url": "assets/img/040.佳恩-童年回憶.f99c1707.jpg",
    "revision": "f99c17073a4d537d2006bd3697d99ebc"
  },
  {
    "url": "assets/img/041.佳恩-長大之後.0dd09760.jpg",
    "revision": "0dd097603207fb80b1bc1943377a1660"
  },
  {
    "url": "assets/img/042.佳恩-職場新鮮人.20ff5724.jpg",
    "revision": "20ff572436e9a21714e51a0716080a02"
  },
  {
    "url": "assets/img/043.佳恩-職場新鮮人.1104fda8.jpg",
    "revision": "1104fda8aebb5238c706ad4991281163"
  },
  {
    "url": "assets/img/044.泓民-年輕爸爸媽媽.8ad0af04.jpg",
    "revision": "8ad0af0490c5b127a527c412f138f8d3"
  },
  {
    "url": "assets/img/045.泓民-年輕盧爸爸媽媽.0888256b.jpg",
    "revision": "0888256b133d43e475679cc2cad70cbe"
  },
  {
    "url": "assets/img/046.泓民-嬰兒時期.bece5625.jpg",
    "revision": "bece5625a0beb0cf0e60817aa6bd799e"
  },
  {
    "url": "assets/img/047.泓民-嬰孩時期.516c49f7.jpg",
    "revision": "516c49f7cf8864ba38ad7391f5cb7dda"
  },
  {
    "url": "assets/img/048.泓民-嬰孩時期與爸爸合照.2d9e4f15.jpg",
    "revision": "2d9e4f1539abb8d708177c7e30e683e6"
  },
  {
    "url": "assets/img/049.泓民-小時候就是喜歡單車.a07674bd.jpg",
    "revision": "a07674bd1c16610010583b05c9104445"
  },
  {
    "url": "assets/img/050.泓民-小時候跟姊姊合照.c503fada.jpg",
    "revision": "c503fada1da0293b8671d2867aa15aab"
  },
  {
    "url": "assets/img/051.泓民-小時候跟姊姊合照.a9a7b993.jpg",
    "revision": "a9a7b9939b137e2d736eabce5bdae7f7"
  },
  {
    "url": "assets/img/052.泓民-可愛小三姊弟妹.ffecaa41.jpg",
    "revision": "ffecaa4157102517af72f6f6ce4c171b"
  },
  {
    "url": "assets/img/053.泓民-可愛三姊弟妹.76c8e475.jpg",
    "revision": "76c8e47567b9f1dce0cb1730f6a122be"
  },
  {
    "url": "assets/img/054.泓民-可愛三姊弟妹.e163085a.jpg",
    "revision": "e163085a6338ff571b0e38317e6a1aba"
  },
  {
    "url": "assets/img/055.泓民-小時候跟妹妹合照.7c447ba9.jpg",
    "revision": "7c447ba9ff60bd60751c1efea3e457f9"
  },
  {
    "url": "assets/img/056.泓民-小時候跟妹妹合照.ed0de7b5.jpg",
    "revision": "ed0de7b5c55cce782c48c659fa58525d"
  },
  {
    "url": "assets/img/057.泓民-全家人去新加坡玩.22f8ed07.jpg",
    "revision": "22f8ed074e8d6160f61f4310cbdefde4"
  },
  {
    "url": "assets/img/058.泓民-國中時三姊弟妹.2e51a0b5.jpg",
    "revision": "2e51a0b5a90bf97012fa23558ab9337d"
  },
  {
    "url": "assets/img/059.泓民-國中留著瀏海.7189356a.jpg",
    "revision": "7189356aeebe33095c34ac46fe31de2a"
  },
  {
    "url": "assets/img/060.泓民-高中時期長很多痘痘.29fe66b7.jpg",
    "revision": "29fe66b75737d08d64e9be254b23e1dc"
  },
  {
    "url": "assets/img/061.泓民-小時候家裡養的狗.583d61ce.jpg",
    "revision": "583d61cef448b35052e4a2da014838e7"
  },
  {
    "url": "assets/img/062.泓民-小時候家裡養的狗.df262ef8.jpg",
    "revision": "df262ef8ffa177cf97e54a336cd73916"
  },
  {
    "url": "assets/img/063.泓民-大學系羽.2826c5bd.jpg",
    "revision": "2826c5bd98bab72af9eb0a11275fcecf"
  },
  {
    "url": "assets/img/064.泓民-大學校內比賽.5b6a5d3a.jpg",
    "revision": "5b6a5d3a92748996261f2dff9a3caa63"
  },
  {
    "url": "assets/img/065.泓民-當年大資盃團體奪冠.03b144b5.jpg",
    "revision": "03b144b50c4a9062ba76a0b67bfee193"
  },
  {
    "url": "assets/img/066.泓民-當年大資盃團體奪冠.04c95360.jpg",
    "revision": "04c9536015b108cf5ac7e04d1cc1c081"
  },
  {
    "url": "assets/img/067.泓民-大學畢業-系羽的夥伴.349039cd.jpg",
    "revision": "349039cd83f071145a9a45f13302736f"
  },
  {
    "url": "assets/img/068.泓民-大學時期讚美社.6efcc507.jpg",
    "revision": "6efcc507990469a3bcc24a190335e0e1"
  },
  {
    "url": "assets/img/069.泓民-大學畢業畢業生祝福禮.6704853d.jpg",
    "revision": "6704853d450dd147f93e507120a976ed"
  },
  {
    "url": "assets/img/070.泓民-大學畢業畢業生祝福禮.801fb13e.jpg",
    "revision": "801fb13ee7af0a8976e3d6f6f89fef16"
  },
  {
    "url": "assets/img/071.泓民-受洗與牧師合照.f67954e1.jpg",
    "revision": "f67954e1f100b358c2c6b2332b8ccef3"
  },
  {
    "url": "assets/img/072.泓民-淡水讚美教會受洗.dbb3a403.jpg",
    "revision": "dbb3a4039fbf0c5e6e957c83f5fee7d2"
  },
  {
    "url": "assets/img/073.泓民-讚美社醫院探訪.45c9449d.jpg",
    "revision": "45c9449d5e750282b4bcfec15bf18720"
  },
  {
    "url": "assets/img/074.泓民-讚美社醫院探訪.76b00516.jpg",
    "revision": "76b00516dd80cd26c70f8d7fafcd575a"
  },
  {
    "url": "assets/img/075.泓民-讚美社醫院探訪.3c219b8a.jpg",
    "revision": "3c219b8a86dcbe6732cc4e3ab72a29e4"
  },
  {
    "url": "assets/img/076.泓民-大學畢業環東部.5b7f7392.jpg",
    "revision": "5b7f7392a897250f61109893b31661f3"
  },
  {
    "url": "assets/img/077.泓民-大學畢業環東部.ca8eb1d0.jpg",
    "revision": "ca8eb1d03b63ae284b4e50069ace8191"
  },
  {
    "url": "assets/img/078.泓民-大學畢業環東部.7ee3ee46.jpg",
    "revision": "7ee3ee4683d8912ca52126719910d5ac"
  },
  {
    "url": "assets/img/079.泓民-大學畢業環東部與文宣.2c667e10.jpg",
    "revision": "2c667e10f264d71a8847ae8525dde467"
  },
  {
    "url": "assets/img/080.泓民-當兵入伍前.94ba20da.jpg",
    "revision": "94ba20da343cbe4eec203ce384e86a49"
  },
  {
    "url": "assets/img/081.泓民-當兵入伍前.bd3e2e36.jpg",
    "revision": "bd3e2e36d57bf89baa591a63881cd089"
  },
  {
    "url": "assets/img/082.泓民-新訓懇親會.deaa38fe.jpg",
    "revision": "deaa38fe7c1c2199c75ea3f973dceefc"
  },
  {
    "url": "assets/img/083.泓民-新訓懇親會.718fa596.jpg",
    "revision": "718fa5962dbf97fcca6663894c05d3bd"
  },
  {
    "url": "assets/img/084.泓民-新訓懇親會.b8bdb2b6.jpg",
    "revision": "b8bdb2b6a153a2ec81815a1c144dad25"
  },
  {
    "url": "assets/img/085.泓民-當兵屏東基地共事雇員-唐姐.d1a89963.jpg",
    "revision": "d1a89963d117acfc5c37cb046b9b7b27"
  },
  {
    "url": "assets/img/086.泓民-參加雇員唐姐兒子婚宴.d15fc9c4.jpg",
    "revision": "d15fc9c4d159a7a4bcdb00c6592a23e2"
  },
  {
    "url": "assets/img/087.泓民-參加雇員唐姐兒子婚宴.50cab54d.jpg",
    "revision": "50cab54dfa682fb48a35020745e77e84"
  },
  {
    "url": "assets/img/088.泓民-當兵退伍與爸媽合照.4cdc32b7.jpg",
    "revision": "4cdc32b77b425e21ad91369ea29565c7"
  },
  {
    "url": "assets/img/089.泓民-當兵退伍慶功宴三姊弟妹.0e3f2359.jpg",
    "revision": "0e3f23599bd16d7808a4dc3c404ed05a"
  },
  {
    "url": "assets/img/090.泓民-公司活動.179e39a9.jpg",
    "revision": "179e39a940055b0ce342e755f99337cf"
  },
  {
    "url": "assets/img/091.泓民-公司活動-爬嘉明湖.c300f1e5.jpg",
    "revision": "c300f1e517d64134cb143cc344cf67eb"
  },
  {
    "url": "assets/img/092.泓民-公司活動-登頂向陽山.5b2f9c4e.jpg",
    "revision": "5b2f9c4ef58528d942fd77dbbbfd22de"
  },
  {
    "url": "assets/img/093.泓民-公司活動-登頂嘉明湖.daf51789.jpg",
    "revision": "daf517895e178c5d7f4db23c88cc8cef"
  },
  {
    "url": "assets/img/094.泓民-公司活動-登頂嘉明湖.f7d37d81.jpg",
    "revision": "f7d37d815d204faf8ba5409d875f4a43"
  },
  {
    "url": "assets/img/095.泓民-公司活動-登頂嘉明湖.eb13df7b.jpg",
    "revision": "eb13df7b2c7c4d51036cd6d517483c8d"
  },
  {
    "url": "assets/img/096.泓民-回台南前送行-教會.d6605d86.jpg",
    "revision": "d6605d868b98de7fc0433a0093306a99"
  },
  {
    "url": "assets/img/097.泓民-回台南前送行-Pure小組.b9b70f34.jpg",
    "revision": "b9b70f342b8bd355729b4cf44d5d49ae"
  },
  {
    "url": "assets/img/098.泓民-回台南前送行-資轉組.331d1a5a.jpg",
    "revision": "331d1a5a43e71b612aa90eacfa955f40"
  },
  {
    "url": "assets/img/099.泓民-回台前送行-俊彥.625e4162.jpg",
    "revision": "625e4162609b436ad217f9634b780dbe"
  },
  {
    "url": "assets/img/100.假日騎士開始追花.dce0b968.jpg",
    "revision": "dce0b968509548e34d838818156b9eed"
  },
  {
    "url": "assets/img/100.喜歡拍大自然動物.227d0bda.jpg",
    "revision": "227d0bdad5dd1e57f455f88236b76e2b"
  },
  {
    "url": "assets/img/100.喜歡拍大自然景色.9cff560e.jpg",
    "revision": "9cff560e69acf32616c25b6b70c1f969"
  },
  {
    "url": "assets/img/100.回台南變假日騎士.74b0c8fc.jpg",
    "revision": "74b0c8fc912384748c89e9ce97b5b840"
  },
  {
    "url": "assets/img/101.網路上認識佳恩 兩人開始騎車.d56371fb.jpg",
    "revision": "d56371fb8bf2fc01c11355a5752905f4"
  },
  {
    "url": "assets/img/102.安平台江公園.c085b885.jpg",
    "revision": "c085b885c7f4bd453a9f2fc5d56af7c8"
  },
  {
    "url": "assets/img/103.林初埤木棉花.1ab12545.jpg",
    "revision": "1ab12545991320e454ccb36d665d86f1"
  },
  {
    "url": "assets/img/104.木棉花道旁的波斯菊.b024bc42.jpg",
    "revision": "b024bc42c1c72fe0e9641b2d94121c2c"
  },
  {
    "url": "assets/img/105.安平劍獅公園.bcc675da.jpg",
    "revision": "bcc675da6ae64502cded7997c12359c6"
  },
  {
    "url": "assets/img/106.安平劍獅公園.ded42ceb.jpg",
    "revision": "ded42ceb2915a1b48147f32610d27555"
  },
  {
    "url": "assets/img/107.池上伯朗大道附近.a7b546b9.jpg",
    "revision": "a7b546b93d5b17a457c400b099098e06"
  },
  {
    "url": "assets/img/108.池上伯朗大道附近.bb51fce9.jpg",
    "revision": "bb51fce9ed1dffc8c6e88a607a84412e"
  },
  {
    "url": "assets/img/109.池上伯朗大道附近.161d64f6.jpg",
    "revision": "161d64f675f155a6aeefa78a53ef811a"
  },
  {
    "url": "assets/img/110.池上伯朗大道附近.4f7eb790.jpg",
    "revision": "4f7eb790f51ffa1ad871e2b2a5d1070e"
  },
  {
    "url": "assets/img/111.池上伯朗大道附近.edf9a4c2.jpg",
    "revision": "edf9a4c2370914a77c1cf6d3f22f67de"
  },
  {
    "url": "assets/img/112.除了騎車還是騎車.d7fdc153.jpg",
    "revision": "d7fdc15316fc8c2ef2b334f833f806a3"
  },
  {
    "url": "assets/img/113.霧台阿里.1edd0514.jpg",
    "revision": "1edd05147372d7dc9ba990053628b913"
  },
  {
    "url": "assets/img/114.霧台阿里櫻花.26f1de94.jpg",
    "revision": "26f1de941f25c6a1566ddc93849f2fa0"
  },
  {
    "url": "assets/img/115.霧台阿里櫻花.eeecf56c.jpg",
    "revision": "eeecf56cb696ebbea0488c152ed0f320"
  },
  {
    "url": "assets/img/116.關廟森林公園.02127384.jpg",
    "revision": "02127384fb8c4589d1a91870f7a0af8b"
  },
  {
    "url": "assets/img/117.安平堤頂自行車道.8807f512.jpg",
    "revision": "8807f512793f92847469dc6c4fa062f7"
  },
  {
    "url": "assets/img/118.南科史前博物館.9956caef.jpg",
    "revision": "9956caefd38b6c5ef0379630bdaf572b"
  },
  {
    "url": "assets/img/119.愛搞怪的佳恩.d05075f9.jpg",
    "revision": "d05075f933d4c09b074753b6ceb8e7c9"
  },
  {
    "url": "assets/img/120.愛搞怪的佳恩.3d930200.jpg",
    "revision": "3d9302009d49672109610b90b8183a9b"
  },
  {
    "url": "assets/img/121.愛搞怪的佳恩.8e23a10c.jpg",
    "revision": "8e23a10c923a98ea1fa40a10d42f8250"
  },
  {
    "url": "assets/img/122.騎車騎累了嗎.96e17566.jpg",
    "revision": "96e1756675d34eebd790c92cba9a13b1"
  },
  {
    "url": "assets/img/123.等一個人的信件.58a548f8.jpg",
    "revision": "58a548f8c4322e3e20a194c07b87041d"
  },
  {
    "url": "assets/img/124.要把你敲醒.58175a17.jpg",
    "revision": "58175a176483815ba898ed4136807431"
  },
  {
    "url": "assets/img/125.台灣詩路美人樹步道.3fb2b9b4.jpg",
    "revision": "3fb2b9b41b90852d5f9afa937a6e0e29"
  },
  {
    "url": "assets/img/126.台灣詩路合照.d74e3686.jpg",
    "revision": "d74e368675224bb4b850af6c8fc0cd11"
  },
  {
    "url": "assets/img/127.新營天鵝湖.99c12f4b.jpg",
    "revision": "99c12f4b76f3ca44ec4b97857c3cb80a"
  },
  {
    "url": "assets/img/130.泓民也開始搞怪了 左鎮化石博物館.8dccf660.jpg",
    "revision": "8dccf660f2d2434731d6073504098d26"
  },
  {
    "url": "assets/img/131.安平茉莉花巷.9a233158.jpg",
    "revision": "9a233158cebeb3dc916b6e1533195631"
  },
  {
    "url": "assets/img/132.你在看我嗎 可以近一點.2fff111a.jpg",
    "revision": "2fff111a69effda341cc831dd5bd3972"
  },
  {
    "url": "assets/img/133.港尾溪採布袋蓮.93fdef1b.jpg",
    "revision": "93fdef1bdb82128c9b0772f8dcc0d9e9"
  },
  {
    "url": "assets/img/134.兩家人第一次見面.7395bbf1.jpg",
    "revision": "7395bbf12f87be0b015bf1f65481e3d1"
  },
  {
    "url": "assets/img/135.兩人越走越近.23e575ea.jpg",
    "revision": "23e575ea0d7e80898381649ad5c0f0df"
  },
  {
    "url": "assets/img/136.越走越近....3a67bd06.jpg",
    "revision": "3a67bd06f6887b6f96989014030113f3"
  },
  {
    "url": "assets/img/137.後來決定走入婚姻.a36652e8.jpg",
    "revision": "a36652e845a9835880d6f7b9ad3e584b"
  },
  {
    "url": "assets/img/138.自拍喜帖照片.777f7b63.jpg",
    "revision": "777f7b630f8c92e264836a8476d1d908"
  },
  {
    "url": "assets/img/139.新的幸福開始.096dede8.jpg",
    "revision": "096dede889732779501c3ce42a73bbad"
  },
  {
    "url": "assets/img/140.泓民佳恩新的樂章.8d95047f.jpg",
    "revision": "8d95047f091787a0b57e045ff80d989d"
  },
  {
    "url": "assets/img/2021-01-23-019.7d673949.jpg",
    "revision": "7d6739490a78b524053effef3de4a66a"
  },
  {
    "url": "assets/img/2021-01-23-023.a4eb6567.jpg",
    "revision": "a4eb65673cecfe81afcb065bf64dc927"
  },
  {
    "url": "assets/img/2021-01-23-028.7b6d71a1.jpg",
    "revision": "7b6d71a1d33637c8fcdf6f03f5d2569b"
  },
  {
    "url": "assets/img/2021-01-23-032_1.f45149be.jpg",
    "revision": "f45149be3f8e493b038ab98f73d97926"
  },
  {
    "url": "assets/img/2021-01-23-032.a14e3efd.jpg",
    "revision": "a14e3efdfdc25ea82156a52c4e34854e"
  },
  {
    "url": "assets/img/2021-01-23-037.a854e599.jpg",
    "revision": "a854e599a27159f905f75c8c9730af8d"
  },
  {
    "url": "assets/img/2021-01-23-040.50fd94e8.jpg",
    "revision": "50fd94e8c4e68a5e577f453e66964dc1"
  },
  {
    "url": "assets/img/2021-01-23-044_1.098aeafd.jpg",
    "revision": "098aeafd19aca79a2ef68ff7ab43b020"
  },
  {
    "url": "assets/img/2021-01-23-044.3a6994b3.jpg",
    "revision": "3a6994b3d58d54beb915c5d55ac3289b"
  },
  {
    "url": "assets/img/2021-01-23-064.4cedcc01.jpg",
    "revision": "4cedcc014a26f15e4905b84b9697f97d"
  },
  {
    "url": "assets/img/2021-01-23-065.35c440d4.jpg",
    "revision": "35c440d420f27b0ba74d15b88ba11cd7"
  },
  {
    "url": "assets/img/2021-01-23-072_1.a533be5a.jpg",
    "revision": "a533be5ad56d1ff1691491aaedc0fdac"
  },
  {
    "url": "assets/img/2021-01-23-072.26a18f81.jpg",
    "revision": "26a18f812d5b30a18273f641b55c42ba"
  },
  {
    "url": "assets/img/2021-01-23-078.363af870.jpg",
    "revision": "363af8705bcf8f5f1b023acf3a83fce7"
  },
  {
    "url": "assets/img/2021-01-23-083.54d03843.jpg",
    "revision": "54d038435e913ecf4c45c8a693136c3e"
  },
  {
    "url": "assets/img/2021-01-23-084.50479e90.jpg",
    "revision": "50479e905b49cdf39b7e3945783a683f"
  },
  {
    "url": "assets/img/2021-01-23-087.9814e932.jpg",
    "revision": "9814e932fcd86e48e4f9f34a0d08b387"
  },
  {
    "url": "assets/img/2021-01-23-090.26b2fd4d.jpg",
    "revision": "26b2fd4daf928a9d222b103d16d1fd9c"
  },
  {
    "url": "assets/img/2021-01-23-116.f458978f.jpg",
    "revision": "f458978f6f46cd86967996eb52b86961"
  },
  {
    "url": "assets/img/2021-01-23-118_1.5ce5bfd8.jpg",
    "revision": "5ce5bfd89bc37dca39850b528a7873ea"
  },
  {
    "url": "assets/img/2021-01-23-118.630f3bf1.jpg",
    "revision": "630f3bf18bbb33643be562148cb209fa"
  },
  {
    "url": "assets/img/2021-01-23-126.67733269.jpg",
    "revision": "6773326930d5093b9251a34f6002382b"
  },
  {
    "url": "assets/img/2021-01-23-136.83d40e92.jpg",
    "revision": "83d40e9211db1b01300e4bbde9e61a68"
  },
  {
    "url": "assets/img/2021-01-23-138.6ab3c93d.jpg",
    "revision": "6ab3c93dbf43c343aa2530e3451f72e9"
  },
  {
    "url": "assets/img/2021-01-23-142.ec7303d0.jpg",
    "revision": "ec7303d0596fea202444c9a75fc02ebe"
  },
  {
    "url": "assets/img/2021-01-23-148.38f866ad.jpg",
    "revision": "38f866ad0d43fb8e2e66366ecc7023e0"
  },
  {
    "url": "assets/img/2021-01-23-151.aa19beae.jpg",
    "revision": "aa19beae380a89b57649d774de9ad28e"
  },
  {
    "url": "assets/img/2021-01-23-157_1.44b77dd3.jpg",
    "revision": "44b77dd3ab975accee216da84b5c811b"
  },
  {
    "url": "assets/img/2021-01-23-157.78e87549.jpg",
    "revision": "78e87549ed850e74699dbd60b962b349"
  },
  {
    "url": "assets/img/2021-01-23-164_1.2185ca07.jpg",
    "revision": "2185ca077a724b2c56684dbcfa7a977b"
  },
  {
    "url": "assets/img/2021-01-23-164.23fd62b1.jpg",
    "revision": "23fd62b16c2e416501f2626b1cacbe8d"
  },
  {
    "url": "assets/img/2021-01-23-166.40d2573a.jpg",
    "revision": "40d2573ac04dc513057a24e9bce0a02f"
  },
  {
    "url": "assets/img/2021-01-23-167.fda0ab63.jpg",
    "revision": "fda0ab633ab1c97388d1003f2c9d7714"
  },
  {
    "url": "assets/img/2021-01-23-171.6cfd9f16.jpg",
    "revision": "6cfd9f168eb29906705897a7a30ab7d8"
  },
  {
    "url": "assets/img/2021-01-23-172.0a792133.jpg",
    "revision": "0a79213399f2e85078e59830c0510a07"
  },
  {
    "url": "assets/img/2021-01-23-179.2199ee3c.jpg",
    "revision": "2199ee3cd9044f0cbb54b4b08ae15e89"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fe008cbe.js",
    "revision": "e95b64f180989ebac3de456ebfc07bad"
  },
  {
    "url": "assets/js/10.6b2843a6.js",
    "revision": "d0edbd2f6873df44462651699b29b6e3"
  },
  {
    "url": "assets/js/100.97f8ad34.js",
    "revision": "3f392cf177228c679eea851ba1a54fc9"
  },
  {
    "url": "assets/js/101.b671ae08.js",
    "revision": "382a38a171fa0b813f0a38e82f90495f"
  },
  {
    "url": "assets/js/102.25de6fbf.js",
    "revision": "04850d3864c56c957017f8975754f0a8"
  },
  {
    "url": "assets/js/103.ab6aa9fb.js",
    "revision": "7da6ea1dc0ac9840c45ee80f76c01a2e"
  },
  {
    "url": "assets/js/104.8bbd3b98.js",
    "revision": "41f42bb4b0810fc53f3ee006b91d871c"
  },
  {
    "url": "assets/js/105.ba48091b.js",
    "revision": "f58181fd9becef66be0e372488393eb9"
  },
  {
    "url": "assets/js/106.79da993d.js",
    "revision": "641a2fc32f2d28d50182d25286ab3f50"
  },
  {
    "url": "assets/js/107.a9de4ddd.js",
    "revision": "c419d088f6272254660491bcfd8905cb"
  },
  {
    "url": "assets/js/108.c0e03043.js",
    "revision": "442fe44dd86b608f627b6dc29d90e918"
  },
  {
    "url": "assets/js/109.6c7f07d8.js",
    "revision": "8ef12724de35588ddbe16843a47f61f8"
  },
  {
    "url": "assets/js/11.d1d9d8f5.js",
    "revision": "95091b6c24ba8b967b80f02149485d4b"
  },
  {
    "url": "assets/js/110.18553494.js",
    "revision": "0a98222f2a44da1afa0e2b69f6cb5e7c"
  },
  {
    "url": "assets/js/111.c897e20d.js",
    "revision": "3822bf40ec54b9b3ee2757ab2f1ee1fc"
  },
  {
    "url": "assets/js/112.f25365ee.js",
    "revision": "8b66fff38609f8a5a69a6ec56ff6ca36"
  },
  {
    "url": "assets/js/113.05561c70.js",
    "revision": "928625d329270cdd8c30ce7adeaac7fa"
  },
  {
    "url": "assets/js/114.5a2a5a47.js",
    "revision": "1bf87a0c567c091b2c66c9ef8e534b99"
  },
  {
    "url": "assets/js/115.ae78007f.js",
    "revision": "5bab46b8ddaac733d11dbe6bc5591e4d"
  },
  {
    "url": "assets/js/116.4d3d465c.js",
    "revision": "c43c342a89072b35b71ae89f788ffa81"
  },
  {
    "url": "assets/js/117.fd2531e4.js",
    "revision": "351da8d05a1e0f8e0cf72fe45cd7e4e5"
  },
  {
    "url": "assets/js/12.7994d6b6.js",
    "revision": "e3b9906398158119faa5750dd6b1b9c4"
  },
  {
    "url": "assets/js/13.9fd006a8.js",
    "revision": "7e05c1a98ad76b3914609a864ea64774"
  },
  {
    "url": "assets/js/14.5d9b5d78.js",
    "revision": "8b59d79c45d6d5a280b03f7baea504d4"
  },
  {
    "url": "assets/js/15.a3e0c12f.js",
    "revision": "55392d30116a188b77c92ca48388820b"
  },
  {
    "url": "assets/js/16.1943813f.js",
    "revision": "b12cbf996092aee25c4dab29358f263e"
  },
  {
    "url": "assets/js/17.491c672a.js",
    "revision": "fa196397babe71cf3b436591f0513442"
  },
  {
    "url": "assets/js/18.cc38e1fd.js",
    "revision": "c9be26f4ebf9270a2ba79c801d9b779d"
  },
  {
    "url": "assets/js/19.6131dd01.js",
    "revision": "bd8e691adb745d877c62bafd22869b06"
  },
  {
    "url": "assets/js/20.d30e83df.js",
    "revision": "f38d6d9cece16885d83849133a22ac8b"
  },
  {
    "url": "assets/js/21.45283113.js",
    "revision": "8e26f27f50713e482ba8b31e40e2564a"
  },
  {
    "url": "assets/js/22.7fbf240e.js",
    "revision": "811afc1ba6ef351c00ec301e4d67a0bd"
  },
  {
    "url": "assets/js/23.095b52d1.js",
    "revision": "c4072532e4078bb982ee377c2b88dc8d"
  },
  {
    "url": "assets/js/24.9875102e.js",
    "revision": "3a69176b86f25d7d3dd96e1adaf4a7d9"
  },
  {
    "url": "assets/js/25.597cfd67.js",
    "revision": "ac8155eed0080e503d9fcef0bd4136cc"
  },
  {
    "url": "assets/js/26.4f150640.js",
    "revision": "5db3eeb2954997ecd20adbe9adb1f3dc"
  },
  {
    "url": "assets/js/27.b9f7bf44.js",
    "revision": "4d72cf5b398ecf8274ef76af2eddd0fd"
  },
  {
    "url": "assets/js/28.f6973902.js",
    "revision": "a0c240430d606a118934135051b32a96"
  },
  {
    "url": "assets/js/29.c2bf32ee.js",
    "revision": "8921264cc258bf596b8e8218ac757071"
  },
  {
    "url": "assets/js/3.0676f46d.js",
    "revision": "ce1baec372ac9cb1fef389828f664c11"
  },
  {
    "url": "assets/js/30.5db62215.js",
    "revision": "1592fbfc7f09365fe467587ac9c0ad05"
  },
  {
    "url": "assets/js/31.c701fbc8.js",
    "revision": "f3dd93f00603ae85aefe64672f9df8b7"
  },
  {
    "url": "assets/js/32.40516e6a.js",
    "revision": "21634ed3a1709e73b7c1d9cc3e69b571"
  },
  {
    "url": "assets/js/33.d22c05e2.js",
    "revision": "260d90ec683d2c59510ec51264b4a577"
  },
  {
    "url": "assets/js/34.99f2c2e7.js",
    "revision": "a2ff8579e1cbfa525ded4b8b6e29eb2b"
  },
  {
    "url": "assets/js/35.e4d85bc3.js",
    "revision": "667cef7d5559d4ca7fa1e729c988071d"
  },
  {
    "url": "assets/js/36.45fb2b24.js",
    "revision": "ee4a8f7f8dbd9a9bd0233a9f47c0e15f"
  },
  {
    "url": "assets/js/37.f7a6e62e.js",
    "revision": "9acb13c390b0d31610920386d78dece8"
  },
  {
    "url": "assets/js/38.b3a6017b.js",
    "revision": "a5adc3cf8b2b978edfba73b8324c18e2"
  },
  {
    "url": "assets/js/39.a4eb42d7.js",
    "revision": "f10cb36e0a541b87d6a007d5a0fed187"
  },
  {
    "url": "assets/js/4.61617fc1.js",
    "revision": "eb16b5e24043161ec080bf65c530437c"
  },
  {
    "url": "assets/js/40.72e7b69b.js",
    "revision": "769bcd805b448055bfe91f965c997161"
  },
  {
    "url": "assets/js/41.a544cf28.js",
    "revision": "8b3425ddbc929c802fb2ce48cb5108f5"
  },
  {
    "url": "assets/js/42.f57e366d.js",
    "revision": "a251b2a0d43ceac53486d52b57b1af68"
  },
  {
    "url": "assets/js/43.77634323.js",
    "revision": "74c6fadc6972b51697a945a8cbcb8c35"
  },
  {
    "url": "assets/js/44.fb7fe221.js",
    "revision": "ef7802e7093ff9749ac12a1d0250d3c6"
  },
  {
    "url": "assets/js/45.c1f2d4fd.js",
    "revision": "160567e3302abe663e18cb8097e02d52"
  },
  {
    "url": "assets/js/46.37febf8d.js",
    "revision": "c23a76829d69086edec557ec1d2f5371"
  },
  {
    "url": "assets/js/47.fd3746b1.js",
    "revision": "0317d41a0e2a5af76dd7a83362c5e128"
  },
  {
    "url": "assets/js/48.3cb92a5e.js",
    "revision": "f0fe30cf747f7b92c91be2feeca13cbb"
  },
  {
    "url": "assets/js/49.7a353cb6.js",
    "revision": "e8792898dd1d73a8b769714f59a10ead"
  },
  {
    "url": "assets/js/5.96e8c895.js",
    "revision": "fcc654aca5a4353cea3dd7923faeeef7"
  },
  {
    "url": "assets/js/50.62326208.js",
    "revision": "ea9c2977d19e57dc90968347c9277819"
  },
  {
    "url": "assets/js/51.7eec1bc7.js",
    "revision": "7a23878360d563c1b8ec6093803ca707"
  },
  {
    "url": "assets/js/52.bf97073d.js",
    "revision": "29d7a809fcf205670002648a892bda3e"
  },
  {
    "url": "assets/js/53.c922e154.js",
    "revision": "dc6e56783a536e98972b122670fd06d4"
  },
  {
    "url": "assets/js/54.7144378d.js",
    "revision": "d96a9629f088a0bf80e71fe5b6f55b89"
  },
  {
    "url": "assets/js/55.006f0353.js",
    "revision": "348365c54d5a873774896814a669656f"
  },
  {
    "url": "assets/js/56.eaf981b0.js",
    "revision": "65c2e73449abae18f2c0db9a014e6364"
  },
  {
    "url": "assets/js/57.08400802.js",
    "revision": "ad3aa25f78769b85717c02bccf1690a1"
  },
  {
    "url": "assets/js/58.f0fb2f6f.js",
    "revision": "1b75fcc76e4d1e9000b106d0f87c3ddc"
  },
  {
    "url": "assets/js/59.663afa98.js",
    "revision": "41e96f8088045bffaff626c70d148f7a"
  },
  {
    "url": "assets/js/6.08664b0b.js",
    "revision": "8d724027cc02111034edf7b337bc25ad"
  },
  {
    "url": "assets/js/60.5048762f.js",
    "revision": "34bb75477786218f37ee5c7703486433"
  },
  {
    "url": "assets/js/61.b6d0c114.js",
    "revision": "ecd614f068b6881a49054a8d00d50de7"
  },
  {
    "url": "assets/js/62.665e807f.js",
    "revision": "fd0862845124e865e600639a0f8b7612"
  },
  {
    "url": "assets/js/63.445c87ee.js",
    "revision": "8115e49a126fcccad3c656dbc242e046"
  },
  {
    "url": "assets/js/64.a180dee4.js",
    "revision": "53074356a81574b26b0b6d82b5fc2ad1"
  },
  {
    "url": "assets/js/65.d393952e.js",
    "revision": "68c1e1527b7477f6f3cb12a8eeba957c"
  },
  {
    "url": "assets/js/66.63bf1ca4.js",
    "revision": "90a8c4ae62ef74260340ce76e2d84225"
  },
  {
    "url": "assets/js/67.b638ab8e.js",
    "revision": "93034b826ef59cac82b0e9304d86baac"
  },
  {
    "url": "assets/js/68.51be5ef5.js",
    "revision": "2a8f675358d8fff8c553cd330db8c2ca"
  },
  {
    "url": "assets/js/69.431ccdb1.js",
    "revision": "9762c37a1f1e31e766f94b1e9b612de5"
  },
  {
    "url": "assets/js/7.86c2344d.js",
    "revision": "97f4a6422df8e8c20f8b444bfe30357f"
  },
  {
    "url": "assets/js/70.6c96724b.js",
    "revision": "0796c6f6c1ed63f51f723e1bbb17c15b"
  },
  {
    "url": "assets/js/71.7e9b06ec.js",
    "revision": "5eaab4f6e24860c4d97aa8e3070e44c6"
  },
  {
    "url": "assets/js/72.88ea1474.js",
    "revision": "c1985c77e59f2c4518634c62b6a7e2de"
  },
  {
    "url": "assets/js/73.a965a3b4.js",
    "revision": "df324c59bd6bbcbeb594be10ee1e00dc"
  },
  {
    "url": "assets/js/74.44e84479.js",
    "revision": "c00942bea9807a2e41776faf5a965d68"
  },
  {
    "url": "assets/js/75.84934d1d.js",
    "revision": "f9942b8c9fd2ece3733e87d829a0f1fb"
  },
  {
    "url": "assets/js/76.203b9c99.js",
    "revision": "db1f55fe1d78bb73731faf6c57ed4938"
  },
  {
    "url": "assets/js/77.d5efa203.js",
    "revision": "a2e9a7505670be96c81fa71243f6a4ea"
  },
  {
    "url": "assets/js/78.51041b91.js",
    "revision": "b0c733003f80e29d53b6abe22834afbe"
  },
  {
    "url": "assets/js/79.f2d45d06.js",
    "revision": "ef5da5faefcf020b4ed671bdd290b353"
  },
  {
    "url": "assets/js/8.e738bf06.js",
    "revision": "2ce90359f885a7a2c369bf972ba24ba9"
  },
  {
    "url": "assets/js/80.575d3f81.js",
    "revision": "2585ac6b66ce312d6fd16824c959c75b"
  },
  {
    "url": "assets/js/81.45d79f27.js",
    "revision": "c29f4ddd217942db56a7c63123ed817c"
  },
  {
    "url": "assets/js/82.dae3d08a.js",
    "revision": "fe6e5445cbd5be2c65cab08267720023"
  },
  {
    "url": "assets/js/83.1b5bc72d.js",
    "revision": "1c2e2cef18b745b35a080abea975b1a8"
  },
  {
    "url": "assets/js/84.05738a4c.js",
    "revision": "ca5b6e45d35f4191078e62813d71be7d"
  },
  {
    "url": "assets/js/85.82b52b0f.js",
    "revision": "290f369d15249a62046062dd48417de0"
  },
  {
    "url": "assets/js/86.87d00785.js",
    "revision": "639a9282c2ccba09c1b91f685f31da28"
  },
  {
    "url": "assets/js/87.40249256.js",
    "revision": "616c50a141f57a4b7bd390c4b8616d5f"
  },
  {
    "url": "assets/js/88.df78a3bb.js",
    "revision": "1a96a7282f37309bda6484d1a38b9e03"
  },
  {
    "url": "assets/js/89.1a1d0207.js",
    "revision": "c27187103dacfd6d19fda4b3b10d142d"
  },
  {
    "url": "assets/js/9.dbffb661.js",
    "revision": "0364d6cfcd3dda673cb020deb44cf74e"
  },
  {
    "url": "assets/js/90.25b790a3.js",
    "revision": "0853ebf74dd6a3c5f9bb63628b9ada36"
  },
  {
    "url": "assets/js/91.e80d2e90.js",
    "revision": "9be41489c65e7c8ec6e2518bfbcfd047"
  },
  {
    "url": "assets/js/92.e823bec9.js",
    "revision": "6a28c1f6e4b2b5c0a53633ff636f63d0"
  },
  {
    "url": "assets/js/93.4824557c.js",
    "revision": "c1433d1b78973744fb8870773e5f04a4"
  },
  {
    "url": "assets/js/94.81f81dd3.js",
    "revision": "612cd21e5866eb3003841ccd56f99a98"
  },
  {
    "url": "assets/js/95.453a9fc9.js",
    "revision": "e11e71f4cd61a2cd3c4ac6754bb89310"
  },
  {
    "url": "assets/js/96.2b530d91.js",
    "revision": "128200bffe1210ac8a3da0e723d278dd"
  },
  {
    "url": "assets/js/97.2abd680a.js",
    "revision": "7d43616cbbe00b747ff74220dc330eae"
  },
  {
    "url": "assets/js/98.fa988bc6.js",
    "revision": "aa086e71b507c976d91aa00a17d826d1"
  },
  {
    "url": "assets/js/99.bfe2f313.js",
    "revision": "e96530c9894174c8b8d03b87d79e7809"
  },
  {
    "url": "assets/js/app.09b6b91f.js",
    "revision": "b2cd9d5c3d8320d6053d67b3f2e003bb"
  },
  {
    "url": "Bike/BikeInfo/700C通勤車 有無推薦25C~28C外胎.html",
    "revision": "1cac8e58fd2c84ed4b30ab21e54b7626"
  },
  {
    "url": "Bike/BikeInfo/Bont Roit.html",
    "revision": "f453d9787509b3b71ba0a406869c63dd"
  },
  {
    "url": "Bike/BikeInfo/HARA R2.html",
    "revision": "a71ad9522590839fc3178f214b884f4b"
  },
  {
    "url": "Bike/BikeInfo/index.html",
    "revision": "abf04328418bab1bece3eec047a81d95"
  },
  {
    "url": "Bike/BikeInfo/Look Keo Blade Caron Ti.html",
    "revision": "765f9cfb16f6e16d4add984e3f029958"
  },
  {
    "url": "Bike/BikeInfo/Swissstop煞車皮.html",
    "revision": "5990c7f2ae140936e8bf144e6bab9a16"
  },
  {
    "url": "Bike/BikeInfo/上卡注意事項.html",
    "revision": "e4c8665e965a01077fc4a2305d70e128"
  },
  {
    "url": "Bike/BikeInfo/公路車環島.html",
    "revision": "5f1a56bcc2c50448c1f2d025f3e8991d"
  },
  {
    "url": "Bike/BikeInfo/公路車等級區分.html",
    "revision": "895bb843049d9e96bb16af1b601a3c1c"
  },
  {
    "url": "Bike/BikeInfo/前輪能左右對調.html",
    "revision": "5f64425a457f15c1a80dda3c175b38ad"
  },
  {
    "url": "Bike/BikeInfo/卡踏.html",
    "revision": "53f40065d2535a7e60434c949e466ebc"
  },
  {
    "url": "Bike/BikeInfo/單車的花鼓滾珠， 一般可以用多久.html",
    "revision": "d9578bf9ac46729848888711ad8d7775"
  },
  {
    "url": "Bike/BikeInfo/環法選手症.html",
    "revision": "7ff3b495498621dacaa0c1131678d657"
  },
  {
    "url": "Bike/BikeInfo/自行車保養.html",
    "revision": "3fca986a70bacfd6063ef0fb83641076"
  },
  {
    "url": "Bike/BikeInfo/裝備(更新中...).html",
    "revision": "4b31d25ec1fd0a8c5ed1015f948d4b7f"
  },
  {
    "url": "Bike/BikeInfo/變數等級.html",
    "revision": "a142996e705897de5dea4fd49f9e1615"
  },
  {
    "url": "Bike/BikeInfo/車架-鋁.html",
    "revision": "8d8dd8ed646fbcfeb7ecb1531bab5c94"
  },
  {
    "url": "Bike/BikeInfo/車架幾何.html",
    "revision": "deafe39a5580934c4dfa10472a8adf2a"
  },
  {
    "url": "Bike/BikeInfo/車胎規格.html",
    "revision": "2c4bf948b79faf47a7370e3637a985dc"
  },
  {
    "url": "Bike/BikeInfo/輕量輪 不等於 爬坡輪.html",
    "revision": "54405eb39832e22ba61dd5dc35e008cb"
  },
  {
    "url": "Bike/BikeInfo/騎乘姿勢.html",
    "revision": "fedeed7ea134b34b3046d6c2bacec3df"
  },
  {
    "url": "Bike/BikeTravel/20180216_梅山36彎.html",
    "revision": "734036eb07b22d089d0eaff64e612fd5"
  },
  {
    "url": "Bike/BikeTravel/20180219_霧台神山.html",
    "revision": "2cbb2ed51597448544c059f514b23dbd"
  },
  {
    "url": "Bike/BikeTravel/20180304_愛河之心.html",
    "revision": "f5654d69dd64a95669545c9b6faf21f3"
  },
  {
    "url": "Bike/BikeTravel/20180317_學甲麥田捕手_蜀葵花.html",
    "revision": "8c62daa67e85ebfc0d6b5058a22c2059"
  },
  {
    "url": "Bike/BikeTravel/20180324_學甲_路樹百K之旅.html",
    "revision": "891d8d0b713f6d2fc1271cc47c5967e9"
  },
  {
    "url": "Bike/BikeTravel/20180331~0401_那瑪夏小旅行.html",
    "revision": "323052b2db30cd79e5a1de9b91e87f4a"
  },
  {
    "url": "Bike/BikeTravel/20180402_如鴿的行板.html",
    "revision": "8862eb0d66924e07a072f97022495038"
  },
  {
    "url": "Bike/BikeTravel/20180407_神山春末之旅.html",
    "revision": "8c3b01d39d3cb635ea55ef66386475ac"
  },
  {
    "url": "Bike/BikeTravel/20180414_南圳綠堤、山上向日葵花海.html",
    "revision": "4854a5ea793fcb611f232a6749450c37"
  },
  {
    "url": "Bike/BikeTravel/20180416_賽鴿手的狂想曲.html",
    "revision": "108e22fd0e20659791e03dec41036d69"
  },
  {
    "url": "Bike/BikeTravel/20180421_桃紅陣雨花旗木.html",
    "revision": "c4197573c329024dda4d7d7b667c0237"
  },
  {
    "url": "Bike/BikeTravel/20180428_台南知事官邸.html",
    "revision": "15ccacd51a854a63ad7d85f108afa5b6"
  },
  {
    "url": "Bike/BikeTravel/20180501_懷疑人生長征.html",
    "revision": "6048e9024d76fde20675bca7310fa40f"
  },
  {
    "url": "Bike/BikeTravel/20180507_但以理書前言.html",
    "revision": "c1075f24f611515d628b5f69f0753214"
  },
  {
    "url": "Bike/BikeTravel/20180512_湖內番茄會社.html",
    "revision": "28f66f890444a50564e6bb0127a5d70c"
  },
  {
    "url": "Bike/BikeTravel/20180517_但以理書第一章.html",
    "revision": "e0e2cd779a97923d7e5836111d6a6ab4"
  },
  {
    "url": "Bike/BikeTravel/20180519_古蹟巡禮.html",
    "revision": "d68090f44757aa390037d1e20194a394"
  },
  {
    "url": "Bike/BikeTravel/20180525_Nokia_舊日情愫、新智慧型手機.html",
    "revision": "e5fbefba673c3c8a6b128982b2597cab"
  },
  {
    "url": "Bike/BikeTravel/20180526_台南大學_台南測候所.html",
    "revision": "f9df708873d5876b9939b8a0c0584206"
  },
  {
    "url": "Bike/BikeTravel/20180528_但以理書第二章.html",
    "revision": "d1aa57646b0aa3c303adb0bd665c73cf"
  },
  {
    "url": "Bike/BikeTravel/20180602_小東公園_321藝術聚落.html",
    "revision": "31bbb31f74532a0198a899b4e98a2027"
  },
  {
    "url": "Bike/BikeTravel/20180604_但以理書第三章.html",
    "revision": "6b7ded2a2469a2311f44eafb798af1d2"
  },
  {
    "url": "Bike/BikeTravel/20180608_中興興村_霧峰林家.html",
    "revision": "72c7a610a5f995d607194e0fe2529565"
  },
  {
    "url": "Bike/BikeTravel/20180609_安平舊聚落.html",
    "revision": "306b7d5343cfeed4a9049eac27b576f1"
  },
  {
    "url": "Bike/BikeTravel/20180611_但以理書第四章.html",
    "revision": "8d6550587708d3a53c927712cf933c07"
  },
  {
    "url": "Bike/BikeTravel/20180616_番茄會社_巴克禮公園.html",
    "revision": "2a16a87d2bf5f37a51115b38d67674de"
  },
  {
    "url": "Bike/BikeTravel/20180624_台南神學院.html",
    "revision": "5f8f3255e4fcd37864c839dc8aea19ff"
  },
  {
    "url": "Bike/BikeTravel/20180626_但以理書第五章.html",
    "revision": "06eaa15aa20b18eddeddced9cae1517a"
  },
  {
    "url": "Bike/BikeTravel/20180707_安平憶想曲.html",
    "revision": "0a38a065c075cac2c976c14bcb039bb5"
  },
  {
    "url": "Bike/BikeTravel/20180714_安平水鳥公園+美食之旅.html",
    "revision": "c81d6a519414694bb230c9b81af32782"
  },
  {
    "url": "Bike/BikeTravel/20180715_但以理書第六章.html",
    "revision": "42423caf5d248ed16c4bb1bb36abafab"
  },
  {
    "url": "Bike/BikeTravel/20180721_黃金海岸_喜樹灣裡.html",
    "revision": "13f5b4d8e4a06ea773ce4a22aa57c8c8"
  },
  {
    "url": "Bike/BikeTravel/20180728_奇美博物物館_保安車站.html",
    "revision": "1c0cac8a79dc68d5def44a3b32668c3f"
  },
  {
    "url": "Bike/BikeTravel/20180728_小組信息_無花果樹的比喻_Slide.html",
    "revision": "ff855e3e2b2bd44d9f3e48282e5a6eb0"
  },
  {
    "url": "Bike/BikeTravel/20180804_漁光島_夢幻雲彩之旅.html",
    "revision": "09f4eb8d35f1fb0db2ccb1b77fe88e3b"
  },
  {
    "url": "Bike/BikeTravel/20180811_木架山大草原.html",
    "revision": "7aa9495bddd3a32f242fb6e7a3e15238"
  },
  {
    "url": "Bike/BikeTravel/20180818_虎頭埤.html",
    "revision": "f2c431e67535abbb58abbde18e5e8fe5"
  },
  {
    "url": "Bike/BikeTravel/20180901_台江國家公園.html",
    "revision": "844c7b3258525ca486d3c93be31d676d"
  },
  {
    "url": "Bike/BikeTravel/20181006_大內.html",
    "revision": "343347dcfc563dcb707e753a42173b87"
  },
  {
    "url": "Bike/BikeTravel/20181006_小組信息_禱告與公義_Slide.html",
    "revision": "4055fa9f9397e0d068a21e9a61d795f7"
  },
  {
    "url": "Bike/BikeTravel/20181013_嘉義婚宴.html",
    "revision": "6c969dd20e6f8838f908bbccd4637865"
  },
  {
    "url": "Bike/BikeTravel/20181020_德元埤荷蘭村.html",
    "revision": "83d7bd3cad45f90bd7d54f2edef13107"
  },
  {
    "url": "Bike/BikeTravel/20181103_橋頭海灣公園.html",
    "revision": "01f26d3ce4d65a5c1864ddc053b4173a"
  },
  {
    "url": "Bike/BikeTravel/index.html",
    "revision": "9239647b045f6159a31db88a713292e6"
  },
  {
    "url": "Bike/BikeTravel/test_Slide.html",
    "revision": "ff2eb805eee7bcdd7e7b7c1837f0b6ae"
  },
  {
    "url": "Bike/BikeTravel/以小博大、以少擊多.html",
    "revision": "344e2cf14a96a12871cd2fb90d3e7f36"
  },
  {
    "url": "Bike/BikeTravel/小鋼炮-M710Q袖珍桌上型電腦.html",
    "revision": "7ed3713c2158590dc623fa9ead50ed4c"
  },
  {
    "url": "Bike/index.html",
    "revision": "3e24ae4680df78d17268f3c39d3e1025"
  },
  {
    "url": "CodingSkill/index.html",
    "revision": "a51063870f7208955902331741091ec8"
  },
  {
    "url": "CodingSkill/Other/index.html",
    "revision": "7dd5641d370bfedb3b3c910974da6ddc"
  },
  {
    "url": "CodingSkill/Other/SQL Server分頁技巧.html",
    "revision": "e6b9312aeee85b1b5018a800dbd558e6"
  },
  {
    "url": "CodingSkill/Other/UNIX 指令.html",
    "revision": "e5acb865bd2acb02bf6311b82a3d9358"
  },
  {
    "url": "CodingSkill/Python/01.前言.html",
    "revision": "23f380b0bfaaa37866465ff33d29cbe1"
  },
  {
    "url": "CodingSkill/Python/02.環境設定.html",
    "revision": "10a3f9eb8d1c4b68d922318785e76246"
  },
  {
    "url": "CodingSkill/Python/03.常用指令.html",
    "revision": "4ba8e061a06566d8c86ab765e51fcf65"
  },
  {
    "url": "CodingSkill/Python/04.For Loop.html",
    "revision": "74badafec899b4f0acfef09b21d7262e"
  },
  {
    "url": "CodingSkill/Python/05.條件式.html",
    "revision": "41ecc6a88e3ea111516de41db1a3ed2e"
  },
  {
    "url": "CodingSkill/Python/index.html",
    "revision": "f10f853ca89125651fe0da3e15205102"
  },
  {
    "url": "CodingSkill/Vite/Get Start.html",
    "revision": "d48e55f31b7d038f2e001e23e479c96d"
  },
  {
    "url": "CodingSkill/Vite/index.html",
    "revision": "e4f00649ea50ccfa4236f151d42b75bd"
  },
  {
    "url": "Geosat/2020.04.27菁寮實地測試.html",
    "revision": "6b0efb87cf3448139483de06e8e7e693"
  },
  {
    "url": "Geosat/2020.05.08AWS教育訓練.html",
    "revision": "2195a6b8c62f72f6807dbee15f44850a"
  },
  {
    "url": "Geosat/index.html",
    "revision": "f4d837ac78d6e665eb55188163ca2f32"
  },
  {
    "url": "Geosat/農噴資材相關API(For Web & APP).html",
    "revision": "8185b5055954b63503debacf5a58633c"
  },
  {
    "url": "House/index.html",
    "revision": "137f7921ee0e1ed1d58cc8c539b08a58"
  },
  {
    "url": "House/比對表.html",
    "revision": "6f757cdbae452e740a85daaf94688d51"
  },
  {
    "url": "index.html",
    "revision": "a7c85cad2ec14a8991e054781b81e170"
  },
  {
    "url": "photo/001.佳恩-無憂歲月.jpg",
    "revision": "0fe6b38a904bfe58856e42937d0b7938"
  },
  {
    "url": "photo/002.佳恩-無憂歲月.jpg",
    "revision": "225ebf67bfe70d177b3802faeae33433"
  },
  {
    "url": "photo/003.佳恩-祖孫情深.jpg",
    "revision": "0397a7c3c3285f78801f2c737dbab948"
  },
  {
    "url": "photo/004.佳恩-祖孫情深.jpg",
    "revision": "2e9c77e6449a132ddb8b7d650ac0b86d"
  },
  {
    "url": "photo/005.佳恩-手足情深.jpg",
    "revision": "c400b810bd2c46bc9f9da01085becada"
  },
  {
    "url": "photo/006.佳恩-手足情深.jpg",
    "revision": "227652f0f361ebabc6608844b8310d69"
  },
  {
    "url": "photo/007.佳恩-兄妹情深.jpg",
    "revision": "77717db1e1e20a28bf1e3c8583969039"
  },
  {
    "url": "photo/008.佳恩-兄妹情深.jpg",
    "revision": "75d246f90a6f3dd7f1bb2395a67ee687"
  },
  {
    "url": "photo/009.佳恩-幼稚園畢業.jpg",
    "revision": "4f72bbd51a56f10a020f84c576348f7d"
  },
  {
    "url": "photo/010.佳恩-兄妹情深.jpg",
    "revision": "b9e15c07cedb0cd20439af59a05b1d44"
  },
  {
    "url": "photo/011.佳恩-難忘童年.jpg",
    "revision": "66ce256c281d2cacb3cc2d187efb5000"
  },
  {
    "url": "photo/012.佳恩-直笛比賽.jpg",
    "revision": "8980ae9da677ee7f999da494e1084302"
  },
  {
    "url": "photo/013.佳恩-難忘童年.jpg",
    "revision": "7c11090946d655f0c0879fde6ec45c65"
  },
  {
    "url": "photo/014.佳恩-兄妹情深.jpg",
    "revision": "c702fdd505aa83385482b97da8dee3a9"
  },
  {
    "url": "photo/015.佳恩-難忘童年.jpg",
    "revision": "d9d94e99a97e2ac38853bd2ee29f01bf"
  },
  {
    "url": "photo/016.佳恩-國中畢業.jpg",
    "revision": "2f9794a5c7bf4b689d919a0f0395c11a"
  },
  {
    "url": "photo/017.佳恩-高中畢業.jpg",
    "revision": "c9292c0e71721b441045e46909328062"
  },
  {
    "url": "photo/018.佳恩-兄妹情深.jpg",
    "revision": "a47d3d435ba6931695748c864745d33d"
  },
  {
    "url": "photo/019.佳恩-新的家庭.jpg",
    "revision": "82cceb9f86f68152eddc47e92140ad8b"
  },
  {
    "url": "photo/020.佳恩-幸福家庭.jpg",
    "revision": "9d4cc3c1afd7021fa902d96681dd73fa"
  },
  {
    "url": "photo/021.佳恩-全家福.jpg",
    "revision": "4a3713ac0e809f78fbe8b9b1082b76ba"
  },
  {
    "url": "photo/022.佳恩-幸福一家人.jpg",
    "revision": "7710cfb5089e295ae6ffb719f9eacb96"
  },
  {
    "url": "photo/023.佳恩-幸福一家人.jpg",
    "revision": "603646277ad6701d30bf26390ea906b8"
  },
  {
    "url": "photo/024.佳恩-幸福一家人.jpg",
    "revision": "339142be9e8c6f4f326e51ba97967ad0"
  },
  {
    "url": "photo/025.佳恩-中師團契青春歲月.jpg",
    "revision": "7dd24bbb297018ac73a68c7d48d7f957"
  },
  {
    "url": "photo/026.佳恩-中師團契青春歲月.jpg",
    "revision": "e6b56a1632f739a824632872759e8e01"
  },
  {
    "url": "photo/027.佳恩-中師團契熱血青年.jpg",
    "revision": "18cdab6ab678d7d52ae747f04e78d954"
  },
  {
    "url": "photo/028.佳恩-中師團契生活.jpg",
    "revision": "28fe6175a3f7b9897ec160e1c1541381"
  },
  {
    "url": "photo/029.佳恩-富強教會青春歲月.jpg",
    "revision": "b3e70492ee676dc4031675b38987d1ea"
  },
  {
    "url": "photo/030.佳恩-教會生活.jpg",
    "revision": "91cb1cb0db7ac5aed976c42d0b0013d2"
  },
  {
    "url": "photo/031.佳恩-教會生活.jpg",
    "revision": "e7484a7ba41d0f72abd859cc457addc6"
  },
  {
    "url": "photo/032.佳恩-教會生活.jpg",
    "revision": "73ec56407889fa5022394a45f844b3aa"
  },
  {
    "url": "photo/033.佳恩-教會生活.jpg",
    "revision": "08a50e9eae8b901e654017070ab30a59"
  },
  {
    "url": "photo/034.佳恩-教會生活.jpg",
    "revision": "e19c059983cd1a340c85bdb31c41ccf9"
  },
  {
    "url": "photo/035.佳恩-童年回憶.jpg",
    "revision": "64a7b145e733813b3028762b26523fc7"
  },
  {
    "url": "photo/036.佳恩-童年回憶.jpg",
    "revision": "a74a7f8df94066fbd24f0902a8f0edf3"
  },
  {
    "url": "photo/037.佳恩-童年回憶.jpg",
    "revision": "ed54ca7ca1591912cf9a4fa516ae9ee6"
  },
  {
    "url": "photo/038.佳恩-童年回憶.jpg",
    "revision": "4873316d7594acfba37afb3ac76948bc"
  },
  {
    "url": "photo/039.佳恩-年輕歲月.jpg",
    "revision": "ae454a93a7bf3499abda35748c864fa2"
  },
  {
    "url": "photo/040.佳恩-童年回憶.jpg",
    "revision": "f99c17073a4d537d2006bd3697d99ebc"
  },
  {
    "url": "photo/041.佳恩-長大之後.jpg",
    "revision": "0dd097603207fb80b1bc1943377a1660"
  },
  {
    "url": "photo/042.佳恩-職場新鮮人.jpg",
    "revision": "20ff572436e9a21714e51a0716080a02"
  },
  {
    "url": "photo/043.佳恩-職場新鮮人.jpg",
    "revision": "1104fda8aebb5238c706ad4991281163"
  },
  {
    "url": "photo/044.泓民-年輕爸爸媽媽.jpg",
    "revision": "8ad0af0490c5b127a527c412f138f8d3"
  },
  {
    "url": "photo/045.泓民-年輕盧爸爸媽媽.jpg",
    "revision": "0888256b133d43e475679cc2cad70cbe"
  },
  {
    "url": "photo/046.泓民-嬰兒時期.jpg",
    "revision": "bece5625a0beb0cf0e60817aa6bd799e"
  },
  {
    "url": "photo/047.泓民-嬰孩時期.jpg",
    "revision": "516c49f7cf8864ba38ad7391f5cb7dda"
  },
  {
    "url": "photo/048.泓民-嬰孩時期與爸爸合照.jpg",
    "revision": "2d9e4f1539abb8d708177c7e30e683e6"
  },
  {
    "url": "photo/049.泓民-小時候就是喜歡單車.jpg",
    "revision": "a07674bd1c16610010583b05c9104445"
  },
  {
    "url": "photo/050.泓民-小時候跟姊姊合照.jpg",
    "revision": "c503fada1da0293b8671d2867aa15aab"
  },
  {
    "url": "photo/051.泓民-小時候跟姊姊合照.jpg",
    "revision": "a9a7b9939b137e2d736eabce5bdae7f7"
  },
  {
    "url": "photo/052.泓民-可愛小三姊弟妹.jpg",
    "revision": "ffecaa4157102517af72f6f6ce4c171b"
  },
  {
    "url": "photo/053.泓民-可愛三姊弟妹.jpg",
    "revision": "76c8e47567b9f1dce0cb1730f6a122be"
  },
  {
    "url": "photo/054.泓民-可愛三姊弟妹.jpg",
    "revision": "e163085a6338ff571b0e38317e6a1aba"
  },
  {
    "url": "photo/055.泓民-小時候跟妹妹合照.jpg",
    "revision": "7c447ba9ff60bd60751c1efea3e457f9"
  },
  {
    "url": "photo/056.泓民-小時候跟妹妹合照.jpg",
    "revision": "ed0de7b5c55cce782c48c659fa58525d"
  },
  {
    "url": "photo/057.泓民-全家人去新加坡玩.jpg",
    "revision": "22f8ed074e8d6160f61f4310cbdefde4"
  },
  {
    "url": "photo/058.泓民-國中時三姊弟妹.jpg",
    "revision": "2e51a0b5a90bf97012fa23558ab9337d"
  },
  {
    "url": "photo/059.泓民-國中留著瀏海.jpg",
    "revision": "7189356aeebe33095c34ac46fe31de2a"
  },
  {
    "url": "photo/060.泓民-高中時期長很多痘痘.jpg",
    "revision": "29fe66b75737d08d64e9be254b23e1dc"
  },
  {
    "url": "photo/061.泓民-小時候家裡養的狗.jpg",
    "revision": "583d61cef448b35052e4a2da014838e7"
  },
  {
    "url": "photo/062.泓民-小時候家裡養的狗.jpg",
    "revision": "df262ef8ffa177cf97e54a336cd73916"
  },
  {
    "url": "photo/063.泓民-大學系羽.jpg",
    "revision": "2826c5bd98bab72af9eb0a11275fcecf"
  },
  {
    "url": "photo/064.泓民-大學校內比賽.jpg",
    "revision": "5b6a5d3a92748996261f2dff9a3caa63"
  },
  {
    "url": "photo/065.泓民-當年大資盃團體奪冠.jpg",
    "revision": "03b144b50c4a9062ba76a0b67bfee193"
  },
  {
    "url": "photo/066.泓民-當年大資盃團體奪冠.jpg",
    "revision": "04c9536015b108cf5ac7e04d1cc1c081"
  },
  {
    "url": "photo/067.泓民-大學畢業-系羽的夥伴.jpg",
    "revision": "349039cd83f071145a9a45f13302736f"
  },
  {
    "url": "photo/068.泓民-大學時期讚美社.jpg",
    "revision": "6efcc507990469a3bcc24a190335e0e1"
  },
  {
    "url": "photo/069.泓民-大學畢業畢業生祝福禮.jpg",
    "revision": "6704853d450dd147f93e507120a976ed"
  },
  {
    "url": "photo/070.泓民-大學畢業畢業生祝福禮.jpg",
    "revision": "801fb13ee7af0a8976e3d6f6f89fef16"
  },
  {
    "url": "photo/071.泓民-受洗與牧師合照.jpg",
    "revision": "f67954e1f100b358c2c6b2332b8ccef3"
  },
  {
    "url": "photo/072.泓民-淡水讚美教會受洗.jpg",
    "revision": "dbb3a4039fbf0c5e6e957c83f5fee7d2"
  },
  {
    "url": "photo/073.泓民-讚美社醫院探訪.jpg",
    "revision": "45c9449d5e750282b4bcfec15bf18720"
  },
  {
    "url": "photo/074.泓民-讚美社醫院探訪.jpg",
    "revision": "76b00516dd80cd26c70f8d7fafcd575a"
  },
  {
    "url": "photo/075.泓民-讚美社醫院探訪.jpg",
    "revision": "3c219b8a86dcbe6732cc4e3ab72a29e4"
  },
  {
    "url": "photo/076.泓民-大學畢業環東部.jpg",
    "revision": "5b7f7392a897250f61109893b31661f3"
  },
  {
    "url": "photo/077.泓民-大學畢業環東部.jpg",
    "revision": "ca8eb1d03b63ae284b4e50069ace8191"
  },
  {
    "url": "photo/078.泓民-大學畢業環東部.jpg",
    "revision": "7ee3ee4683d8912ca52126719910d5ac"
  },
  {
    "url": "photo/079.泓民-大學畢業環東部與文宣.jpg",
    "revision": "2c667e10f264d71a8847ae8525dde467"
  },
  {
    "url": "photo/080.泓民-當兵入伍前.jpg",
    "revision": "94ba20da343cbe4eec203ce384e86a49"
  },
  {
    "url": "photo/081.泓民-當兵入伍前.jpg",
    "revision": "bd3e2e36d57bf89baa591a63881cd089"
  },
  {
    "url": "photo/082.泓民-新訓懇親會.jpg",
    "revision": "deaa38fe7c1c2199c75ea3f973dceefc"
  },
  {
    "url": "photo/083.泓民-新訓懇親會.jpg",
    "revision": "718fa5962dbf97fcca6663894c05d3bd"
  },
  {
    "url": "photo/084.泓民-新訓懇親會.jpg",
    "revision": "b8bdb2b6a153a2ec81815a1c144dad25"
  },
  {
    "url": "photo/085.泓民-當兵屏東基地共事雇員-唐姐.jpg",
    "revision": "d1a89963d117acfc5c37cb046b9b7b27"
  },
  {
    "url": "photo/086.泓民-參加雇員唐姐兒子婚宴.jpg",
    "revision": "d15fc9c4d159a7a4bcdb00c6592a23e2"
  },
  {
    "url": "photo/087.泓民-參加雇員唐姐兒子婚宴.jpg",
    "revision": "50cab54dfa682fb48a35020745e77e84"
  },
  {
    "url": "photo/088.泓民-當兵退伍與爸媽合照.jpg",
    "revision": "4cdc32b77b425e21ad91369ea29565c7"
  },
  {
    "url": "photo/089.泓民-當兵退伍慶功宴三姊弟妹.jpg",
    "revision": "0e3f23599bd16d7808a4dc3c404ed05a"
  },
  {
    "url": "photo/090.泓民-公司活動.jpg",
    "revision": "179e39a940055b0ce342e755f99337cf"
  },
  {
    "url": "photo/091.泓民-公司活動-爬嘉明湖.jpg",
    "revision": "c300f1e517d64134cb143cc344cf67eb"
  },
  {
    "url": "photo/092.泓民-公司活動-登頂向陽山.jpg",
    "revision": "5b2f9c4ef58528d942fd77dbbbfd22de"
  },
  {
    "url": "photo/093.泓民-公司活動-登頂嘉明湖.jpg",
    "revision": "daf517895e178c5d7f4db23c88cc8cef"
  },
  {
    "url": "photo/094.泓民-公司活動-登頂嘉明湖.jpg",
    "revision": "f7d37d815d204faf8ba5409d875f4a43"
  },
  {
    "url": "photo/095.泓民-公司活動-登頂嘉明湖.jpg",
    "revision": "eb13df7b2c7c4d51036cd6d517483c8d"
  },
  {
    "url": "photo/096.泓民-回台南前送行-教會.jpg",
    "revision": "d6605d868b98de7fc0433a0093306a99"
  },
  {
    "url": "photo/097.泓民-回台南前送行-Pure小組.jpg",
    "revision": "b9b70f342b8bd355729b4cf44d5d49ae"
  },
  {
    "url": "photo/098.泓民-回台南前送行-資轉組.jpg",
    "revision": "331d1a5a43e71b612aa90eacfa955f40"
  },
  {
    "url": "photo/099.泓民-回台前送行-俊彥.jpg",
    "revision": "625e4162609b436ad217f9634b780dbe"
  },
  {
    "url": "photo/100.假日騎士開始追花.jpg",
    "revision": "dce0b968509548e34d838818156b9eed"
  },
  {
    "url": "photo/100.喜歡拍大自然動物.jpg",
    "revision": "227d0bdad5dd1e57f455f88236b76e2b"
  },
  {
    "url": "photo/100.喜歡拍大自然景色.jpg",
    "revision": "9cff560e69acf32616c25b6b70c1f969"
  },
  {
    "url": "photo/100.回台南變假日騎士.jpg",
    "revision": "74b0c8fc912384748c89e9ce97b5b840"
  },
  {
    "url": "photo/101.網路上認識佳恩 兩人開始騎車.jpg",
    "revision": "d56371fb8bf2fc01c11355a5752905f4"
  },
  {
    "url": "photo/102.安平台江公園.jpg",
    "revision": "c085b885c7f4bd453a9f2fc5d56af7c8"
  },
  {
    "url": "photo/103.林初埤木棉花.jpg",
    "revision": "1ab12545991320e454ccb36d665d86f1"
  },
  {
    "url": "photo/104.木棉花道旁的波斯菊.jpg",
    "revision": "b024bc42c1c72fe0e9641b2d94121c2c"
  },
  {
    "url": "photo/105.安平劍獅公園.jpg",
    "revision": "bcc675da6ae64502cded7997c12359c6"
  },
  {
    "url": "photo/106.安平劍獅公園.jpg",
    "revision": "ded42ceb2915a1b48147f32610d27555"
  },
  {
    "url": "photo/107.池上伯朗大道附近.jpg",
    "revision": "a7b546b93d5b17a457c400b099098e06"
  },
  {
    "url": "photo/108.池上伯朗大道附近.jpg",
    "revision": "bb51fce9ed1dffc8c6e88a607a84412e"
  },
  {
    "url": "photo/109.池上伯朗大道附近.jpg",
    "revision": "161d64f675f155a6aeefa78a53ef811a"
  },
  {
    "url": "photo/110.池上伯朗大道附近.jpg",
    "revision": "4f7eb790f51ffa1ad871e2b2a5d1070e"
  },
  {
    "url": "photo/111.池上伯朗大道附近.jpg",
    "revision": "edf9a4c2370914a77c1cf6d3f22f67de"
  },
  {
    "url": "photo/112.除了騎車還是騎車.jpg",
    "revision": "d7fdc15316fc8c2ef2b334f833f806a3"
  },
  {
    "url": "photo/113.霧台阿里.jpg",
    "revision": "1edd05147372d7dc9ba990053628b913"
  },
  {
    "url": "photo/114.霧台阿里櫻花.jpg",
    "revision": "26f1de941f25c6a1566ddc93849f2fa0"
  },
  {
    "url": "photo/115.霧台阿里櫻花.jpg",
    "revision": "eeecf56cb696ebbea0488c152ed0f320"
  },
  {
    "url": "photo/116.關廟森林公園.jpg",
    "revision": "02127384fb8c4589d1a91870f7a0af8b"
  },
  {
    "url": "photo/117.安平堤頂自行車道.jpg",
    "revision": "8807f512793f92847469dc6c4fa062f7"
  },
  {
    "url": "photo/118.南科史前博物館.jpg",
    "revision": "9956caefd38b6c5ef0379630bdaf572b"
  },
  {
    "url": "photo/119.愛搞怪的佳恩.jpg",
    "revision": "d05075f933d4c09b074753b6ceb8e7c9"
  },
  {
    "url": "photo/120.愛搞怪的佳恩.jpg",
    "revision": "3d9302009d49672109610b90b8183a9b"
  },
  {
    "url": "photo/121.愛搞怪的佳恩.jpg",
    "revision": "8e23a10c923a98ea1fa40a10d42f8250"
  },
  {
    "url": "photo/122.騎車騎累了嗎.jpg",
    "revision": "96e1756675d34eebd790c92cba9a13b1"
  },
  {
    "url": "photo/123.等一個人的信件.jpg",
    "revision": "58a548f8c4322e3e20a194c07b87041d"
  },
  {
    "url": "photo/124.要把你敲醒.jpg",
    "revision": "58175a176483815ba898ed4136807431"
  },
  {
    "url": "photo/125.台灣詩路美人樹步道.jpg",
    "revision": "3fb2b9b41b90852d5f9afa937a6e0e29"
  },
  {
    "url": "photo/126.台灣詩路合照.jpg",
    "revision": "d74e368675224bb4b850af6c8fc0cd11"
  },
  {
    "url": "photo/127.新營天鵝湖.jpg",
    "revision": "99c12f4b76f3ca44ec4b97857c3cb80a"
  },
  {
    "url": "photo/130.泓民也開始搞怪了 左鎮化石博物館.jpg",
    "revision": "8dccf660f2d2434731d6073504098d26"
  },
  {
    "url": "photo/131.安平茉莉花巷.jpg",
    "revision": "9a233158cebeb3dc916b6e1533195631"
  },
  {
    "url": "photo/132.你在看我嗎 可以近一點.jpg",
    "revision": "2fff111a69effda341cc831dd5bd3972"
  },
  {
    "url": "photo/133.港尾溪採布袋蓮.jpg",
    "revision": "93fdef1bdb82128c9b0772f8dcc0d9e9"
  },
  {
    "url": "photo/134.兩家人第一次見面.jpg",
    "revision": "7395bbf12f87be0b015bf1f65481e3d1"
  },
  {
    "url": "photo/135.兩人越走越近.jpg",
    "revision": "23e575ea0d7e80898381649ad5c0f0df"
  },
  {
    "url": "photo/136.越走越近....jpg",
    "revision": "3a67bd06f6887b6f96989014030113f3"
  },
  {
    "url": "photo/137.後來決定走入婚姻.jpg",
    "revision": "a36652e845a9835880d6f7b9ad3e584b"
  },
  {
    "url": "photo/138.自拍喜帖照片.jpg",
    "revision": "777f7b630f8c92e264836a8476d1d908"
  },
  {
    "url": "photo/139.新的幸福開始.jpg",
    "revision": "096dede889732779501c3ce42a73bbad"
  },
  {
    "url": "photo/140.泓民佳恩新的樂章.jpg",
    "revision": "8d95047f091787a0b57e045ff80d989d"
  },
  {
    "url": "preWedding/2021-01-23-019.jpg",
    "revision": "7d6739490a78b524053effef3de4a66a"
  },
  {
    "url": "preWedding/2021-01-23-023.jpg",
    "revision": "a4eb65673cecfe81afcb065bf64dc927"
  },
  {
    "url": "preWedding/2021-01-23-028.jpg",
    "revision": "7b6d71a1d33637c8fcdf6f03f5d2569b"
  },
  {
    "url": "preWedding/2021-01-23-032_1.jpg",
    "revision": "f45149be3f8e493b038ab98f73d97926"
  },
  {
    "url": "preWedding/2021-01-23-032.jpg",
    "revision": "a14e3efdfdc25ea82156a52c4e34854e"
  },
  {
    "url": "preWedding/2021-01-23-037.jpg",
    "revision": "a854e599a27159f905f75c8c9730af8d"
  },
  {
    "url": "preWedding/2021-01-23-040.jpg",
    "revision": "50fd94e8c4e68a5e577f453e66964dc1"
  },
  {
    "url": "preWedding/2021-01-23-044_1.jpg",
    "revision": "098aeafd19aca79a2ef68ff7ab43b020"
  },
  {
    "url": "preWedding/2021-01-23-044.jpg",
    "revision": "3a6994b3d58d54beb915c5d55ac3289b"
  },
  {
    "url": "preWedding/2021-01-23-064.jpg",
    "revision": "4cedcc014a26f15e4905b84b9697f97d"
  },
  {
    "url": "preWedding/2021-01-23-065.jpg",
    "revision": "35c440d420f27b0ba74d15b88ba11cd7"
  },
  {
    "url": "preWedding/2021-01-23-072_1.jpg",
    "revision": "a533be5ad56d1ff1691491aaedc0fdac"
  },
  {
    "url": "preWedding/2021-01-23-072.jpg",
    "revision": "26a18f812d5b30a18273f641b55c42ba"
  },
  {
    "url": "preWedding/2021-01-23-078.jpg",
    "revision": "363af8705bcf8f5f1b023acf3a83fce7"
  },
  {
    "url": "preWedding/2021-01-23-083.jpg",
    "revision": "54d038435e913ecf4c45c8a693136c3e"
  },
  {
    "url": "preWedding/2021-01-23-084.jpg",
    "revision": "50479e905b49cdf39b7e3945783a683f"
  },
  {
    "url": "preWedding/2021-01-23-087.jpg",
    "revision": "9814e932fcd86e48e4f9f34a0d08b387"
  },
  {
    "url": "preWedding/2021-01-23-090.jpg",
    "revision": "26b2fd4daf928a9d222b103d16d1fd9c"
  },
  {
    "url": "preWedding/2021-01-23-116.jpg",
    "revision": "f458978f6f46cd86967996eb52b86961"
  },
  {
    "url": "preWedding/2021-01-23-118_1.jpg",
    "revision": "5ce5bfd89bc37dca39850b528a7873ea"
  },
  {
    "url": "preWedding/2021-01-23-118.jpg",
    "revision": "630f3bf18bbb33643be562148cb209fa"
  },
  {
    "url": "preWedding/2021-01-23-126.jpg",
    "revision": "6773326930d5093b9251a34f6002382b"
  },
  {
    "url": "preWedding/2021-01-23-136.jpg",
    "revision": "83d40e9211db1b01300e4bbde9e61a68"
  },
  {
    "url": "preWedding/2021-01-23-138.jpg",
    "revision": "6ab3c93dbf43c343aa2530e3451f72e9"
  },
  {
    "url": "preWedding/2021-01-23-142.jpg",
    "revision": "ec7303d0596fea202444c9a75fc02ebe"
  },
  {
    "url": "preWedding/2021-01-23-148.jpg",
    "revision": "38f866ad0d43fb8e2e66366ecc7023e0"
  },
  {
    "url": "preWedding/2021-01-23-151.jpg",
    "revision": "aa19beae380a89b57649d774de9ad28e"
  },
  {
    "url": "preWedding/2021-01-23-157_1.jpg",
    "revision": "44b77dd3ab975accee216da84b5c811b"
  },
  {
    "url": "preWedding/2021-01-23-157.jpg",
    "revision": "78e87549ed850e74699dbd60b962b349"
  },
  {
    "url": "preWedding/2021-01-23-164_1.jpg",
    "revision": "2185ca077a724b2c56684dbcfa7a977b"
  },
  {
    "url": "preWedding/2021-01-23-164.jpg",
    "revision": "23fd62b16c2e416501f2626b1cacbe8d"
  },
  {
    "url": "preWedding/2021-01-23-166.jpg",
    "revision": "40d2573ac04dc513057a24e9bce0a02f"
  },
  {
    "url": "preWedding/2021-01-23-167.jpg",
    "revision": "fda0ab633ab1c97388d1003f2c9d7714"
  },
  {
    "url": "preWedding/2021-01-23-171.jpg",
    "revision": "6cfd9f168eb29906705897a7a30ab7d8"
  },
  {
    "url": "preWedding/2021-01-23-172.jpg",
    "revision": "0a79213399f2e85078e59830c0510a07"
  },
  {
    "url": "preWedding/2021-01-23-179.jpg",
    "revision": "2199ee3cd9044f0cbb54b4b08ae15e89"
  },
  {
    "url": "Stock/index.html",
    "revision": "8afb4ae1643263a3d14b0d892577a032"
  },
  {
    "url": "Stock/個股檢查表.html",
    "revision": "c2d4e14d39f1a520ee5c14c7e7bd88ca"
  },
  {
    "url": "Wedding/index.html",
    "revision": "7ae2f3e19adab52c988b6e6800272495"
  },
  {
    "url": "Wedding/午宴流程.html",
    "revision": "7688d8bffe557c89d434cf7ceb9a88d2"
  },
  {
    "url": "Wedding/婚禮流程.html",
    "revision": "1d6fca3629d053188ed6e29b8f55daad"
  },
  {
    "url": "Wedding/婚禮流程完整版.html",
    "revision": "84c9c0149366dc92987b7d33d5be2420"
  },
  {
    "url": "Wedding/婚紗照.html",
    "revision": "d47c58e939a89772d518ee3d4a9ef114"
  },
  {
    "url": "Wedding/座位表.html",
    "revision": "053d14972b0ace671522247f863080de"
  },
  {
    "url": "Wedding/成長交往照片.html",
    "revision": "1e911da2f36d859d068722d10088aa69"
  },
  {
    "url": "Wedding/留言板.html",
    "revision": "b3ce360e5c7c7d82ce6b89f4c733464f"
  },
  {
    "url": "留言板.jpg",
    "revision": "a3fb57061de10f1021b3927ddb6e2eea"
  },
  {
    "url": "空白背景.jpg",
    "revision": "c8d74997d68d51bc2b93c8b3a460c03c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
