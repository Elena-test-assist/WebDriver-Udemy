import { expect, browser, $ } from '@wdio/globals'

describe.skip('My first test suite', () => {
   it('my first wide test', async () => {
   let myUrl = 'https://www.example.com'
   let smallPause = 2000
   let bigPause = 5000

   await browser.url(myUrl)
   await browser.pause(smallPause)
   // OLD way
   // let pageTitle = await browser.getTitle()
   // let pageURL = await browser.getUrl()
   // expect(pageTitle).toContain('Example Domain')
   // expect(pageURL).toContain('example.com')

   //Modern Way
    await expect(browser).toHaveTitle('Example Domain')
    await expect(browser).toHaveUrl('https://www.example.com/')

    let pageElement = await $('h1')
    await expect(pageElement).toExist()
    await expect(pageElement).toBeDisplayed()
    await expect(pageElement).toHaveText('Example Domain')
    })

    it("Forms and Inputs", async() => {
        await browser.url('https://www.saucedemo.com/')

        let usernameInput = await $('#user-name')
        let passwordInput = await $('#password')
        let loginButton = await $('#login-button')
       

        // Add value function
        // Set value function
        // Clear value function

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_sauce')
        await loginButton.click()

        let inventoryContainer = await $('#inventory_container')
        await expect(inventoryContainer).toBeDisplayed()

    })

    it("Selectbox and Checkbox", async() =>{
        await browser.url("https://devexpress.github.io/testcafe/example/")
        let selectbox = await $('#preferred-interface')
        await selectbox.selectByVisibleText('Both')

        let option = await $('option=Both')
        await expect(option).toBeSelected();
    })

    it("Set Browser Size", async () =>{
        let width = 800
        let height = 600
        await browser.setWindowSize(width, height)
        await browser.url('https://www.example.com')

        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()
        await browser.pause(5000)
        
    })

    it("Device Emulation", async () => {
        let mobile = [375, 812]
        let tablet = [1024, 768]
        let desktop = [1650, 1050]

        // Mobile Device
        await browser.setWindowSize(mobile[0], mobile[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)

        // Tablet Device
        await browser.setWindowSize(tablet[0], tablet[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)

        //Desktop
        await browser.setWindowSize(desktop[0], desktop[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)
    })

    it("Screenshots", async () => {
        await browser.url('https://www.example.com')
        await browser.saveScreenshot('my-screenshot.png')

        let title = await $('h1')
        await title.saveScreenshot('title-screenshot.png')
    

    })
})

