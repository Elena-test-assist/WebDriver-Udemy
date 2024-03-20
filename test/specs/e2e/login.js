describe.skip("Login Flow", () => {
    before(async() => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })
    it("Should not login with invalid username and password", async() =>{
        await browser.waitAndClick('#signin_button')
        await $('#login_form').waitForDisplayed()
        await $('#user_login').setValue('test')
        await $('#user_password').setValue('test')
        await $('input[type="submit"]').click()
        //verify error message
        const errorMessage = await $('.alert-error')
        await expect(errorMessage).toHaveTextContaining('Login and/or password are wrong.')
    })



it("Reset account password" , async() => {
    const email = 'test@test.com'
    await browser.waitAndClick('*=Forgot')
    await $('#user_email').waitForDisplayed()
    await $('#user_email').setValue(email)
    await $('input[type="submit"]').click()
    //Verify the message
    const message = await $('.span6')
    await expect(message).toHaveTextContaining('Your password will be sent to the following email: test@test.com')

})

})