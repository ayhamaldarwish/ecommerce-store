import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ 
    { link: "#", iconName: "icofont-facebook", className: "facebook", }, 
    { link: "#", iconName: "icofont-twitter", className: "twitter", }, 
    { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, 
    { link: "#", iconName: "icofont-instagram", className: "instagram", }, 
    { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, 
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const {id} = useParams();
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
  return (
    <div>
        <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

        <div className="blog-section blog-single padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center">

                    {/* left side */}
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="section-wrapper">
                                <div className="row row-cols-1 justify-content-center gap-4">
                                    <div className="col">
                                        <div className="post-item style-2">
                                            <div className="post-inner">
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className="post-thumb">
                                                                <img src={item.imgUrl} className='w-100' alt="Blog Image"/>
                                                            </div>

                                                            <div className="post-content">
                                                                <h3>{item.title}</h3>
                                                                <div className="meta-post">
                                                                    <ul className="lab-ul">
                                                                        {
                                                                            item.metaList.map((value, i) => (
                                                                            <li key={i}>
                                                                                <i className={value.iconName}></i>{" "}
                                                                                {value.text}
                                                                            </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis officia, fugiat non quis recusandae cumque. Dolore, blanditiis incidunt eveniet deleniti autem fugiat labore eum laudantium quos et aspernatur rem corrupti! Dolore nesciunt ea ipsam officiis laborum sint impedit consequuntur, at, quaerat hic sequi omnis, eaque possimus velit. Quia vero commodi velit obcaecati ratione dignissimos, modi quibusdam, tempore, cupiditate eligendi eos.</p>
                                                                <blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe asperiores vitae consectetur adipisicing elit. Odit saepe asperiores vitae consectetur adipisicing elit. Odit saepe asperiores vitae</p>
                                                                    <cite>
                                                                        <a href="#">...Ayham Aldarwish</a>
                                                                    </cite>
                                                                </blockquote>
                                                                <p>recusandae omnis sed a accusantium illo. Maxime aspernatur quae harum, voluptatibus totam quia. Enim, cupiditate praesentium corrupti accusantium inventore tempora labore blanditiis. Neque, tempora saepe. Assumenda culpa, saepe a inventore doloribus accusamus tempore eius ea recusandae blanditiis placeat repellat enim pariatur. Vero quam facilis incidunt debitis illo quo fuga.</p>
                                                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam iste totam magnam illo laborum! Illo reiciendis aperiam earum omnis nesciunt, officiis at nam! Impedit laudantium explicabo iste placeat nam ab odio cumque repellat sed distinctio modi fuga quis, architecto non labore quas! Explicabo vitae recusandae quisquam? Laboriosam, illo possimus. Dolorem soluta vero aliquid nam, possimus iusto similique accusamus, assumenda reiciendis, fuga reprehenderit facilis numquam dolore officiis!</p>
                                                                <div className='video-thumb'>
                                                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                    <a href="https://youtu.be/pADv7z1_w5E?si=lZM4DHoydUrBnpB9" target='_blank' className='video-button popup'>
                                                                        <i className='icofont-ui-play'></i>
                                                                    </a>
                                                                </div>
                                                                <p>Maxime aspernatur quae harum, voluptatibus totam quia. Enim, cupiditate praesentium corrupti accusantium inventore tempora labore blanditiis. Neque, tempora saepe. Assumenda culpa, saepe a inventore doloribus accusamus tempore eius ea recusandae blanditiis placeat repellat enim pariatur.</p>
                                                                <div className="tags-section">
                                                                    <ul className="tags lab-ul">
                                                                        <li><a href="#">Agency</a></li>
                                                                        <li><a href="#">Business</a></li>
                                                                        <li><a href="#">Personal</a></li>
                                                                    </ul>
                                                                    <ul className="lab-ul social-icons">
                                                                        {
                                                                            socialList.map((value, i) =>(
                                                                                <li key={i}>
                                                                                    <a href="#" className={value.className}>
                                                                                        <i className={value.iconName}></i>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className='navigations-part'>
                                        <div className="left">
                                            <a href="#" className="prev">
                                                <i className="icofont-double-left"></i> Preving Blog
                                            </a>
                                            <a href="#" className='title'>
                                                Evisculate PArallel Processes via Technice Sound Models Authoritative
                                            </a>
                                        </div>
                                        <div className="right">
                                            <a href="#" className="prev">
                                                Next Blog <i className="icofont-double-right"></i> 
                                            </a>
                                            <a href="#" className='title'>
                                                Evisculate PArallel Processes via Technice Sound Models Authoritative
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* right side */}
                    <div className="col-lg-4 col-12">
                        <aside>
                            <Tags />
                            <PopularPost />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog