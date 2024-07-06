class selectImage{
    get image(){
        return $('img[src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-pants.jpg"]')
    }

    async clickOnImage(){
        (await this.image).click()
    }
}

export default new selectImage()