import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Newsitem extends Component {
  articles = [
    {
      "source": { "id": null, "name": "Eonline.com" },
      "author": "Kelly Gilmore",
      "title": "Eric Holder Jr. Sentenced to 60 Years to Life in Prison for Nipsey Hussle Murder - E! NEWS",
      "description": "In the case of Nipsey Hussle’s 2019 murder, Eric Holder Jr. was sentenced to 60 years to life in prison on Feb. 22. Learn about the late rapper’s tragic death.",
      "url": "https://www.eonline.com/news/1365811/eric-holder-jr-sentenced-to-60-years-to-life-in-prison-for-nipsey-hussle-murder",
      "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023122/rs_1200x1200-230222144921-1200-nipsey-hussle.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      "publishedAt": "2023-02-23T08:07:58Z",
      "content": "Eric Holder Jr. has learned his fate. \r\nNearly four years after Nipsey Husslewas killed during a shooting outside his Los Angeles clothing store, Holder was sentenced on Feb. 22 to 60 years to life i… [+624 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Tamara Hardingham-Gill",
      "title": "More than 1,700 flights canceled as winter storm hits US - CNN",
      "description": "More than 1,700 flights were canceled Wednesday with Minneapolis−Saint Paul International Airport and Denver International Airport hard hit as storm brings snow and ice across the United States.",
      "url": "https://www.cnn.com/travel/article/winter-storm-us-flight-cancellations/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230222120208-flights-colorado-weather-022223.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-02-23T07:24:00Z",
      "content": "More than 1,700 flights were canceled in the United States on Wednesday as a winter storm hit the country, with disruptions set to continue through Thursday. \r\nBy the end of the day, a total of 1,771… [+1725 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Magnitude 7.2 earthquake strikes Tajikistan, near border with China - Reuters",
      "description": "An earthquake of about 7.2 magnitude shook Tajikistan at 8:37 a.m. (0037 GMT) on Thursday at a depth of 10 km (6 miles), Chinese state television CCTV reported，citing the China Earthquake Networks Center.",
      "url": "https://www.reuters.com/world/china-reports-magnitude-73-earthquake-near-border-with-tajikistan-2023-02-23/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=131",
      "publishedAt": "2023-02-23T06:18:00Z",
      "content": "BEIJING, Feb 23 (Reuters) - An earthquake of about 7.2 magnitude shook Tajikistan at 8:37 a.m. (0037 GMT) on Thursday at a depth of 10 km (6 miles), Chinese state television CCTV reportedciting the C… [+695 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": "Marina Pitofsky, Christine Fernando and Thao Nguyen, USA TODAY",
      "title": "Wednesday weather forecast: Winter storm warnings, blizzard, ice in US - USA TODAY",
      "description": "Residents in Western states and the Plains have faced severe winter weather for several days and may see blizzard conditions and significant snowfall.",
      "url": "https://www.usatoday.com/story/news/weather/2023/02/22/wednesday-forecast-winter-weather-0222/11316127002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/12/23/USAT/8094e0d5-b56d-4e1a-8a2d-61180a6016da-AP_APTOPIX_Winter_Weather.jpg?auto=webp&crop=7431,4180,x0,y378&format=pjpg&width=1200",
      "publishedAt": "2023-02-23T06:11:15Z",
      "content": "A brutal winter storm that has stretched 2,600 miles coast to coast battered states from the West to the East Coast on Wednesday, moving into parts of Pennsylvania, New York and New England.\r\nThe sto… [+6125 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Lim Hui Jie",
      "title": "Asia markets mixed as Fed minutes signaled more hikes ahead; Bank of Korea holds rates - CNBC",
      "description": "Asia markets are trading mixed after the release of the FOMC minutes from the U.S. Federal Reserve",
      "url": "https://www.cnbc.com/2023/02/23/asia-pacific-markets-set-to-fall-as-investors-digest-fed-minutes.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107198572-1677118969916-gettyimages-1243953866-AFP_32LD92C.jpeg?v=1677119008&w=1920&h=1080",
      "publishedAt": "2023-02-23T06:09:02Z",
      "content": "Chinese authorities have asked some state-owned enterprises to phase out using the big four U.S. accounting firms, citing data security concerns, Bloomberg News reported, citing people familiar with … [+686 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Israel attacks Gaza after rocket fire, deadly Nablus raid - Al Jazeera English",
      "description": "Israel attacks Gaza as tensions rise over an Israeli raid on the West Bank city of Nablus that killed 11 Palestinians.",
      "url": "https://www.aljazeera.com/news/2023/2/23/rockets-fired-from-gaza-towards-israel-after-nablus-raid",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/02/339U4YY-highres-1.jpg?resize=1200%2C675",
      "publishedAt": "2023-02-23T05:26:17Z",
      "content": "Israel has bombed the Gaza Strip after Palestinian fighters launched several rockets from the besieged coastal enclave amid tensions over an Israeli raid that killed at least 11 Palestinians in the o… [+5180 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "Alabama's Brandon Miller scores 41 in OT win one day after link to murder case comes out - CBS Sports",
      "description": "Alabama's athletic director explained why Miller was active prior to the game on Wednesday",
      "url": "https://www.cbssports.com/college-basketball/news/alabamas-brandon-miller-scores-41-in-ot-win-one-day-after-link-to-murder-case-comes-out/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/02/23/9b6a756a-2e74-44a3-823e-7d8a42c6e732/thumbnail/1200x675/a0c159ab79a2e6a5e6b467e3d6e8e6bc/brandon-miller.jpg",
      "publishedAt": "2023-02-23T05:24:00Z",
      "content": "No. 2 Alabama escaped an upset scare on the road from South Carolina with a 78-76 win in overtime thanks to a career-high 41 points from star freshman Brandon Miller on Wednesday. It was a highly com… [+2793 chars]"
    },
    {
      "source": { "id": null, "name": "ESPN" },
      "author": null,
      "title": "United States vs. Brazil - Football Match Report - February 22, 2023 - ESPN",
      "description": "Get a report of the United States vs. Brazil 2023 SheBelieves Cup football match.",
      "url": "https://www.espn.com/soccer/report/_/gameId/658831",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0223%2Fr1135086_1296x729_16%2D9.jpg",
      "publishedAt": "2023-02-23T03:33:45Z",
      "content": "Alex Morgan and Mallory Swanson scored, and the United States defeated Brazil 2-1 on Wednesday night to win the SheBelieves Cup for the fourth straight year.\r\nJapan, which defeated Canada 3-0 in the … [+2878 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Nicki Cox",
      "title": "Kim Zolciak's daughters deny 'crazy' rumors that Georgia home is in foreclosure - Page Six",
      "description": "Fulton County revealed last week that the mansion will be auctioned off on March 7 after Kim and Kroy Biermann defaulted on a $1.65 million loan.",
      "url": "https://pagesix.com/2023/02/22/kim-zolciaks-daughters-deny-crazy-foreclosure-rumors/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/NYPICHPDPICT000007092228.jpg?quality=75&strip=all&w=1200",
      "publishedAt": "2023-02-23T02:45:00Z",
      "content": "Kim Zolciak’s oldest daughters, Brielle and Ariana Biermann, slammed the “crazy” rumors that their Georgia mansion is in foreclosure and set to be auctioned off.\r\n“Don’t believe everything you hear,”… [+1645 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Ashley Strickland",
      "title": "Webb telescope makes a surprising galactic discovery in the distant universe - CNN",
      "description": "Astronomers have used the James Webb Space Telescope to peer back in time to the early days of the universe and saw something surprising. They observed six massive galaxies much larger than what was expected to exist so soon after the big bang.",
      "url": "https://www.cnn.com/2023/02/22/world/webb-telescope-massive-early-galaxies-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230222095505-webb-massive-galaxies.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-02-23T02:36:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers have used the James Webb Space Telescope t… [+4169 chars]"
    },
    {
      "source": { "id": null, "name": "NPR" },
      "author": "",
      "title": "Unlikely alliances in Supreme Court opinions on overtime, death penalty - NPR",
      "description": "The cases involved who qualifies for overtime pay, and Arizona's refusal to apply a Supreme Court precedent in death penalty jury instructions.",
      "url": "https://www.npr.org/2023/02/22/1158903079/unlikely-alliances-in-supreme-court-opinions-on-overtime-death-penalty",
      "urlToImage": "https://media.npr.org/assets/img/2023/02/22/gettyimages-1243795466-2-_wide-a55646dc09e9ff2cd1a91e9b8a9a53983faff6b4-s1400-c100.jpg",
      "publishedAt": "2023-02-23T02:14:43Z",
      "content": "Justices of the U.S. Supreme Court\r\nOlivier Douliery /AFP via Getty Images\r\nThe U.S. Supreme Court defied its usual 6-to-3 conservative/liberal split in two decisions on Wednesday. One involved who q… [+3593 chars]"
    },
    {
      "source": { "id": null, "name": "Los Angeles Times" },
      "author": "Grace Toohey",
      "title": "Mt. Baldy could get 8 feet of snow this week - Los Angeles Times",
      "description": "Forecasts show Southern California mountains could get 6 inches to 5 feet of snow by Saturday, but some of the highest peaks could get up to 8 feet.",
      "url": "https://www.latimes.com/california/story/2023-02-22/mt-baldy-could-get-up-to-8-feet-of-snow-this-week",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/a057804/2147483647/strip/true/crop/4032x2117+0+454/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7c%2Fa2%2Faa66f7dc4c819ea3d5a8fe811350%2Fla-hm-chris-erskine-mt-baldy-postcard.jpg",
      "publishedAt": "2023-02-23T02:08:00Z",
      "content": "Mt. Baldy could get up to 8 feet of snow or more this week from the likely historic winter storm expected to dump rain and snow and bring strong winds across Southern California.\r\nLos Angeles Countys… [+1675 chars]"
    },
    {
      "source": { "id": "nbc-news", "name": "NBC News" },
      "author": "Uwa Ede-Osifo",
      "title": "Witness in Alex Murdaugh's double murder trial describes chaotic crime scene - NBC News",
      "description": "The defense for Alex Murdaugh called into question the integrity of the crime scene in the second day of their case",
      "url": "https://www.nbcnews.com/news/us-news/witness-alex-murdaughs-double-murder-trial-describes-chaotic-crime-sce-rcna71809",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230222-alex-murdaugh-ew-347p-c10f91.jpg",
      "publishedAt": "2023-02-23T01:56:00Z",
      "content": "The defense for Alex Murdaugh, the disgraced South Carolina lawyer accused of killing his wife and a son, called into question the integrity of the crime scene in the second day of their case while a… [+4740 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Amy Gardner, Matthew Brown",
      "title": "Georgia juror unsettles Trump investigation with revealing interviews - The Washington Post",
      "description": "Emily Kohrs may have added to the challenge for Fulton County District Attorney Fani Willis, whose investigation has come under scrutiny.",
      "url": "https://www.washingtonpost.com/politics/2023/02/22/georgia-juror-unsettles-trump-investigation-with-revealing-interviews/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/62OSXNVSBSKOQMNN6TMV7IENJE_size-normalized.jpg&w=1440",
      "publishedAt": "2023-02-23T01:47:03Z",
      "content": "Comment on this story\r\nThe forewoman of a special grand jury in Georgia may have complicated an investigation into efforts by former president Donald Trump and his allies to overturn the results of t… [+9476 chars]"
    },
    {
      "source": { "id": null, "name": "Los Angeles Times" },
      "author": "JONATHAN J. COOPER",
      "title": "Then-Arizona attorney general sat on records denying election fraud - Los Angeles Times",
      "description": "Arizona’s former attorney general suppressed findings by his investigators who concluded there was no basis for allegations that the 2020 election was marred by widespread fraud.",
      "url": "https://www.latimes.com/world-nation/story/2023-02-22/former-arizona-ag-sat-on-records-refuting-election-fraud",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/fb6e035/2147483647/strip/true/crop/3600x1890+0+255/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3b%2F26%2Fee4889eab23ff5731ec6fff54657%2F130e5b3ca0ed4aaeb8860858c6c2b630",
      "publishedAt": "2023-02-23T01:13:00Z",
      "content": "PHOENIX  Arizonas former attorney general suppressed findings by his investigators who concluded there was no basis for allegations that the 2020 election was marred by widespread fraud, according to… [+5674 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "As chatbots boom, Nvidia sales outlook beats Wall Street expectations - Reuters",
      "description": "Chip designer Nvidia Corp <a href=\"https://www.reuters.com/companies/NVDA.O\" target=\"_blank\">(NVDA.O)</a> forecast first-quarter revenue above Wall Street estimates on Wednesday as its CEO said use of its chips to power artificial intelligence (AI) services l…",
      "url": "https://www.reuters.com/technology/nvidia-forecasts-first-quarter-revenue-above-expectations-2023-02-22/",
      "urlToImage": "https://www.reuters.com/resizer/C3gJAlFgV9HC7n1xfw9LTXIRRCQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JSYJOX6QRZP4LKWE4FD3AM7KXE.jpg",
      "publishedAt": "2023-02-23T00:36:00Z",
      "content": "Feb 22 (Reuters) - Chip designer Nvidia Corp (NVDA.O) forecast first-quarter revenue above Wall Street estimates on Wednesday as its CEO said use of its chips to power artificial intelligence (AI) se… [+3353 chars]"
    },
    {
      "source": { "id": null, "name": "Entertainment Tonight" },
      "author": "Mona Khalifeh",
      "title": "Jennifer Lopez Celebrates Twins Emme and Max's 15th Birthday With Personal Tribute: Watch! - Entertainment Tonight",
      "description": "Lopez shares the twins with ex-husband, Marc Anthony.",
      "url": "https://www.etonline.com/jennifer-lopez-celebrates-twins-emme-and-maxs-15th-birthday-with-personal-tribute-watch-199625",
      "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2023-02/MK-Jennifer-Lopez%2C-Emme-and-Max-1280-X-720-HERO-1-IMAGE.jpg?h=c673cd1c&itok=_aFieJCi",
      "publishedAt": "2023-02-23T00:32:38Z",
      "content": "Jennifer Lopez is celebrating a major milestone in her kids' life. Lopez took to Instagram Wednesday to pay tribute to her twins, Max and Emme, in honor of their 15th birthday. Sharing a video set to… [+2062 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Maegan Vazquez, Pete Muntean, Aileen Graef",
      "title": "East Palestine derailment spurs rare signs of bipartisan agreement on rail safety. Will Washington act? - CNN",
      "description": "A fiery train wreck that released toxic materials in an Ohio town is raising new questions in the halls of the nation's capital over the regulation of the rail industry and if stricter measures could have prevented the disaster.",
      "url": "https://www.cnn.com/2023/02/22/politics/east-palestine-washington-regulations/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220821160123-pete-buttigieg-biden-administration-tries-to-sell-infrastructure-projects.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-02-23T00:22:00Z",
      "content": "Editors Note: Watch East Palestine, Ohio, residents pose questions to Norfolk Southern CEO Alan Shaw, Ohio Gov. Mike DeWine and EPA Administrator Michael Regan. A CNN Town Hall: Toxic Train Disaster,… [+10705 chars]"
    },
    {
      "source": { "id": null, "name": "Variety" },
      "author": "K.J. Yossman",
      "title": "Massive David Bowie Archive Acquired by V&A Museum in London - Variety",
      "description": "The V&A Museum in London has acquired a massive, 80,000-piece archive of material from the estate of David Bowie, it confirmed today. The archive contains items including handwritten notebooks,…",
      "url": "https://variety.com/2023/music/global/david-bowie-archive-va-museum-london-1235531990/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/02/Collage-Maker-22-Feb-2023-05.20-PM.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2023-02-23T00:01:00Z",
      "content": "The V&amp;A Museum in London has acquired a massive, 80,000-piece archive of material from the estate of David Bowie, it confirmed today.\r\nThe archive contains items including handwritten notebooks, … [+4474 chars]"
    },
    {
      "source": { "id": "bloomberg", "name": "Bloomberg" },
      "author": null,
      "title": "Apple Watch Blood Glucose Monitor Could Revolutionize Diabetes Care (AAPL) - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=1c2c7ee4-b357-11ed-8139-6c6c54625477&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMi0yMi9hcHBsZS13YXRjaC1ibG9vZC1nbHVjb3NlLW1vbml0b3ItY291bGQtcmV2b2x1dGlvbml6ZS1kaWFiZXRlcy1jYXJlLWFhcGw=",
      "urlToImage": null,
      "publishedAt": "2023-02-22T23:51:47Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    }
  ]
  constructor() {
    super();
    console.log(this.articles);
    this.state = {
      article: this.articles,
      loading: false
    }

  }
  render() {
    // let { title, description, imageUrl } = this.props;

    return (
      <div className=' row d-flex flex-wrap '>
        {this.articles.map(artical => {
          return(
          <>
          <div className="col-md-4 mb-3">
            <Card className="card">
              <Card.Img variant="top" className='img-fluid' src={artical.urlToImage}  />
              <Card.Body>
                <Card.Title>{artical.title}</Card.Title>
                <Card.Text>
                  {artical.content}
                </Card.Text>
                {/*   <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
          </>
          )
        })}

      </div>
    )
  }
}

export default Newsitem
