import searchForPIM from '../pageobjects/feature.orangeHRM.js'

describe("Search for a feature in the sidebar of the dashboard", ()=>{
    it(" Should enter a feature name which is PIM", async()=>{
        await searchForPIM.searchPlayPIM('pim')
    })    
})

