describe("Login Flow", () => {
    before(async() => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })
    it("Should not login with invalid username and password", async() =>{
        await browser.waitAndClick('#signin_button')
        //fill in the form
        await $('#login_form').waitForDisplayed()
        //submit the form
        //verify error message
    })
})