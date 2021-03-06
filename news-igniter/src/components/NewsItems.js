import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

export default class NewsItems extends Component {
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string,

    }
    static defaultProps = {
        pageSize: 6,
        category: "general",
        country: "in",

    }

//  newsContent = 
//          [
//             {
//                 "source": {
//                     "id": "techcrunch",
//                     "name": "TechCrunch"
//                 },
//                 "author": "Kyle Wiggers",
//                 "title": "Business intelligence and analytics firm Pyramid Analytics raises $100M",
//                 "description": "Pyramid Analytics, a company developing a platform to help businesses analyze and otherwise make use of their data, has raised $100 million in a venture round.",
//                 "url": "https://techcrunch.com/2022/05/09/business-intelligence-and-analytics-firm-pyramid-analytics-raises-100m/",
//                 "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-1019624746.jpg?w=600",
//                 "publishedAt": "2022-05-09T10:00:06Z",
//                 "content": "Business intelligence is an increasingly well-funded category in the software-as-a-service market. By handling large amounts of data to analyze and benchmark lines of business, BI promises to help id… [+5138 chars]"
//             },
//             {
//                 "source": {
//                     "id": "abc-news-au",
//                     "name": "ABC News (AU)"
//                 },
//                 "author": "Emma Haskin",
//                 "title": "Alice Springs crime sprees mean residents, businesses 'no longer feel safe'",
//                 "description": "Several cars have been stolen in Alice Springs overnight with one of the vehicles used to ramraid two businesses in the town.",
//                 "url": "http://www.abc.net.au/news/2022-05-09/alice-springs-mayor-and-ceo-blast-crime-culture/101048844",
//                 "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9c6c05fee1b9f47d28e5b65d2742f14a?impolicy=wcms_crop_resize&cropH=253&cropW=450&xPos=0&yPos=173&width=862&height=485",
//                 "publishedAt": "2022-05-09T09:20:06Z",
//                 "content": "The Alice Springs mayor is pleading for an immediate circuit-breaker to the ongoing crime crisis in the central Australian town, saying residents no longer feel safe in their homes and their mental h… [+3734 chars]"
//             },
//             {
//                 "source": {
//                     "id": "cbc-news",
//                     "name": "CBC News"
//                 },
//                 "author": "CBC News",
//                 "title": "This B.C. business nearly lost $18K because of Shopify's mistake | CBC News",
//                 "description": "When a customer complained he hadn't received his merchandise, this B.C. company sent ample evidence to the contrary to Shopify. But Shopify didn't sent it to the investigating bank, nearly costing the merchants some $18,000. One expert says the credit card i…",
//                 "url": "http://www.cbc.ca/news/gopublic/shopify-chargeback-domes-1.6443144",
//                 "urlToImage": "https://i.cbc.ca/1.6443097.1651796683!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/business-owners-frustrated-with-shopify-service.jpg",
//                 "publishedAt": "2022-05-09T08:22:25.5360723Z",
//                 "content": "When the pandemic hit, Channing Qian knew he would have to do something extra to keep customers safe and his business afloat. His three coffee shops in Victoria were being impacted by provincial rest… [+8658 chars]"
//             },
//             {
//                 "source": {
//                     "id": "australian-financial-review",
//                     "name": "Australian Financial Review"
//                 },
//                 "author": "Gus McCubbing",
//                 "title": "Sri Lanka economic crisis is personal for Origin Tea founders and brothers Chris and Lawrence Seaton",
//                 "description": "The Brisbane-based business that produces Sri Lankan tea is navigating the South Asian nation’s worst economic crisis since independence in 1948.",
//                 "url": "http://www.afr.com/companies/retail/sri-lanka-crisis-is-personal-for-brisbane-tea-brothers-20220502-p5ahpt",
//                 "urlToImage": "https://static.ffx.io/images/$zoom_0.2468%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_255%2C$y_44/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/d3e5906174ce06dc9f844fbd2194134536489fdf",
//                 "publishedAt": "2022-05-09T07:19:51Z",
//                 "content": "Sri Lankan families dont even have gas bottles, so they can cook and put food on the table, he said.\r\nInflation there is heading towards 30 per cent, which puts all of the cost of living and interest… [+3234 chars]"
//             },
//             {
//                 "source": {
//                     "id": "google-news-uk",
//                     "name": "Google News (UK)"
//                 },
//                 "author": "Sam Fleming",
//                 "title": "EU should seize Russian reserves to rebuild Ukraine, top diplomat says",
//                 "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
//                 "url": "https://news.google.com/__i/rss/rd/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzgyYjA0NDRmLTg4OWEtNGYzZC04ZGJjLTFkMDQxNjI4MDdmM9IBAA?oc=5",
//                 "urlToImage": null,
//                 "publishedAt": "2022-05-09T04:01:50+00:00",
//                 "content": "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]"
//             },
//             {
//                 "source": {
//                     "id": "the-globe-and-mail",
//                     "name": "The Globe And Mail"
//                 },
//                 "author": "Andrew Willis",
//                 "title": "Rogers failed to listen to Ottawa, and now its Shaw deal is in jeopardy",
//                 "description": "Rogers faces the one outcome of this $26-billion takeover it desperately wanted to avoid: handing rival Quebecor a cellphone business with two million customers as the price for being allowed to take over Shaw’s cable network in Western Canada",
//                 "url": "https://www.theglobeandmail.com/business/commentary/article-rogers-failed-to-listen-to-ottawa-and-now-its-shaw-deal-is-in-jeopardy/",
//                 "urlToImage": "https://www.theglobeandmail.com/resizer/rBi36a8SaYjxaye-vU2lTpUEct4=/1200x733/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/SX55KGDZAFN6RDSYSBTNZYJ4B4.jpg",
//                 "publishedAt": "2022-05-08T17:11:21Z",
//                 "content": "Rogers alienated the Competition Bureau by offering to sell Freedom to rural internet provider Xplornet Communications, which is owned by a U.S. private equity fund, and botched an opportunity to bui… [+5250 chars]"
//             },
//             {
//                 "source": {
//                     "id": "techcrunch",
//                     "name": "TechCrunch"
//                 },
//                 "author": "Ron Miller",
//                 "title": "How will tech companies cope with an office-free future?",
//                 "description": "Depending on your business, your job, and your living situation, the pandemic showed that many workers didn't need to be sitting in a cubby farm inside a big building to get their jobs done.",
//                 "url": "https://techcrunch.com/2022/05/08/how-will-tech-companies-cope-with-an-office-free-future/",
//                 "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-102871188.jpg?w=568",
//                 "publishedAt": "2022-05-08T16:00:53Z",
//                 "content": "What’s to become of the tech company office, and how do companies function without the structure that working together in the same building has traditionally provided us? That’s a monumental question… [+1532 chars]"
//             },
//             {
//                 "source": {
//                     "id": "fortune",
//                     "name": "Fortune"
//                 },
//                 "author": "François Candelon, Bowen Ding, Matthieu Gombeaud",
//                 "title": "Getting the balance right: 3 keys to perfecting the human-A.I. combination for your business",
//                 "description": "Domino's Pizza, IBM's Watson, and miner Rio Tinto offer roadmaps for getting the most out of A.I.",
//                 "url": "https://fortune.com/2022/05/06/ai-artificial-intelligence-human-collaboration-watson-dominos-pizza/",
//                 "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1250588926-e1651666023462.jpg?resize=1200,600",
//                 "publishedAt": "2022-05-06T09:30:00Z",
//                 "content": "Skip to Content"
//             },
//             {
//                 "source": {
//                     "id": "fortune",
//                     "name": "Fortune"
//                 },
//                 "author": "Daryl Brewster",
//                 "title": "It’s time for companies to do less",
//                 "description": "It's hard to believe that any business can really make an impact on all the priorities and causes it says it espouses.",
//                 "url": "https://fortune.com/2022/05/05/esg-investing-corporate-governance-social-responsibility-less-leadership-daryl-brewster/",
//                 "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-874588730-e1651758861851.jpg?resize=1200,600",
//                 "publishedAt": "2022-05-05T14:15:00Z",
//                 "content": "Skip to Content"
//             },
//             {
//                 "source": {
//                     "id": "recode",
//                     "name": "Recode"
//                 },
//                 "author": "Rebecca Heilweil",
//                 "title": "How America is trying to get back in the microchip business",
//                 "description": "A billion-dollar chip factory just opened in upstate New York. The Biden administration wants more.",
//                 "url": "https://www.vox.com/recode/23048906/chip-shortage-manufacturing-america-biden",
//                 "urlToImage": "https://cdn.vox-cdn.com/thumbor/ld58lxzGJlZgXqGAILPj9CKWDU0=/0x55:3600x1940/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23426615/GettyImages_1366084847.jpg",
//                 "publishedAt": "2022-05-02T12:00:00Z",
//                 "content": "MARCY, New York From afar, the new Wolfspeed factory in upstate New York looks like any other large corporate office building, with an unassuming gray exterior and large glass windows. But hidden ins… [+16696 chars]"
//             },
//             {
//                 "source": {
//                     "id": "recode",
//                     "name": "Recode"
//                 },
//                 "author": "Peter Kafka",
//                 "title": "Twitter is a lousy business. What’s Elon Musk’s plan?",
//                 "description": "Twitter has ideas about how Elon Musk can fix Twitter.",
//                 "url": "https://www.vox.com/recode/23041717/twitter-musk-business-plan-peter-kafka-column",
//                 "urlToImage": "https://cdn.vox-cdn.com/thumbor/f306ccfPdDeLSKV5AOWg3LIazHQ=/0x411:5792x3443/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23415669/1238367474.jpg",
//                 "publishedAt": "2022-04-25T21:28:10Z",
//                 "content": "Congratulations, Elon Musk? \r\nEleven days ago you told the world you wanted to buy Twitter for $43 billion dollars, which generated some skepticism. Now it looks like youre really going to do it.* Fo… [+7011 chars]"
//             },
//             {
//                 "source": {
//                     "id": "financial-post",
//                     "name": "Financial Post"
//                 },
//                 "author": "Financial Post",
//                 "title": "Financial Post",
//                 "description": "Read through unique Editorials and Business &amp; Finance columns from our top editors covering current events.",
//                 "url": "http://business.financialpost.com/category/opinion/",
//                 "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
//                 "publishedAt": "2022-02-20T02:07:22.9503753Z",
//                 "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
//             },
//             {
//                 "source": {
//                     "id": "financial-post",
//                     "name": "Financial Post"
//                 },
//                 "author": "Financial Post",
//                 "title": "Financial Post",
//                 "description": "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
//                 "url": "https://financialpost.com/category/personal-finance/business-essentials/",
//                 "urlToImage": "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png",
//                 "publishedAt": "2022-02-20T00:52:24.7949372Z",
//                 "content": "365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n © 2022 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmission or republication strictly p… [+9 chars]"
//             },
//             {
//                 "source": {
//                     "id": "time",
//                     "name": "Time"
//                 },
//                 "author": "Martha C. White",
//                 "title": "Small Businesses Need Help Again. But More Stimulus Could Be Risky",
//                 "description": "The speedy spread of the omicron variant hobbled businesses small and large alike. But this time around, they've had to fend for themselves.",
//                 "url": "http://time.com/6141108/small-business-stimulus-inflation-covid-19/",
//                 "urlToImage": "https://api.time.com/wp-content/uploads/2022/01/us-store-closing.jpg?quality=85&w=1200&h=628&crop=1",
//                 "publishedAt": "2022-01-24T17:00:30Z",
//                 "content": "An unexpected jump in new jobless claims the week of Jan. 15 dredged up the kind of bad news that economists fretted had been lurking under the surface of an improving economic picture: The speedy sp… [+5731 chars]"
//             },
//             {
//                 "source": {
//                     "id": "financial-times",
//                     "name": "Financial Times"
//                 },
//                 "author": null,
//                 "title": "‘Money is no object’: Ghislaine Maxwell trial shines light on class divide",
//                 "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
//                 "url": "https://www.ft.com/content/0b9d93da-1687-4eb1-bd53-0a84a1b40dff",
//                 "urlToImage": null,
//                 "publishedAt": "2021-12-14T06:22:29.1165883Z",
//                 "content": "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]"
//             },
//             {
//                 "source": {
//                     "id": "financial-times",
//                     "name": "Financial Times"
//                 },
//                 "author": null,
//                 "title": "Need relief from the stress of screen time? There’s an app for that",
//                 "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
//                 "url": "https://www.ft.com/content/221cf7c4-56e7-4c7e-b6c0-cc3737da0330",
//                 "urlToImage": null,
//                 "publishedAt": "2021-12-14T06:22:27.4295096Z",
//                 "content": "Let our global subject matter experts broaden your perspective with timely insights and opinions you\r\ncant find anywhere else."
//             },
//             {
//                 "source": {
//                     "id": "financial-post",
//                     "name": "Financial Post"
//                 },
//                 "author": "Financial Post",
//                 "title": "News",
//                 "description": "Latest breaking business news &amp; headlines. Stay in touch with the latest happenings in Local and International organizations and financial sector.",
//                 "url": "http://business.financialpost.com/category/news/",
//                 "urlToImage": null,
//                 "publishedAt": "2020-07-09T18:37:17.5638279Z",
//                 "content": "Visit the Postmedia Brands page\r\n365 Bloor Street East, Toronto, Ontario, M4W 3L4\r\n© 2020 Financial Post, a division of Postmedia Network Inc. All rights reserved. Unauthorized distribution, transmis… [+41 chars]"
//             }
//         ]
    

   state = {
        articles: [],
        page: 1,
        loading: false
    }
    
   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d0ac94eacd98463fb475ea35f6608dfb&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
       let newsContent = await fetch(url)
       let newsContentParsed = await newsContent.json();
       
       this.setState({articles: newsContentParsed.articles, totalResults: newsContentParsed.totalResults, loading: false});
    }

    handlePrevbtn = async ()=>{
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d0ac94eacd98463fb475ea35f6608dfb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});

        let newsContent = await fetch(url)
        let newsContentParsed = await newsContent.json();
        
        this.setState({articles: newsContentParsed.articles, page: this.state.page-1, loading: false});

    }
    handleNextbtn = async ()=>{
        if (!(this.state.page>= Math.ceil(this.state.totalResults/this.props.pageSize))){
            
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d0ac94eacd98463fb475ea35f6608dfb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let newsContent = await fetch(url)
        let newsContentParsed = await newsContent.json();
        
        this.setState({articles: newsContentParsed.articles, page: this.state.page+1, loading: false});
        }
        else{
       
    }
}

  render() {
 
    return (
        <div className="container my-5">
     <div className="row ">
         <h2 className='text-center mb-4'>Today's top headlines</h2>
         {this.state.loading && <Spinner/>}
         {!this.state.loading && this.state.articles.map((news,index)=>{
            
             return <div key={index} className="col-md-4 my-3">
             <NewsItem  title= {news.title? news.title.slice(0, 40): ""} description= {news.description? news.description.slice(0, 100): ""} url={news.url} urlToImage={news.urlToImage? news.urlToImage: "https://live-production.wcms.abc-cdn.net.au/9c6c05fee1b9f47d28e5b65d2742f14a?impolicy=wcms_crop_resize&cropH=253&cropW=450&xPos=0&yPos=173&width=862&height=485" }/>
         </div>
         })}
         <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevbtn}>&laquo; Previous</button>
             <button disabled={this.state.page>= Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextbtn}>Next &raquo;</button>
         </div>

         
         </div>


     </div>
    )
  }
}
