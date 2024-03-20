describe("Advanced Testing", async() =>{

      //beforeEach(async () => {
      //  await browser.url('https://the-internet.herokuapp.com/upload')
      //})

    beforeEach(async() =>{
        await loadWebsite()
    })


    it("File Upload1", async () =>{

        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        // const remoteFilePath = await browser.uploadFile(filePath)
        //await $('#file-upload').setValue(remoteFilePath)
        //await $('#file-submit').click()
        await browser.pause(5000)

    })

    it("File Upload2", async () =>{

        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
       // const remoteFilePath = await browser.uploadFile(filePath)

        //await $('#file-upload').setValue(remoteFilePath)
        //await $('#file-submit').click()
        await browser.pause(5000)

    })

    it("File Upload3", async () =>{

        const filePath = './my-screenshot.png'
        //const remoteFilePath = await browser.uploadFile(filePath)

//        await $('#file-upload').setValue(remoteFilePath)
//      await $('#file-submit').click()
      await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
      await browser.pause(5000)


    })

    it("Display Title and Url", async() =>{
        const results =await browser.getTitleAndUrl()
        console.log('TITLE = ' + results.title)
        console.log('URL = ' + results.url)
        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)

    })

it("Change Browser Session", async() => {
    console.log("SESSION BEFORE RELOAD " + browser.sessionId)
    await browser.reloadSession()
    console.log("SESSION AFTER RELOAD " + browser.sessionId)
})
it("Create and Switch ", async() =>{
    await browser.url('https://google.com')
    await browser.newWindow('http://webdriver.io')
    await browser.pause(5000)
    await browser.switchWindow('google.com')
    await browser.pause(5000)
})
it("Network Throttle", async()=>{
    
await browser.throttleNetwork('Regular2G')
await browser.url('https://webdriver.io')
await browser.pause(3000)

await browser.throttleNetwork('Regular4G')
await browser.url('https://webdriver.io')
await browser.pause(3000)

await browser.throttleNetwork('offline')
await browser.url('https://webdriver.io')
await browser.pause(3000)

})

it('Execute Javascript Code', async () => {
    const result = await browser.execute(
        (a, b) => {
        return a + b
    }, 
    5,
    10
    )
    await expect(result).toBe(15)
})


async function loadWebsite(){
    await browser.url('https://the-internet.herokuapp.com/upload')

}

it.only('Execute Async Javascript Code', async () => {
    const result = await browser.executeAsync(
        (a, b, done) => {
        setTimeout(() => {
        done(a + b)
    }, 3000)
},
5,
10
)
await expect(result).toBe(15)
})
})


