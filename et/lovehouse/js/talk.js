new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("马晓轩 ❤️LOVE❤️ 曾梦婷")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我想有一个故事")
    .pause(3000)
    .delete(null, {
        delay: 500
    })
    .type("只属于我跟你......")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();