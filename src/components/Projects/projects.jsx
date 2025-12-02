import './projects.css'

function Projects(){
    return(
        <>
          <div className='container' id="projects">
            <div className='main'>
                <h1 className='title'>Projects</h1>
                <p>Here are some projects I have done and trust me there are more to come. Clicking them will take you to it's respository in my GitHub account. So ENJOY!!!</p>

                <ul className='grid'>
                    <li>
                        <a href="https://github.com/Kay-design3/Galleryslider.git">
                            Pic-Slide
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Chat.git">
                            Chat
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/To-Do-List.git">
                            To-Do-List
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Registration1.git">
                            Signup1
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Form.git">
                            Form
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Registration2.git">
                            Signup2    
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Movieapp.git">
                            Movieapp
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Quotes.git">
                            Quotes
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kay-design3/Toggle.git">
                            Toggle
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </>
    );
}

export default Projects
