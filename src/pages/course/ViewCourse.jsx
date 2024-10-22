import React from 'react'
import { Book, Certificate, Clock, Facebook, LinkedinIcon, Money, Plus, RightArrow, Teacher, Twitter, World } from '../../components/shared/svgComponents'
import Button from '../../components/Button/Button'
import Youtube from '../../components/Learning/Youtube'
import { useLocation } from 'react-router-dom';

function ViewCourse() {
    const {state: {courseData}} = useLocation();

    console.log('ViewCourse Information : ',courseData)
  return (
    <div className='bg-grayDark text-white p-20'>
        <div className='flex'>
            <div>
                <h4 className='text-2xl font-bold pb-6'>About This Course</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis laboriosam officia possimus, nesciunt laborum, ab doloribus, ducimus modi quidem ipsa similique! Ipsa culpa illo iste, saepe fugit quisquam in impedit numquam, labore alias distinctio veritatis deserunt aperiam, odit eos voluptatem. Officiis ex ratione repellendus, architecto eum dignissimos corporis! Minus error molestias corporis enim provident recusandae nam quis aspernatur expedita? Vero odio culpa numquam aliquid necessitatibus sunt sapiente adipisci ad ipsum enim provident quod, voluptatum odit doloribus distinctio ea labore tenetur. Explicabo facilis magni reprehenderit, veniam ipsa iusto praesentium omnis magnam vel odio libero animi recusandae placeat. Adipisci rerum nulla, explicabo totam autem mollitia enim deserunt in error dolores accusamus est tenetur quos architecto veniam veritatis vitae animi quibusdam provident aspernatur. <br /> Ullam tenetur eum eos? Deserunt autem repudiandae architecto amet nisi maxime quam ipsam officiis asperiores dicta, eius necessitatibus ad consequatur obcaecati facilis id maiores minima consectetur enim deleniti voluptatem! Deserunt excepturi alias porro, rerum, molestiae at placeat similique unde voluptatum nihil omnis fugit! Esse labore officia tempore! Assumenda tempore officia sint dicta cumque voluptatem reprehenderit eligendi atque aspernatur in esse, repellat possimus iure nulla doloribus provident quas minus dignissimos voluptas excepturi. Ducimus atque cumque, natus harum temporibus reprehenderit iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi provident nostrum. Voluptates consequuntur illo ducimus dolor modi esse facere, consequatur quasi consectetur, libero iure magnam. Blanditiis unde molestiae ipsa quo, doloremque, repellat tenetur, dicta suscipit debitis veritatis ipsum. Unde, ab? Eligendi cum, praesentium ex quos quasi repellendus numquam! Aliquam nihil atque culpa veritatis beatae ad obcaecati similique laudantium quaerat excepturi voluptatibus qui sint adipisci fugit ea a iure sequi voluptatum eveniet delectus itaque dicta, exercitationem quam dolores! Nemo ab quidem quos sit vel natus labore. Natus, saepe voluptates voluptatum reprehenderit doloribus numquam cum quisquam, ab, asperiores architecto optio id. </p>
                <div>
                    <h5>What You'll Learn?</h5>
                    <div>
                        <RightArrow />
                        <p>Learn to use Python professionally, learning both Python 2 & Python 3!</p>
                    </div>

                    <div>
                        <RightArrow />
                        <p>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</p>
                    </div>
                   
                    <div>
                        <RightArrow />
                        <p>Understand the Theory behind Vue.js and use it in Real Projects</p>

                    </div>

                    <div>
                        <RightArrow />
                        <p>Create responsive, accessible, and beautiful layouts</p>
                    </div>
                </div>

                <div>
                    <h2>Requirements</h2>
                    <div><RightArrow /> <p>No prior knowledge of Wordpress is required as everything will be covered in this course.</p></div>
                    <div><RightArrow /> <p>Basic HTML and CSS knowledge helps, but isn't a must-have</p></div>
                    <div><RightArrow /> <p>You don't need any coding experience at all. That is the beauty of Wordpress.</p></div>
                    <div><RightArrow /> <p>Basic JavaScript knowledge is required</p></div>
                </div>

                <div>
                    <h2>Course Outline</h2>
                    <p>Explore the key topics and essential Knowledge areas that form the foundation of this course. Gain insights into the core concepts and skills you will master throughtout the program.</p>

                    <div>
                        <div>
                        <h1>Course Layout</h1>
                        <Plus/> 
                        </div>
                        <div>
                            <Book /> 
                            <p>Introduction</p>
                        </div>
                        <div>
                            <Book /> 
                            <p>Course Overview</p>
                        </div>
                        <div>
                            <Book /> 
                            <p>Local Development Environment Tools</p>
                        </div>
                        <div>
                            <Book /> 
                            <p>Course Exercise / Reference Files</p>
                        </div>
                        <div>
                            <Book /> 
                            <p>Code Editor Installation</p>
                        </div>
                        <div>
                            <Book /> 
                            <p>Embedding PHP in HTML</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src="#" alt="" />
                    <h2>Course Includes: </h2>

                    <div>
                        <Money />
                        Price : <span>{courseData.price}</span>
                    </div>
                    <div>
                        <Teacher />
                        Instructor: <span>Ahsan Kabir</span>
                    </div>
                    <div>
                        <Clock />
                        Duration: <span>6 Months</span>
                    </div>
                    <div>
                        <World />
                        Language: <span>English</span>
                    </div>
                    <div>
                        <Certificate />
                        Certificate: <span>Yes</span>
                    </div>
                </div>
                <Button buttonClass={''} buttonName={''} />

                <h3>Share On</h3>
                <div><Facebook/> <Twitter/> <LinkedinIcon/> <Youtube/></div>
            </div>
        </div>
    </div>
  )
}

export default ViewCourse