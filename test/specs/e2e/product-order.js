describe("Sauce Demo - Product Order", () => {
    before(async () => {
        //Here goes login
        browser.url("https://www.saucedemo.com/")
        await browser.sauceLogin()
    })

    after(async() => {
        //Here goes log out
        await browser.sauceLogout()
    })

    it('Should complete product order', async() =>{
        //Put product into shopping cart
        await $('#inventory_container').waitForDisplayed()
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await $('.shopping_cart_link').click()
     

        //Assert the shopping cart
        await $('.cart_list').waitForDisplayed()
        await $('[data-test ="checkout"]').click()

        //Fill customer information
        const firstName = "Peter"
        const lastName = "Angelo"
        const postalCode = "112233"
        await $('.checkout_info').waitForDisplayed()
        await $('[data-test="firstName"]').setValue(firstName)
        await $('[data-test="lastName"]').setValue(lastName)
        await $('[data-test="postalCode"]').setValue(postalCode)
        await $('[data-test="continue"]').click()


        //Assert the final order overview
        
        await $('.cart_list').waitForDisplayed()
        await $('.summary_info').waitForDisplayed()
        await $('[data-test="finish"]').click()
        const message = $('.complete-header')
        await expect(message).toHaveTextContaining('Thank you for your order!')

})
})