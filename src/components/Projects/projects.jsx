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
                        <a href="">
                            Pic-Slide
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Chat
                        </a>
                    </li>
                    <li>
                        <a href="">
                            To-Do-List
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Signup1
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Form
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Signup2    
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Movieapp
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Quotes
                        </a>
                    </li>
                    <li>
                        <a href="">
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