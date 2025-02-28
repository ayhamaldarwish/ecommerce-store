import React, { useState } from 'react'
import Ratting from "../components/Ratting";

const reviwtitle = "Add a Review";

let ReviewList = [ 
    { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className='desc' onClick={()=> setReviewShow(!reviewShow)}>Description</li>
            <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews4</li>
        </ul>

        {/* decs and review content */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
          <div className="review-showing">
            <ul className="content lab-ul">
              {
                ReviewList.map((review , i) => (
                  <li key={i}>
                    <div className='post-thumb'>
                      <img src={review.imgUrl} alt={review.imgAlt} />
                    </div>
                    <div className="post-content">
                      <div className="entry-meta">
                        <div className="posted-on">
                          <a href="">{review.name}</a>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <div className="entry-content">
                        <p>{review.desc}</p>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>

            {/* add review field */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviwtitle}</h5>
                </div>
                <form action="action" className='row'>
                  <div className="col-md-4 col-12">
                    <input type="text" name='name' id='name' placeholder='Full Name *' />
                  </div>
                  <div className="col-md-4 col-12">
                    <input type="text" name='email' id='email' placeholder='Your Email *' />
                  </div>
                  <div className="col-md-4 col-12">
                    <div>
                      <span className="me-2">Your Rating</span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                      <textarea name="massage" id="massage" rows="8" placeholder='Typr Here Massage'></textarea>
                  </div>
                  <div className="col-12">
                    <button type='submit' className='default-button'> 
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* description */}
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora facilis amet similique, dolore quidem sed. Delectus eveniet non facilis, consequatur eaque repellendus debitis modi error velit nesciunt fuga natus soluta numquam? Odio ut maxime quis, iusto minus dolor porro odit exercitationem harum numquam sunt commodi? Consectetur nihil corrupti illo
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora facilis amet similique, dolore quidem sed. Delectus eveniet non facilis, consequatur eaque repellendus debitis modi error velit nesciunt fuga natus soluta numquam? Odio ut maxime quis, iusto minus dolor porro odit exercitationem harum numquam sunt commodi? Consectetur nihil corrupti illo
            </p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="blog thumb" />
              </div>
              <div className="post-content">
                <ul className='lab-ul'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id.</li>
                  <li> sit amet consectetur adipisicing elit. Libero, id.</li>
                  <li> dolor sit amet consectetur adipisicing elit. Libero, id.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id.</li>
                  <li>amet consectetur adipisicing elit. Libero, id.</li>
                </ul>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora facilis amet similique, dolore quidem sed. Delectus eveniet non facilis, consequatur eaque repellendus debitis modi error velit nesciunt fuga natus soluta numquam? Odio ut maxime quis, iusto minus dolor porro odit exercitationem harum numquam sunt commodi? Consectetur nihil corrupti illo
              Delectus eveniet non facilis, consequatur eaque repellendus debitis modi error velit nesciunt fuga natus soluta numquam? Odio ut maxime quis, iusto minus dolor porro odit exercitationem harum numquam sunt commodi? Consectetur nihil corrupti illo
            </p>
          </div>
        </div>
    </>
  )
}

export default Review