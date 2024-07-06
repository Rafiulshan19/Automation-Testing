class menuBar{
    get categoryFromMenu(){
        return $('a[id="ui-id-5"]')
    }

    async clickOnCateroyInMennuBar(){
        (await this.categoryFromMenu).click()
    }
}

export default new menuBar()