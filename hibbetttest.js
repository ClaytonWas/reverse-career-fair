// const request = require('@velo/hr-node')
const request = require('request')
// request.secret("VELO_nHtbNzHvRudQKe8npK56b6jEnDP")
global.log = require('./classes/logger')
global.tools = require('./classes/tools')
var cheerio = require('cheerio')
var fs = require('fs')
var delay = 3000
var keywords = []
var keywordList
var clientWebhooksFiltered = []

var proxies = require('./proxies.json')

var links = [
    // "Q0581", //royal gs aj1 low 
    // "R0793", //ssb gs aj1 low 
    // "Q0834", //fearless aj1 high
    // "R0672", //navy aj1 mid gs
    // "R0798", //ssb aj1 mid gs
    // "S0878", //dynamic yellow aj1 mid gs
    // "Q0686", //court purple aj1 low 
    // "Q0580", //gold toe aj1 low
    // "Q0682", //ssb aj1 mid 
    // "Q0579", //yellow toe aj1 mid
    // "Q0685", //ssb aj1 low mens
    // "Q0701", //aj1 defiant ny paris
    // "Q0776", //unc to chicago aj1 
    // "S1053", //yeshaya yeezy 350 gs
    // "Q0667", //bred aj11 
    // "M1350", //yeshaya yeezy 350 mens sizes
    // "S0744", //gs mid
    // "Q0776", // unc to chicago aj1
    // "M1370",
    // "P1288",
    // "Q0760",
    // "R0881",
    // "Q0791",
    // "R0901",
    // "Q0763",
    // "M1371",
    // "S1064",
    // "S1066",
    // "S1065",
    // "M1372",
    // "P1289",
    // "Q0853",
    // "R1004",
    // "Q0850",
    // "R0992",
    // "0P399",
    // "Q0756",
    // "0P404",
    // "S0984",
    // "Q0764",
    // "R0993",
    // "Q0851",
    // "5055ZW",
    // "Q0817",
    // "Q0886",
    "M1290"
]

var acceptRandom = [
    "application/json, text/javascript, */*; q=0.01",
    "application/json, text/javascript, */*; q=0.01",
    "application/json, text/javascript",
    "application/json, */*",
    "*/*, text/javascript",
    "*/*, text/javascript; q=0.01",
    "*/*",
    "text/javascript",
    "text/javascript, application/json",
    "application/json",
    "text/html",
    "application/xhtml+xml",
    "application/xml",
    "q=0.9",
    "application/signed-exchange",
    "v=b3",
    "text/html,application/xhtml+xml",
    "application/xhtml+xml,application/xml",
    "application/xml;q=0.9",
    "*/*;q=0.8",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "gzip;q=1.0, compress;q=0.5"
]
var randomReferer = [
    "https://www.solebox.com/New/",
    "https://www.solebox.com/Soon/",
    "https://www.solebox.com/Footwear/Running/",
    "https://www.solebox.com/Footwear/Basketball/",
    "https://www.solebox.com/Footwear/Court/",
    "https://www.solebox.com/Footwear/Fashion/",
    "https://www.solebox.com/Footwear/Winterized/",
    "https://www.solebox.com/Footwear/Shoe-Care/",
    "https://www.solebox.com/Apparel/Hoodies/",
    "https://www.solebox.com/Apparel/Hosen/",
    "https://www.solebox.com/Apparel/T-Shirts/",
    "https://www.solebox.com/Apparel/Longsleeves/",
    "https://www.solebox.com/Apparel/Shirts/",
    "https://www.solebox.com/Apparel/Jacken/",
    "https://www.solebox.com/Apparel/Sweatshirts/",
    "https://www.solebox.com/Accessories/Unterwaesche/",
    "https://www.solebox.com/Accessories/Toys/",
    "https://www.solebox.com/Accessories/Magazine/",
    "https://www.solebox.com/Accessories/Other/",
    "https://www.solebox.com/Accessories/Winter-Accessories/",
    "https://www.solebox.com/Accessories/Socken/",
    "https://www.solebox.com/Accessories/Bags/",
    "https://www.solebox.com/Accessories/Caps/",
    "https://www.solebox.com/index.php?cl=brands",
    "https://www.solebox.com/blog/",
    "https://www.solebox.com/Sale/"
]
var acceptLanguageStart = [
    "ra",
    "de",
    "fr",
    "sv",
    "ja",
]
var randomDest = [
    "audio",
    "audioworklet",
    "document",
    "embed",
    "empty",
    "font",
    "image",
    "manifest",
    "object",
    "paintworklet",
    "report",
    "script",
    "serviceworker",
    "sharedworker",
    "style",
    "track",
    "video",
    "worker",
    "xslt",
    "nested-document",
]
var acceptLanguageStart = [
    "en",
    "de",
    "fr",
    "sv",
    "ja",
]
var acceptEncodingRandom = [
    "gzip, deflate, br",
    "br",
    "gzip",
    "deflate, br",
    "gzip, deflate",
    "gzip, br",
    "deflate",
]
var randomUA = [
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.${randomNumber(1)}.${randomNumber(4)}.${randomNumber(3)} Safari/537.36`,
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.${randomNumber(1)}.${randomNumber(4)}.${randomNumber(3)} Safari/537.36`,
    // `Mozilla/5.0 (Linux; Android 8.0.0;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.${randomNumber(1)}.${randomNumber(4)}.${randomNumber(3)} Mobile Safari/537.36`,
    // `Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/80.${randomNumber(1)}.${randomNumber(4)}.${randomNumber(2)} Mobile/15E148 Safari/605.1`
]
var randomMode = [
    "cors",
    "navigate",
    "nested-navigate",
    "no-cors",
    "same-origin",
    "websocket",
]
var randomUser = [
    "?0",
    "?1"
]
var randomSite = [
    "cross-site",
    "same-origin",
    "same-site",
    "none",
]

function init() {

    for (let i = 0; i < links.length; i++) {
        var a = new Monitor(links[i])
        a.monitor()
    }
}
function formatProxy(proxy) {
    if (proxy && ['localhost', ''].indexOf(proxy) < 0) {
        proxy = proxy.replace(' ', '_');
        const proxySplit = proxy.split(':');
        if (proxySplit.length > 3)
            return "http://" + proxySplit[2] + ":" + proxySplit[3] + "@" + proxySplit[0] + ":" + proxySplit[1];
        else
            return "http://" + proxySplit[0] + ":" + proxySplit[1];
    }
    else
        return undefined;
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLetter(length) {
    var result = '';
    var characters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function randomNumber(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class Monitor {
    constructor(link) {
        this.link = `https://www.hibbett.com/on/demandware.store/Sites-Hibbett-US-Site/default/Product-GetSetItem?pid=${link}&source=cart&Quantity=999999&dwvar_${link}_color=1000`
        this.variant = link
        this.firstrun = true
        this.db
        this.productName
        this.productImage
    }
    monitor() {

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        function headerGen() {

            var headers = {}

            headers['user-agent'] = randomUA[Math.floor(Math.random() * randomUA.length)]
            headers['accept'] = 'text/javascript, */*; q=0.01'
            headers['accept-encoding'] = 'gzip, deflate, br'
            headers['accept-language'] = 'en-US,en;q=0.9'
            headers['referer'] = 'https://www.hibbett.com/product?pid=04M76'
            headers['sec-fetch-dest'] = 'empty'
            headers['sec-fetch-mode'] = 'cors'
            headers['sec-fetch-site'] = 'same-origin'
            // headers['cookie'] = '__cq_dnt=0; dw_dnt=0; __cfruid=3b32ab9779947c05856834b9abd6fe1fe01e86e8-160196a8'
            // headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
            // headers['x-requested-with'] = 'XMLHttpRequest'
            if (randomInteger(0, 10) > 5) {
                headers[`${makeid(randomInteger(0, 50))}`] = makeid(randomInteger(0, 30))
            }
            if (randomInteger(0, 10) > 5) {
                headers.accept = acceptRandom[Math.floor(Math.random() * acceptRandom.length)]
            }
            if(randomInteger(0,10) > 5) {
                headers[`${makeid(randomInteger(7,27))}`] = makeid(randomInteger(11,42))
            }
            if(randomInteger(0,10) > 7) {
                headers[`${makeid(randomInteger(5,12))}`] = makeid(randomInteger(4,9))
            }
            if(randomInteger(0,10) > 5) {
                headers['accept-encoding'] = acceptEncodingRandom[Math.floor(Math.random() * acceptEncodingRandom.length)]
            }
            if(randomInteger(0,10) > 5) {
                headers[`${makeid(randomInteger(10,60))}`] = makeid(randomInteger(13,55))
            }
            if(randomInteger(0,10) > 5) {
                headers['accept-language'] = `${[acceptLanguageStart[Math.floor(Math.random() * acceptLanguageStart.length)]]}-${randomLetter(2)};q=0.${randomNumber(1)}`
            }
            if(randomInteger(0,10) > 5) {
                headers[`${makeid(randomInteger(0,30))}`] = makeid(randomInteger(0,40))
            }
            if(randomInteger(0,10) > 5) {
                headers['referer'] = randomReferer[Math.floor(Math.random() * randomReferer.length)]
            }
            if(randomInteger(0,10) > 5) {
                headers['sec-fetch-dest'] = randomDest[Math.floor(Math.random() * randomDest.length)]
            }
            if(randomInteger(0,10) > 3) {
                headers[`${makeid(randomInteger(3,56))}`] = makeid(randomInteger(22,252))
            }
            if(randomInteger(0,10) > 5) {
                headers['sec-fetch-mode']= randomMode[Math.floor(Math.random() * randomMode.length)]
            }
            if(randomInteger(0,10) > 5) {
                headers['sec-fetch-site']= randomSite[Math.floor(Math.random() * randomSite.length)]
            }
            if(randomInteger(0,10) > 5) {
                headers['sec-fetch-user']= randomUser[Math.floor(Math.random() * randomUser.length)]
            }
            if (randomInteger(0, 10) > 5) {
                headers[`${makeid(randomInteger(1, 36))}`] = makeid(randomInteger(13, 70))
            }
            if(randomInteger(0,10) > 5) {
                headers['upgrade-insecure-requests'] = '1'
            }
            // headers['x-dw-client-id'] = 'b269a1ff-da3a-43fc-a4a0-c178e2328bdb'
            return headers;
        }


        var opts = {
            method: "GET",
            url: this.link,
            gzip: true,
            agent: false,
            followRedirects: false,
            headers: headerGen(),
            // headers: {
            //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            //     "accept-encoding": "gzip, deflate, br",
            //     "accept-language": "en-US,en;q=0.9",
            //     "cache-control": "max-age=0",
            //     "cookie": "__cfduid=dbfef50294953f57288df93d395771b7f1601964055; dwac_269962172965e441be86869251=QJwmIcJs8AYceVX_8XR5KJOcNsTefV70tJY%3D|dw-only|||USD|false|America%2FChicago|true; cqcid=acebRc6InaJSALuFmTnwApKhnM; sid=QJwmIcJs8AYceVX_8XR5KJOcNsTefV70tJY; dwanonymous_9bc4215d5ba3521ff1e6f9e5299a7444=acebRc6InaJSALuFmTnwApKhnM; __cq_dnt=0; dw_dnt=0; dwsid=2myErLi2_t_WyJslq_JifAlslEmkp1AtficVJtocTFUotdTrypSZl3dNZmS_prtwf_zDLsPCbExz6eoYVhCcXg==; __cfruid=de4513078fd93799d534b7216d589d4445463ab3-1601964056; _px_f394gi7Fvmc43dfg_user_id=NTU1MTE1MjEtMDc5OS0xMWViLWI4M2YtZjk1NDQ5NGNlZWU2; _pxvid=513f5ce3-0799-11eb-aeab-0242ac120008; _gid=GA1.2.1505383284.1601964511; _ga=GA1.2.269328505.1601964511; _gcl_au=1.1.602476176.1601964512; BVBRANDID=2eb15115-ead7-4fac-9d4b-8679762dec44; dw=1; dw_cookies_accepted=1; _mibhv=7794665e-7cbc-4714-855f-4c3a1fba3d65_7244; _fbp=fb.1.1601964513791.1074611594; __cq_uuid=ed539160-0609-11e9-bb86-1f5472e6a131; __olapicU=1601964515046; liveagent_oref=; liveagent_sid=6a6d05a7-f3db-4d1c-8709-da65e4be53f5; liveagent_vc=2; liveagent_ptid=6a6d05a7-f3db-4d1c-8709-da65e4be53f5; supressAccountNotification=true; ku1-sid=r31sDvdiN-nrmpNauzAGK; ku1-vid=4eb03fdc-22e6-c950-5c6b-e18ce7172a0a; __btr_id=49ae8737-bad3-487d-8604-5be963c0c792; __cq_bc=%7B%22bbcv-Hibbett-US%22%3A%5B%7B%22id%22%3A%22Q0996%22%7D%2C%7B%22id%22%3A%22Q1017%22%7D%5D%7D; BVImplpixel_pie=18471_3_0; __cq_seg=0~-0.03!1~0.16!2~-0.30!3~0.54!4~0.08!5~0.31!6~0.31!7~0.01!8~0.57!9~-0.25; tfc-l=%7B%22a%22%3A%7B%22v%22%3A%22b39cc125-0059-4581-be4e-05886c687091%22%2C%22e%22%3A1602052728%7D%2C%22u%22%3A%7B%22v%22%3A%22kfcptuetteo8kn65te6ugldp99%22%2C%22e%22%3A1654831166%7D%2C%22s%22%3A%7B%22v%22%3A%22session.params%3D%257C1653097135%22%2C%22e%22%3A1653097142%7D%2C%22k%22%3A%7B%22v%22%3A%22kfcptuetteo8kn65te6ugldp99%22%2C%22e%22%3A1654831166%7D%7D; tfc-s=%7B%22v%22%3A%22tfc-fitrec-product%3D8%22%7D; _px3=a3e2c0c7bbd263376c745ffc28ca969aeb58104c735e2cd763399ce7f97c18ac:n95k0j80dTaXOYVYe+YyeIsNxNWtZYpwRP7wLkgG7tErCULIP7KJspCJMPzmB/jtvfdffiK96+0qne07xOcRmA==:1000:7uB3VzUnx6+7yDM7EEUS53N1pv6hQV0wFOlhHQudH1SVnKpi0yn33BLLqkmXOrRn1jqEAja4LGD4oo+s8BqL54bsXtUuqyxdYRUjV9USyQodN5e1Bi7rWHYblPOkQ1jCMoJ9GyH4dmK0hKa1FkxQp28GLeVvC85MtUUMNABM0bI=; _uetsid=6cd51a10078f11ebb6389919495f52cc; _uetvid=e4d0b953a377c4cfe34518356c41dfd7; mp_hibbett_sports_mixpanel=%7B%22distinct_id%22%3A%20%227c2415e5-3290-454c-8b52-fe2c814828c4%22%2C%22bc_persist_updated%22%3A%201601964513405%2C%22bc_id%22%3A%20-1424243039%2C%22tm_merged%22%3A%20true%2C%22g_search_engine%22%3A%20%22google%22%7D; _px_5195230638_cs=eyJpZCI6IjU1NTBjNzAwLTA3OTktMTFlYi1iODNmLWY5NTQ0OTRjZWVlNiIsInN0b3JhZ2UiOnsiZyI6dHJ1ZX0sImV4cGlyYXRpb24iOjE2MDE5Njg2MDUxNjF9",
            //     "sec-fetch-dest": "document",
            //     "sec-fetch-mode": "navigate",
            //     "sec-fetch-site": "none",
            //     "sec-fetch-user": "?1",
            //     "upgrade-insecure-requests": "1",
            //     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
            // },
            proxy: tools.formatProxy(proxies[Math.floor(Math.random() * proxies.length)])
        }
        if (this.firstrun) {
            // log(opts.proxy)
            // log(opts.url)
            request(opts, (error, response, body) => {
                // log(body)
                if (error) {
                    log("ERROR", 'error')
                    log(error)
                    this.firstrun = true
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)
                }
                if (response.statusCode != 200) {
                    if (body.includes(`Please verify you are a human`)) {
                        log(`[HIBBETT] (${response.statusCode}) Databasing: PX captcha challenge ${this.variant}`, 'error')
                        this.firstrun = true
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else if (body.length === 13) {
                        log(`[HIBBETT] (${response.statusCode}) Databasing: Empty body at ${this.variant}`, 'error')
                        this.firstrun = true
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else if (body.length < 1000 && body.includes(`appId`) && body.includes(`perimeterx`)) {
                        log(`[HIBBETT] (${response.statusCode}) Databasing: PX block at ${this.variant}`, 'error')
                        this.firstrun = true
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else {
                        log(response.statusCode + `Error`)
                        this.firstrun = true
                        log(this.link)
                        log(body, 'error')
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }

                } else if (response.statusCode == 200 && body.includes(`We are sorry!`)) {
                    log(`[HIBBETT] (${response.statusCode}) Databasing: ${this.variant} Product page down`, 'error')
                    this.firstrun = true
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)

                } else if (response.statusCode == 200 && body.includes(`Access to this page has been denied because we believe you are using automation tools to browse the website.`)) {
                    log(`[HIBBETT] (${response.statusCode}) Databasing: PX press and hold challenge at ${this.variant}`, 'error')
                    this.firstrun = true
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)

                }
                else if (response.statusCode == 200 && !body.includes('Access to this page has been denied') && !body.includes('._pxAppId') && !body.includes('perimeterx.net","blockScript":"')) {
                    log(`Databasing: ${this.variant}`, 'info')
                    var $ = cheerio.load(body)
                    var title = ''
                    var img = ''
                    var left = ''
                    var right = ''
                    var price = ''
                    var stock = 0
                    img = `https:${$(`body > div.product-set-details > div.product-variations > div.attribute.color.clearfix > div.value > ul > li > a > img`).attr('src').toString().replace(/ /g, '%20').split(`?`)[0]}`//.toString().replace(/ /g, '%20')}`
                    title = $(`body > div.product-set-details > h2.product-set-item-name > a`).text().trim()
                    price = `$${$(`body > div.product-set-details > div.product-price > span.price-sales`).text().trim()}`


                    $('body > div.product-set-details > div.product-variations > div.attribute.size.clearfix > div.value > ul > li').each(function () {
                        if ($(this).attr('class') != "unselectable") {
                            if (stock % 2 == 0) {
                                left = left + `**[${$(this).text().trim().replace(/\s+/g, '').split('size')[1]}]**\n`
                            }
                            else {
                                right = right + `**[${$(this).text().trim().replace(/\s+/g, '').split('size')[1]}]**\n`
                            }
                            stock = stock + 1
                        }
                    })

                    this.db = {
                        "title": title,
                        "instock": stock,
                        "left": left,
                        "right": right,
                        'price': price,
                        "img": img

                    }
                    log(JSON.stringify(this.db), 'success')
                    this.firstrun = false
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)

                }
                else {
                    log(`Error Databasing Product Page For ${this.variant} RESP: ${response.statusCode}`, 'error')
                    this.firstrun = true
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)
                }
            })
        }
        else {
            // log(opts.proxy)
            request(opts, (error, response, body) => {
                if (error) {
                    log("ERROR", 'error')
                    this.firstrun = false
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)
                }
                if (response.statusCode != 200) {
                    if (body.includes(`Please verify you are a human`)) {
                        log(`[HIBBETT] (${response.statusCode}) Comparing: PX captcha challenge at ${this.variant}`, 'error')
                        this.firstrun = false
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else if (body.length === 13) {
                        log(`[HIBBETT] (${response.statusCode}) Comparing: Empty body at ${this.variant}`, 'error')
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else if (body.length < 1000 && body.includes(`appId`) && body.includes(`perimeterx`)) {
                        log(`[HIBBETT] (${response.statusCode}) Comparing: PX block at ${this.variant}`, 'error')
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }
                    else {
                        log(response.statusCode + `Error`)
                        log(body)
                        this.firstrun = false
                        return setTimeout(() => {
                            this.monitor()
                        }, delay)
                    }

                } else if (response.statusCode == 200 && body.includes(`We are sorry!`)) {
                    log(`[HIBBETT] (${response.statusCode}) Comparing: ${this.variant} Product page down`, 'error')
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)

                } else if (response.statusCode == 200 && body.includes(`Access to this page has been denied because we believe you are using automation tools to browse the website.`)) {
                    log(`[HIBBETT] (${response.statusCode}) Comparing: PX press and hold challenge at ${this.variant}`, 'error')
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)

                }
                else if (response.statusCode == 200 && !body.includes('Access to this page has been denied') && !body.includes('._pxAppId') && !body.includes('perimeterx.net","blockScript":"')) {
                    // log(`Comparing: ${this.variant}`, 'info')
                    var $ = cheerio.load(body)
                    var compare
                    var title = ''
                    var img = ''
                    var left = ''
                    var right = ''
                    var price = ''
                    var stock = 0
                    img = `${$(`#stickyProductAddToCart > img`).attr('src').toString().replace(/ /g, '%20').split(`?`)[0]}`//.toString().replace(/ /g, '%20')}`
                    title = $(`#stickyProductAddToCart > div > div.product-name`).text().trim()
                    price = `$${$(`#stickyProductAddToCart > div > div.product-price > span.price-sales`).text().trim()}`


                    $('body > div.product-variations > div.attribute.size.clearfix > div.value > ul > li').each(function () {
                        if ($(this).attr('class') != "unselectable") {
                            if (stock % 2 == 0) {
                                left = left + `**[${$(this).text().trim().replace(/\s+/g, '').split('size')[1]}]**\n`
                            }
                            else {
                                right = right + `**[${$(this).text().trim().replace(/\s+/g, '').split('size')[1]}]**\n`
                            }
                            stock = stock + 1
                        }
                    })


                    compare = {
                        "title": title,
                        "instock": stock,
                        "left": left,
                        "right": right,
                        'price': price,
                        "img": img
                    }
                    log(`[HIBBETT] (${response.statusCode}) Comparing: ${this.variant} Stock: ${compare.instock}`, 'success')
                    // log(JSON.stringify(compare), 'success')
                    //log(JSON.stringify(compare), 'error')
                    this.compareDB(compare)

                }
                else {
                    log(`Error Comparing Product Page For ${this.variant} RESP: ${response.statusCode}`, 'error')
                    log(body)
                    return setTimeout(() => {
                        this.monitor()
                    }, delay)
                }
            })
        }
    }

    compareDB(compare) {
        // log(compare.totalstock)
        // this.webhook(compare)
        // log(this.db.totalstock)
        //log(compare.stock)
        // if(compare.instock > 0) {
        //     this.webhook(compare)
        // }
        if (this.db.instock < compare.instock) {
            this.webhook(compare)
            this.webhook2(compare)
        }
        // if(this.db.instock != compare.instock || compare.sizes.length != this.db.sizes.length) { 
        //     if(compare.instock == true) {
        //         this.webhook(compare)
        //     }
        // }
        this.db = compare
        return setTimeout(() => {
            this.monitor()
        }, delay)
    }


    webhook2(compare) {
        if (compare.instock > 1) {
            for (let i = 0; i < clientWebhooksFiltered.length; i++) {
                var d = new Date();
                var params = {
                    embeds: [{
                        "title": compare.title,
                        "description": `**Price:** ${compare.price} **Sizes In Stock:** ${compare.instock}`,
                        "url": "https://www.hibbett.com/hibbett-restocks/" + this.variant + ".html",
                        "color": clientWebhooksFiltered[i].styleSettings.webhookColorDecimal,
                        "timestamp": d.toISOString(),
                        "footer": {
                            "icon_url": clientWebhooksFiltered[i].styleSettings.footerIcon,
                            "text": clientWebhooksFiltered[i].styleSettings.footerText
                        },
                        "thumbnail": {
                            "url": "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url=" + compare.img
                        },
                        "author": {
                            "name": "Hibbett Restocks",
                            "url": "https://www.hibbett.com/",
                            "icon_url": "https://assets.website-files.com/5de2f53283c9d71039e80b1d/5de8245450d38038283d81ff_17352495_10155216659398487_606600396698865354_n.jpg"
                        },
                        "fields": [
                            {
                                "name": "Sizes",
                                "value": compare.left,
                                "inline": true
                            },
                            {
                                "name": "Sizes",
                                "value": compare.right,
                                "inline": true
                            },
                            {
                                "name": "Attachments",
                                "value": `[[Checkout]](https://www.hibbett.com/checkout)`,
                                'inline': true
                            }
                        ],
                    }]
                }
                const sendHook = {
                    url: clientWebhooksFiltered[i].webhooks[Math.floor(Math.random() * clientWebhooksFiltered[i].webhooks.length)],
                    method: 'POST',
                    body: params,
                    json: true,
                    resolveWithFullResponse: true,
                    simple: false
                }
                request(sendHook)
                log(`Webhook Sent`, 'success')
            }
        }
        else {
            for (let i = 0; i < clientWebhooksFiltered.length; i++) {
                var d = new Date();
                var params = {
                    embeds: [{
                        "title": compare.title,
                        "description": `**Price:** ${compare.price} **Sizes In Stock:** ${compare.instock}`,
                        "url": "https://www.hibbett.com/hibbett-restocks/" + this.variant + ".html",
                        "color": clientWebhooksFiltered[i].styleSettings.webhookColorDecimal,
                        "timestamp": d.toISOString(),
                        "footer": {
                            "icon_url": clientWebhooksFiltered[i].styleSettings.footerIcon,
                            "text": clientWebhooksFiltered[i].styleSettings.footerText
                        },
                        "thumbnail": {
                            "url": "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url=" + compare.img
                        },
                        "author": {
                            "name": "Hibbett Restocks",
                            "url": "https://www.hibbett.com/",
                            "icon_url": "https://assets.website-files.com/5de2f53283c9d71039e80b1d/5de8245450d38038283d81ff_17352495_10155216659398487_606600396698865354_n.jpg"
                        },
                        "fields": [
                            {
                                "name": "Sizes",
                                "value": compare.left,
                                "inline": true
                            },
                            {
                                "name": "Attachments",
                                "value": `[[Checkout]](https://www.hibbett.com/checkout)`,
                                'inline': true
                            }
                        ],
                    }]
                }
                const sendHook = {
                    url: clientWebhooksFiltered[i].webhooks[Math.floor(Math.random() * clientWebhooksFiltered[i].webhooks.length)],
                    method: 'POST',
                    body: params,
                    json: true,
                    resolveWithFullResponse: true,
                    simple: false
                }
                request(sendHook)
                log(`Webhook Sent`, 'success')
            }
        }
    }





    webhook(compare) {
        var today = new Date();
        var d = new Date();
        if (compare.instock > 1) {
            var params = {
                embeds: [{
                    "title": compare.title,
                    "description": `**Price:** ${compare.price} **Sizes In Stock:** ${compare.instock}`,
                    "url": "https://www.hibbett.com/hibbett-restocks/" + this.variant + ".html",
                    "color": 4575664,
                    "timestamp": d.toISOString(),
                    "footer": {
                        "icon_url": "https://gyazo.com/2c2e28cbc14858352d7358753b903ae5.png",
                        "text": "@PaymentLinks"
                    },
                    "thumbnail": {
                        "url": compare.img
                    },
                    "author": {
                        "name": "Hibbett Restocks",
                        "url": "https://www.hibbett.com/",
                        "icon_url": "https://assets.website-files.com/5de2f53283c9d71039e80b1d/5de8245450d38038283d81ff_17352495_10155216659398487_606600396698865354_n.jpg"
                    },
                    "fields": [
                        {
                            "name": "Sizes",
                            "value": compare.left,
                            "inline": true
                        },
                        {
                            "name": "Sizes",
                            "value": compare.right,
                            "inline": true
                        },
                        {
                            "name": "Attachments",
                            "value": `[[Checkout]](https://www.hibbett.com/checkout)`,
                            "inline": false
                        }
                    ],
                }]
            }
        }
        else {
            var params = {
                embeds: [{
                    "title": compare.title,
                    "description": `**Price:** ${compare.price} **Sizes In Stock:** ${compare.instock}`,
                    "url": "https://www.hibbett.com/hibbett-restocks/" + this.variant + ".html",
                    "color": 4575664,
                    "timestamp": d.toISOString(),
                    "footer": {
                        "icon_url": "https://gyazo.com/2c2e28cbc14858352d7358753b903ae5.png",
                        "text": "@PaymentLinks"
                    },
                    "thumbnail": {
                        "url": compare.img
                    },
                    "author": {
                        "name": "Hibbett Restocks",
                        "url": "https://www.hibbett.com/",
                        "icon_url": "https://assets.website-files.com/5de2f53283c9d71039e80b1d/5de8245450d38038283d81ff_17352495_10155216659398487_606600396698865354_n.jpg"
                    },
                    "fields": [
                        {
                            "name": "Sizes",
                            "value": compare.left,
                            "inline": true
                        },
                        {
                            "name": "Attachments",
                            "value": `[[Checkout]](https://www.hibbett.com/checkout)`,
                            "inline": false
                        }
                    ],
                }]
            }
        }
        log(JSON.stringify(params))
        const filtered = {
            url: "https://discordapp.com/api/webhooks/677282370155708417/Rl7vMxzoUX0JlU2ofvZ178MK0rYdLRIaHI-wYwD3DTWxjZWTDzk9bbOXF2syLEdhv09R",
            method: 'POST',
            body: params,
            json: true,
            resolveWithFullResponse: true,
            simple: false
        }
        request(filtered)
        log('Webhook Sent', 'success')

    }
}

fs.readFile('./keywords.json', (error, data) => {
    var info = JSON.parse(data)

    for (let i = 0; i < info.keywords.length; i++) {
        keywords.push(info.keywords[i])
    }
    log(`Found ${keywords.length} keywords`, 'success')
    tools.parseKw(keywords, (kw) => {
        keywordList = kw
        // go()
        init()

    })
})


// init()