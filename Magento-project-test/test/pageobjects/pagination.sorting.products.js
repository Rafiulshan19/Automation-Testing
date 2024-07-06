class paginationForProducts{
    get moreProductByPagination(){
        return $('#limiter')
    }
    get sortProduct(){
        return $('#sorter')
    }

    async selectValueForMoreProducts(){
        const item = this.moreProductByPagination
        item.selectByIndex(2)
    }

    async selectOptionForSortingProducts(){
        const sortItem = this.sortProduct
        sortItem.selectByAttribute("value","name")
    }
}

export default new paginationForProducts()