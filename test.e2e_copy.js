import { expect, browser, $ } from '@wdio/globals'

describe('My first test suite', () => {
   it('my first wide test', async () => {
   let myUrl = 'https://www.example.com'
   let smallPause = 2000
   let bigPause = 5000

   await browser.url(myUrl)
   await browser.pause(smallPause)
   await browser.url('https://www.saucedemo.com')
   await browser.pause(bigPause)

    })
})
