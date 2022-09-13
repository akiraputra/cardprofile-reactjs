import background from '../assets/background.jpg';
import '../css/style.css';
import Styling from '../css/Cardprofile.module.css';
import lisa from '../assets/lisa.jpeg';
import profile2 from '../assets/profile2.jpg';

const Cardprofile = () => {
    return (
        // 1.Inline CSS
        <div style={{backgroundColor:"#00B6DF", 
        width: "100vw",
        height:"100vh",
        backgroundImage : `url(${background})`,
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
        }}
        >   
            {/*2. CSS file*/}
            <div className ="card">
                <img src={lisa} />
                <div className="profile">Frontend Developer</div>
                <div className="name">Putra Syahwal Alam</div>
                <div className="desc">Web designers generally have nothing to do with creating content for their projects. Even so, the look of site can be incomplete if no words are included. Web designers need to find ways to.</div>
                <button className="button">Contact Me</button>
            </div>
            
            {/*3. CSS Module*/}
            <div className ="card">
                <img src={profile2} />
                <div className="profile">Backend Developer</div>
                <div className="name">Lisa Cuteee</div>
                <div className="desc">Web designers generally have nothing to do with creating content for their projects. Even so, the look of site can be incomplete if no words are included. Web designers need to find ways to.</div>
                <button className={Styling.button}>Contact Me</button>
            </div>
        </div>
    )
}

export default Cardprofile;
