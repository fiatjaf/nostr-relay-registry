export const relays = [
'ws://jgqaglhautb4k6e6i2g34jakxiemqp6z4wynlirltuukgkft2xuglmqd.onion',
'wss://at.nostrworks.com',
'wss://deconomy-netser.ddns.net:2121',
'wss://freedom-relay.herokuapp.com/ws',
'wss://jiggytom.ddns.net',
'wss://knostr.neutrine.com',
'wss://lightningrelay.com',
'wss://middling.myddns.me:8080',
'wss://no-str.org',
'wss://nostr-2.zebedee.cloud',
'wss://nostr-pub.semisol.dev',
'wss://nostr-pub.wellorder.net',
'wss://nostr-relay.alekberg.net',
'wss://nostr-relay.digitalmob.ro',
'wss://nostr-relay.freeberty.net',
'wss://nostr-relay.nonce.academy',
'wss://nostr-relay.untethr.me',
'wss://nostr-relay.wlvs.space',
'wss://nostr-verified.wellorder.net',
'wss://nostr.21sats.net',
'wss://nostr.beta3.dev',
'wss://nostr.blockchaincaffe.it',
'wss://nostr.bongbong.com',
'wss://nostr.cercatrova.me',
'wss://nostr.chaker.net',
'wss://nostr.coinsamba.com.br',
'wss://nostr.coollamer.com',
'wss://nostr.delo.software',
'wss://nostr.developer.li',
'wss://nostr.drss.io',
'wss://nostr.einundzwanzig.space',
'wss://nostr.f44.dev',
'wss://nostr.fmt.wiz.biz',
'wss://nostr.herci.one',
'wss://nostr.lnprivate.network',
'wss://nostr.mado.io',
'wss://nostr.massmux.com',
'wss://nostr.mom',
'wss://nostr.nodeofsven.com',
'wss://nostr.nymsrelay.com',
'wss://nostr.ono.re',
'wss://nostr.onsats.org',
'wss://nostr.openchain.fr',
'wss://nostr.orangepill.dev',
'wss://nostr.oxtr.dev',
'wss://nostr.p2sh.co',
'wss://nostr.rocks',
'wss://nostr.sandwich.farm',
'wss://nostr.semisol.dev',
'wss://nostr.slothy.win',
'wss://nostr.unknown.place',
'wss://nostr.walletofsatoshi.com',
'wss://nostr.yael.at',
'wss://nostr.yuv.al',
'wss://nostr.zaprite.io',
'wss://nostr.zebedee.cloud',
'wss://nostrsatva.net',
'wss://offchain.pub',
'wss://relay.cryptocculture.com',
'wss://relay.cynsar.foundation',
'wss://relay.damus.io',
'wss://relay.grunch.dev',
'wss://relay.minds.com/nostr/v1/ws',
'wss://relay.mynostr.id',
'wss://relay.nosphr.com',
'wss://relay.nostr-latam.link',
'wss://relay.nostr.ch',
'wss://relay.nostr.info',
'wss://relay.nostr.nu',
'wss://relay.nostr.or.jp',
'wss://relay.nostr.ro',
'wss://relay.nostr.scot',
'wss://relay.nostr.wf',
'wss://relay.nostrich.de',
'wss://relay.stoner.com',
'wss://relay.taxi',
'wss://relayer.fiatjaf.com',
'wss://rsslay.fiatjaf.com'
]

shuffle(relays)

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}
