import myphoto from '../assets/my-photo.jpg'

function Homepage(){
    return (
        <div className="innerbody">
            <nav className="nav-bar" id="nav-index-page">
                <div className="parent-img">
                    <img src={myphoto} alt="me"/>
                </div>
                <h3>Yuhan Liu</h3>
                <br></br>
                <p>
                    yuhanliu@uchicago.edu
                </p>
            </nav>
            <div className="inner-main">
                <h1>About Me</h1>
                <p> Welcome to my website! I am a physics PhD student at University of Chicago working on theoretical physics. I study the interplay among quantum phases, quantum entanglement and criticality. I use elegant mathematical tools in my research, from conformal field theory to random matrix theory. My recent works can be found at <span><a href="https://github.com/YuhanLiuSYSU">Google Scholar</a></span>. 
                </p>
                
                <p>I got my BS degree at Sun Yat-sen University before moving to Chicago for my PhD. It turns out I spent my PhD in three places: three years in Chicago, one year at Princeton, and half year at Kavli Institute for Theoretical Physics.</p>
                
                <p>
                Outside theoretical physics, I develop packages for scientific simulation as well as other personal projects. You are welcome to check my <span><a href="https://github.com/YuhanLiuSYSU">GitHub</a></span>
                !
                </p>
                         
            </div>
        </div>
    )
}

export default Homepage